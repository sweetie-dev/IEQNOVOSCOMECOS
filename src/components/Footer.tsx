import { Instagram, Youtube, Facebook, ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Cultos', href: '#cultos' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
];

export default function Footer() {
  const handleLink = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-neutral-950 border-t border-white/5">
      {/* Top gold line */}
      <div className="h-0.5 bg-gradient-to-r from-red-700 via-gold-500 to-red-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden ring-2 ring-gold-500/40">
                <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Igreja do Evangelho Quadrangular</p>
                <p className="text-gold-400 font-bold text-sm">Novos Começos</p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Uma comunidade viva, cheia do Espírito Santo e apaixonada por Deus e pelas pessoas.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-gold-400 hover:border-gold-500/30 transition-all duration-200 hover:scale-110"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-4">Navegação</p>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleLink(link.href)}
                    className="text-white/50 text-sm hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Horários rápidos */}
          <div>
            <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-4">Horários</p>
            <ul className="flex flex-col gap-2.5">
              {[
                ['Domingos', '7:30 - 10h e 17h - 21:00'],
                ['Terça', '8:30 e 19:30'],
                ['Quarta', '8:30 e 19:30'],
                ['Sexta', '8:30 e 19:30'],
                ['Sábado', '19:30'],
                 ['Rodovia Arthur Bernardes - 842 - Belém - PA 📍'],
              ].map(([day, time]) => (
                <li key={day} className="flex items-center justify-between">
                  <span className="text-white/40 text-sm">{day}</span>
                  <span className="text-gold-400 text-sm font-semibold">{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Igreja do Evangelho Quadrangular Novos Começos. Todos os direitos reservados.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-gold-500/15 border border-white/10 hover:border-gold-500/30 rounded-full text-white/40 hover:text-gold-400 text-xs font-medium transition-all duration-200"
          >
            <ArrowUp size={13} />
            Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  );
}
