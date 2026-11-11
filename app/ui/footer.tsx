export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-gray-200 bg-white py-6">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm text-gray-600">
          Web ini dikerjakan oleh{' '}
          <span className="font-semibold text-gray-900">
            Dafa Ardianto
          </span>{' '}
          | 3420230004 | Teknik Informatika - TFUIA
        </p>

        <p className="mt-2 text-xs text-gray-500">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
