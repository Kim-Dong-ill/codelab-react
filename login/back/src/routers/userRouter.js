const Router = require("express");
const userRouter = Router();
const User = require("../models/User");
const { hash, compare } = require("bcryptjs");
const jwt = require("jsonwebtoken");

userRouter.post("/signup", async function (req, res) {
  try {
    const password = await hash(req.body.password, 10);

    const user = new User({
      email: req.body.email,
      password: password,
      name: req.body.name,
    });
    await user.save();
    return res.status(200).send({ user });
  } catch (error) {
    res.status(400).send({ error: console.log(error) });
  }
});

userRouter.post("/login", async function (req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (!user) {
      return res.status(400).send({ error: "email을 확인해주세요" });
    }
    const isMatch = await compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).send({ error: "password를 확인해주세요" });
    }

    const payload = {
      userId: user._id,
      email: user.email,
    };

    const accessToken = jwt.sign(payload, process.env.SECRET_KEY);

    return res
      .status(200)
      .send({ user, accessToken, message: "로그인 성공!!" });
  } catch (error) {
    res.status(400).send({ error: console.log(error) });
  }
});

module.exports = userRouter;
