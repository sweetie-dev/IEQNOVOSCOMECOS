import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Play } from 'lucide-react';

const slides = [
  {
    image: '/BANNER02.png',
    tag: 'Bem-vindos',
    title: 'Uma família que\ntransforma vidas',
    subtitle: 'Venha fazer parte de uma comunidade viva, cheia do Espírito Santo e apaixonada por Deus.',
  },
  {
    image: '/informativo-mes-do-avivamento.jpeg',
    tag: 'Seja Bem-vindo',
    title: 'Mês do\nAvivamento',
    subtitle: 'Experimente a presença de Deus de forma poderosa. Cada culto é uma oportunidade de avivamento.',
  },
  {
    image: '/FREQUENCIA.png',
    tag: 'Evento em destaque',
    title: 'ACAMPAMENTO',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
  };

  useEffect(() => {
    resetInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const goTo = (i: number) => {
    setCurrent(i);
    resetInterval();
  };

  const scrollDown = () => {
    document.querySelector('#cultos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Tag */}
          <div
            key={`tag-${current}`}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold-500/20 border border-gold-500/40 rounded-full mb-6 animate-fade-up"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse-slow" />
            <span className="text-gold-300 text-sm font-semibold tracking-wider uppercase">
              {slides[current].tag}
            </span>
          </div>

          {/* Title */}
          <h1
            key={`title-${current}`}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 animate-fade-up whitespace-pre-line"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            {slides[current].title}
          </h1>

          {/* Subtitle */}
          <p
            key={`sub-${current}`}
            className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl animate-fade-up"
            style={{ animationDelay: '0.35s', opacity: 0 }}
          >
            {slides[current].subtitle}
          </p>

          {/* CTAs */}
          <div
            key={`cta-${current}`}
            className="flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.45s', opacity: 0 }}
          >
            <button
              onClick={() => document.querySelector('#cultos')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold rounded-full shadow-xl shadow-red-900/50 hover:shadow-red-700/60 hover:scale-105 transition-all duration-300"
            >
              Ver Programação
            </button>
            <button
              onClick={() => document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold rounded-full transition-all duration-300 hover:scale-105"
            >
              <Play size={16} className="fill-gold-400 text-gold-400" />
              <span>Conheça a Igreja</span>
            </button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-8 h-2 bg-gold-400'
                : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll down cue */}
      <button
        onClick={scrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 hover:text-white/70 transition group"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
        <ChevronDown size={20} className="animate-scroll" />
      </button>

      {/* Side gold accent line */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-gold-500 to-transparent rounded-full opacity-60" />
    </section>
  );
}
