import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Clock } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-brown-900 text-white">
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-cream-50">&copy; {new Date().getFullYear()} ARCHATEL. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  )
}

export default Footer
