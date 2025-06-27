import Link from "next/link";
import { FiSearch } from "react-icons/fi";

export default function Header({ search, setSearch }: { search: string; setSearch: (v: string) => void }) {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center px-6 py-4 gap-4 sm:gap-0">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-blue-600">🛒 Productify</span>
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          </div>
        </div>
        <div className="space-x-6 text-lg flex justify-end items-center mt-2 sm:mt-0">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </div>
      </nav>
    </header>
  );
} 