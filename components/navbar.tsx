"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen)
  }

  const navLinks = [
    { name: "Beranda", href: "/" },
    {
      name: "Tentang Kami",
      href: "#",
      dropdown: true,
      items: [
        { name: "Sejarah Kami", href: "/tentang/sejarah" },
        { name: "Jadwal Latihan", href: "/tentang/lokasi" },
      ],
    },
    { name: "Struktur Organisasi", href: "/struktur" },
    // { name: "Panduan", href: "/panduan" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isOpen ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className={cn(
                "text-2xl font-bold transition-colors",
                isScrolled || isOpen ? "text-red-600" : "text-white",
              )}
            >
              ARCHATEL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <button
                    onClick={toggleAboutDropdown}
                    className={cn(
                      "flex items-center font-medium transition-colors",
                      isScrolled ? "text-brown-900 hover:text-red-600" : "text-red hover:text-red-400",
                    )}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div
                    className={cn(
                      "absolute left-0 mt-4 w-48 rounded-md shadow-lg bg-white ring-1 ring-red ring-opacity-5 transition-all duration-200 transform origin-top-left",
                      aboutDropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none",
                    )}
                  >
                    <div className="py-1">
                      {link.items?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-brown-900 hover:bg-cream-100 hover:text-red-600"
                          onClick={() => {
                            setAboutDropdownOpen(false)
                            closeMenu()
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "font-medium transition-colors",
                    pathname === link.href
                      ? "text-red-600"
                      : isScrolled
                        ? "text-brown-900 hover:text-red-600"
                        : "text-red hover:text-red-400",
                  )}
                >
                  {link.name}
                </Link>
              ),
            )}
          </nav>

          {/* Register Button */}
          <Link
            href="https://forms.gle/zTH1AFoJSJfyk1WKA"
            target="_blank"
            className={cn(
              "hidden md:inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300",
              isScrolled
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-white text-red-600 hover:bg-cream-100",
            )}
          >
            Daftar
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-brown-900" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <X className={isScrolled ? "text-brown-900" : "text-white"} size={24} />
            ) : (
              <Menu className={isScrolled ? "text-red-600" : "text-white"} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 transform pt-20",
            isOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="flex flex-col">
                  <button
                    onClick={toggleAboutDropdown}
                    className="flex items-center justify-between font-medium text-brown-900 py-2 border-b border-gray-200"
                  >
                    {link.name}
                    <ChevronDown
                      className={cn("h-4 w-4 transition-transform", aboutDropdownOpen ? "rotate-180" : "")}
                    />
                  </button>
                  <div
                    className={cn(
                      "pl-4 space-y-2 mt-2 transition-all duration-200",
                      aboutDropdownOpen ? "block" : "hidden",
                    )}
                  >
                    {link.items?.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-2 text-brown-800 hover:text-red-600"
                        onClick={closeMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "font-medium py-2 border-b border-gray-200",
                    pathname === link.href ? "text-red-600" : "text-brown-900 hover:text-red-600",
                  )}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ),
            )}
            <Link
              href="https://forms.gle/zTH1AFoJSJfyk1WKA"
              target="_blank"
              className="mt-4 inline-flex items-center justify-center px-4 py-3 rounded-lg font-medium bg-red-600 text-white hover:bg-red-700 transition-colors"
              onClick={closeMenu}
            >
              Daftar Sekarang
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
