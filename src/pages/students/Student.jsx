import React, { useEffect, useState } from "react";
import axios from "axios";
import loadings from "../../assets/loading.svg";

export default function Student() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getStudents() {
      try {
        const res = await axios.get(
          "https://692458a93ad095fb8473d421.mockapi.io/sutudents"
        ); 

        setStudents(res.data);
        setLoading(false);
      } catch (err) {
        console.log("Xatolik yuz berdi:", err);
      }
    }
    getStudents();
  }, []);

  if (loading) {
    return (
      <div className="w-200 h-200 fixed left-130 top-0">
        <img className="w-full" src={loadings} alt="" />
      </div>
    );
  }

  return (
    <div className=" p-5">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-5">
        {students.map((el) => (
          <div class="bg-gradient-to-b from-gray-500 to-gray-900 rounded-3xl shadow-2xl p-8 w-96 max-w-full text-white">
            <div class="flex justify-center mb-6">
              <div class="relative">
                <img
                  src={el.avatar}
                  className="w-40 h-40 rounded-full border-4 border-pink-500 shadow-lg"
                  alt=""
                />
              </div>
            </div>

            <h2 class="text-2xl font-bold text-center mb-2">{el.name}</h2>

            <div class="text-center mb-6">
              <span class="bg-gray-700 text-gray-300 px-4 py-1 rounded-full text-sm">
                {el.Chemistr}
              </span>
            </div>

            <p class="text-center text-lg mb-4">
              Age: {el.age} Exp: {el.Grade}
            </p>

            <div class="flex justify-center mb-6">
              <span class="text-yellow-400 text-3xl">★</span>
              <span class="text-3xl ml-2">{el.Rating}</span>
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
                <span>{el.Phone}</span>
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
                <span>{el.Email}</span>
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
                <span>{el.Telegram}</span>
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
                <span>{el.LinkedIn}</span>
              </div>
            </div>

            <div class="flex justify-center space-x-4">
              <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition">
                Edit
              </button>
              <button class="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
