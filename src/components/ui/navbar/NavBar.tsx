import { FaBars, FaX } from "react-icons/fa6";
import { useState } from "react";
import { Logo } from "../logo/Logo";
import { GroupNavLinks } from "./GroupNavLinks";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="mb-4 border-b border-b-[#1E293B] px-2 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 px-2">
          <Logo />
          <div className="font-sans text-2xl font-bold">
            <h1>CodePointer</h1>
          </div>
        </div>

        <div className="block px-4 sm:hidden">
          <button
            className="cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <FaX size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        <div className="hidden space-x-4 sm:block">
          <GroupNavLinks />
        </div>
      </div>

      {isOpen && (
        <div className="mt-8 overflow-hidden sm:hidden">
          <div className="flex flex-col gap-3">
            <GroupNavLinks onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};
