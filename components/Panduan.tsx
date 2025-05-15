import Link from "next/link"
import Image from "next/image"
import { Download, BookOpen, Video, Info, Instagram, Phone } from "lucide-react"

export const metadata = {
  title: "Panduan - ARCHATEL",
  description: "Panduan dan resources untuk anggota komunitas panahan ARCHATEL.",
}

export default function PanduanPage() {
  return (
    <main className="">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow p-8 md:p-12 ">
          <div className="flex items-start ">
            <div className="bg-orange-100 p-3 rounded-full ">
              <Info className="h-8 w-8 text-[#F4631E]" />
            </div>
            <div className="ml-6 ">
              <h2 className="text-2xl font-bold text-brown-900 mb-4">Butuh Bantuan Lebih?</h2>
              <p className="text-brown-800 mb-6">
                Jika Anda membutuhkan bantuan lebih lanjut atau memiliki pertanyaan spesifik, jangan ragu untuk
                menghubungi tim kami. Kami siap membantu Anda dalam perjalanan panahan Anda.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://www.instagram.com/telkomarchery/"
                  className="inline-flex items-center justify-center bg-[#F4631E] hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Instragam Kami
                </Link>
                <Link
                  href="https://wa.me/62895331223170"
                  target="_blank"
                  className="inline-flex items-center justify-center bg-white border border-[#F4631E] text-[#F4631E] hover:bg-orange-50 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp Person 1
                </Link>
                <Link
                  href="https://wa.me/6285640995205"
                  target="_blank"
                  className="inline-flex items-center justify-center bg-white border border-[#F4631E] text-[#F4631E] hover:bg-orange-50 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp Person 2
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
