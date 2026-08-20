import { useState } from "react";

interface TabKegiatanProps {
  kabupatenName: string;
}

export default function TabKegiatan({ kabupatenName }: TabKegiatanProps) {
  const [selectedActivity, setSelectedActivity] = useState<number>(1);
  const [simulasiAdaKegiatan, setSimulasiAdaKegiatan] = useState<boolean>(true);

  // Mock list of activities
  const activities = [
    {
      id: 1,
      tag: "KEGIATAN 01",
      date: "07 Agustus 2025",
      title: "Sosialisasi Tata Cara Penerapan e-Purchasing menggunakan Platform e-Katalog versi 6.0, Market Sounding Bina Marga, dan Sosialisasi Peraturan Menteri PUPR Nomor 1 Tahun 2023",
      tempat: "Wisma Asri (Tian Catering), Jl. Ketuhu No.48, Wirasana",
      peserta: "35 Badan Usaha Jasa Konstruksi (BUJK)"
    },
    {
      id: 2,
      tag: "KEGIATAN 02",
      date: "21 April 2025",
      title: "Pelatihan Teknis dan Praktek Pembuatan Tempat Sampah Baja Ringan",
      tempat: "Aula Balai Latihan Kerja (BLK), Jl. Raya Kalibagor No. 2",
      peserta: "25 Tenaga Kerja Konstruksi Terampil"
    },
    {
      id: 3,
      tag: "KEGIATAN 03",
      date: "03 September 2025",
      title: "Sertifikasi Tenaga Kerja Konstruksi Lapangan Pelaksanaan Pekerjaan",
      tempat: "Workshop Dinas Pekerjaan Umum Kabupaten Banyumas",
      peserta: "50 Peserta Sertifikasi Mandiri"
    }
  ];

  const activeData = activities.find(act => act.id === selectedActivity) || activities[0];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-xl font-bold text-gray-900">Pembinaan Jasa Konstruksi</h3>
        
        {/* State simulator toggle */}
        <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50 self-start text-xs font-semibold">
          <button
            onClick={() => setSimulasiAdaKegiatan(false)}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              !simulasiAdaKegiatan ? "bg-[#e65f2b] text-white" : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Belum Dilaksanakan
          </button>
          <button
            onClick={() => setSimulasiAdaKegiatan(true)}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              simulasiAdaKegiatan ? "bg-[#e65f2b] text-white" : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Ada Kegiatan
          </button>
        </div>
      </div>

      {!simulasiAdaKegiatan ? (
        /* Case: Belum Dilaksanakan */
        <div className="bg-[#fffdf9] border border-orange-100 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="bg-[#d6611d] text-white px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider inline-block mb-4">
            Belum Dilaksanakan
          </div>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl">
            Dinas Pekerjaan Umum dan Penataan Ruang {kabupatenName} melalui bidang cipta karya dan bina konstruksi belum melaksanakan kegiatan pembinaan dan peningkatan kompetensi tenaga kerja konstruksi selama tahun 2025.
          </p>
        </div>
      ) : (
        /* Case: Ada Kegiatan Pembinaan */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: List of activities */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <span className="font-bold text-xs text-gray-700 uppercase tracking-wider">Daftar kegiatan</span>
              <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded font-bold text-gray-500">
                {selectedActivity} dari 3
              </span>
            </div>

            <div className="space-y-3">
              {activities.map((act) => (
                <button
                  key={act.id}
                  onClick={() => setSelectedActivity(act.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    selectedActivity === act.id
                      ? "bg-[#fff4f0]/70 border-[#e65f2b] shadow-sm"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex justify-between items-center text-[10px] font-bold">
                    <span className={selectedActivity === act.id ? "text-[#e65f2b]" : "text-gray-500"}>{act.tag}</span>
                    <span className="text-gray-400">{act.date}</span>
                  </div>
                  <h4 className="text-xs font-semibold text-gray-800 mt-2 line-clamp-2 leading-relaxed">
                    {act.title}
                  </h4>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Activity details */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-wider text-[#e65f2b] font-bold bg-[#fff4f0] px-2.5 py-0.5 rounded">
                {activeData.tag}
              </span>
              <h4 className="text-sm sm:text-base font-bold text-gray-900 leading-relaxed">
                {activeData.title}
              </h4>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-150 space-y-3 text-xs">
              <h5 className="font-bold text-gray-700 uppercase tracking-wider text-[10px]">Informasi Kegiatan</h5>
              
              <div className="space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 py-1.5 border-b border-gray-200">
                  <span className="text-gray-400 font-medium">Tanggal</span>
                  <span className="sm:col-span-2 font-semibold text-gray-800">{activeData.date}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 py-1.5 border-b border-gray-200">
                  <span className="text-gray-400 font-medium">Tempat</span>
                  <span className="sm:col-span-2 font-semibold text-gray-800">{activeData.tempat}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 py-1.5">
                  <span className="text-gray-400 font-medium">Jumlah peserta</span>
                  <span className="sm:col-span-2 font-semibold text-gray-800">{activeData.peserta}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
