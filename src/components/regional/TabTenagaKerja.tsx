interface TabTenagaKerjaProps {
  stats: {
    tenagaKerja: string;
    tenagaBersertifikat: string;
  };
  kabupatenName: string;
}

export default function TabTenagaKerja({ stats, kabupatenName }: TabTenagaKerjaProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-gray-900">Tenaga Kerja Konstruksi</h3>
        <p className="text-sm text-gray-500 mt-1">Data statistik pembinaan tenaga kerja konstruksi di {kabupatenName}.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Total Tenaga Kerja</span>
            <span className="text-4xl font-extrabold text-[#001f54] block mt-1">{stats.tenagaKerja}</span>
            <span className="text-[10px] text-gray-400 mt-2 block">Terdaftar di dinas & asosiasi</span>
          </div>
          <span className="text-4xl">👷‍♂️</span>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Tenaga Kerja Bersertifikat</span>
            <span className="text-4xl font-extrabold text-[#001f54] block mt-1">{stats.tenagaBersertifikat}</span>
            <span className="text-[10px] text-gray-400 mt-2 block">Memiliki SKA/SKT / Sertifikat Kompetensi Kerja</span>
          </div>
          <span className="text-4xl">📜</span>
        </div>
      </div>

      {/* Additional useful details */}
      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150 space-y-4">
        <h4 className="font-bold text-gray-800 text-sm">Klasifikasi Kompetensi</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <span className="font-bold text-gray-700 block">Ahli Utama / Madya</span>
            <span className="text-xl font-bold text-[#001f54] block mt-1">128 Orang</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <span className="font-bold text-gray-700 block">Ahli Muda / Pratama</span>
            <span className="text-xl font-bold text-[#001f54] block mt-1">456 Orang</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <span className="font-bold text-gray-700 block">Teknisi / Terampil</span>
            <span className="text-xl font-bold text-[#001f54] block mt-1">1.802 Orang</span>
          </div>
        </div>
      </div>
    </div>
  );
}
