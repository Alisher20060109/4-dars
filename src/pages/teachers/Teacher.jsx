import axios from "axios";
import React, { useEffect, useState } from "react";
import loadings from "../../assets/loading.svg";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Teacher() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getAllTeachers() {
      try {
        let res = await axios.get(
          `https://692458a93ad095fb8473d421.mockapi.io/teachers?name=${search}`
        );
        setTeachers(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    getAllTeachers();
  },  [search]);

  async function deleteTeacher(id) {
    try {
      await axios.delete(`https://692458a93ad095fb8473d421.mockapi.io/teachers/${id}`);
      toast.success(`siz ${id} - id li o'qituvchini o'chirdingiz`);
      setTeachers(teachers.filter((el) => el.id !== id));
    } catch (err) {
      console.log(err);
    }
  }
  if (loading) {
    return (
      <div className="w-200 h-200 fixed left-130 top-0">
        <img className="w-full" src={loadings} alt="" />
      </div>
    );
  }

  return (
    <div  className=" p-5">

      <div className="max-w-300 w-full pb-5">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="O'qtuvchilarni qidirsh"
          className=" border-2 border-amber-700 p-2 rounded text-[16px] font-black  w-full "
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-5">
        {teachers.map((el) => (
          <div key={el.id}  class="bg-linear-to-b from-blue-900 to-red-900 rounded-3xl shadow-2xl p-8 w-96  max-w-full text-white">
            <div class="flex justify-center mb-6">
              <div class="relative">
                <Link to={`/singl-teachers/${el.id}`}>
                  <img
                    class="w-32 h-32 rounded-full border-4 border-white object-cover"   
                    src={el.avatar}
                    alt={el.name}
                  />
                </Link>
                <span class="absolute bottom-0 right-0 bg-green-500 border-4 border-white w-8 h-8 rounded-full"></span>
              </div>
            </div>

            <h2 class="text-2xl font-bold text-center mb-2">{el.name}</h2>

            <div class="text-center mb-6">
              <span class="bg-gray-700 text-gray-300 px-4 py-1 rounded-full text-sm">
                {el.profession}
              </span>
            </div>

            <p class="text-center text-lg mb-4">
              Age: {el.age} Exp: {el.experience}
            </p>

            <div class="flex justify-center mb-6">
              <span class="text-yellow-400 text-3xl">★</span>
              <span class="text-3xl ml-2">{el.rating}</span>
            </div>

            <div class="space-y-4 mb-8">
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 mr-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>{el.phone}</span>
              </div>
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 mr-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>{el.emile}</span>
              </div>
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 mr-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span>{el.telegram}</span>
              </div>
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 mr-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <span>{el.emile}</span>
              </div>
            </div>

            <div class="flex justify-center space-x-4">
              <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition">
                Edit
              </button>
              <button onClick={() => deleteTeacher(el.id)} class="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
