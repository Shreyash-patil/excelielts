import React, { useState, useEffect } from "react";
import lotus from "../assets/lotus.png";
import { Menu, X } from "lucide-react";


const navLinks = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#features", label: "Features", id: "features" },
  { href: "#testimonials", label: "Success Stories", id: "testimonials" },
  { href: "#contact", label: "Contact", id: "contact" },
];

// Component for aa single navigation link
const LinkItem = ({ href, label, isActive, onClick }) => {
  const baseClasses =
    "text-gray-400 hover:text-gray-300 transition-colors duration-200 block py-2 md:py-0";

  const activeGradientText =
    "bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent  hover:text-transparent";

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeGradientText : ""}`}
    >
      {label}
    </a>
  );
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Disabling background scrolling when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }
    // Cleanup function to ensure the class is removed if the component unmounts unexpectedly
    return () => {
      document.body.classList.remove("scroll-lock");
    };
  }, [isMenuOpen]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);

    const targetElement = document.getElementById(id);

    if (isMenuOpen) {
      document.body.classList.remove("scroll-lock");
    }

    if (targetElement) {
      // 2. Initiate Scroll Logic immediately after releasing the lock
      window.scrollTo({
        top: targetElement.offsetTop - 64,
        behavior: "smooth",
      });
    }

    // 3. Delay the menu closure (toggleMenu) to allow the smooth scroll animation to run.
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Logic to dynamically determine the active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const OFFSET = 70;
      let currentActiveId = "home";

      // Iteratethrough sections to find the one currently visible
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const { id } = navLinks[i];
        const el = document.getElementById(id);

        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if the section's top edge is above the offset line
          if (rect.top <= OFFSET) {
            currentActiveId = id;
            break;
          }
        }
      }
      setActiveSection(currentActiveId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active section on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo (Always links to home) */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "home")}
            className="flex items-center gap-2 cursor-pointer "
          >
            <div className="p-2 rounded-lg">
              <img src={lotus} alt="ExcelIELTS Logo" className="h-10 w-auto" />
            </div>
            <span className="text-xl font-bold ">ExcelIELTS</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <LinkItem
                key={link.id}
                href={link.href}
                label={link.label}
                isActive={link.id === activeSection}
                onClick={(e) => handleLinkClick(e, link.id)}
              />
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-400 cursor-pointer hover:text-gray-300">
              Sign In
            </button>

            {/* CTA Button using violet color */}
            <button className="text-white bg-transparent border-2 border-[#a000fd] rounded-full px-4 py-2 font-semibold hover:bg-[#a000fd] transition duration-300 ease-in-out cursor-pointer ">
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden p-2 text-white">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden h-screen overflow-y-auto py-4 border-t border-gray-700">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <LinkItem
                  key={link.id}
                  href={link.href}
                  label={link.label}
                  isActive={link.id === activeSection}
                  onClick={(e) => handleLinkClick(e, link.id)}
                />
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-700 items-center">
                <button className="text-gray-400 text-left hover:text-white py-2">
                  Sign In
                </button>
                <button className="w-full text-center text-gray-300 bg-transparent border-2 border-[#a000fd] rounded-full px-4 py-2 font-semibold hover:bg-[#a000fd] transition duration-300 ease-in-out ">
                  Start Free Trial
                </button>

               

                
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
