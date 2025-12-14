import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Teacher from "./pages/teachers/Teacher.jsx";
import Layout from "./components/Layout.jsx";
import LoginPage from "./pages/login/LoginPage.jsx";
import Student from "./pages/students/student.jsx";
import SinglPage from "./pages/singl-teachers/SinglPage.jsx";

export default function App() {
  const [ , setIsLogin] = React.useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setIsLogin={setIsLogin} />} />
        <Route element={(localStorage.getItem("isLogin")) ? <Layout /> : <Navigate to="/" />}>
          <Route path="/Teachers" element={<Teacher />} />
          <Route path="/Students" element={<Student/>} />
          <Route path="/singl-teachers/:id" element={<SinglPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
