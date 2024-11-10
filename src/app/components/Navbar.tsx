import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-black w-full text-sm">       

        {/* Main Navbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="relative mb-4 sm:mb-0">
            <Image
              src="/images/Samsung_Logo.svg.png"
              alt="Logo"
              width={900}
              height={900}
              className="h-12 w-[180px]"
            />
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center gap-4 text-white text-xs sm:text-sm sm:gap-8">
            <li><Link href="">New Mobiles</Link></li>
            <li><Link href="">Displays</Link></li>
            <li><Link href="">Mobiles</Link></li>
            <li><Link href="">Accessories</Link></li>
            <li><Link href="">Smart Things</Link></li>
            <li><Link href="">Forums</Link></li>
            <li><Link href="">Blog</Link></li>
            <li><Link href="">More</Link></li>
          </ul>

          {/* Post Ad Button */}
          <div className="mt-4 sm:mt-0">
            <button className="bg-blue-700 hover:bg-red-900 text-white font-bold text-base py-2 px-6 rounded">
              place your order
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
