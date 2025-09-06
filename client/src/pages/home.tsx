import DiagonalMarqueeGallery from "@/components/diagonal-marquee-gallery";
import { ArrowDown, Play, Star, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Creative Studio
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            We create stunning digital experiences that captivate audiences and drive results through innovative design and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Play size={20} />
              View Our Work
            </button>
            <button className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors">
              Get Started
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-white" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="space-y-4">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Star size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">1000+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">5 Years</h3>
              <p className="text-gray-600">Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal Marquee Gallery Section */}
      <section className="relative">
        <div className="py-12 text-center bg-white">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our creative journey through an interactive gallery of our finest work
          </p>
        </div>
        <DiagonalMarqueeGallery />
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900 text-white relative -mt-32 pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We Build Digital Experiences
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team combines creative vision with technical expertise to deliver exceptional digital solutions that help brands stand out in today's competitive landscape.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Web Development & Design</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">Brand Identity & Marketing</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">Mobile App Development</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">Creative Process</h3>
                <p className="text-gray-400">We follow a proven methodology that ensures every project delivers exceptional results.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-400">Our diverse team brings together the best minds in design, development, and strategy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's work together to bring your vision to life with stunning design and powerful functionality.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Creative Studio</h3>
              <p className="text-gray-400">Building the future of digital experiences.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Brand Identity</li>
                <li>Mobile Apps</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>Dribbble</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Creative Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
