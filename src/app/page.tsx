"use client";

import { useState } from "react";
import Layout from "@/layouts/Layout";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedKabupaten, setSelectedKabupaten] = useState<string | null>(null);

  const kabupatenList = [
    "Cilacap", "Banyumas", "Purbalingga", "Banjarnegara", "Kebumen", "Purworejo",
    "Wonosobo", "Magelang", "Boyolali", "Klaten", "Sukoharjo", "Wonogiri",
    "Karanganyar", "Sragen", "Grobogan", "Blora", "Rembang", "Pati",
    "Kudus", "Jepara", "Demak", "Semarang", "Temanggung", "Kendal",
    "Batang", "Pekalongan", "Pemalang", "Tegal", "Brebes",
    "Kota Magelang", "Kota Surakarta", "Kota Salatiga", "Kota Semarang",
    "Kota Pekalongan", "Kota Tegal"
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleKabupatenSelect = (kab: string) => {
    setSearchQuery(kab);
    setSelectedKabupaten(kab);
  };

  return (
    <Layout withNavbar withFooter>
      <main className="min-h-screen bg-white text-gray-800 font-sans">
        
        {/* Hero Section */}
        <section className="bg-[#fffdf9] py-16 px-6 sm:px-12 lg:px-24 border-b border-orange-50/50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Heading & Search */}
            <div className="lg:col-span-6 space-y-6">
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
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-400">🔍</span>
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Cari kabupaten atau kota..."
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e65f2b] focus:border-transparent text-sm bg-white"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
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

              {/* Suggestions */}
              {searchQuery && (
                <div className="bg-white border border-gray-100 rounded-lg shadow-lg max-h-48 overflow-y-auto mt-1 absolute z-20 w-full max-w-md">
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
                    {/* Background paths simulating districts */}
                    <g fill="#e2e8f0" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round">
                      {/* Cilacap / Banyumas region */}
                      <path d="M50 250 L120 220 L150 280 L100 350 L40 330 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" />
                      <path d="M120 220 L200 200 L230 260 L150 280 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" />
                      
                      {/* Kebumen / Purworejo */}
                      <path d="M150 280 L230 260 L240 330 L160 340 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" />
                      <path d="M230 260 L290 250 L310 320 L240 330 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" />

                      {/* Brebes / Tegal / Pemalang / Pekalongan / Batang / Kendal */}
                      <path d="M100 120 L180 130 L170 200 L120 220 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" />
                      <path d="M180 130 L250 135 L240 195 L170 200 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" />
                      <path d="M250 135 L310 140 L310 190 L240 195 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" />
                      <path d="M310 140 L370 145 L380 200 L310 190 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" />
                      <path d="M370 145 L450 150 L440 210 L380 200 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" />
                      <path d="M450 150 L520 160 L500 220 L440 210 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" />

                      {/* Semarang (City & Regency) Highlighted in Orange */}
                      <path 
                        d="M520 160 L580 170 L570 230 L500 220 Z" 
                        fill="#e65f2b" 
                        stroke="#ffffff" 
                        strokeWidth="3"
                        className="cursor-pointer hover:fill-[#d6611d] transition-colors"
                        onClick={() => handleKabupatenSelect("Kota Semarang")}
                      />

                      {/* Demak / Kudus / Jepara / Pati */}
                      <path d="M580 170 L650 120 L680 150 L640 200 L570 230 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" />
                      <path d="M650 120 L720 100 L740 160 L680 150 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" />
                      <path d="M720 100 L780 110 L770 180 L740 160 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" />

                      {/* Surakarta / Sukoharjo / Wonogiri */}
                      <path d="M570 230 L640 220 L660 280 L590 290 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" />
                      <path d="M640 220 L720 210 L710 270 L660 280 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" />
                      <path d="M660 280 L710 270 L700 350 L630 340 Z" className="hover:fill-blue-200 transition-colors cursor-pointer" />
                    </g>

                    {/* Styled Text Labels */}
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
            
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <span className="text-5xl font-black text-[#001f54] tracking-tight">35</span>
              <span className="text-xs font-bold text-gray-500 mt-3 tracking-wider uppercase">
                Kabupaten/Kota
              </span>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <span className="text-5xl font-black text-[#001f54] tracking-tight">XX.XXX</span>
              <span className="text-xs font-bold text-gray-500 mt-3 tracking-wider uppercase">
                Badan Usaha
              </span>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <span className="text-5xl font-black text-[#001f54] tracking-tight">XX.XXX</span>
              <span className="text-xs font-bold text-gray-500 mt-3 tracking-wider uppercase">
                Tenaga Kerja Konstruksi
              </span>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <span className="text-5xl font-black text-[#001f54] tracking-tight">Rp XX M</span>
              <span className="text-xs font-bold text-gray-500 mt-3 tracking-wider uppercase">
                Anggaran Pembinaan
              </span>
            </div>

          </div>
        </section>

      </main>
    </Layout>
  );
}
