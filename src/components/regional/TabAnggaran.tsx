interface TabAnggaranProps {
  stats: {
    anggaran: string;
  };
  kabupatenName: string;
}

export default function TabAnggaran({ stats, kabupatenName }: TabAnggaranProps) {
  return (
    <div className="space-y-6">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
        {/* Left Side: Growth / Allocations Chart Illustration - Stretched to match right side */}
        <div className="lg:col-span-5 bg-orange-50/50 p-6 rounded-2xl border border-orange-100 flex flex-col justify-between min-h-[280px]">
          
          <h4 className="font-bold text-gray-800 text-xs text-center mb-2">Grafik Alokasi Dana Pembinaan 2025</h4>
          
          {/* Custom Tailwind Chart representation */}
          <div className="w-full flex-1 flex flex-col justify-center space-y-4">
            <div className="flex items-end justify-center gap-4 h-32 border-b border-gray-200 pb-2">
              <div className="flex flex-col items-center">
                <div className="w-8 bg-[#001f54]/20 h-10 rounded-t-sm relative group hover:bg-[#001f54]/30 transition-colors">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-gray-500">20%</span>
                </div>
                <span className="text-[9px] font-bold text-gray-500 mt-2">Adm</span>
              </div>

              {/* Orange bar representing the requested specific allocation */}
              <div className="flex flex-col items-center">
                <div className="w-8 bg-[#e65f2b] h-24 rounded-t-sm relative group hover:bg-[#b54f15] transition-all shadow-md">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-[#e65f2b]">55%</span>
                  <div className="absolute hidden group-hover:block bottom-full mb-1 bg-gray-900 text-white text-[9px] p-1.5 rounded whitespace-nowrap z-10">
                    Alokasi Utama: Pelatihan & Sertifikasi
                  </div>
                </div>
                <span className="text-[9px] font-bold text-[#e65f2b] mt-2">Pelatihan</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-8 bg-[#ffb703] h-14 rounded-t-sm relative group hover:bg-[#d69600] transition-colors">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-[#d69600]">25%</span>
                </div>
                <span className="text-[9px] font-bold text-gray-500 mt-2">Pengawasan</span>
              </div>
            </div>

            <div className="flex justify-center items-center gap-3 text-[10px] text-gray-500">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#e65f2b] rounded-full inline-block"></span>
                <span>Pelatihan Kompetensi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#ffb703] rounded-full inline-block"></span>
                <span>Pengawasan Proyek</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Text & Detailed Allocation */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#e65f2b] font-bold bg-[#fff4f0] px-2.5 py-0.5 rounded">
              Anggaran Pendapatan & Belanja Daerah
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Alokasi Dana Pembinaan Jasa Konstruksi Tahun 2025 sebesar
            </h3>
            <p className="text-3xl sm:text-4xl font-black text-[#e65f2b]">Rp. 75.000.000,-</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl border border-gray-150 space-y-3 flex-1 flex flex-col justify-center">
            <h4 className="font-bold text-xs text-gray-700 uppercase tracking-wider">Detail Distribusi Alokasi</h4>
            
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                <span className="text-gray-600 font-medium">🟠 Pelatihan & Sertifikasi Tenaga Kerja Terampil</span>
                <span className="font-bold text-[#e65f2b]">Rp 41.250.000,- (55%)</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                <span className="text-gray-600 font-medium">🟡 Pengawasan Tertib Fisik & Administrasi Proyek</span>
                <span className="font-bold text-gray-800">Rp 18.750.000,- (25%)</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-gray-600 font-medium">🔵 Administrasi Rutin & Dukungan Operasional</span>
                <span className="font-bold text-gray-800">Rp 15.000.000,- (20%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
