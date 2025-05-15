import Link from "next/link"
import { ChevronRight } from "lucide-react"
import TestimonialSlider from "@/components/testimonial-slider"
import WhyJoinUs from "@/components/why-join-us"
import BackgroundVideo from "@/components/background-video"
import NilaiPage from "@/components/NilaiKami"
import Panduan from "@/components/Panduan"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section with Background Video */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <BackgroundVideo />

        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">ARCHATEL</h1>
          <p className="text-xl md:text-2xl text-white mb-8">Komunitas Panahan Telkom University</p>
          <Link
            href="https://forms.gle/zTH1AFoJSJfyk1WKA"
            target="_blank"
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            DAFTAR SEKARANG
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-cream-100 w-full">
          <NilaiPage />
      </section>

      {/* Messages from Us Section */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brown-900 mb-16">Pesan dari Kami</h2>
          <TestimonialSlider />
        </div>
      </section>
      <section className="py-20 bg-brown-900 w-full">
        <Panduan />
      </section>
    </main>
  )
}
