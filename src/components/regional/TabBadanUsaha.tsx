interface BUComposition {
  asosiasi: number;
  bujk: number;
  menengah: number;
  spesialis: number;
}

interface TabBadanUsahaProps {
  stats: {
    badanUsaha: number;
  };
  buComposition: BUComposition;
}

export default function TabBadanUsaha({ stats, buComposition }: TabBadanUsahaProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-gray-900">Badan Usaha Jasa Konstruksi</h3>
        <p className="text-sm text-gray-500 mt-1">Struktur dan komposisi badan usaha di wilayah terpilih.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
        {/* Left Big Card */}
        <div className="lg:col-span-4 bg-[#001f54] text-white p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-md">
          <span className="text-6xl font-black text-[#ffb703]">{stats.badanUsaha}</span>
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
                <span>{buComposition.asosiasi}</span>
              </div>
              <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-full rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-semibold text-gray-600 mb-1">
                <span>BUJK Kecil</span>
                <span>{buComposition.bujk}</span>
              </div>
              <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-[#001f54] h-full rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-semibold text-gray-600 mb-1">
                <span>BUJK Menengah</span>
                <span>{buComposition.menengah}</span>
              </div>
              <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full" style={{ width: "20%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-semibold text-gray-600 mb-1">
                <span>BUJK Spesialis</span>
                <span>{buComposition.spesialis}</span>
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
          <span className="text-3xl font-extrabold text-[#001f54] block">{buComposition.asosiasi}</span>
          <span className="text-[10px] font-bold text-gray-400 uppercase mt-2 block">Asosiasi Badan Usaha</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 text-center shadow-sm">
          <span className="text-3xl font-extrabold text-[#001f54] block">{buComposition.bujk}</span>
          <span className="text-[10px] font-bold text-gray-400 uppercase mt-2 block">BUJK Aktif</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 text-center shadow-sm">
          <span className="text-3xl font-extrabold text-[#001f54] block">{buComposition.menengah}</span>
          <span className="text-[10px] font-bold text-gray-400 uppercase mt-2 block">BUJK Menengah</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 text-center shadow-sm">
          <span className="text-3xl font-extrabold text-[#001f54] block">{buComposition.spesialis}</span>
          <span className="text-[10px] font-bold text-gray-400 uppercase mt-2 block">BUJK Spesialis</span>
        </div>
      </div>
    </div>
  );
}
