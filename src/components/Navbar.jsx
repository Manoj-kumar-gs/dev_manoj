// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import { ModeToggle } from "@/components/toggle-mode";
// import { Button } from "@/components/ui/button";
// import { useActiveSection } from "./check-active-section";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const navItems = [
//     { label: "About", href: "#about" },
//     { label: "Skills", href: "#skills" },
//     { label: "Projects", href: "#projects" },
//     { label: "Services", href: "#services" },
//     { label: "Contact", href: "#contact" },
//   ];

//   const activeSection = useActiveSection(navItems.map(i => i.href));

//   if (!mounted) return null; // Prevent hydration mismatch with dark mode

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0f172a] shadow dark:shadow-slate-800 transition-colors box-border">
//       <div className="max-w-7xl py-3 flex justify-around items-center gap-4 ">
//         {/* Logo */}
//         <Link
//           href="/"
//           className="text-xl font-bold text-blue-600 dark:text-cyan-400"
//         >
//           Manoj.dev
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center justify-center gap-6 w-[40%]">
//           {navItems.map((item) => (
//             <a
//               key={item.label}
//               href={item.href}
//               className={`px-2 py-1 font-semibold transition-colors duration-150 inline-block relative
//     ${activeSection === item.href
//                   ? "text-blue-600 dark:text-cyan-400 underline-rounded"
//                   : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400"}`
//               }
//             >
//               {item.label}
//             </a>

//           ))}
//           <div className="w-[30%] flex justify-end items-center">
//           <ModeToggle />
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center space-x-4">
//           <ModeToggle />
//           <Button
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle Menu"
//             variant="ghost"
//             size="icon"
//             className="p-2"
//           >
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </Button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div className="md:hidden px-4 pb-4 space-y-4">
//           {navItems.map((item) => (
//             <a
//               key={item.label}
//               href={item.href}
//               className={`px-2 py-1 font-semibold transition-colors duration-150 inline-block relative
//     ${activeSection === item.href
//                   ? "text-blue-600 dark:text-cyan-400 underline-rounded"
//                   : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400"}`
//               }
//             >
//               {item.label}
//             </a>


//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }



'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/toggle-mode";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "./check-active-section";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const activeSection = useActiveSection(navItems.map(i => i.href));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0f172a] shadow dark:shadow-slate-800 transition-colors box-border flex flex-col justify-center items-center">
      <div className="w-full sm:w-[90%] px-4 py-3 flex justify-between items-center gap-4 ">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-blue-600 dark:text-cyan-400"
        >
          Manoj.dev
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`px-2 py-1 font-semibold transition-colors duration-150 inline-block relative
                ${activeSection === item.href
                  ? "text-blue-600 dark:text-cyan-400 underline-rounded"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400"}`
              }
            >
              {item.label}
            </a>
          ))}
            <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ModeToggle />
          <Button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            variant="ghost"
            size="icon"
            className="p-2"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center justify-center px-4 pb-4 space-y-4 w-fit">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`px-2 py-1 font-semibold transition-colors duration-150 inline-block relative
                ${activeSection === item.href
                  ? "text-blue-600 dark:text-cyan-400 underline-rounded"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400"}`
              }
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
