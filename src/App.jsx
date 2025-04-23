import React, { useState, useRef } from 'react';
  import { 
    Video, Users, Monitor, Globe, Shield, Calendar, 
    MessageSquare, Award, Menu, X, ChevronDown, ArrowRight
  } from 'lucide-react';
  
  export default function ZoomLandingPage() {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
  
    // References to scroll to sections
    const fiturRef = useRef(null);
    const keunggulanRef = useRef(null);
    const testimonialRef = useRef(null);
    const daftarRef = useRef(null);
  
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateEmail(email)) {
        alert('Terima kasih telah mendaftar! Kami akan menghubungi Anda segera.');
        setEmail('');
      } else {
        setIsEmailValid(false);
      }
    };
  
    const scrollToSection = (ref, section) => {
      setIsMenuOpen(false);
      setActiveSection(section);
      ref.current.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <div className="min-h-screen font-sans text-gray-800 overflow-x-hidden">
        {/* Header with sticky positioning */}
        <header className="sticky top-0 z-50 bg-blue-600 text-white shadow-lg">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Video className="h-8 w-8" />
              <span className="text-2xl font-bold">Zoom</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection(fiturRef, 'fitur')}
                className={`hover:text-blue-200 transition ${activeSection === 'fitur' ? 'font-bold border-b-2 border-white' : ''}`}
              >
                Fitur
              </button>
              <button 
                onClick={() => scrollToSection(keunggulanRef, 'keunggulan')}
                className={`hover:text-blue-200 transition ${activeSection === 'keunggulan' ? 'font-bold border-b-2 border-white' : ''}`}
              >
                Keunggulan
              </button>
              <button 
                onClick={() => scrollToSection(testimonialRef, 'testimonial')}
                className={`hover:text-blue-200 transition ${activeSection === 'testimonial' ? 'font-bold border-b-2 border-white' : ''}`}
              >
                Testimonial
              </button>
              <button 
                onClick={() => scrollToSection(daftarRef, 'daftar')}
                className={`hover:text-blue-200 transition ${activeSection === 'daftar' ? 'font-bold border-b-2 border-white' : ''}`}
              >
                Daftar
              </button>
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            
            <button className="hidden md:block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition">
              Masuk
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-blue-700 px-6 py-4 animate-fadeIn">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection(fiturRef, 'fitur')}
                  className="text-white hover:bg-blue-600 py-2 px-3 rounded transition"
                >
                  Fitur
                </button>
                <button 
                  onClick={() => scrollToSection(keunggulanRef, 'keunggulan')}
                  className="text-white hover:bg-blue-600 py-2 px-3 rounded transition"
                >
                  Keunggulan
                </button>
                <button 
                  onClick={() => scrollToSection(testimonialRef, 'testimonial')}
                  className="text-white hover:bg-blue-600 py-2 px-3 rounded transition"
                >
                  Testimonial
                </button>
                <button 
                  onClick={() => scrollToSection(daftarRef, 'daftar')}
                  className="text-white hover:bg-blue-600 py-2 px-3 rounded transition"
                >
                  Daftar
                </button>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition w-full">
                  Masuk
                </button>
              </div>
            </div>
          )}
        </header>
  
        {/* Hero Section with animated elements */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 animate-fadeInUp">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Koneksi Tanpa Batas dengan Zoom</h1>
              <p className="text-xl mb-8">Platform konferensi video terbaik untuk pertemuan virtual, pembelajaran jarak jauh, dan kolaborasi tim.</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="https://www.zoom.com/id" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition flex items-center justify-center group"
                >
                  Mulai Gratis
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={() => scrollToSection(daftarRef, 'daftar')}
                  className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition"
                >
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center animate-fadeInRight">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-blue-400 rounded-lg opacity-30 blur-xl animate-pulse"></div>
                <div className="bg-white rounded-lg shadow-xl p-2 transform hover:scale-105 transition-transform duration-300 relative z-10">
                  <div className="bg-gray-800 rounded-md p-1">
                    <div className="flex justify-between items-center p-2 border-b border-gray-700">
                      <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-white text-xs">Zoom Meeting</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1 p-2">
                      <div className="bg-blue-600 rounded-md p-2 flex justify-center items-center">
                        <Users className="text-white h-6 w-6" />
                      </div>
                      <div className="bg-blue-500 rounded-md p-2 flex justify-center items-center col-span-2 row-span-2">
                        <Video className="text-white h-12 w-12 animate-pulse" />
                      </div>
                      <div className="bg-blue-600 rounded-md p-2 flex justify-center items-center">
                        <Monitor className="text-white h-6 w-6" />
                      </div>
                      <div className="bg-blue-700 rounded-md p-2 flex justify-center items-center col-span-3">
                        <div className="flex space-x-4">
                          <div className="bg-gray-700 rounded-full p-2 hover:bg-gray-600 transition">
                            <Video className="text-white h-4 w-4" />
                          </div>
                          <div className="bg-gray-700 rounded-full p-2 hover:bg-gray-600 transition">
                            <MessageSquare className="text-white h-4 w-4" />
                          </div>
                          <div className="bg-gray-700 rounded-full p-2 hover:bg-gray-600 transition">
                            <Users className="text-white h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-6 mt-12">
            <div className="flex justify-center">
              <button 
                onClick={() => scrollToSection(fiturRef, 'fitur')}
                className="animate-bounce bg-white bg-opacity-20 p-2 rounded-full"
              >
                <ChevronDown className="text-white h-6 w-6" />
              </button>
            </div>
          </div>
        </section>
  
        {/* Fitur Section with hover effects */}
        <section ref={fiturRef} id="fitur" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Fitur Utama Zoom</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Jelajahi berbagai fitur unggulan yang membuat Zoom menjadi solusi konferensi video terbaik untuk Anda.</p>
            <div className="grid md:grid-cols-3 gap-8">
              {featureItems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-blue-50 p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:translate-y-1 group"
                >
                  <div className="bg-blue-600 text-white p-3 rounded-full inline-block mb-4 group-hover:bg-blue-700 transform group-hover:rotate-6 transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Keunggulan Section with animated counters */}
        <section ref={keunggulanRef} id="keunggulan" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Keunggulan Zoom</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Mengapa Zoom menjadi pilihan utama untuk konferensi video profesional di Indonesia.</p>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <ul className="space-y-8">
                  {advantages.map((item, index) => (
                    <li key={index} className="flex items-start transform hover:translate-x-2 transition-transform">
                      <div className="bg-blue-600 text-white p-2 rounded-full mr-4">
                        <Award className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="bg-white rounded-xl shadow-lg p-8 relative">
                    <div className="absolute -top-4 -left-4 bg-blue-600 text-white rounded-full p-4 z-10">
                      <Award className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6 mt-2 relative z-10">Dipercaya oleh 500.000+ Organisasi</h3>
                    
                    <div className="flex justify-around mb-8">
                      {counterStats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <p className="mb-6 relative z-10">Zoom menjadi pilihan utama untuk perusahaan kecil hingga perusahaan Fortune 500.</p>
                    <div className="grid grid-cols-3 gap-4 relative z-10">
                      <div className="h-12 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition">
                        <span className="font-medium">Google</span>
                      </div>
                      <div className="h-12 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition">
                        <span className="font-medium">Microsoft</span>
                      </div>
                      <div className="h-12 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition">
                        <span className="font-medium">IBM</span>
                      </div>
                      <div className="h-12 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition">
                        <span className="font-medium">Oracle</span>
                      </div>
                      <div className="h-12 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition">
                        <span className="font-medium">Samsung</span>
                      </div>
                      <div className="h-12 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition">
                        <span className="font-medium">Intel</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white rounded-full p-4 z-10">
                      <Globe className="h-8 w-8" />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>
  
        {/* Testimonial Section with card carousel */}
        <section ref={testimonialRef} id="testimonial" className="py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Apa Kata Pengguna Kami</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Pengalaman nyata dari pelanggan yang telah menggunakan Zoom untuk kebutuhan konferensi video mereka.</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-blue-50 p-6 rounded-lg border-t-4 border-blue-600 hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonial.initial}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic text-gray-700">{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* CTA Section with improved form */}
        <section ref={daftarRef} id="daftar" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Siap Meningkatkan Kualitas Meeting Virtual Anda?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Daftar sekarang dan dapatkan akses ke semua fitur premium Zoom selama 30 hari pertama!</p>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="">
                <div className="flex flex-col gap-4 mb-4">
                  <input
                    type="email"
                    placeholder="Alamat email Anda"
                    className={`px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-blue-100 border focus:outline-none focus:ring-2 focus:ring-blue-300 transition ${!isEmailValid ? 'border-2 border-red-500' : 'border-transparent'}`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsEmailValid(true);
                    }}
                  />
                  <button 
                    type="submit" 
                    className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center justify-center"
                  >
                    Mulai 30 Hari Gratis
                    <ArrowRight className="ml-2" />
                  </button>
                </div>
                {!isEmailValid && <p className="text-red-300 text-sm text-left">Mohon masukkan alamat email yang valid</p>}
                
                <div className="mt-6 p-4 bg-white bg-opacity-5 rounded-lg">
                  <h4 className="font-medium mb-2">Yang Anda Dapatkan:</h4>
                  <ul className="text-left space-y-2">
                    <li className="flex items-center">
                      <div className="mr-2 text-green-300">✓</div>
                      <span>Akses penuh ke semua fitur premium</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 text-green-300">✓</div>
                      <span>Meeting tak terbatas hingga 100 peserta</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 text-green-300">✓</div>
                      <span>Dukungan prioritas 24/7</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-sm mt-4 text-blue-200">Dengan mendaftar, Anda menyetujui syarat dan ketentuan layanan kami.</p>
              </form>
            </div>
          </div>
        </section>
  
        {/* Footer with modern design */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Video className="h-6 w-6" />
                  <span className="text-xl font-bold">Zoom</span>
                </div>
                <p className="text-gray-400">Platform konferensi video terbaik untuk pertemuan virtual dan kolaborasi tim.</p>
                <div className="flex space-x-4 mt-4">
                  {socialIcons.map((icon, index) => (
                    <a key={index} href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
              
              {footerLinks.map((section, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                  <ul className="space-y-2 text-gray-400">
                    {section.links.map((link, idx) => (
                      <li key={idx}>
                        <a href="#" className="hover:text-white transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">&copy; R. Aisha Syauqi Ramadhani - 2306250554</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Kebijakan Privasi</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Syarat dan Ketentuan</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Keamanan</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  
  
  // Data arrays for reusable content
  const featureItems = [
    {
       icon: <Video className="h-6 w-6" />,
       title: "Video HD",
       description: "Kualitas video dan audio HD tanpa gangguan untuk pengalaman meeting yang maksimal."
    },
    {
       icon: <Users className="h-6 w-6" />,
       title: "Meeting Skala Besar",
       description: "Dukung hingga 1000 peserta dalam satu sesi dengan tampilan grid yang optimal."
    },
    {
       icon: <Monitor className="h-6 w-6" />,
       title: "Berbagi Layar",
       description: "Berbagi konten layar dengan mudah untuk presentasi dan kolaborasi lebih efektif."
    },
    {
       icon: <Shield className="h-6 w-6" />,
       title: "Keamanan Tinggi",
       description: "Enkripsi end-to-end dan fitur keamanan terbaik untuk melindungi data meeting Anda."
    },
    {
       icon: <Calendar className="h-6 w-6" />,
       title: "Penjadwalan Mudah",
       description: "Jadwalkan meeting dengan cepat dan integrasi dengan kalender seperti Google Calendar."
    },
    {
       icon: <Globe className="h-6 w-6" />,
       title: "Akses Global",
       description: "Akses dari mana saja di dunia dengan dukungan multi bahasa dan stabilitas koneksi."
    }
 ];
 
  
  const advantages = [
    {
      title: "Kualitas Terbaik",
      description: "Nikmati kualitas audio dan video HD tanpa jeda untuk pengalaman meeting profesional."
    },
    {
      title: "Kemudahan Penggunaan",
      description: "Antarmuka intuitif yang dapat digunakan oleh siapa saja, bahkan bagi pemula sekalipun."
    },
    {
      title: "Dukungan Multi-platform",
      description: "Akses Zoom dari perangkat apa saja - desktop, mobile, atau tablet dengan performa optimal."
    }
  ];
  
  const counterStats = [
    { value: "500k+", label: "Pengguna" },
    { value: "190+", label: "Negara" },
    { value: "4.9/5", label: "Rating" }
  ];
  
  const testimonials = [
    {
      initial: "A",
      name: "Aliya Rizqiningrum Salamun",
      title: "CEO PT Duren Kalibata",
      quote: "Zoom sangat membantu perusahaan kami untuk tetap terhubung dengan tim dan klien di seluruh Indonesia. Kualitas videonya luar biasa!"
    },
    {
      initial: "K",
      name: "Khalisa Zahra", 
      title: "Mahasiswa Universitas Indonesia",
      quote: "Sebagai mahasiswa, saya menggunakan Zoom untuk kelas online. Fitur breakout room dan recording sangat membantu proses pembelajaran."
    },
    {
      initial: "Z",
      name: "Zhafira Zahra",
      title: "Event Organizer",
      quote: "Menyelenggarakan webinar dengan ratusan peserta menjadi sangat mudah berkat Zoom. Fitur-fiturnya sangat lengkap dan mudah digunakan."
    }
  ];

  const socialIcons = [
    <Globe className="h-6 w-6" />,
    <Shield className="h-6 w-6" />,
    <Calendar className="h-6 w-6" />
  ];

  const footerLinks = [
    {
      title: "Perusahaan",
      links: ["Tentang Kami", "Karir", "Blog", "Berita"]
    },
    {
      title: "Dukungan",
      links: ["Pusat Bantuan", "Kontak Kami", "Dokumentasi"]
    },
    {
      title: "Produk",
      links: ["Zoom Meeting", "Zoom Webinar", "Zoom Rooms"]
    }
  ];