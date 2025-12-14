import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";  

export default function SinglPage() {
  const { id } = useParams();
  const [Teacher , setTeacher] = React.useState(null); 
    React.useEffect(() => {
        async function getTeacher() {
            try {
           let  res = await axios.get(`https://692458a93ad095fb8473d421.mockapi.io/teachers/${id}`);
           setTeacher(res.data);
            } catch (err) {
                console.log("Xatolik yuz berdi:", err);
            }    
        }
        getTeacher();
    } , [id]);


  return (
    <div>
      
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT CARD */}
          <div className="rounded-2xl bg-[#1e293b] p-6 text-white shadow-xl">
            <div className="flex flex-col items-center">
              <img
                src={Teacher?.avatar}
                alt="profile"
                className="w-32 h-32 rounded-full border-4 border-blue-600 object-cover"
              />

              <h2 className="mt-4 text-xl font-semibold">{}</h2>

              <span className="mt-2 rounded-full bg-black px-4 py-1 text-sm">
                {Teacher?.name}
              </span>
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Age</span>
                <span>{Teacher?.age} years</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Experience</span>
                <span>{Teacher?.experience} years</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Gender</span>
                <span>{Teacher?.gendr}</span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Rating</span>
                  <span className="text-yellow-400">⭐ {Teacher?.rating}</span>
                </div>

                <div className="mt-2 h-2 w-full rounded bg-gray-600">
                  <div className="h-2 w-1/4 rounded bg-white"></div>
                </div>
              </div>
            </div>

            <button className="mt-6 w-full rounded-xl bg-white py-3 text-black font-medium hover:bg-gray-200 transition">
              ✏️ Edit Profile
            </button>
          </div>

          {/* RIGHT CARD */}
          <div className="lg:col-span-2 rounded-2xl bg-[#1e293b] p-6 text-white shadow-xl">
            {/* Tabs */}
            <div className="mb-6 flex w-fit rounded-xl bg-black/40 p-1">
              <div className="px-6 py-2 rounded-lg bg-black">Contact Info</div>
              <div className="px-6 py-2 rounded-lg text-gray-400">
                Assigned Students
              </div>
            </div>

            {/* Info Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 rounded-xl bg-[#334155] p-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">{Teacher?.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-[#334155] p-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">{Teacher?.emile}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-[#334155] p-4">
                <span className="text-2xl">✈️</span>
                <div>
                  <p className="text-sm text-gray-400">Telegram</p>
                  <p className="font-medium">{Teacher?.telegram}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-[#334155] p-4">
                <span className="text-2xl">💼</span>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p className="font-medium">{Teacher?.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}
