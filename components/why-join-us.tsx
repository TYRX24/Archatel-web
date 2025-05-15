import { Award, Users, HeadphonesIcon } from "lucide-react"

const features = [
  {
    icon: <Award className="h-12 w-12 text-orange-600" />,
    title: "Kualitas Terbaik",
    description: "Kami menyediakan peralatan dan pelatihan panahan berkualitas tinggi untuk semua level.",
  },
  {
    icon: <Users className="h-12 w-12 text-orange-600" />,
    title: "Ahli Panahan",
    description: "Tim instruktur kami terdiri dari para ahli panahan berpengalaman dan bersertifikat.",
  },
  {
    icon: <HeadphonesIcon className="h-12 w-12 text-orange-600" />,
    title: "Layanan Purna Jual",
    description: "Kami memberikan dukungan dan layanan purna jual terbaik untuk semua anggota komunitas.",
  },
]

const WhyJoinUs = () => {
  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-card p-6 rounded-lg shadow-sm text-center  bg-white ">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyJoinUs
