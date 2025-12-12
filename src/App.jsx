import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teacher from "./pages/teachers/Teacher.jsx";
import Layout from "./components/Layout.jsx";
import Student from './pages/students/Student';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/Teachers" element={<Teacher />} />
          <Route path="/Students" element={<Student />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
