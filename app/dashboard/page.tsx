import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';
import {
  DocumentDuplicateIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <main className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className={`${lusitana.className} text-2xl font-bold text-gray-900 md:text-3xl`}>
          Dashboard
        </h1>
        <p className="text-sm text-gray-600">
          Selamat datang di panel dashboard Web Teknologi UIA.
        </p>
      </div>

      {/* Welcome Banner */}
      <div className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50 p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500 text-white shadow-sm">
            <CheckCircleIcon className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Sistem Aktif & Siap Digunakan
            </h2>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              Anda berhasil login ke sistem manajemen dashboard. Gunakan menu di sidebar untuk mengelola data tagihan (invoices) atau data pelanggan (customers).
            </p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Data Faktur</h3>
            <DocumentDuplicateIcon className="h-5 w-5 text-gray-400" />
          </div>
          <p className="mt-3 text-2xl font-bold text-gray-900">Invoices</p>
          <p className="mt-1 text-xs text-gray-500">
            Kelola dan pantau seluruh transaksi tagihan.
          </p>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link
              href="/dashboard/invoices"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Buka Invoices <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Data Pelanggan</h3>
            <UserGroupIcon className="h-5 w-5 text-gray-400" />
          </div>
          <p className="mt-3 text-2xl font-bold text-gray-900">Customers</p>
          <p className="mt-1 text-xs text-gray-500">
            Kelola data dan daftar pelanggan aktif.
          </p>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link
              href="/dashboard/customers"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Buka Customers <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
