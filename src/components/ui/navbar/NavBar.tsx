import { FaBars, FaX } from "react-icons/fa6";
import { Button } from "../button/Button";
import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="mb-4 border-b border-b-[#1E293B] px-2 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 px-2">
          <div className="rounded-lg bg-[#6366F1] px-2 py-1">
            <span className="font-mono text-lg font-extrabold">&gt;_</span>
          </div>

          <div className="font-sans text-2xl font-bold">
            <h1>CodePointer</h1>
          </div>
        </div>

        <div className="block sm:hidden">
          <button
            className="cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <FaX size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        <div className="hidden space-x-4 sm:block">
          <Button style="secondary">
            <a className="text-sm font-semibold">Entrar</a>
          </Button>
          <Button>
            <a className="text-sm font-semibold">Criar conta</a>
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-8 overflow-hidden sm:hidden">
          <div className="flex flex-col gap-3">
            <Button style="secondary">
              <a
                className="text-sm font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Entrar
              </a>
            </Button>

            <Button>
              <a
                className="text-sm font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Criar conta
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
