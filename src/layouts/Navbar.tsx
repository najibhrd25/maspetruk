import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white flex flex-col">
      {/* Header Banner - Full Width */}
      <div className="w-full border-b border-gray-100">
        <img
          src="/Heading.png"
          alt="MASPETRUK Header"
          className="w-full h-auto object-contain max-h-[140px]"
        />
      </div>

      {/* Navigation Bar */}
      <div className="w-full px-4 sm:px-6 lg:px-8 bg-white -mt-1">
        <div className="max-w-7xl mx-auto">
          <nav className="bg-[#001f54] text-white rounded-b-2xl shadow-lg border-b-4 border-[#ffb703] relative overflow-hidden">
            {/* Inner Yellow Accent lines on sides */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#ffb703]"></div>
            <div className="absolute right-0 top-0 bottom-0 w-2 bg-[#ffb703]"></div>
            
            <div className="flex flex-wrap justify-center items-center py-4 px-6 md:px-12 gap-x-6 md:gap-x-10 gap-y-2 text-xs md:text-sm font-semibold tracking-wider">
              <Link href="/" className="hover:text-[#ffb703] transition-colors uppercase">
                Beranda
              </Link>
              <Link href="#" className="hover:text-[#ffb703] transition-colors uppercase">
                Berita
              </Link>
              <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#ffb703] transition-colors uppercase">
                <span>Harga Satuan</span>
                <span className="text-[10px]">▼</span>
              </div>
              <Link href="#" className="hover:text-[#ffb703] transition-colors uppercase">
                Peraturan
              </Link>
              <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#ffb703] transition-colors uppercase">
                <span>Informasi Jakon</span>
                <span className="text-[10px]">▼</span>
              </div>
              <Link href="#" className="hover:text-[#ffb703] transition-colors uppercase">
                Perpustakaan
              </Link>
              <Link href="#" className="hover:text-[#ffb703] transition-colors uppercase">
                FAQ
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
