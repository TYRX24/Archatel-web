"use client"

import { useState } from "react"
import { Calendar, Clock, Users, MapPin, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const scheduleData = [
  { day: "Minggu", time: "8:00 - 11:00",  location: "Lapangan Tembak Archatel" },
]

const locations = [
  {
    name: "Lapangan Tembak Archatel",
    address: "Jl. Sukabirus No.72, Sukapura, Kec. Dayeuhkolot, Kota Bandung, Jawa Barat",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440.5947918081255!2d107.63251134162218!3d-6.9760875053029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e96cdd89acfd%3A0xdb0a0f0d1377b11d!2sGate%204%20TELKOM%20UNIVERSITY!5e0!3m2!1sen!2sid!4v1747314268725!5m2!1sen!2sid",
  },
  // lokasi lain jika perlu
]

export default function JadwalDanLokasiPage() {
  const [activeLocation, setActiveLocation] = useState(0)

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-3">
    
        {/* Bagian Jadwal Latihan */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4">Jadwal Latihan</h1>
            <p className="text-xl text-brown-800 max-w-3xl mx-auto">
              Jadwal latihan panahan komunitas ARCHATEL
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 bg-cream-100 border-b border-orange-200">
              <h2 className="text-2xl font-bold text-brown-900">Jadwal Latihan</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-brown-900 text-white">
                    <th className="py-4 px-6 text-left">Hari</th>
                    <th className="py-4 px-6 text-left">Waktu</th>
                    <th className="py-4 px-6 text-left">Lokasi</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.map((schedule, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-cream-50"}>
                      <td className="py-4 px-6 border-b border-gray-200 flex items-center">
                        <Calendar className="h-5 w-5 text-orange-600 mr-2" /> {schedule.day}
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200">{schedule.time}</td>
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

          {/* Informasi & Pendaftaran tetap sama */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-brown-900 mb-6">Informasi Latihan</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mt-1">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-brown-900">Ketentuan</h3>
                    <p className="text-brown-800">
                      Waktu yang di sediakan untuk menembak adalah 180 detik per rambahan.
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
                Untuk mengikuti latihan, anggota perlu mendaftar terlebih dahulu melalui form online atau
                menghubungi admin komunitas.
              </p>
              <a
                href="https://forms.gle/zTH1AFoJSJfyk1WKA"
                target="_blank"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                rel="noreferrer"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
        </section>

        {/* Bagian Lokasi Latihan */}
        <section>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4">Lokasi Latihan</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
            {locations.map((location, index) => (
              <div
                key={index}
                className={cn(
                  "p-6 rounded-xl shadow-md transition-all duration-300 text-mid",
                  activeLocation === index
                    ? "bg-brown-900 text-white transform scale-105"
                    : "bg-white text-brown-900 hover:bg-cream-100"
                )}
              >
                <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                <p className={activeLocation === index ? "text-white/90" : "text-brown-800"}>
                  {location.address}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-96 w-full">
                <iframe
                  src={locations[activeLocation].mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={`Peta lokasi ${locations[activeLocation].name}`}
                ></iframe>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-brown-900 mb-6">{locations[activeLocation].name}</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-orange-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-brown-900">Alamat</h3>
                    <p className="text-brown-800">{locations[activeLocation].address}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-cream-100 rounded-lg">
                <h3 className="font-bold text-brown-900 mb-2">Fasilitas</h3>
                <ul className="list-disc list-inside text-brown-800 space-y-1">
                  <li>Lapangan panahan</li>
                  <li>Ruang penyimpanan peralatan</li>
                  <li>Parkir luas</li>
                  <li>Instruktur profesional</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
