import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8f9fa] pt-12 pb-6 relative font-sans text-gray-700">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Column 1: Kontak Kami */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 pb-2 relative inline-block">
              Kontak <span className="text-[#0a369d]">Kami</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#ffb703]"></span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 mb-6">
              Jl. Ace No.3, Srondol Wetan, Kec. Banyumanik, Kota Semarang, Provinsi Jawa Tengah
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#4b9cd3] flex items-center justify-center text-white text-sm shrink-0 shadow-sm">
                  📞
                </div>
                <span className="text-sm font-semibold text-gray-800">: (024) 7465766</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#25d366] flex items-center justify-center text-white text-lg shrink-0 shadow-sm">
                  💬
                </div>
                <span className="text-sm font-semibold text-gray-800">: +62 852-2508-4509</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#d93025] flex items-center justify-center text-white text-sm shrink-0 shadow-sm">
                  ✉️
                </div>
                <span className="text-sm font-semibold text-gray-800">: balaijakonjateng@gmail.com</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3 mt-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              >
                📸
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-[#ff0000] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              >
                🎥
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:opacity-90 transition-opacity font-bold"
              >
                𝕏
              </a>
            </div>
          </div>

          {/* Column 2: Zona Integritas */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 pb-2 relative inline-block">
              Zona <span className="text-[#0a369d]">Integritas</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#ffb703]"></span>
            </h3>
            
            <ul className="mt-4 divide-y divide-gray-200 text-sm">
              <li className="py-2 hover:translate-x-1 transition-transform">
                <Link href="#" className="hover:text-[#0a369d]">BerAKHLAK</Link>
              </li>
              <li className="py-2 hover:translate-x-1 transition-transform">
                <Link href="#" className="hover:text-[#0a369d]">Formulir keberatan informasi publik</Link>
              </li>
              <li className="py-2 hover:translate-x-1 transition-transform">
                <Link href="#" className="hover:text-[#0a369d]">Formulir pengaduan penyalahgunaan ASN</Link>
              </li>
              <li className="py-2 hover:translate-x-1 transition-transform">
                <Link href="#" className="hover:text-[#0a369d]">Formulir pengaduan pungli</Link>
              </li>
              <li className="py-2 hover:translate-x-1 transition-transform">
                <Link href="#" className="hover:text-[#0a369d]">Whistleblowing System</Link>
              </li>
              <li className="py-2 hover:translate-x-1 transition-transform">
                <Link href="#" className="hover:text-[#0a369d]">Formulir index kepuasan masyarakat</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Jumlah Pengunjung */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 pb-2 relative inline-block">
              Jumlah <span className="text-[#0a369d]">Pengunjung</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#ffb703]"></span>
            </h3>
            
            <div className="mt-4 divide-y divide-gray-200 text-sm">
              <div className="py-3 flex justify-between">
                <span className="text-gray-600">Hari</span>
                <span className="font-bold text-[#0a369d]">: 11280</span>
              </div>
              <div className="py-3 flex justify-between">
                <span className="text-gray-600">Bulan</span>
                <span className="font-bold text-[#0a369d]">: 351275</span>
              </div>
              <div className="py-3 flex justify-between">
                <span className="text-gray-600">Total</span>
                <span className="font-bold text-[#0a369d]">: 2897639</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Whatsapp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center group">
        <a 
          href="https://wa.me/6285225084509" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-16 h-16 bg-[#ffb703] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative border-2 border-white"
        >
          <span className="text-3xl">💬</span>
        </a>
        <span className="mt-2 bg-white text-gray-800 text-[10px] font-bold py-1 px-2 rounded-lg shadow-md border border-gray-100 uppercase tracking-wider text-center max-w-[120px] transition-all group-hover:scale-105">
          Hubungi Kami
        </span>
      </div>

      {/* Bottom Copyright Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="relative bg-[#001f54] text-white py-4 px-6 text-center text-xs md:text-sm font-semibold rounded-t-2xl shadow-lg overflow-hidden border-t-4 border-[#ffb703]">
          <p className="relative z-10 leading-relaxed">
            Copyright 2026 Balai Jasa Konstruksi Provinsi Jawa Tengah | Dinas Pekerjaan Umum dan Penataan Ruang Provinsi Jawa Tengah
          </p>
        </div>
      </div>
    </footer>
  );
}
