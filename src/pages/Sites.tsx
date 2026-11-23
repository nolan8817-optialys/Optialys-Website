import React, { useEffect, useRef } from 'react';
import { ArrowRight, Phone, MapPin, Star } from 'lucide-react';
import { FadeIn, GlowButton, EyebrowRule, IndexCard } from '../components/ui';
import { initBackground, Split, clamp, smooth } from '../components/HourFilm';
import { useLanguage } from '../i18n/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import '../components/hour-film.css';
import './sites.css';

/* ─────────────────────────────────────────────────────────────────────────
   /sites-internet (19/11/2026) : la page des sites pour les commerces.

   Au menu depuis le 23/11/2026 (avant : hors menu). Toujours non indexée.
   Le film : un téléphone posé à plat, les six blocs de la page en vue
   éclatée au-dessus de lui. Le défilement les fait descendre un par un
   dans l'écran pendant que le téléphone se redresse face au visiteur.
   Aucune image : le téléphone et ses blocs sont dessinés en CSS.
   ───────────────────────────────────────────────────────────────────────── */

const MAIL = 'mailto:nolan@optialys.com?subject=Page%20internet%20pour%20mon%20commerce';

/* Fenêtres d'apparition des cinq chapitres. */
const CHAPTERS: [number, number][] = [
  [-1, 0.08],
  [0.13, 0.36],
  [0.38, 0.6],
  [0.62, 0.84],
  [0.88, 2],
];
/* Le bloc k descend dans l'écran entre ces deux positions du défilement. */
const dockAt = (k: number): [number, number] => [0.12 + 0.12 * k, 0.22 + 0.12 * k];

const Bars = ({ n }: { n: number }) => (
  <>
    {Array.from({ length: n }, (_, i) => (
      <span className="sf-row" key={i}>
        <i style={{ width: `${58 - i * 9}%` }} />
        <u />
      </span>
    ))}
  </>
);

/* Réalisations (23/11/2026) : la vidéo du défilement de SAISI. Deux formats,
   un seul est affiché ; elle ne se charge et ne tourne qu'à l'écran. */
const WorkVideo = ({ src, poster, className, label, fallback }: {
  src: string; poster: string; className: string; label: string; fallback: string;
}) => {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current!;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && v.offsetParent !== null && !reduce) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    }, { threshold: 0.25 });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      controls
      preload="none"
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
      {fallback}
    </video>
  );
};

export const Sites = () => {
  const { t, lang } = useLanguage();
  const fr = lang === 'fr';
  const wrap = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const bg = useRef<HTMLCanvasElement>(null);
  const phone = useRef<HTMLDivElement>(null);

  useSEO({
    title: fr ? 'Sites internet pour les commerces' : 'Websites for local shops',
    description: fr
      ? 'Une page internet pour votre commerce : votre nom, vos prix, vos photos, vos avis, vos horaires. Vous la voyez finie avant de payer.'
      : 'A web page for your shop: your name, prices, photos, reviews and opening hours. You see it finished before you pay.',
    canonical: 'https://optialys.com/sites-internet',
    noindex: true,
  });

  useEffect(() => {
    const wrapEl = wrap.current!, stageEl = stage.current!, phoneEl = phone.current!;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const chapters = Array.from(stageEl.querySelectorAll('.hf-ch')) as HTMLElement[];
    const blocks = Array.from(stageEl.querySelectorAll('.sf-block')) as HTMLElement[];
    const dashes = Array.from(stageEl.querySelectorAll('.hf-dash i')) as HTMLElement[];
    const glBg = initBackground(bg.current!);
    if (!glBg) stageEl.classList.add('no-gl');

    let p = 0, target = 0, raf = 0, running = false;
    const t0 = performance.now();
    let mx = 0, my = 0, tmx = 0, tmy = 0;
    let w = 260; // largeur du téléphone : la hauteur de la vue éclatée en dépend

    const measure = () => {
      const r = wrapEl.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      target = total > 0 ? clamp(-r.top / total) : 0;
    };
    const resize = () => {
      glBg?.resize();
      w = phoneEl.offsetWidth || 260;
      measure();
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      measure();
      p += (target - p) * (reduce ? 1 : 0.1);
      if (Math.abs(target - p) < 0.0002) p = target;
      mx += (tmx - mx) * 0.06;
      my += (tmy - my) * 0.06;
      const time = reduce ? 0 : (now - t0) / 1000;

      // Le téléphone : posé à plat au départ, face au visiteur à la fin.
      const iso = 1 - smooth(0.1, 0.88, p);
      const float = reduce ? 0 : Math.sin(time * 0.8) * 6;
      phoneEl.style.transform =
        `translateY(${float.toFixed(1)}px) rotateX(${(56 * iso - my * 5 * (1 - iso)).toFixed(2)}deg) ` +
        `rotateZ(${(-32 * iso).toFixed(2)}deg) rotateY(${(mx * 9 * (1 - iso)).toFixed(2)}deg) scale(${(1 - 0.14 * iso).toFixed(3)})`;

      // Les six blocs : en vue éclatée au-dessus de l'écran, puis posés un par un.
      blocks.forEach((el, k) => {
        const [a, b] = dockAt(k);
        const q = smooth(a, b, p);
        const hover = reduce ? 0 : Math.sin(time * 1.1 + k * 0.9) * 5 * (1 - q);
        el.style.transform = `translateZ(${((1 - q) * w * (0.42 + k * 0.27) + hover).toFixed(1)}px)`;
        el.style.opacity = String(0.5 + 0.5 * q);
        el.style.setProperty('--lift', ((1 - q) * 26).toFixed(1));
        el.classList.toggle('is-docked', q > 0.98);
      });

      const inCh = (i: number) => p >= CHAPTERS[i][0] && p <= CHAPTERS[i][1];
      chapters.forEach((el, i) => el.classList.toggle('is-on', inCh(i)));
      stageEl.classList.toggle('is-started', p > 0.02);
      stageEl.classList.toggle('is-done', p > 0.86);
      dashes.forEach((el, i) => {
        el.style.transform = `scaleY(${clamp((p - i / dashes.length) * dashes.length)})`;
      });
      glBg?.draw(time, p * 0.6, 0, mx, -my);
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { threshold: 0 });
    io.observe(wrapEl);
    const onMove = (e: PointerEvent) => {
      tmx = (e.clientX / window.innerWidth) * 2 - 1;
      tmy = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });
    resize();
    p = target;
    start();
    return () => {
      stop();
      io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  const pairs = ['a', 'b', 'c'];
  const prices = [1, 2, 3].map((i) => ({ title: t(`sites.price.${i}.title`), desc: t(`sites.price.${i}.desc`) }));
  const steps = [1, 2, 3].map((i) => ({ title: t(`sites.step.${i}.title`), desc: t(`sites.step.${i}.desc`) }));

  return (
    <>
      <section ref={wrap} className="hf sf" aria-label={t('sites.aria')}>
        <div ref={stage} className="hf-stage">
          <canvas ref={bg} className="hf-bg" aria-hidden="true" />

          {/* ── Le téléphone et les six blocs de la page ── */}
          <div className="sf-scene" aria-hidden="true">
            <div ref={phone} className="sf-phone">
              <span className="sf-notch" />
              <div className="sf-screen">
                <div className="sf-block sf-b1">
                  <b>{t('sites.p.name')}</b>
                  <span>{t('sites.p.sub')}</span>
                  <em className="sf-call">
                    <Phone /> {t('sites.p.call')}
                  </em>
                </div>
                <div className="sf-block sf-b2">
                  <span className="sf-label">{t('sites.p.menu')}</span>
                  <Bars n={3} />
                </div>
                <div className="sf-block sf-b3">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="sf-block sf-b4">
                  <span className="sf-stars">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} />
                    ))}
                  </span>
                  <span className="sf-label">{t('sites.p.reviews')}</span>
                </div>
                <div className="sf-block sf-b5">
                  <div>
                    <span className="sf-label">{t('sites.p.hours')}</span>
                    <span className="sf-line" />
                    <span className="sf-label">{t('sites.p.address')}</span>
                    <span className="sf-line short" />
                  </div>
                  <span className="sf-map">
                    <MapPin />
                  </span>
                </div>
                <div className="sf-block sf-b6">{t('sites.p.legal')}</div>
              </div>
            </div>
          </div>

          {/* ── Les chapitres ── */}
          <div className="hf-ch hf-ch-hero is-on">
            <EyebrowRule className="mb-7">{t('sites.eyebrow')}</EyebrowRule>
            <h1 className="hf-title display-1 text-ink-navy" aria-label={`${t('sites.hero.l1')} ${t('sites.hero.l2')}`}>
              <Split text={t('sites.hero.l1')} />
              <Split text={t('sites.hero.l2')} from={12} accent />
            </h1>
            <p className="hf-desc lead">{t('sites.hero.body')}</p>
            <div className="hf-cta">
              <a href={MAIL}>
                <GlowButton variant="primary" className="px-7 py-3.5 text-base">
                  {t('sites.hero.cta')} <ArrowRight className="h-4 w-4" />
                </GlowButton>
              </a>
            </div>
            <p className="hf-reassure">{t('sites.hero.reassure')}</p>
          </div>

          {pairs.map((k, i) => (
            <div className="hf-ch" key={k}>
              <p className="hf-kicker">{t(`sites.${k}.kicker`)}</p>
              <h2 className="hf-title display-1" aria-label={t(`sites.${k}.title`)}>
                <Split text={t(`sites.${k}.title`)} />
              </h2>
              <ol className="hf-desc sf-list">
                <li>
                  <b>{i * 2 + 1}</b>
                  {t(`sites.${k}.1`)}
                </li>
                <li>
                  <b>{i * 2 + 2}</b>
                  {t(`sites.${k}.2`)}
                </li>
              </ol>
            </div>
          ))}

          <div className="hf-ch">
            <p className="hf-kicker">{t('sites.end.kicker')}</p>
            <h2 className="hf-title display-1" aria-label={`${t('sites.end.l1')} ${t('sites.end.l2')}`}>
              <Split text={t('sites.end.l1')} />
              <Split text={t('sites.end.l2')} from={9} accent />
            </h2>
            <p className="hf-desc lead">{t('sites.end.body')}</p>
            <div className="hf-cta">
              <a href={MAIL}>
                <GlowButton variant="primary" className="px-7 py-3.5 text-base">
                  {t('sites.hero.cta')} <ArrowRight className="h-4 w-4" />
                </GlowButton>
              </a>
            </div>
            <p className="hf-reassure">{t('sites.hero.reassure')}</p>
          </div>

          <div className="hf-dashes" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <span className="hf-dash" key={i}>
                <i />
              </span>
            ))}
          </div>
          <p className="hf-hint" aria-hidden="true">
            <span />
            {t('film.hint')}
          </p>
        </div>
      </section>

      {/* ── Réalisations ── */}
      <section className="glow-top border-y border-border-cream bg-bg-cream-alt px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <EyebrowRule className="mb-7">{t('sites.work.eyebrow')}</EyebrowRule>
          <h2 className="display-2 mb-6 max-w-3xl text-ink-navy">{t('sites.work.title')}</h2>
          <p className="lead mb-14 max-w-2xl">{t('sites.work.intro')}</p>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
            <FadeIn>
              <div className="sf-work glow-ink mx-auto max-w-[340px] overflow-hidden rounded-2xl border border-border-cream bg-ink-navy md:max-w-none">
                <WorkVideo
                  src="/portfolio/saisi-16x9.mp4"
                  poster="/portfolio/saisi-16x9-poster.jpg"
                  className="hidden aspect-video h-auto w-full md:block"
                  label={`${t('sites.work.name')} · ${t('sites.work.type')}`}
                  fallback={t('sites.work.fallback')}
                />
                <WorkVideo
                  src="/portfolio/saisi-9x16.mp4"
                  poster="/portfolio/saisi-9x16-poster.jpg"
                  className="block aspect-[9/16] h-auto w-full md:hidden"
                  label={`${t('sites.work.name')} · ${t('sites.work.type')}`}
                  fallback={t('sites.work.fallback')}
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="tag-optialys mb-3">{t('sites.work.type')}</p>
              <h3 className="mb-5 font-serif text-5xl leading-none tracking-[0.04em] text-ink-navy md:text-6xl">
                {t('sites.work.name')}
              </h3>
              <p className="lead mb-7">{t('sites.work.desc')}</p>
              <ul className="mb-8 flex flex-wrap gap-2.5">
                {[1, 2, 3].map((i) => (
                  <li
                    key={i}
                    className="rounded-full border border-border-cream bg-surface-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-gray"
                  >
                    {t(`sites.work.tag${i}`)}
                  </li>
                ))}
              </ul>
              <p className="border-l-2 border-accent-coral pl-5 text-sm leading-relaxed text-ink-gray">
                {t('sites.work.note')}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Le prix, en clair ── */}
      <section className="border-b border-border-cream bg-surface-white px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <EyebrowRule className="mb-7">{t('sites.price.eyebrow')}</EyebrowRule>
          <h2 className="display-2 mb-14 max-w-3xl text-ink-navy">{t('sites.price.title')}</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {prices.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <IndexCard index={i + 1} title={item.title}>
                  {item.desc}
                </IndexCard>
              </FadeIn>
            ))}
          </div>
          <p className="lead mt-14 max-w-3xl border-l-2 border-accent-coral pl-6">{t('sites.price.note')}</p>
        </div>
      </section>

      {/* ── Comment ça se passe ── */}
      <section className="bg-bg-cream px-6 py-24 md:py-28">
        <div className="mx-auto max-w-5xl">
          <EyebrowRule className="mb-7">{t('sites.step.eyebrow')}</EyebrowRule>
          <h2 className="display-2 mb-14 max-w-3xl text-ink-navy">{t('sites.step.title')}</h2>
          <ul>
            {steps.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.06}>
                <li className="accordion-row grid grid-cols-1 gap-3 py-8 md:grid-cols-[minmax(0,6rem)_1fr] md:gap-10">
                  <p className="tag-optialys pt-1">{String(i + 1).padStart(2, '0')}</p>
                  <div>
                    <h3 className="display-3 mb-2 text-ink-navy">{item.title}</h3>
                    <p className="leading-relaxed text-ink-gray">{item.desc}</p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* ── La suite ── */}
      <section className="hero-halo border-t border-border-cream bg-bg-cream px-6 py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display-2 mb-6 text-ink-navy">{t('sites.final.title')}</h2>
          <p className="lead mb-10">{t('sites.final.body')}</p>
          <a href={MAIL}>
            <GlowButton variant="primary" className="px-8 py-4 text-base">
              nolan@optialys.com <ArrowRight className="h-4 w-4" />
            </GlowButton>
          </a>
          <p className="mt-5 text-xs tracking-wide text-ink-gray">{t('sites.hero.reassure')}</p>
        </div>
      </section>
    </>
  );
};
