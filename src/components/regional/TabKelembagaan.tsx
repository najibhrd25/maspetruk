interface TabKelembagaanProps {
  kabupatenName: string;
}

export default function TabKelembagaan({ kabupatenName }: TabKelembagaanProps) {
  return (
    <div className="space-y-6">
      
      {/* Policy Card 1 */}
      <div className="bg-[#fffdf9] p-5 rounded-2xl border border-orange-100 flex items-start gap-4 shadow-sm">
        <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 text-xl">
          🏛️
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800 leading-relaxed">
            Pengdelegasian kewenangan jasa konstruksi berada di bawah Dinas Pekerjaan Umum dan Penataan Ruang berdasarkan Peraturan Bupati Kabupaten Banyumas Nomor 33 Tahun 2024
          </p>
        </div>
      </div>

      {/* Policy Card 2 */}
      <div className="bg-orange-50/30 p-5 rounded-2xl border border-orange-100/60 flex items-start gap-4 shadow-sm">
        <div className="w-10 h-10 rounded-xl bg-orange-100/80 flex items-center justify-center text-orange-600 shrink-0 text-xl">
          👤
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800 leading-relaxed">
            Pelaksana teknis sub-urusan Jasa Konstruksi adalah Pejabat Fungsional Pembina Jasa Konstruksi
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-left text-xs sm:text-sm">
            <thead className="bg-[#001f54]/5 text-[#001f54] font-bold">
              <tr>
                <th className="py-3 px-6 w-16">No</th>
                <th className="py-3 px-6">Kualifikasi</th>
                <th className="py-3 px-6">Nama Pejabat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700 font-medium">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-3.5 px-6">1</td>
                <td className="py-3.5 px-6">Ahli Pertama</td>
                <td className="py-3.5 px-6 text-gray-900 font-bold">• Teguh Hariyanto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
