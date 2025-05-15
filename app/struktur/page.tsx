import Image from "next/image"

const organizationMembers = [
  {
    name: "Ahmad Fauzi",
    position: "Ketua Komunitas",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Pemanah profesional dengan pengalaman lebih dari 15 tahun di bidang panahan nasional dan internasional.",
  },
  {
    name: "Siti Nurhaliza",
    position: "Wakil Ketua",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Mantan atlet panahan nasional dengan berbagai prestasi di tingkat Asia Tenggara.",
  },
  {
    name: "Budi Santoso",
    position: "Kepala Pelatih",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Pelatih bersertifikat internasional dengan spesialisasi dalam teknik panahan olimpiade.",
  },
  {
    name: "Dewi Anggraini",
    position: "Sekretaris",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Pengelola administrasi komunitas yang telah bergabung sejak awal pendirian ARCHATEL.",
  },
  {
    name: "Rudi Hermawan",
    position: "Bendahara",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Profesional keuangan yang mengelola seluruh aspek finansial komunitas dengan transparan.",
  },
  {
    name: "Rina Wijaya",
    position: "Koordinator Acara",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Spesialis event organizer yang telah mengelola berbagai kompetisi panahan tingkat nasional.",
  },
]

export const metadata = {
  title: "Struktur Organisasi - ARCHATEL",
  description: "Kenali tim pengurus komunitas panahan ARCHATEL yang berpengalaman dan profesional.",
}

export default function StrukturPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4">Struktur Organisasi</h1>
          <p className="text-xl text-brown-800 max-w-3xl mx-auto">
            Kenali tim pengurus komunitas ARCHATEL yang berdedikasi untuk memajukan olahraga panahan di Indonesia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizationMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-80 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brown-900">{member.name}</h3>
                <p className="text-orange-600 font-medium mb-4">{member.position}</p>
                <p className="text-brown-800">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
