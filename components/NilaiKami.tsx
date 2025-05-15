import { Shield, Heart, Users, Target, Award, Lightbulb } from "lucide-react"

export const metadata = {
  title: "Nilai-Nilai Kami - ARCHATEL",
  description: "Nilai-nilai inti yang menjadi pedoman komunitas panahan ARCHATEL dalam setiap kegiatan dan program.",
}

const values = [
  {
    icon: <Target className="h-12 w-12 text-orange-600" />,
    title: "Fokus & Presisi",
    description: "Kami menekankan pentingnya fokus dan presisi dalam panahan maupun dalam kehidupan sehari-hari.",
  },
  {
    icon: <Users className="h-12 w-12 text-orange-600" />,
    title: "Kebersamaan",
    description: "Kami percaya bahwa kebersamaan dan dukungan komunitas adalah kunci kesuksesan bersama.",
  },
  {
    icon: <Award className="h-12 w-12 text-orange-600" />,
    title: "Keunggulan",
    description: "Kami selalu berusaha mencapai standar tertinggi dalam segala aspek kegiatan kami.",
  },
  {
    icon: <Shield className="h-12 w-12 text-orange-600" />,
    title: "Integritas",
    description: "Kami menjunjung tinggi kejujuran, sportivitas, dan etika dalam setiap tindakan.",
  },
  {
    icon: <Heart className="h-12 w-12 text-orange-600" />,
    title: "Passion",
    description: "Kami didorong oleh kecintaan yang mendalam terhadap olahraga panahan.",
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-orange-600" />,
    title: "Inovasi",
    description: "Kami terus berinovasi untuk mengembangkan metode pelatihan dan teknik panahan yang lebih baik.",
  },
]

export default function NilaiPage() {
  return (
    <main className="">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4">Nilai-Nilai Kami</h1>
          <p className="text-xl text-brown-800 max-w-3xl mx-auto">
            Prinsip-prinsip yang menjadi pedoman komunitas ARCHATEL dalam setiap kegiatan dan program
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="flex justify-center mb-6">{value.icon}</div>
              <h3 className="text-xl font-bold text-brown-900 mb-4 text-center">{value.title}</h3>
              <p className="text-brown-800 text-center">{value.description}</p>
            </div>
          ))}
        </div>
{/* 
        <div className="bg-cream-100 rounded-xl p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-brown-900 mb-6 text-center">Komitmen Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-brown-900 mb-4">Kepada Anggota</h3>
              <p className="text-brown-800 mb-4">
                Kami berkomitmen untuk menyediakan lingkungan yang aman, inklusif, dan mendukung bagi semua anggota
                komunitas. Setiap anggota akan mendapatkan pelatihan berkualitas dan kesempatan untuk mengembangkan
                potensi mereka secara maksimal.
              </p>
              <p className="text-brown-800">
                Kami juga berkomitmen untuk mendengarkan dan menghargai pendapat setiap anggota, serta melibatkan mereka
                dalam pengambilan keputusan yang memengaruhi komunitas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brown-900 mb-4">Kepada University</h3>
              <p className="text-brown-800 mb-4">
              Kami berkomitmen untuk menjalin kemitraan yang erat dan sinergis dengan Telkom University dalam rangka mendukung pengembangan sumber daya manusia yang unggul dan inovatif. Melalui kolaborasi ini, kami akan berupaya menyediakan program pelatihan dan kegiatan olahraga panahan yang terintegrasi dengan visi dan misi universitas, khususnya dalam mendukung pengembangan karakter, disiplin, dan semangat sportifitas mahasiswa.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  )
}
