import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
} from 'lucide-react';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const contactItems = [
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Rodovia Arthur Bernardes - 842 — Telegrafo, Belém - Pará',
    sub: 'Ver no mapa',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(91) 8253-1795',
    sub: 'Seg-Sex, 9h às 17h',
  },
  {
    icon: Mail,
    label: 'Email',
    value: '3mysiva@gmail.com',
    sub: 'Respondemos em até 24h',
  },
  {
    icon: Clock,
    label: 'Secretaria',
    value: 'Ter, Qua, Sex: 19:30–21h',
  },
];

const socials = [
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/ieqnovoscomecos/',
  },
  { icon: Facebook, label: 'Facebook', href: '#' },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof typeof formData) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mailAddress = '3mysiva@gmail.com';
    const subject = formData.subject || 'Contato pelo site';
    const body = `Nome: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const mailto = `mailto:${mailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section
      id="contato"
      className="relative bg-neutral-900 py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-radial from-red-950/20 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-gold-500/15 border border-gold-500/30 rounded-full text-gold-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Fale Conosco
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Venha nos <span className="text-gold-400">visitar</span>
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto">
            Estamos te esperando de braços abertos. Qualquer dúvida, entre em
            contato.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div
            className={`transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="p-5 rounded-2xl bg-neutral-800/60 border border-white/5 hover:border-white/10 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-red-600/20 flex items-center justify-center">
                        <Icon size={16} className="text-red-400" />
                      </div>
                      <span className="text-white/40 text-xs font-semibold uppercase tracking-wider">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-white text-sm font-semibold leading-snug">
                      {item.value}
                    </p>
                    <p className="text-white/35 text-xs mt-1">{item.sub}</p>
                  </div>
                );
              })}
            </div>

            {/* Social links */}
            <div className="p-5 rounded-2xl bg-neutral-800/60 border border-white/5">
              <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-4">
                Nos siga nas redes
              </p>
              <div className="flex gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-gold-400 hover:border-gold-500/30 hover:bg-gold-500/10 transition-all duration-200 hover:scale-110"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <form
              className="p-6 sm:p-8 rounded-2xl bg-neutral-800/60 border border-white/5"
              onSubmit={handleSubmit}
            >
              <h3 className="text-white font-bold text-xl mb-6">
                Envie uma mensagem
              </h3>

              {submitted && (
                <p className="text-emerald-400 mb-6">
                  Obrigado! Sua mensagem foi enviada.
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange('name')}
                    className="w-full bg-neutral-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition"
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange('email')}
                    className="w-full bg-neutral-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  placeholder="Como podemos ajudar?"
                  value={formData.subject}
                  onChange={handleChange('subject')}
                  className="w-full bg-neutral-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Escreva sua mensagem..."
                  value={formData.message}
                  onChange={handleChange('message')}
                  className="w-full bg-neutral-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-900/40 hover:shadow-red-700/50 hover:scale-[1.02] transition-all duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
