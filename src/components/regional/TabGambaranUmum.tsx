interface Stats {
  badanUsaha: number;
  tenagaKerja: string;
  tenagaBersertifikat: string;
  anggaran: string;
}

interface TabGambaranUmumProps {
  stats: Stats;
}

export default function TabGambaranUmum({ stats }: TabGambaranUmumProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-gray-900">Gambaran Umum</h3>
        <p className="text-sm text-gray-500 mt-1">Ringkasan data umum kabupaten/kota.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-center">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Badan Usaha</span>
          <span className="text-4xl font-extrabold text-[#001f54] mt-2">{stats.badanUsaha}</span>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-center">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Tenaga Kerja Konstruksi</span>
          <span className="text-4xl font-extrabold text-[#001f54] mt-2">{stats.tenagaKerja}</span>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-center">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Tenaga Kerja Bersertifikat</span>
          <span className="text-4xl font-extrabold text-[#001f54] mt-2">{stats.tenagaBersertifikat}</span>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-center">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Anggaran Pembinaan</span>
          <span className="text-4xl font-extrabold text-[#001f54] mt-2">{stats.anggaran}</span>
        </div>
      </div>
    </div>
  );
}
