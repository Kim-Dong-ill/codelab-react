import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  async function onSubmit({ email, password, name }) {
    const body = {
      email,
      password,
      name,
    };
    try {
      const response = await axios.post("/user/signup", body);
      toast("🦄 회원가입에 성공했습니다.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log("회원가입 성공" + response.data);
    } catch (error) {
      toast("🦄 회원가입에 실패했습니다.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(error);
    }
  }

  const userEmail = {
    required: { value: true, message: "이메일은 필수입니다." },
    patten: { value: /^\S+@\S+$/i, message: "이메일을 입력" },
    minLength: { value: 6, message: "최소 6자 입니다." },
  };

  const userPassword = {
    required: { value: true, message: "비밀번호는 필수입니다." },
    minLength: { value: 4, message: "최소 4자입니다." },
  };

  const userName = {
    required: { value: true, message: "이름을 입력하세요" },
    minLength: { value: 1, message: "한자 이상 입력하세요" },
  };

  return (
    <>
      <div className="loginWrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">이메일</label>
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
          <label htmlFor="passwordCheck">패쓰워드 확인</label>
          <input
            type="text"
            id="passwordCheck"
            placeholder="password check"
            {...register("passwordCheck", {
              validate: (value) => {
                return value === watch("password") || "비밀번호 불일치";
              },
            })}
          />
          {errors.passwordCheck && <div>{errors.passwordCheck.message}</div>}
          <br />
          <br />
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            placeholder="name"
            {...register("name", userName)}
          />
          {errors.name && <div>{errors.name.message}</div>}
          <br />
          <br />
          <button>전송</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
