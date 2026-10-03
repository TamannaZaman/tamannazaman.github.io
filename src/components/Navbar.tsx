import { useState, useEffect } from 'react';  // 1. Scroll track korar jonno useEffect anlam
import { motion, AnimatePresence } from 'framer-motion'; // 2. Animation-er jonno
import { Menu, X, Github, Linkedin } from 'lucide-react'; // Icons

// Navigation links-er array - eikhane joto link thakbe, shegulo ekhane add koro
const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false); // Scroll track korar jonno state
  const [isOpen, setIsOpen] = useState(false); // Mobile menu khola naki bondho sheta track rakhe

  // --- Scroll Detection Logic ---
  useEffect(() => {
    const handleScroll = () => {
      // Jodi window 50px-er nichey scroll hoy, tobe true hobe, na hole false
      setIsScrolled(window.scrollY > 50); // Jodi scroll 50px er beshi hoy, tahole isScrolled true hobe
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);


  return (

    // 4. static nav-er jaygay motion.nav (Entry Animation-er jonno)
    <motion.nav
      initial={{ y: -100, opacity: 0 }} // Initial position - upore theke asbe, opacity 0
      animate={{ y: 0, opacity: 1 }} // Animate hobe normal position-e, opacity 1
      transition={{ duration: 0.5, ease: 'easeOut' }} // Transition duration and easing

      // 5. Dynamic Class: Scroll korle padding kome 'py-3' hobe, na korle 'py-5'       {/* // Navbar-er main container - fixed, full width, z-index 50, semi-transparent background with blur effect */}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'py-3 bg-slate-900/50 backdrop-blur-xl border-b border-white/7 shadow-2xl rounded-b-lg'
        : 'py-7 border-none'
        }`}
    >

      {/* // Container for logo and menu items */}
      <nav className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">  {/* // Max width, horizontal centering, responsive padding */}
        {/* // Flex container */}
        {/* <div className="flex items-center justify-between h-16">  // Flex container for logo and menu items, height 16 (64px) */}

        {/* 1. Logo Section */}
        <a className="shrink-0 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-400 to-blue-500" href="">
          Tamanna Zaman
        </a>

        {/* 2. Loop ar Mapping (Desktop Menu) (Screen-e boro holei dekha jabe - md:flex) */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name}
              href={link.href}
              className="text-gray-400 font-medium text-sm hover:text-indigo-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          {/* // Desktop menu-te space-x-8 diye link gulo modhye boro space deya hoyeche, hover effect o ache */}

          <div className="flex items-center space-x-4 ml-2 border-l border-white/10 pl-6"> {/* // Social icons-er container, border diye alada kora, space-x-4 diye icon gulo modhye space deya, ml-4 diye left margin */}
            <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-all hover:scale-110" />
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-all hover:scale-110" />
          </div>
        </div>

        {/* 3. Mobile Hamburger Button (md:hidden) */}
        {/* <div className="md:hidden flex items-center"> */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center text-gray-300 p-2 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* </div> */}

        {/* </div> */}

      </nav>

      {/* 6. AnimatePresence: Menu(Mobile) bondho hobar shomoy "Smooth Exit" animation dibe */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}  // Shuru-te invisible ar height 0
            animate={{ opacity: 1, y: 0, height: "auto" }}  // Animate hobe normal position-e, opacity 1  // Khule gele height auto
            exit={{ opacity: 0, y: -20, height: 0 }} // Bondho hobar shomoy abar upore theke fade out hobe // Bondho hobar shomoy abar height 0
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/5 overflow-hidden shadow-lg rounded-b-lg"
          >
            {/* 4. Mobile Menu Overlay */}
            <div className="mx-auto px-8 pt-2 pb-2 space-y-2">
              {navLinks.map((link) => (
                <a key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Link click korle menu bondho hoye jabe
                  className="block text-gray-400 text-sm font-medium py-2 hover:text-indigo-400 transition-colors duration-300"
                >  {/* // Mobile menu-te block display, padding, hover effect */}
                  {link.name}
                </a>
                // Mobile menu jodi open thake, tahole eikhane dekha jabe - md:hidden mane mobile screen-e dekha jabe, bg-slate-900 diye background color, border-b diye border, px-4 py-4 diye padding, space-y-2 diye link gulo modhye space deya hoyeche. */
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;