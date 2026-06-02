import { useEffect, useRef, useState } from 'react';
import { Cross, Wind, Heart, Crown } from 'lucide-react';

const pillars = [
  {
    icon: Cross,
    title: 'Salvador',
    description:
      'Jesus Cristo é o único Salvador do mundo. Cremos na salvação pela graça mediante a fé.',
    color: 'text-red-400',
    bg: 'bg-red-600/10 border-red-600/20',
  },
  {
    icon: Wind,
    title: 'Batizador',
    description:
      'Jesus batiza no Espírito Santo com a evidência do falar em outras línguas.',
    color: 'text-gold-400',
    bg: 'bg-gold-500/10 border-gold-500/20',
  },
  {
    icon: Heart,
    title: 'Curador',
    description:
      'Pela fé e pela oração, Jesus cura as enfermidades e restaura vidas quebrantadas.',
    color: 'text-red-300',
    bg: 'bg-red-500/10 border-red-500/20',
  },
  {
    icon: Crown,
    title: 'Rei que vem',
    description:
      'Jesus Cristo voltará em glória para buscar a Sua Igreja e estabelecer Seu reino eterno.',
    color: 'text-gold-300',
    bg: 'bg-gold-600/10 border-gold-600/20',
  },
];

const stats = [
  { value: '49', label: 'Anos de história' },
  { value: '4', label: 'Cultos semanais' },
  { value: '1', label: 'Família de Deus' },
  { value: '❤️', label: 'Amor ao Próximo' },
];

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

export default function About() {
  const { ref, inView } = useInView();
  const { ref: statsRef, inView: statsInView } = useInView();

  return (
    <section
      id="sobre"
      className="relative bg-neutral-950 py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Glow */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row: text + logo image */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
        >
          {/* Text */}
          <div
            className={`transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="inline-block px-4 py-1.5 bg-red-600/20 border border-red-600/40 rounded-full text-red-400 text-sm font-semibold tracking-wider uppercase mb-4">
              Quem Somos
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Igreja do Evangelho
              <br />
              <span className="text-gold-400">Quadrangular Telegrafo 1</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Somos uma igreja pentecostal que acredita no pleno evangelho de
              Jesus Cristo: Salvador, Batizador no Espírito Santo, Curador e Rei
              que voltará.
            </p>
            <p className="text-white/50 leading-relaxed mb-8">
              Fundada sobre os quatro pilares do Evangelho, nossa missão é
              alcançar pessoas para Cristo, discipulá-las e enviá-las a
              transformar o mundo. Somos uma família que cresce junta, adora com
              fervor e serve com amor.
            </p>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-4 rounded-xl bg-white/3 border border-white/5 transition-all duration-500 ${
                    statsInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <p className="text-3xl font-black text-gold-400">
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-sm mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Logo visual */}
          <div
            className={`flex items-center justify-center transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-red-700/20 via-gold-600/10 to-transparent rounded-full blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden ring-2 ring-white/10 shadow-2xl shadow-black/60 max-w-sm mx-auto">
                <img
                  src="/BANNER.png"
                  alt="Logo Igreja do Evangelho Quadrangular"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Four pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`p-6 rounded-2xl border ${
                  pillar.bg
                } backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 group ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${pillar.bg} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} className={pillar.color} />
                </div>
                <h3 className="text-white font-black text-lg mb-2">
                  {pillar.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
