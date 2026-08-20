interface TabUnitPembinaanProps {
  kabupatenName: string;
}

export default function TabUnitPembinaan({ kabupatenName }: TabUnitPembinaanProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Card: Dinas Pekerjaan Umum */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Dinas Pekerjaan Umum</h3>
          <div className="space-y-3">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block">Bidang / Subdit (Eselon III)</span>
              <span className="text-sm font-semibold text-gray-800">Bidang Perencanaan Teknis dan Bina Jasa Konstruksi</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block">Sub-bidang / Seksi (Eselon IV)</span>
              <span className="text-sm font-semibold text-gray-800">Seksi Pembinaan Jasa Konstruksi</span>
            </div>
          </div>
        </div>

        {/* Right Card: Kontak */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Kontak</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block">Alamat</span>
              <span className="font-semibold text-gray-700 block mt-1">Jl. Jend. Gatot Subroto III - 5 Purwokerto</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block">Telepon</span>
              <span className="font-semibold text-gray-700 block mt-1">(0281) 637038</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block">Email</span>
              <a href="mailto:dpu@banyumaskab.go.id" className="font-semibold text-blue-600 block mt-1 hover:underline">
                dpu@banyumaskab.go.id
              </a>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block">Website</span>
              <a href="http://dpu.banyumaskab.go.id/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 block mt-1 hover:underline">
                dpu.banyumaskab.go.id
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <a
              href="http://dpu.banyumaskab.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d6611d] hover:bg-[#b54f15] text-white font-bold py-2.5 px-5 rounded-lg shadow-sm text-xs transition duration-200"
            >
              Buka Website →
            </a>
            <button className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-bold py-2.5 px-5 rounded-lg text-xs transition duration-200">
              Lihat Lokasi →
            </button>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Bottom: Tugas dan Fungsi */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-3">
          <h4 className="font-bold text-gray-900 text-sm">Tugas dan Fungsi Jasa Konstruksi</h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            Melakukan penyusunan bahan rumusan kebijakan teknis, pelaksanaan, evaluasi, pelaporan, serta pemantauan pelaksanaan kegiatan pembinaan jasa konstruksi dalam penyelenggaraan kewenangan pemerintahan terkait.
          </p>
        </div>

        {/* Right Bottom: Dasar Struktur Organisasi */}
        <div className="lg:col-span-5 bg-[#fffdf9] p-6 rounded-2xl border border-orange-100 shadow-sm space-y-2">
          <h4 className="font-bold text-gray-900 text-sm">Dasar Struktur Organisasi</h4>
          <p className="text-sm font-bold text-[#001f54]">Peraturan Bupati Banyumas Nomor 75 Tahun 2020</p>
          <p className="text-[11px] text-gray-500">
            Dokumen menjadi dasar struktur organisasi unit pembinaan.
          </p>
        </div>
      </div>
    </div>
  );
}
