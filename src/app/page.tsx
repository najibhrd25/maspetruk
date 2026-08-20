"use client";

import { useState } from "react";
import Layout from "@/layouts/Layout";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedKabupaten, setSelectedKabupaten] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Gambaran Umum");

  const kabupatenList = [
    "Kabupaten Banyumas", "Kabupaten Cilacap", "Kabupaten Purbalingga", "Kabupaten Banjarnegara", 
    "Kabupaten Kebumen", "Kabupaten Purworejo", "Kabupaten Wonosobo", "Kabupaten Magelang", 
    "Kabupaten Boyolali", "Kabupaten Klaten", "Kabupaten Sukoharjo", "Kabupaten Wonogiri",
    "Kabupaten Karanganyar", "Kabupaten Sragen", "Kabupaten Grobogan", "Kabupaten Blora", 
    "Kabupaten Rembang", "Kabupaten Pati", "Kabupaten Kudus", "Kabupaten Jepara", 
    "Kabupaten Demak", "Kabupaten Semarang", "Kabupaten Temanggung", "Kabupaten Kendal",
    "Kabupaten Batang", "Kabupaten Pekalongan", "Kabupaten Pemalang", "Kabupaten Tegal", 
    "Kabupaten Brebes", "Kota Magelang", "Kota Surakarta", "Kota Salatiga", "Kota Semarang",
    "Kota Pekalongan", "Kota Tegal"
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleKabupatenSelect = (kab: string) => {
    setSearchQuery(kab);
    setSelectedKabupaten(kab);
    setShowSuggestions(false);
  };

  const handleBackToSearch = () => {
    setSelectedKabupaten(null);
    setSearchQuery("");
  };

  // Mock Data for selected county
  const getRegionalData = (kabName: string) => {
    return {
      name: kabName,
      luas: "1.321,83 km²",
      kecamatan: "27 Kecamatan",
      penduduk: "1.815.527 Jiwa",
      kepadatan: "1.332 orang/km²",
      stats: {
        badanUsaha: 666,
        tenagaKerja: "2.386",
        tenagaBersertifikat: "3.313",
        anggaran: "Rp 75 Jt"
      },
      buComposition: {
        asosiasi: 338,
        bujk: 314,
        menengah: 10,
        spesialis: 4
      }
    };
  };

  const currentData = selectedKabupaten ? getRegionalData(selectedKabupaten) : null;

  return (
    <Layout withNavbar withFooter>
      <main className="min-h-screen bg-white text-gray-800 font-sans">
        
        {!selectedKabupaten ? (
          <>
            {/* Search and Map View */}
            <section className="bg-[#fffdf9] py-16 px-6 sm:px-12 lg:px-24 border-b border-orange-50/50">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left side: Heading & Search */}
                <div className="lg:col-span-6 space-y-6 relative">
                  <span className="text-xs uppercase tracking-widest text-[#e65f2b] font-extrabold bg-[#fff4f0] px-3 py-1 rounded-full">
                    Profil Pembinaan Jasa Konstruksi
                  </span>
                  <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
                    Jelajahi Profil Jasa Konstruksi <br />
                    <span className="text-[#0a369d]">Kabupaten/Kota di Jawa Tengah</span>
                  </h1>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Jelajahi data pembinaan jasa konstruksi secara lengkap, akurat, dan terstruktur. Temukan Informasi potensi daerah, pelaku usaha, tenaga kerja, hingga kegiatan pembangunan di seluruh kabupaten/kota Jawa Tengah.
                  </p>
                  
                  {/* Search Box */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2 relative">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-400">🔍</span>
                      </div>
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onFocus={() => setShowSuggestions(true)}
                        placeholder="Cari kabupaten atau kota..."
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e65f2b] focus:border-transparent text-sm bg-white"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => {
                            setSearchQuery("");
                            setShowSuggestions(false);
                          }}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                    <button 
                      onClick={() => handleKabupatenSelect(searchQuery || "Kota Semarang")}
                      className="bg-[#d6611d] hover:bg-[#b54f15] text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 flex items-center justify-center gap-2 whitespace-nowrap text-sm"
                    >
                      Jelajahi Wilayah <span>→</span>
                    </button>
                  </div>

                  {/* Suggestions Dropdown */}
                  {showSuggestions && searchQuery && (
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto mt-1 absolute z-20 w-full max-w-md">
                      {kabupatenList
                        .filter((kab) =>
                          kab.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((kab) => (
                          <button
                            key={kab}
                            onClick={() => handleKabupatenSelect(kab)}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700"
                          >
                            {kab}
                          </button>
                        ))}
                    </div>
                  )}
                </div>

                {/* Right side: Map representation */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative w-full max-w-xl bg-blue-50/50 rounded-3xl p-6 border border-blue-100 shadow-sm overflow-hidden">
                    <h4 className="text-center font-bold text-gray-800 text-sm mb-4">Peta Administrasi Jawa Tengah</h4>
                    
                    {/* Simplified SVG Map representation */}
                    <div className="w-full aspect-[4/3] bg-sky-100/30 rounded-2xl relative border border-sky-100 flex items-center justify-center">
                      
                      {/* Tooltip Popup */}
                      <div className="absolute top-6 right-12 bg-[#001f54] text-white p-3 rounded-xl shadow-xl z-10 border border-blue-900 pointer-events-none transition-all">
                        <span className="text-xs font-semibold block">Kota Semarang</span>
                        <span className="text-[10px] text-[#ffb703] flex items-center gap-1 mt-1">
                          Lihat Profil Daerah <span className="text-xs">→</span>
                        </span>
                      </div>

                      {/* SVG Map of Jawa Tengah */}
                      <svg viewBox="0 0 800 450" className="w-full h-full p-4 drop-shadow-md">
                        <g fill="#e2e8f0" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round">
                          <path d="M50 250 L120 220 L150 280 L100 350 L40 330 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" onClick={() => handleKabupatenSelect("Kabupaten Cilacap")} />
                          <path d="M120 220 L200 200 L230 260 L150 280 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" onClick={() => handleKabupatenSelect("Kabupaten Banyumas")} />
                          <path d="M150 280 L230 260 L240 330 L160 340 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" onClick={() => handleKabupatenSelect("Kabupaten Kebumen")} />
                          <path d="M230 260 L290 250 L310 320 L240 330 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" onClick={() => handleKabupatenSelect("Kabupaten Purworejo")} />
                          <path d="M100 120 L180 130 L170 200 L120 220 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" onClick={() => handleKabupatenSelect("Kabupaten Brebes")} />
                          <path d="M180 130 L250 135 L240 195 L170 200 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" onClick={() => handleKabupatenSelect("Kabupaten Tegal")} />
                          <path d="M250 135 L310 140 L310 190 L240 195 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" onClick={() => handleKabupatenSelect("Kabupaten Pemalang")} />
                          <path d="M310 140 L370 145 L380 200 L310 190 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" onClick={() => handleKabupatenSelect("Kabupaten Pekalongan")} />
                          <path d="M370 145 L450 150 L440 210 L380 200 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" onClick={() => handleKabupatenSelect("Kabupaten Batang")} />
                          <path d="M450 150 L520 160 L500 220 L440 210 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" onClick={() => handleKabupatenSelect("Kabupaten Kendal")} />
                          <path 
                            d="M520 160 L580 170 L570 230 L500 220 Z" 
                            fill="#e65f2b" 
                            stroke="#ffffff" 
                            strokeWidth="3"
                            className="cursor-pointer hover:fill-[#d6611d] transition-colors"
                            onClick={() => handleKabupatenSelect("Kota Semarang")}
                          />
                          <path d="M580 170 L650 120 L680 150 L640 200 L570 230 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" onClick={() => handleKabupatenSelect("Kabupaten Demak")} />
                          <path d="M650 120 L720 100 L740 160 L680 150 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" onClick={() => handleKabupatenSelect("Kabupaten Kudus")} />
                          <path d="M720 100 L780 110 L770 180 L740 160 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" onClick={() => handleKabupatenSelect("Kabupaten Pati")} />
                          <path d="M570 230 L640 220 L660 280 L590 290 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" onClick={() => handleKabupatenSelect("Kota Surakarta")} />
                          <path d="M640 220 L720 210 L710 270 L660 280 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" onClick={() => handleKabupatenSelect("Kabupaten Sukoharjo")} />
                          <path d="M660 280 L710 270 L700 350 L630 340 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" onClick={() => handleKabupatenSelect("Kabupaten Wonogiri")} />
                        </g>
                        <text x="90" y="300" fill="#475569" fontSize="12" fontWeight="bold" className="pointer-events-none">Cilacap</text>
                        <text x="130" y="170" fill="#475569" fontSize="12" fontWeight="bold" className="pointer-events-none">Brebes</text>
                        <text x="210" y="170" fill="#475569" fontSize="12" fontWeight="bold" className="pointer-events-none">Tegal</text>
                        <text x="280" y="170" fill="#475569" fontSize="12" fontWeight="bold" className="pointer-events-none">Pemalang</text>
                        <text x="340" y="175" fill="#475569" fontSize="12" fontWeight="bold" className="pointer-events-none">Pekalongan</text>
                        <text x="410" y="180" fill="#475569" fontSize="12" fontWeight="bold" className="pointer-events-none">Batang</text>
                        <text x="470" y="185" fill="#475569" fontSize="12" fontWeight="bold" className="pointer-events-none">Kendal</text>
                        <text x="510" y="210" fill="#ffffff" fontSize="11" fontWeight="bold" className="pointer-events-none">Semarang</text>
                        <text x="610" y="150" fill="#475569" fontSize="12" fontWeight="bold" className="pointer-events-none">Demak</text>
                        <text x="670" y="130" fill="#475569" fontSize="12" fontWeight="bold" className="pointer-events-none">Kudus</text>
                        <text x="730" y="135" fill="#475569" fontSize="12" fontWeight="bold" className="pointer-events-none">Pati</text>
                        <text x="650" y="310" fill="#475569" fontSize="12" fontWeight="bold" className="pointer-events-none">Wonogiri</text>
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Gambaran Jawa Tengah Section */}
            <section className="py-16 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
              <div className="mb-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  Gambaran Jawa Tengah
                </h2>
                <p className="text-gray-500 text-sm sm:text-base mt-1">
                  Ringkasan profil pembinaan jasa konstruksi kabupaten/kota tahun 2025.
                </p>
              </div>

              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                  <span className="text-5xl font-black text-[#001f54] tracking-tight">35</span>
                  <span className="text-xs font-bold text-gray-500 mt-3 tracking-wider uppercase">
                    Kabupaten/Kota
                  </span>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                  <span className="text-5xl font-black text-[#001f54] tracking-tight">XX.XXX</span>
                  <span className="text-xs font-bold text-gray-500 mt-3 tracking-wider uppercase">
                    Badan Usaha
                  </span>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                  <span className="text-5xl font-black text-[#001f54] tracking-tight">XX.XXX</span>
                  <span className="text-xs font-bold text-gray-500 mt-3 tracking-wider uppercase">
                    Tenaga Kerja Konstruksi
                  </span>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                  <span className="text-5xl font-black text-[#001f54] tracking-tight">Rp XX M</span>
                  <span className="text-xs font-bold text-gray-500 mt-3 tracking-wider uppercase">
                    Anggaran Pembinaan
                  </span>
                </div>
              </div>
            </section>
          </>
        ) : (
          /* Regional Detailed Overview Section */
          <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Back Button */}
            <button
              onClick={handleBackToSearch}
              className="text-[#0a369d] hover:text-[#001f54] font-bold text-sm mb-6 flex items-center gap-2 group transition-colors"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Kembali ke Pencarian Wilayah
            </button>

            {/* Profile Header Block */}
            <div className="bg-[#fffdf9] border border-orange-100 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row justify-between items-center gap-8 mb-8 shadow-sm">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#001f54] rounded-2xl flex items-center justify-center text-white text-3xl shadow-md shrink-0">
                  🏢
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#e65f2b] font-bold bg-[#fff4f0] px-2.5 py-0.5 rounded">
                    Profil Wilayah
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900">{currentData?.name}</h2>
                  
                  {/* Stat pills */}
                  <div className="flex flex-wrap gap-2 pt-1 text-[11px] sm:text-xs font-semibold text-gray-600">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">{currentData?.luas}</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full">{currentData?.kecamatan}</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full">{currentData?.penduduk}</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full">{currentData?.kepadatan}</span>
                  </div>
                </div>
              </div>
              
              {/* Landmark Image / Illustration */}
              <div className="w-full lg:w-96 h-40 bg-gray-100 rounded-2xl overflow-hidden relative shadow-inner border border-gray-200/60 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#001f54]/10 z-10" />
                <div className="text-center p-4">
                  <span className="text-4xl block mb-1">🌆</span>
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">{currentData?.name} Landmark</span>
                </div>
              </div>
            </div>

            {/* Sub-Navigation Menu Tab */}
            <div className="border-b border-gray-200 mb-8 overflow-x-auto">
              <div className="flex space-x-8 whitespace-nowrap pb-1">
                {["Gambaran Umum", "Badan Usaha", "Tenaga Kerja", "Unit Pembinaan", "Kelembagaan", "Anggaran", "Kegiatan"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-3 px-1 border-b-2 font-bold text-sm transition-colors ${
                      activeTab === tab
                        ? "border-[#e65f2b] text-[#e65f2b]"
                        : "border-transparent text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Contents */}
            <div className="bg-white rounded-3xl border border-gray-150 p-6 sm:p-10 shadow-sm min-h-[300px]">
              {activeTab === "Gambaran Umum" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Gambaran Umum</h3>
                    <p className="text-sm text-gray-500 mt-1">Ringkasan data umum kabupaten/kota.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-center">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Badan Usaha</span>
                      <span className="text-4xl font-extrabold text-[#001f54] mt-2">{currentData?.stats.badanUsaha}</span>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-center">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Tenaga Kerja Konstruksi</span>
                      <span className="text-4xl font-extrabold text-[#001f54] mt-2">{currentData?.stats.tenagaKerja}</span>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-center">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Tenaga Kerja Bersertifikat</span>
                      <span className="text-4xl font-extrabold text-[#001f54] mt-2">{currentData?.stats.tenagaBersertifikat}</span>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-center">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Anggaran Pembinaan</span>
                      <span className="text-4xl font-extrabold text-[#001f54] mt-2">{currentData?.stats.anggaran}</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Badan Usaha" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Badan Usaha Jasa Konstruksi</h3>
                    <p className="text-sm text-gray-500 mt-1">Struktur dan komposisi badan usaha di wilayah terpilih.</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
                    {/* Left Big Card */}
                    <div className="lg:col-span-4 bg-[#001f54] text-white p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-md">
                      <span className="text-6xl font-black text-[#ffb703]">{currentData?.stats.badanUsaha}</span>
                      <span className="text-sm font-bold tracking-widest uppercase mt-4 text-blue-100">
                        Badan Usaha
                      </span>
                    </div>

                    {/* Right Progress representation */}
                    <div className="lg:col-span-8 bg-gray-50 p-6 rounded-2xl border border-gray-150 flex flex-col justify-center space-y-4">
                      <h4 className="font-bold text-gray-800 text-sm">Komposisi badan usaha</h4>
                      
                      <div className="space-y-3 text-xs">
                        <div>
                          <div className="flex justify-between font-semibold text-gray-600 mb-1">
                            <span>Asosiasi Badan Usaha</span>
                            <span>{currentData?.buComposition.asosiasi}</span>
                          </div>
                          <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="bg-orange-500 h-full rounded-full" style={{ width: "90%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between font-semibold text-gray-600 mb-1">
                            <span>BUJK Kecil</span>
                            <span>{currentData?.buComposition.bujk}</span>
                          </div>
                          <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="bg-[#001f54] h-full rounded-full" style={{ width: "80%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between font-semibold text-gray-600 mb-1">
                            <span>BUJK Menengah</span>
                            <span>{currentData?.buComposition.menengah}</span>
                          </div>
                          <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="bg-blue-600 h-full rounded-full" style={{ width: "20%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between font-semibold text-gray-600 mb-1">
                            <span>BUJK Spesialis</span>
                            <span>{currentData?.buComposition.spesialis}</span>
                          </div>
                          <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="bg-[#ffb703] h-full rounded-full" style={{ width: "10%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sub Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                    <div className="bg-white p-5 rounded-xl border border-gray-200 text-center shadow-sm">
                      <span className="text-3xl font-extrabold text-[#001f54] block">{currentData?.buComposition.asosiasi}</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase mt-2 block">Asosiasi Badan Usaha</span>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-200 text-center shadow-sm">
                      <span className="text-3xl font-extrabold text-[#001f54] block">{currentData?.buComposition.bujk}</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase mt-2 block">BUJK Aktif</span>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-200 text-center shadow-sm">
                      <span className="text-3xl font-extrabold text-[#001f54] block">{currentData?.buComposition.menengah}</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase mt-2 block">BUJK Menengah</span>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-200 text-center shadow-sm">
                      <span className="text-3xl font-extrabold text-[#001f54] block">{currentData?.buComposition.spesialis}</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase mt-2 block">BUJK Spesialis</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Placeholder views for other tabs */}
              {!["Gambaran Umum", "Badan Usaha"].includes(activeTab) && (
                <div className="py-12 text-center text-gray-400 flex flex-col items-center">
                  <span className="text-5xl mb-4">📊</span>
                  <h4 className="text-lg font-bold text-gray-600">{activeTab} - {currentData?.name}</h4>
                  <p className="text-sm mt-1 max-w-md">
                    Modul detail untuk tab {activeTab} sedang dalam pengembangan data dari dinas terkait.
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

      </main>
    </Layout>
  );
}
