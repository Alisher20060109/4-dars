import React from "react";
import bgVideo from "../../assets/bg-video.mp4";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import LoginPage from './LoginPage';

export default function LoginPage({setIsLogin}) {

  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const [phoneError, setPhoneError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  function login(e) {
    e.preventDefault();
    if (phone === "+998900535016" && password === "Alisher123") {
      setIsLogin(localStorage.setItem("isLogin" , true));
      navigate("/teachers");
      toast.success("Muvaffaqiyatli kirdingiz");
    } else {
      setPhoneError("Raqam to'g'ri");
      setPasswordError("Parol to'g'ri");
      toast.error("Noto'g'ri telefon nomer yoki parol");
      return;
    }

  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute top-0 left-0 w-full h-full "></div>

      <div className="relative z-10 flex justify-center items-center h-full">
        <form
          onSubmit={login}
          className="flex flex-col items-center gap-5 max-w-112.5 w-full p-5 rounded-2xl shadow-2xl bg-gray-200"
        >
          <div className="max-w-112.5 w-full ">
            <input
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded border-2 p-3 text-[18px] border-amber-500"
              type="text"
              placeholder="Telefon nomer"
            />
            <span className="text-red-600 ">{phoneError ? phoneError : "" }</span>
          </div>
          <div className="max-w-112.5 w-full ">
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border-2 p-3 text-[18px] border-amber-500"
              type="password"
              placeholder="Parol"
            />
            <span className="text-red-600 ">{passwordError ? passwordError : ""}</span>
          </div>
          <button
            className="bg-amber-500 w-full p-3 rounded cursor-pointer text-white text-[18px]"
            type="submit"
          >
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
}
