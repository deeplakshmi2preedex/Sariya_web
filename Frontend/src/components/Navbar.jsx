import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServices] = useState(false);

  return (
    <header className="w-full overflow-visible bg-transparent">
      <nav className="px-6 min-[1025px]:px-14">
        <div className="flex items-center justify-between border-b border-black py-5">
          <div className="shrink-0 text-[32px] font-normal tracking-tight text-[#1f1f1f] max-[400px]:text-[20px] max-[768px]:text-[24px]">
            <Link to="/">sariya</Link>
          </div>

          {/* Desktop */}
          
          <div className="hidden items-center gap-10 min-[1025px]:flex">
            <Link to="/" className="text-[22px] font-medium text-black transition-colors hover:text-yellow-500 hover:underline ">Home</Link>

            <Link to="/" className="text-[22px] font-medium text-black transition-colors hover:text-yellow-500 hover:underline ">About</Link>
          </div> 

          {/* Services */}
          <div className="relative">
            <button>
              type
            </button>
          </div>

          <Link to="/" className="text-[22px] font-medium text-black transition-colors hover:text-yellow-500 hover:underline ">Faq</Link>

          <Link to="/" className="text-[22px] font-medium text-black transition-colors hover:text-yellow-500 hover:underline ">Contact</Link>
          
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
