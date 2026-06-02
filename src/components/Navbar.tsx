import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Cultos', href: '#cultos' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-neutral-950/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <button
          onClick={() => handleLink('#inicio')}
          className="flex items-center gap-3 group"
        >
          <div className="w-11 h-11 rounded-lg overflow-hidden ring-2 ring-gold-500/60 group-hover:ring-gold-400 transition-all duration-300">
            <img
              src="/logo.jpeg"
              alt="Igreja do Evangelho Quadrangular"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-white font-bold text-sm leading-tight">Igreja do Evangelho</p>
            <p className="text-gold-400 font-bold text-sm leading-tight">Quadrangular</p>
          </div>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleLink(link.href)}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleLink('#contato')}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-red-900/40 hover:shadow-red-700/50 hover:scale-105"
        >
          Fale Conosco
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-white rounded-lg hover:bg-white/10 transition"
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-neutral-950/98 backdrop-blur-md border-t border-white/5`}
      >
        <ul className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleLink(link.href)}
                className="w-full text-left px-4 py-3 text-white/80 hover:text-gold-400 hover:bg-white/5 rounded-lg font-medium transition"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <button
              onClick={() => handleLink('#contato')}
              className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl"
            >
              Fale Conosco
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
