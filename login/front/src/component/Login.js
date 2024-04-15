import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const userEmail = {
    required: { value: true, message: "아이디는 필수입니다." },
    minLength: { value: 6, message: "최소 6자입니다." },
    patten: { value: /^\S+@\S+$/i, message: "이메일을 입력하세요" },
  };
  const userPassword = {
    required: { value: true, message: "비밀번호는 필수 입니다." },
    minLength: { value: 4, message: "최소 4자 이상입니다." },
  };

  async function onSubmit({ email, password }) {
    const body = {
      email,
      password,
    };
    try {
      const response = await axios.post("/user/login", body);
      console.log(response.data);
      toast.info(response.data.message);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">아이디</label>
          <input
            type="text"
            id="email"
            placeholder="email"
            {...register("email", userEmail)}
          />
          {errors.email && <div>{errors.email.message}</div>}
          <br />
          <br />
          <label htmlFor="password">패쓰워드</label>
          <input
            type="text"
            id="password"
            placeholder="password"
            {...register("password", userPassword)}
          />
          {errors.password && <div>{errors.password.message}</div>}
          <br />
          <br />
          <button>로그인</button>
        </form>
      </div>
    </>
  );
}

export default Login;
