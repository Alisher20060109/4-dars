import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teacher from "./pages/teachers/Teacher.jsx";
import Student from "./pages/students/student.jsx";
import Layout from "./components/Layout.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/teachers" element={<Teacher />} />
          <Route path="/students" element={<Student />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
