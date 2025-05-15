"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Atlet Panahan",
    content:
      "ARCHATEL telah membantu saya mengembangkan kemampuan panahan saya dengan pelatihan yang terstruktur dan profesional.",
    avatar: "https://cdn-icons-png.freepik.com/256/3135/3135823.png?semt=ais_hybrid?height=100&width=100",
  },
  {
    id: 2,
    name: "Siti Rahayu",
    role: "Pelatih Panahan",
    content:
      "Bergabung dengan ARCHATEL adalah keputusan terbaik bagi saya yang ingin serius dalam olahraga panahan.",
    avatar: "https://cdn-icons-png.freepik.com/256/3135/3135823.png?semt=ais_hybrid?height=100&width=100",
  },
  {
    id: 3,
    name: "Agus Wijaya",
    role: "Penggemar Panahan",
    content:
      "Komunitas yang luar biasa dengan instruktur yang sangat berpengalaman dan fasilitas terbaik.",
    avatar: "https://cdn-icons-png.freepik.com/256/3135/3135823.png?semt=ais_hybrid?height=100&width=100",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    role: "Atlet Nasional",
    content:
      "Saya sangat merekomendasikan ARCHATEL untuk siapa saja yang ingin belajar panahan dari dasar hingga tingkat lanjut.",
    avatar: "https://cdn-icons-png.freepik.com/256/3135/3135823.png?semt=ais_hybrid?height=100&width=100",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 3000)
    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border-none shadow-none">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                      <Image
                        src={testimonial.avatar || "https://cdn-icons-png.freepik.com/256/3135/3135823.png?semt=ais_hybrid"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <blockquote className="text-xl italic mb-4">"{testimonial.content}"</blockquote>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === current ? "bg-primary" : "bg-muted-foreground/30"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full"
        onClick={prev}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full"
        onClick={next}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
