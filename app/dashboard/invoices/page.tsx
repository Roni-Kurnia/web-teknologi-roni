import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className={`${lusitana.className} text-2xl font-bold text-gray-900 md:text-3xl`}>
          Invoices
        </h1>
        <p className="text-sm text-gray-600">
          Kelola riwayat faktur, tagihan, dan status pembayaran.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-600">
          Belum ada data faktur yang ditampilkan. Modul ini siap untuk integrasi data selanjutnya.
        </p>
      </div>
    </main>
  );
}
