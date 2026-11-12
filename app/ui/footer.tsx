export default function Footer() {
  return (
    <footer className="mt-auto w-full pt-10">
      <hr className="mx-auto max-w-5xl border-t border-gray-900" />
      <div className="mx-auto flex max-w-5xl flex-col gap-3 rounded-lg bg-gray-50 px-6 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
        <dl className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <div className="flex items-center gap-2">
            <dt className="text-xs uppercase tracking-wide text-gray-500">
              Nama
            </dt>
            <dd className="font-medium text-gray-900">[Roni Kurnia]</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="text-xs uppercase tracking-wide text-gray-500">
              NIM
            </dt>
            <dd className="font-medium text-gray-900">[3420230002]</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="text-xs uppercase tracking-wide text-gray-500">
              Jurusan
            </dt>
            <dd className="font-medium text-gray-900">[Informatika]</dd>
          </div>
        </dl>

        <p className="text-xs text-gray-500">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
