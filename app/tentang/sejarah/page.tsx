import Image from "next/image"

export const metadata = {
  title: "Sejarah Kami - ARCHATEL",
  description: "Pelajari sejarah dan perjalanan komunitas panahan ARCHATEL sejak didirikan hingga saat ini.",
}

export default function SejarahPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4">Sejarah Kami</h1>
          <p className="text-xl text-brown-800 max-w-3xl mx-auto">
            Perjalanan ARCHATEL dari awal berdiri hingga menjadi komunitas panahan terkemuka di Indonesia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-brown-900 mb-6">Awal Mula</h2>
            <p className="text-brown-800 mb-4">
              ARCHATEL didirikan pada tahun 2015 oleh sekelompok pecinta olahraga panahan yang memiliki visi untuk
              memajukan dan mempopulerkan olahraga panahan di Indonesia. Berawal dari pertemuan rutin di sebuah lapangan
              panahan kecil di Jakarta Selatan, komunitas ini terus berkembang dengan pesat.
            </p>
            <p className="text-brown-800">
              Nama ARCHATEL sendiri merupakan singkatan dari "Archery Athletes Elite", yang mencerminkan komitmen kami
              untuk membentuk atlet-atlet panahan berkualitas tinggi yang mampu bersaing di tingkat nasional maupun
              internasional.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image src="/placeholder.svg?height=600&width=800" alt="Awal mula ARCHATEL" fill className="object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Perkembangan ARCHATEL"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brown-900 mb-6">Perkembangan</h2>
            <p className="text-brown-800 mb-4">
              Seiring berjalannya waktu, ARCHATEL terus berkembang dan mendapatkan pengakuan dari berbagai pihak. Pada
              tahun 2017, komunitas ini resmi terdaftar sebagai klub panahan di bawah naungan Persatuan Panahan
              Indonesia (PERPANI).
            </p>
            <p className="text-brown-800">
              Dengan dukungan dari berbagai sponsor dan dedikasi para anggotanya, ARCHATEL berhasil membangun fasilitas
              latihan yang lebih baik dan merekrut pelatih-pelatih berpengalaman untuk membimbing para anggotanya.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-brown-900 mb-6">Pencapaian</h2>
            <p className="text-brown-800 mb-4">
              Selama perjalanannya, ARCHATEL telah melahirkan banyak atlet panahan berbakat yang telah meraih berbagai
              prestasi di tingkat lokal, nasional, hingga internasional. Komunitas ini juga aktif menyelenggarakan
              berbagai kompetisi dan workshop panahan untuk memperkenalkan olahraga ini kepada masyarakat luas.
            </p>
            <p className="text-brown-800">
              Hingga saat ini, ARCHATEL terus berkomitmen untuk menjadi wadah bagi siapa saja yang ingin belajar dan
              mengembangkan kemampuan panahan mereka, mulai dari tingkat pemula hingga profesional.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Pencapaian ARCHATEL"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
