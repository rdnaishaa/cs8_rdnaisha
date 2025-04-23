import React, { useState, useRef, useEffect } from 'react';
import { 
  Video, Users, Monitor, Globe, Shield, Calendar, 
  MessageSquare, Award, Menu, X, ChevronDown, ArrowRight,
  Check, Sparkles, CreditCard, Building, UserPlus, Star
} from 'lucide-react';

export default function ZoomLandingPage() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  // Pricing calculator state
  const [participantCount, setParticipantCount] = useState(10);
  const [meetingHours, setMeetingHours] = useState(5);
  const [selectedPlan, setSelectedPlan] = useState('pro');

  // References to scroll to sections
  const fiturRef = useRef(null);
  const keunggulanRef = useRef(null);
  const testimonialRef = useRef(null);
  const daftarRef = useRef(null);
  const howItWorksRef = useRef(null);
  const pricingRef = useRef(null); // New reference for pricing section

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

  // Calculate estimated cost based on selected plan and usage
  const calculateCost = () => {
    const baseCosts = {
      basic: 0,
      pro: 15,
      business: 25,
      enterprise: 35
    };
    
    const participantMultiplier = Math.ceil(participantCount / 100);
    const hourMultiplier = meetingHours > 10 ? (meetingHours - 10) * 0.5 : 0;
    
    if (selectedPlan === 'basic') {
      return 0;
    }
    
    let cost = baseCosts[selectedPlan] * participantMultiplier;
    cost += hourMultiplier;
    
    return cost.toFixed(2);
  };

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

  // Pricing plans data
  const pricingPlans = [
    {
      id: "basic",
      name: "Basic",
      price: "Gratis",
      icon: <Users className="h-6 w-6" />,
      features: [
        "Meeting hingga 40 menit",
        "Maksimal 100 peserta",
        "Chat meeting",
        "Berbagi layar"
      ],
      description: "Cocok untuk penggunaan pribadi dan pertemuan singkat",
      color: "gray"
    },
    {
      id: "pro",
      name: "Pro",
      price: "Rp 200.000",
      icon: <Star className="h-6 w-6" />,
      features: [
        "Meeting tanpa batas waktu",
        "Maksimal 300 peserta",
        "Cloud recording 10 GB",
        "Fitur polling & breakout rooms"
      ],
      description: "Ideal untuk profesional dan tim kecil",
      color: "blue",
      popular: true
    },
    {
      id: "business",
      name: "Business",
      price: "Rp 350.000",
      icon: <Building className="h-6 w-6" />,
      features: [
        "Meeting tanpa batas waktu",
        "Maksimal 500 peserta",
        "Cloud recording 20 GB",
        "Branding kustom & domain"
      ],
      description: "Sempurna untuk bisnis menengah",
      color: "purple"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Hubungi Kami",
      icon: <CreditCard className="h-6 w-6" />,
      features: [
        "Meeting tanpa batas waktu",
        "Lebih dari 1000 peserta",
        "Cloud recording unlimited",
        "Dukungan premium 24/7"
      ],
      description: "Solusi lengkap untuk perusahaan besar",
      color: "black"
    }
  ];

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
              onClick={() => scrollToSection(howItWorksRef, 'howItWorks')}
              className={`hover:text-blue-200 transition ${activeSection === 'howItWorks' ? 'font-bold border-b-2 border-white' : ''}`}
            >
              Cara Kerja
            </button>
            <button 
              onClick={() => scrollToSection(pricingRef, 'pricing')}
              className={`hover:text-blue-200 transition ${activeSection === 'pricing' ? 'font-bold border-b-2 border-white' : ''}`}
            >
              Harga
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
      </header>

      {/* Hero Section */}
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

      {/* How It Works Section */}
      <section ref={howItWorksRef} id="howItWorks" className="py-20 bg-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-100 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-200 rounded-full opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-200 rounded-full opacity-50"></div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-4">Cara Kerja Zoom</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Tiga langkah sederhana untuk memulai pertemuan virtual berkualitas tinggi bersama kolega, teman, atau keluarga.
          </p>

          {/* Step Process */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-20">
            {/* Timeline connector for desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-1 bg-blue-400 w-2/3 top-64"></div>

            {/* Step 1 */}
            <div className="md:w-1/3 mb-12 md:mb-0 text-center group">
              <div className="relative inline-block">
                <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold mb-4 mx-auto relative z-10 transform transition-transform group-hover:rotate-12 group-hover:scale-110">
                  1
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-blue-400 animate-ping opacity-30"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Buat Akun</h3>
              <p className="text-gray-600 max-w-xs mx-auto">Daftar dengan email Anda dan verifikasi dalam hitungan detik</p>
            </div>

            {/* Step 2 */}
            <div className="md:w-1/3 mb-12 md:mb-0 text-center md:mt-24 group">
              <div className="relative inline-block">
                <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold mb-4 mx-auto relative z-10 transform transition-transform group-hover:rotate-12 group-hover:scale-110">
                  2
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-blue-400 animate-ping opacity-30 animation-delay-200"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Jadwalkan Meeting</h3>
              <p className="text-gray-600 max-w-xs mx-auto">Tentukan waktu dan undang peserta dengan mudah</p>
            </div>

            {/* Step 3 */}
            <div className="md:w-1/3 text-center group">
              <div className="relative inline-block">
                <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold mb-4 mx-auto relative z-10 transform transition-transform group-hover:rotate-12 group-hover:scale-110">
                  3
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-blue-400 animate-ping opacity-30 animation-delay-400"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mulai Kolaborasi</h3>
              <p className="text-gray-600 max-w-xs mx-auto">Nikmati pertemuan tanpa hambatan dengan berbagai fitur canggih</p>
            </div>
          </div>

          {/* Interactive demo */}
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Coba Demo Interaktif</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-100 rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Video className="h-5 w-5 mr-2 text-blue-600" />
                  Fitur Unggulan
                </h4>
                <ul className="space-y-3">
                  {["Rekam Meeting", "Background Virtual", "Fitur Keamanan", "Chat Real-time", "Integrasi Kalender"].map((feature, index) => (
                    <li key={index} className="flex items-center hover:bg-blue-50 p-2 rounded transition-colors cursor-pointer group">
                      <div className="h-2 w-2 rounded-full bg-blue-600 mr-2 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Jelajahi Semua Fitur
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 relative">
                <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                  <div className="flex space-x-1">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-400 text-sm">Zoom Demo</div>
                </div>

                <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-blue-400 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-400 to-transparent"></div>
                  </div>
                  
                  <div className="text-white text-center z-10">
                    <Video className="h-16 w-16 mx-auto mb-2 animate-pulse" />
                    <p className="font-medium">Klik untuk Memulai Demo</p>
                  </div>
                  
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                    <div className="h-8 w-8 bg-gray-800 bg-opacity-60 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Video className="h-4 w-4 text-white" />
                    </div>
                    <div className="h-8 w-8 bg-gray-800 bg-opacity-60 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <MessageSquare className="h-4 w-4 text-white" />
                    </div>
                    <div className="h-8 w-8 bg-gray-800 bg-opacity-60 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <div className="h-8 w-8 bg-gray-800 bg-opacity-60 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Monitor className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Lihat Tutorial
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                    Coba Gratis
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pricing Section - NEW UNIQUE SECTION */}
      <section ref={pricingRef} id="pricing" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-50 transform -skew-y-6 origin-top-right"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              Harga Fleksibel
            </span>
            <h2 className="text-4xl font-bold mb-4">Pilih Paket yang Tepat untuk Anda</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan paket yang sesuai dengan kebutuhan dan anggaran Anda. Semua paket mencakup fitur-fitur utama Zoom.
            </p>
          </div>

          {/* Interactive Pricing Calculator */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto mb-20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold flex items-center">
                <Sparkles className="h-6 w-6 mr-2 text-blue-500" />
                Kalkulator Biaya Zoom
              </h3>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                Perkiraan Biaya
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Pilih Paket</label>
                  <div className="grid grid-cols-2 gap-4">
                    {pricingPlans.map(plan => (
                      <button
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`p-4 rounded-lg border-2 transition duration-300 flex flex-col items-center justify-center ${
                          selectedPlan === plan.id 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        {plan.icon}
                        <span className="font-medium mt-2">{plan.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Jumlah Peserta: <span className="text-blue-600 font-bold">{participantCount}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="1000"
                    value={participantCount}
                    onChange={(e) => setParticipantCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1</span>
                    <span>250</span>
                    <span>500</span>
                    <span>750</span>
                    <span>1000</span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Jam Meeting per Bulan: <span className="text-blue-600 font-bold">{meetingHours}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    value={meetingHours}
                    onChange={(e) => setMeetingHours(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1</span>
                    <span>10</span>
                    <span>20</span>
                    <span>30</span>
                    <span>40</span>
                  </div> 
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-4">Perkiraan Biaya Bulanan</h4>
                
                {selectedPlan === 'basic' ? (
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-blue-600">Gratis</span>
                    <p className="text-gray-600">Untuk meeting hingga 40 menit</p>
                  </div>
                ) : (
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-blue-600">Rp {calculateCost()}.000</span>
                    <span className="text-gray-600">/bulan</span>
                  </div>
                )}
                
                <div className="space-y-3 mb-6">
                  {pricingPlans.find(plan => plan.id === selectedPlan)?.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-700 mb-2">
                    <strong>Detail perhitungan:</strong>
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Paket: {pricingPlans.find(plan => plan.id === selectedPlan)?.name}</li>
                    <li>• Jumlah peserta: {participantCount}</li>
                    <li>• Jam meeting per bulan: {meetingHours}</li>
                  </ul>
                </div>
                
                <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Pilih Paket {pricingPlans.find(plan => plan.id === selectedPlan)?.name}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Plans Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                  plan.popular ? 'border-2 border-blue-500 relative' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                    Terpopuler
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {plan.icon}
                    <h3 className="text-xl font-bold ml-2">{plan.name}</h3>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.id !== 'enterprise' && <span className="text-gray-600">/bulan</span>}
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 border-t border-gray-100">
                  <button 
                    className={`w-full py-2 rounded-lg font-medium transition-colors ${
                      plan.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    Pilih Paket
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={fiturRef} id="fitur" className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              Fitur Unggulan
            </span>
            <h2 className="text-4xl font-bold mb-4">Semua yang Anda Butuhkan dalam Satu Platform</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Zoom menyediakan berbagai fitur canggih untuk memastikan pertemuan virtual Anda berjalan lancar dan produktif.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group hover:border-blue-200"
              >
                <div className="p-3 bg-blue-100 rounded-lg inline-block mb-4 group-hover:bg-blue-200 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section ref={keunggulanRef} id="keunggulan" className="py-20 bg-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 bg-blue-200 rounded-full opacity-50"></div>
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-64 h-64 bg-blue-200 rounded-full opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              Keunggulan Zoom
            </span>
            <h2 className="text-4xl font-bold mb-4">Mengapa Memilih Zoom?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Platform meeting virtual terdepan yang dipercaya oleh jutaan pengguna di seluruh dunia.
            </p>
          </div>

          {/* Counter Stats */}
          <div className="flex flex-wrap justify-around mb-16">
            {counterStats.map((stat, index) => (
              <div key={index} className="text-center mb-8 w-full sm:w-1/3">
                <div className="inline-block">
                  <div className="relative">
                    <div className="text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="absolute -inset-1 border-2 border-blue-200 rounded-lg -rotate-3 opacity-50"></div>
                  </div>
                </div>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((adv, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-3">{adv.title}</h3>
                <p className="text-gray-600">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialRef} id="testimonial" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              Testimonial
            </span>
            <h2 className="text-4xl font-bold mb-4">Yang Mereka Katakan Tentang Zoom</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dengarkan pengalaman pengguna kami yang telah memanfaatkan Zoom untuk kebutuhan mereka.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mr-4">
                    {testimonial.initial}
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register Section */}
      <section ref={daftarRef} id="daftar" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Mulai Perjalanan Zoom Anda Hari Ini</h2>
            <p className="text-xl mb-8 text-blue-100">
              Daftar sekarang dan nikmati akses gratis ke fitur-fitur dasar platform konferensi video terbaik.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailValid(true);
                  }}
                  placeholder="Masukkan email Anda"
                  className={`w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 
                    ${!isEmailValid ? 'border-2 border-red-500' : ''}`}
                />
                {!isEmailValid && (
                  <p className="text-red-300 text-sm mt-1 text-left">Email tidak valid. Silakan periksa kembali.</p>
                )}
              </div>
              <button 
                type="submit" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition flex-shrink-0"
              >
                Daftar Gratis
              </button>
            </form>
            <p className="mt-4 text-sm text-blue-200">
              Dengan mendaftar, Anda menyetujui syarat dan ketentuan yang berlaku.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Video className="h-8 w-8" />
                <span className="text-2xl font-bold">Zoom</span>
              </div>
              <p className="text-gray-400 mb-4">
                Platform konferensi video terbaik untuk pertemuan virtual, pembelajaran jarak jauh, dan kolaborasi tim.
              </p>
              <div className="flex space-x-4">
                {socialIcons.map((icon, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            
            {footerLinks.map((column, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-gray-400 hover:text-white transition">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Zoom Video Communications, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-64 bg-blue-700 p-6">
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection(fiturRef, 'fitur')}
                className="text-white hover:text-blue-200 transition py-2"
              >
                Fitur
              </button>
              <button 
                onClick={() => scrollToSection(keunggulanRef, 'keunggulan')}
                className="text-white hover:text-blue-200 transition py-2"
              >
                Keunggulan
              </button>
              <button 
                onClick={() => scrollToSection(howItWorksRef, 'howItWorks')}
                className="text-white hover:text-blue-200 transition py-2"
              >
                Cara Kerja
              </button>
              <button 
                onClick={() => scrollToSection(pricingRef, 'pricing')}
                className="text-white hover:text-blue-200 transition py-2"
              >
                Harga
              </button>
              <button 
                onClick={() => scrollToSection(testimonialRef, 'testimonial')}
                className="text-white hover:text-blue-200 transition py-2"
              >
                Testimonial
              </button>
              <button 
                onClick={() => scrollToSection(daftarRef, 'daftar')}
                className="text-white hover:text-blue-200 transition py-2"
              >
                Daftar
              </button>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition mt-4">
                Masuk
              </button>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}