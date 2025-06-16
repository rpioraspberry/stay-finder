"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, MapPin, Calendar, Users, Star, Heart, Menu, X } from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Beachfront Villa",
      location: "Malibu, California",
      price: 450,
      rating: 4.9,
      reviews: 127,
      image: "/placeholder.svg?height=300&width=400",
      amenities: ["Ocean View", "Pool", "WiFi", "Parking"],
    },
    {
      id: 2,
      title: "Cozy Mountain Cabin",
      location: "Aspen, Colorado",
      price: 280,
      rating: 4.8,
      reviews: 89,
      image: "/placeholder.svg?height=300&width=400",
      amenities: ["Mountain View", "Fireplace", "Hot Tub", "Ski Access"],
    },
    {
      id: 3,
      title: "Modern City Loft",
      location: "Brooklyn, New York",
      price: 320,
      rating: 4.7,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=400",
      amenities: ["City View", "Rooftop", "Gym", "WiFi"],
    },
    {
      id: 4,
      title: "Tropical Paradise Bungalow",
      location: "Tulum, Mexico",
      price: 180,
      rating: 4.9,
      reviews: 203,
      image: "/placeholder.svg?height=300&width=400",
      amenities: ["Beach Access", "Pool", "Yoga Deck", "Breakfast"],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "San Francisco, CA",
      text: "StayFinder helped me find the perfect beachfront villa for my family vacation. The booking process was seamless!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Michael Chen",
      location: "Austin, TX",
      text: "As a host, StayFinder has been incredible. I've had consistent bookings and the platform is so easy to use.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      location: "Miami, FL",
      text: "Found my dream mountain cabin through StayFinder. The photos were accurate and the host was amazing!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SF</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                StayFinder
              </span>
            </Link>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex items-center bg-white rounded-full shadow-lg border border-orange-200 p-2 max-w-md flex-1 mx-8">
              <div className="flex items-center px-4 py-2 border-r border-gray-200">
                <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                <Input placeholder="Where to?" className="border-0 p-0 focus-visible:ring-0 text-sm" />
              </div>
              <div className="flex items-center px-4 py-2 border-r border-gray-200">
                <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                <Input placeholder="When?" className="border-0 p-0 focus-visible:ring-0 text-sm" />
              </div>
              <div className="flex items-center px-4 py-2">
                <Users className="w-4 h-4 text-gray-400 mr-2" />
                <Input placeholder="Guests?" className="border-0 p-0 focus-visible:ring-0 text-sm" />
              </div>
              <Button
                size="sm"
                className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/host" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Become a Host
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Login
              </Link>
              <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-full">
                Register
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-orange-100">
              <div className="flex flex-col space-y-4">
                <div className="bg-white rounded-lg shadow-sm border border-orange-200 p-3">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                    <Input placeholder="Where to?" className="border-0 p-0 focus-visible:ring-0" />
                  </div>
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                    <Input placeholder="When?" className="border-0 p-0 focus-visible:ring-0" />
                  </div>
                  <div className="flex items-center mb-3">
                    <Users className="w-4 h-4 text-gray-400 mr-2" />
                    <Input placeholder="Guests?" className="border-0 p-0 focus-visible:ring-0" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
                <Link href="/host" className="text-gray-700 font-medium">
                  Become a Host
                </Link>
                <Link href="/login" className="text-gray-700 font-medium">
                  Login
                </Link>
                <Button className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-full">Register</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Beautiful travel destination"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Find Your Perfect Stay.
            <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Anywhere.
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Short or long-term stays across the globe. Discover unique places to stay with local hosts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-lg px-8 py-6 rounded-full shadow-xl"
              onClick={() => document.getElementById("featured-properties")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start Exploring
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 rounded-full backdrop-blur-sm"
            >
              Become a Host
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section id="featured-properties" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover handpicked stays from around the world, each offering unique experiences and exceptional
            hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProperties.map((property) => (
            <Card
              key={property.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-2"
                >
                  <Heart className="w-4 h-4" />
                </Button>
                <Badge className="absolute bottom-3 left-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 truncate">{property.title}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{property.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2 flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {property.location}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {property.amenities.slice(0, 2).map((amenity) => (
                    <Badge key={amenity} variant="secondary" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">${property.price}</span>
                    <span className="text-gray-600 text-sm"> / night</span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-full"
                  >
                    View Details
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">{property.reviews} reviews</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-orange-300 text-orange-600 hover:bg-orange-50 rounded-full px-8"
          >
            View All Properties
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 via-amber-50 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started with StayFinder is simple. Follow these three easy steps to find your perfect stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Search</h3>
              <p className="text-gray-600">
                Enter your destination, dates, and number of guests to find available properties that match your needs.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Book</h3>
              <p className="text-gray-600">
                Choose your perfect stay, review the details, and book instantly with our secure payment system.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Enjoy</h3>
              <p className="text-gray-600">
                Arrive at your destination and enjoy your stay. Create memories that will last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community of travelers and hosts have to say.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 p-8">
            <CardContent className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="flex items-center justify-center">
                <Avatar className="w-12 h-12 mr-4">
                  <AvatarImage src={testimonials[currentTestimonial].avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {testimonials[currentTestimonial].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].location}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-gradient-to-r from-orange-500 to-amber-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SF</span>
                </div>
                <span className="text-xl font-bold">StayFinder</span>
              </div>
              <p className="text-gray-400 mb-4">Discover unique places to stay around the world with local hosts.</p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/safety" className="hover:text-white transition-colors">
                    Safety
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="hover:text-white transition-colors">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 StayFinder. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">English (US)</span>
              <span className="text-gray-400 text-sm">USD</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
