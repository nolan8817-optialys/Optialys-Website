import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GlowButton, EyebrowRule } from './ui';
import { useLanguage } from '../i18n/LanguageContext';
import { nightState } from './NightBackground';
import './hour-film.css';

/* ─────────────────────────────────────────────────────────────────────────
   Le film d'accueil (refonte du 19/11/2026).

   Un seul objet : le compteur d'heures d'un chantier. Le défilement fait
   tourner ses tambours de 0 à 650 h. À 400 h, le devis s'arrête ; au-delà,
   la scène passe à la nuit (les heures que personne ne voit). Puis le
   compteur revient à 200 h et la lumière avec lui : c'est là que je regarde.

   Quatre plans, du fond vers l'avant : les plis de lumière (shader WebGL),
   les grands mots en filigrane, le compteur, puis les fiches d'heures qui
   montent devant lui. Aucune image, aucune bibliothèque 3D.

   Chaque tambour est une bande de treize chiffres qui glisse derrière sa
   fenêtre : une seule couche à dessiner, donc aucun chiffre manquant quand
   il tourne vite. Le dégradé de la fenêtre lui donne son volume.
   ───────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/nolprayagsing/automation-strategy-audit';

const QUOTE = 400; // les heures du devis
const TOTAL = 650; // les heures réellement passées
const SEEN = 200; // l'heure où l'écart se voit

/* Progression du défilement (0 → 1) → heures affichées. Les paliers sont les
   moments où le compteur s'arrête pour laisser lire un chapitre. */
const KEYS: [number, number][] = [
  [0, 0],
  [0.06, 0],
  [0.26, SEEN],
  [0.34, SEEN],
  [0.5, QUOTE],
  [0.56, QUOTE],
  [0.72, TOTAL],
  [0.82, TOTAL],
  [0.92, SEEN],
  [1, SEEN],
];

/* Fenêtres d'apparition des cinq chapitres. */
const CHAPTERS: [number, number][] = [
  [-1, 0.075],
  [0.235, 0.36],
  [0.485, 0.575],
  [0.7, 0.835],
  [0.905, 2],
];

/* Les fiches d'heures : chacune passe quand le compteur atteint `at`. Aucune
   n'est à l'écran aux paliers (0, 200, 400, 650 h), où le texte se lit.
   Les montants sont un exemple, comme les 400 et 650 heures. */
const TICKETS = [
  { k: 1, at: 60, x: 51, d: 0.9, r: -5, amt: 12 },
  { k: 2, at: 100, x: 91, d: 1.25, r: 4, amt: 16 },
  { k: 3, at: 140, x: 53, d: 1.08, r: 3, amt: 8 },
  { k: 4, at: 255, x: 90, d: 0.92, r: -4, amt: 14 },
  { k: 5, at: 300, x: 50, d: 1.3, r: 6, amt: 9 },
  { k: 6, at: 345, x: 92, d: 1.0, r: -3, amt: 18 },
  { k: 7, at: 455, x: 52, d: 1.2, r: -6, amt: 22 },
  { k: 8, at: 500, x: 91, d: 0.92, r: 5, amt: 11 },
  { k: 9, at: 545, x: 50, d: 1.0, r: 4, amt: 17 },
  { k: 10, at: 590, x: 89, d: 1.32, r: -4, amt: 13 },
];
const TICKET_SPAN = 40; // une fiche est visible de at - 40 h à at + 40 h

export const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
export const smooth = (a: number, b: number, v: number) => {
  const t = clamp((v - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const easeOut = (x: number) => 1 - Math.pow(1 - x, 4);

function hoursAt(p: number) {
  for (let i = 0; i < KEYS.length - 1; i++) {
    const [p0, h0] = KEYS[i];
    const [p1, h1] = KEYS[i + 1];
    if (p <= p1) return h0 + (h1 - h0) * smooth(p0, p1, p);
  }
  return SEEN;
}
const nightAt = (p: number) => smooth(0.55, 0.69, p) * (1 - smooth(0.835, 0.915, p));

/* Un titre découpé lettre par lettre : chaque lettre monte et se met au net. */
export const Split = ({ text, from = 0, accent = false }: { text: string; from?: number; accent?: boolean }) => {
  let i = from;
  return (
    <span className={`hf-line ${accent ? 'display-accent' : ''}`} aria-hidden="true">
      {text.split(' ').map((word, wi) => (
        <span className="hf-word" key={wi}>
          {Array.from(word).map((ch, ci) => (
            <span className="hf-char" key={ci} style={{ transitionDelay: `${(i++ * 0.028).toFixed(3)}s` }}>
              {ch}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
};

const Drum = React.forwardRef<HTMLDivElement>((_, ref) => (
  /* hf-slot coupe le flou de vitesse au bord de la fenêtre du tambour. */
  <div className="hf-slot">
    <div className="hf-win">
      <div className="hf-drum" ref={ref}>
        {/* Treize chiffres : un 9 au-dessus du 0, puis 0 à 9, puis 0 et 1. La fenêtre
            a ainsi toujours un voisin en haut et en bas, et le 9 passe au 0 sans saut. */}
        {[9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1].map((d, i) => (
          <span className="hf-face" key={i}>
            {d}
          </span>
        ))}
      </div>
    </div>
  </div>
));
Drum.displayName = 'Drum';

export const HourFilm = () => {
  const { t } = useLanguage();
  const wrap = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const tilt = useRef<HTMLDivElement>(null);
  const pulse = useRef<HTMLSpanElement>(null);
  const d100 = useRef<HTMLDivElement>(null);
  const d10 = useRef<HTMLDivElement>(null);
  const d1 = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLSpanElement>(null);
  const over = useRef<HTMLSpanElement>(null);
  const overTag = useRef<HTMLSpanElement>(null);
  const overNum = useRef<HTMLSpanElement>(null);
  const live = useRef<HTMLSpanElement>(null);
  const ghost = useRef<HTMLSpanElement>(null);
  const curDot = useRef<HTMLSpanElement>(null);
  const curRing = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrapEl = wrap.current!, stageEl = stage.current!;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const chapters = Array.from(stageEl.querySelectorAll('.hf-ch')) as HTMLElement[];
    const dashes = Array.from(stageEl.querySelectorAll('.hf-dash i')) as HTMLElement[];
    const dots = Array.from(stageEl.querySelectorAll('.hf-dot')) as HTMLElement[];
    const tickets = Array.from(stageEl.querySelectorAll('.hf-ticket')) as HTMLElement[];
    const blurs = Array.from(stageEl.querySelectorAll('.hf-defs feGaussianBlur')) as SVGElement[];
    const drums = [d100.current!, d10.current!, d1.current!];
    if (reduce) stageEl.classList.add('is-calm');

    let p = 0, target = 0, raf = 0, running = false;
    let last = performance.now();
    const t0 = last;
    let mx = 0, my = 0, tmx = 0, tmy = 0;
    let cx = -100, cy = -100, rx = -100, ry = -100;
    let shownHours = -1, prevH = 0, blurScale = 1, small = false;
    const prevDeg = [0, 0, 0];

    const measure = () => {
      const r = wrapEl.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      target = total > 0 ? clamp(-r.top / total) : 0;
    };
    const resize = () => {
      blurScale = d1.current!.offsetHeight / 13 / 150; // la bande fait treize chiffres de haut
      small = window.innerWidth <= 900;
      measure();
    };
    const fire = () => {
      const el = pulse.current;
      if (!el || reduce) return;
      el.classList.remove('go');
      void el.offsetWidth; // relance l'animation
      el.classList.add('go');
    };

    /* Un tambour : son angle, et un flou vertical proportionnel à sa vitesse. */
    const setDrum = (i: number, value: number) => {
      const v = ((value % 10) + 10) % 10;
      drums[i].style.setProperty('--v', v.toFixed(4));
      let step = Math.abs(v - prevDeg[i]);
      if (step > 5) step = 10 - step; // le passage du 9 au 0
      const speed = step * 36;
      prevDeg[i] = v;
      const std = reduce || speed < 1.5 ? 0 : Math.min(20, speed * 0.42) * blurScale;
      const win = drums[i].parentElement as HTMLElement;
      if (std > 0.6) {
        blurs[i].setAttribute('stdDeviation', `0 ${std.toFixed(1)}`);
        win.style.filter = `url(#hf-vb-${i})`;
      } else if (win.style.filter) {
        win.style.filter = '';
      }
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      measure();
      const prev = p;
      p += (target - p) * (reduce ? 1 : 0.1);
      if (Math.abs(target - p) < 0.0002) p = target;
      const vel = Math.abs(p - prev);
      mx += (tmx - mx) * 0.06;
      my += (tmy - my) * 0.06;

      const h = hoursAt(p);
      const n = nightAt(p);
      const time = reduce ? 0 : (now - t0) / 1000;
      stageEl.style.setProperty('--h', n.toFixed(3));

      // Les tambours tournent comme ceux d'un vrai compteur : les unités en
      // continu, les dizaines et les centaines au passage du 9. À l'arrivée
      // sur la page, ils font quelques tours avant de se caler sur 000.
      const intro = reduce ? 0 : 1 - easeOut(clamp((now - t0) / 1900));
      const u = h % 10;
      const tens = (Math.floor(h / 10) % 10) + Math.max(0, u - 9);
      const hund = Math.floor(h / 100) + Math.max(0, (h % 100) - 99);
      setDrum(0, hund + intro * 10);
      setDrum(1, tens + intro * 20);
      setDrum(2, u + intro * 30);

      // La jauge : en encre jusqu'au devis, en or au-delà.
      fill.current!.style.width = `${(Math.min(h, QUOTE) / TOTAL) * 100}%`;
      over.current!.style.width = `${(Math.max(0, h - QUOTE) / TOTAL) * 100}%`;
      const extra = Math.round(h - QUOTE);
      overTag.current!.style.opacity = String(clamp((h - QUOTE) / 12));
      if (extra > 0) overNum.current!.textContent = String(extra);

      const rounded = Math.round(h);
      if (rounded !== shownHours && vel < 0.0004) {
        shownHours = rounded;
        live.current!.textContent = String(rounded);
      }

      // Une onde part du compteur aux trois moments du film.
      if ((prevH < QUOTE && h >= QUOTE) || (prevH < TOTAL - 0.5 && h >= TOTAL - 0.5)) fire();
      if (prevH > SEEN + 0.5 && h <= SEEN + 0.5 && p > 0.8) fire();
      const dir = h >= prevH ? 1 : -1;
      prevH = h;

      // Les fiches d'heures montent devant le compteur, puis repartent en
      // arrière quand il revient à la 200ᵉ heure.
      tickets.forEach((el, i) => {
        const tk = TICKETS[i];
        const q = (h - (tk.at - TICKET_SPAN)) / (TICKET_SPAN * 2);
        if (q <= 0 || q >= 1 || reduce) {
          if (el.style.opacity !== '0') el.style.opacity = '0';
          return;
        }
        const scale = tk.d * (small ? 0.72 : 1);
        const float = Math.sin(time * 0.9 + i * 1.7) * 6;
        el.style.opacity = String(smooth(0, 0.14, q) * (1 - smooth(0.86, 1, q)));
        el.style.top = `${(108 - q * 128).toFixed(2)}%`;
        el.style.transform = `translate(-50%, -50%) translateY(${float.toFixed(1)}px) rotate(${(tk.r + (q - 0.5) * 9).toFixed(2)}deg) scale(${scale})`;
      });

      // Les grands mots en filigrane glissent à l'horizontale.
      if (ghost.current) ghost.current.style.transform = `translate3d(${(-p * 52).toFixed(3)}%, 0, 0)`;

      const inCh = (i: number) => p >= CHAPTERS[i][0] && p <= CHAPTERS[i][1];
      chapters.forEach((el, i) => el.classList.toggle('is-on', inCh(i)));
      stageEl.classList.toggle('is-reading', CHAPTERS.some((_, i) => inCh(i)));
      stageEl.classList.toggle('is-seen', Math.abs(h - SEEN) < 0.8 && (inCh(1) || inCh(4)));
      stageEl.classList.toggle('is-quote', h >= QUOTE - 0.5);
      stageEl.classList.toggle('is-started', p > 0.02);
      dashes.forEach((el, i) => {
        el.style.transform = `scaleY(${clamp((p - i / dashes.length) * dashes.length)})`;
      });
      dots.forEach((el, i) => {
        const start = ((i * 17) % 80) + 10;
        let speed = 90 + ((i * 55) % 180);
        if (i % 2 === 0) speed = -speed;
        el.style.top = `${(((start + p * speed) % 100) + 100) % 100}%`;
      });
      if (!reduce && tilt.current) {
        tilt.current.style.transform = `perspective(1100px) rotateY(${(mx * 8).toFixed(2)}deg) rotateX(${(-my * 6).toFixed(2)}deg)`;
      }
      // Le curseur : un point exact, un anneau qui le rattrape.
      rx += (cx - rx) * 0.2;
      ry += (cy - ry) * 0.2;
      curDot.current!.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      curRing.current!.style.transform = `translate3d(${rx.toFixed(1)}px, ${ry.toFixed(1)}px, 0)`;

      // Le fond du site suit le film : plus chaud à 650 h, des traînées quand on défile vite.
      nightState.heat = n;
      nightState.vel = vel;
      nightState.dir = dir;
    };

    const start = () => {
      if (running) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
      // Hors du film, le fond du site redevient calme (plus de trainees).
      nightState.vel = 0;
      nightState.heat = 0;
    };
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { threshold: 0 });
    io.observe(wrapEl);
    const onMove = (e: PointerEvent) => {
      tmx = (e.clientX / window.innerWidth) * 2 - 1;
      tmy = (e.clientY / window.innerHeight) * 2 - 1;
      if (e.pointerType !== 'mouse' || reduce) return;
      const r = stageEl.getBoundingClientRect();
      const inside = e.clientY >= r.top && e.clientY <= r.bottom;
      cx = e.clientX - r.left;
      cy = e.clientY - r.top;
      if (rx < -50) { rx = cx; ry = cy; }
      stageEl.classList.toggle('has-cur', inside);
      const link = !!(e.target as Element | null)?.closest?.('a, button');
      curRing.current!.classList.toggle('is-link', link);
    };
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });
    resize();
    p = target; // pas de course du compteur au rechargement en milieu de page
    prevH = hoursAt(p);
    start();
    return () => {
      stop();
      io.disconnect();
      nightState.heat = 0;
      nightState.vel = 0;
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  const tick = (hours: number) => ({ left: `${(hours / TOTAL) * 100}%` });
  const ghostText = `${t('film.ghost')} `.repeat(4);

  return (
    <section ref={wrap} className="hf" aria-label={t('film.aria')}>
      <div ref={stage} className="hf-stage">
        <div className="hf-grid" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <span className="hf-gridline" key={i}>
              <i className="hf-dot" />
              <i className="hf-dot" />
            </span>
          ))}
        </div>
        <div className="hf-ghost" aria-hidden="true">
          <span ref={ghost}>{ghostText}</span>
        </div>

        {/* Le flou de vitesse des tambours : un filtre par tambour. */}
        <svg className="hf-defs" width="0" height="0" aria-hidden="true">
          <defs>
            {[0, 1, 2].map((i) => (
              <filter id={`hf-vb-${i}`} key={i} x="-10%" y="-40%" width="120%" height="180%">
                <feGaussianBlur stdDeviation="0 0" />
              </filter>
            ))}
          </defs>
        </svg>

        {/* ── Le compteur ── */}
        <div className="hf-meter" aria-hidden="true">
          <div className="hf-meter-head">
            <span>{t('film.meter.label')}</span>
            <span ref={overTag} className="hf-over-tag">
              + <span ref={overNum}>0</span> h {t('film.meter.over')}
            </span>
          </div>
          <div ref={tilt} className="hf-tilt">
            <span ref={pulse} className="hf-pulse" />
            <div className="hf-housing">
              <Drum ref={d100} />
              <Drum ref={d10} />
              <Drum ref={d1} />
              <span className="hf-unit">h</span>
            </div>
          </div>
          <div className="hf-gauge">
            <span className="hf-track" />
            <span ref={fill} className="hf-fill" />
            <span ref={over} className="hf-fill-over" style={tick(QUOTE)} />
            <span className="hf-tick t-seen" style={tick(SEEN)}>
              <b>{t('film.gauge.seen')}</b>
            </span>
            <span className="hf-tick t-quote" style={tick(QUOTE)}>
              <b>{t('film.gauge.quote')}</b>
            </span>
            <span className="hf-eye" style={tick(SEEN)} />
          </div>
        </div>
        <span className="sr-only" aria-live="polite">
          <span ref={live}>0</span> {t('film.meter.sr')}
        </span>

        {/* ── Les fiches d'heures, au premier plan ── */}
        <div className="hf-tickets" aria-hidden="true">
          {TICKETS.map((tk) => (
            <div
              key={tk.k}
              className={`hf-ticket ${tk.at > QUOTE ? 'is-over' : ''} ${tk.d > 1.15 ? 'is-near' : ''}`}
              style={{ ['--x' as string]: `${tk.x}%`, ['--xm' as string]: tk.x < 70 ? '21%' : '80%' } as React.CSSProperties}
            >
              <span>{t(`film.t.${tk.k}`)}</span>
              <b>+ {tk.amt} h</b>
              {tk.at > QUOTE && <i>{t('film.meter.over')}</i>}
            </div>
          ))}
        </div>

        {/* ── Les cinq chapitres ── */}
        <div className="hf-ch hf-ch-hero is-on">
          <EyebrowRule className="mb-7">{t('home.hero.eyebrow')}</EyebrowRule>
          <h1 className="hf-title display-1 text-ink-navy" aria-label={`${t('home.hero.title.line1')} ${t('home.hero.title.line2')}`}>
            <Split text={t('home.hero.title.line1')} />
            <Split text={t('home.hero.title.line2')} from={12} accent />
          </h1>
          <p className="hf-desc lead">
            {t('home.hero.body')}{' '}
            <span className="highlight-coral font-semibold">{t('home.hero.body.highlight')}</span>
          </p>
          <div className="hf-cta">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
              <GlowButton variant="primary" className="px-7 py-3.5 text-base">
                {t('home.hero.cta.primary')} <ArrowRight className="h-4 w-4" />
              </GlowButton>
            </a>
            <Link to="/methode">
              <GlowButton variant="outline" className="px-7 py-3.5 text-base">
                {t('home.hero.cta.secondary')}
              </GlowButton>
            </Link>
          </div>
          <p className="hf-reassure">{t('home.hero.cta.reassure')}</p>
        </div>

        {[2, 3, 4].map((k) => (
          <div className="hf-ch" key={k}>
            <p className="hf-kicker">{t(`film.${k}.kicker`)}</p>
            <h2 className="hf-title display-1" aria-label={t(`film.${k}.title`)}>
              <Split text={t(`film.${k}.title`)} />
            </h2>
            <p className="hf-desc lead">{t(`film.${k}.body`)}</p>
          </div>
        ))}

        <div className="hf-ch">
          <p className="hf-kicker">{t('film.5.kicker')}</p>
          <h2 className="hf-title display-1" aria-label={`${t('film.5.title.line1')} ${t('film.5.title.line2')}`}>
            <Split text={t('film.5.title.line1')} />
            <Split text={t('film.5.title.line2')} from={10} accent />
          </h2>
          <p className="hf-desc lead">{t('film.5.body')}</p>
          <div className="hf-cta">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
              <GlowButton variant="primary" className="px-7 py-3.5 text-base">
                {t('home.hero.cta.primary')} <ArrowRight className="h-4 w-4" />
              </GlowButton>
            </a>
          </div>
          <p className="hf-reassure">{t('home.hero.cta.reassure')}</p>
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
        <span ref={curDot} className="hf-cur-dot" aria-hidden="true" />
        <span ref={curRing} className="hf-cur-ring" aria-hidden="true" />
      </div>
    </section>
  );
};
