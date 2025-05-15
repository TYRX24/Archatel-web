"use client"

import { useState } from "react"
import { Calendar, Clock, Users, Award } from "lucide-react"
import { cn } from "@/lib/utils"

const scheduleData = {
  pemula: [
    { day: "Senin", time: "09:00 - 11:00", coach: "Ahmad Fauzi", location: "Lapangan Utama" },
    { day: "Rabu", time: "09:00 - 11:00", coach: "Siti Nurhaliza", location: "Lapangan Utama" },
    { day: "Jumat", time: "15:00 - 17:00", coach: "Budi Santoso", location: "Lapangan Indoor" },
    { day: "Sabtu", time: "10:00 - 12:00", coach: "Dewi Anggraini", location: "Lapangan Pelatihan" },
  ],
  menengah: [
    { day: "Senin", time: "15:00 - 17:00", coach: "Budi Santoso", location: "Lapangan Utama" },
    { day: "Selasa", time: "09:00 - 11:00", coach: "Rina Wijaya", location: "Lapangan Indoor" },
    { day: "Kamis", time: "15:00 - 17:00", coach: "Ahmad Fauzi", location: "Lapangan Utama" },
    { day: "Sabtu", time: "13:00 - 15:00", coach: "Siti Nurhaliza", location: "Lapangan Pelatihan" },
  ],
  lanjutan: [
    { day: "Selasa", time: "15:00 - 17:00", coach: "Ahmad Fauzi", location: "Lapangan Utama" },
    { day: "Rabu", time: "15:00 - 17:00", coach: "Budi Santoso", location: "Lapangan Indoor" },
    { day: "Jumat", time: "09:00 - 11:00", coach: "Siti Nurhaliza", location: "Lapangan Utama" },
    { day: "Minggu", time: "13:00 - 15:00", coach: "Rina Wijaya", location: "Lapangan Pelatihan" },
  ],
  kompetisi: [
    { day: "Senin", time: "18:00 - 20:00", coach: "Ahmad Fauzi", location: "Lapangan Utama" },
    { day: "Rabu", time: "18:00 - 20:00", coach: "Budi Santoso", location: "Lapangan Indoor" },
    { day: "Jumat", time: "18:00 - 20:00", coach: "Siti Nurhaliza", location: "Lapangan Utama" },
    { day: "Sabtu", time: "16:00 - 18:00", coach: "Ahmad Fauzi", location: "Lapangan Pelatihan" },
  ],
}

export default function JadwalClientPage() {
  const [activeLevel, setActiveLevel] = useState("pemula")

  const levels = [
    { id: "pemula", name: "Pemula", icon: <Users className="h-5 w-5" /> },
    { id: "menengah", name: "Menengah", icon: <Users className="h-5 w-5" /> },
    { id: "lanjutan", name: "Lanjutan", icon: <Users className="h-5 w-5" /> },
    { id: "kompetisi", name: "Tim Kompetisi", icon: <Award className="h-5 w-5" /> },
  ]

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4">Jadwal Latihan</h1>
          <p className="text-xl text-brown-800 max-w-3xl mx-auto">
            Jadwal latihan panahan komunitas ARCHATEL untuk berbagai tingkat kemampuan
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {levels.map((level) => (
            <button
              key={level.id}
              onClick={() => setActiveLevel(level.id)}
              className={cn(
                "flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300",
                activeLevel === level.id
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-white text-brown-900 hover:bg-cream-100 shadow-md",
              )}
            >
              {level.icon}
              <span className="ml-2">{level.name}</span>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 bg-cream-100 border-b border-orange-200">
            <h2 className="text-2xl font-bold text-brown-900 capitalize">
              Jadwal Latihan {activeLevel === "kompetisi" ? "Tim Kompetisi" : activeLevel}
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-brown-900 text-white">
                  <th className="py-4 px-6 text-left">Hari</th>
                  <th className="py-4 px-6 text-left">Waktu</th>
                  <th className="py-4 px-6 text-left">Pelatih</th>
                  <th className="py-4 px-6 text-left">Lokasi</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData[activeLevel as keyof typeof scheduleData].map((schedule, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-cream-50"}>
                    <td className="py-4 px-6 border-b border-gray-200">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-orange-600 mr-2" />
                        {schedule.day}
                      </div>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-orange-600 mr-2" />
                        {schedule.time}
                      </div>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">{schedule.coach}</td>
                    <td className="py-4 px-6 border-b border-gray-200">{schedule.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-cream-50">
            <div className="flex items-start">
              <div className="bg-orange-100 p-2 rounded-full">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-brown-900">Catatan Jadwal</h3>
                <p className="text-brown-800">
                  Jadwal dapat berubah pada hari libur nasional atau saat ada event khusus. Silakan periksa pengumuman
                  terbaru di grup komunitas atau hubungi admin untuk konfirmasi.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-brown-900 mb-6">Informasi Latihan</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-full mt-1">
                  <Users className="h-5 w-5 text-orange-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-brown-900">Kapasitas</h3>
                  <p className="text-brown-800">
                    Setiap sesi latihan memiliki kapasitas maksimal 15 orang untuk memastikan kualitas pelatihan.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-full mt-1">
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-brown-900">Durasi</h3>
                  <p className="text-brown-800">
                    Setiap sesi latihan berlangsung selama 2 jam, termasuk pemanasan dan pendinginan.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-brown-900 mb-6">Pendaftaran</h2>
            <p className="text-brown-800 mb-6">
              Untuk mengikuti latihan, anggota perlu mendaftar terlebih dahulu melalui sistem booking online atau
              menghubungi admin komunitas.
            </p>
            <a
              href="https://forms.gle/zTH1AFoJSJfyk1WKA"
              target="_blank"
              className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              rel="noreferrer"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
