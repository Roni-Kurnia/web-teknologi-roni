import SideNav from '@/app/dashboard/sidenav';
import Footer from '@/app/ui/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col md:h-screen md:flex-row md:overflow-hidden bg-white text-gray-900">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex flex-1 flex-col md:overflow-y-auto">
        <div className="flex-1 p-6 md:p-12">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
