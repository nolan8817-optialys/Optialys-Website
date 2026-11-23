import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GlowButton, EyebrowRule } from './ui';
import { useLanguage } from '../i18n/LanguageContext';
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

/* ── Le fond : des plis de lumière très lents, crème le jour, or sur noir la nuit ── */
const VERT = 'attribute vec2 a;void main(){gl_Position=vec4(a,0.0,1.0);}';
const FRAG = `
precision mediump float;
uniform float uTime; uniform vec2 uRes; uniform vec2 uMouse; uniform float uScroll; uniform float uNight;
void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5*uRes) / uRes.y;
  float aspect = uRes.x / uRes.y;
  float time = uTime * 0.08;
  float sd = uScroll * 5.0;
  vec2 w = uv;
  w.x += sin(uv.y*2.5 + time*0.2 + sd) * 0.35;
  w.y += cos(uv.x*2.5 - time*0.15 - sd*0.8) * 0.35;
  w.x += sin(uv.y*1.2 - time*0.1 - sd*1.5) * 0.25;
  w.y += cos(uv.x*1.2 + time*0.18 + sd*1.2) * 0.25;
  w += vec2(uScroll*0.04, -uScroll*0.02) + vec2(uMouse.x*aspect*0.05, uMouse.y*0.05);
  vec2 d1 = vec2(cos(0.6), sin(0.6));
  vec2 d2 = vec2(cos(-0.7), sin(-0.7));
  vec2 d3 = vec2(cos(1.2), sin(1.2));
  float w1 = sin(dot(w,d1)*2.4 + time);
  float w2 = cos(dot(w,d2)*3.2 - time*1.4 + w1*0.4);
  float w3 = sin(dot(w,d3)*4.0 + time*1.8 + w2*0.5);
  float f = w1*0.50 + w2*0.35 + w3*0.15;
  float wide = pow(max(0.0, 1.0 - abs(f - 0.1)), 2.5);
  float crisp = pow(max(0.0, 1.0 - abs(f - 0.15)), 8.0);
  float crest = wide*0.5 + crisp*0.9;
  vec3 dB = vec3(0.980,0.973,0.953); vec3 dW2 = vec3(0.964,0.948,0.910);
  vec3 dW1 = vec3(0.949,0.929,0.880); vec3 dC = vec3(0.925,0.860,0.660);
  vec3 nB = vec3(0.030,0.027,0.022); vec3 nW2 = vec3(0.062,0.048,0.022);
  vec3 nW1 = vec3(0.110,0.080,0.026); vec3 nC = vec3(0.660,0.480,0.110);
  float n = uNight;
  // Le passage du jour à la nuit se fait par un crépuscule ambré, pas par du gris.
  float n1 = smoothstep(0.0, 0.6, n); float n2 = smoothstep(0.3, 1.0, n);
  vec3 kB = vec3(0.560,0.400,0.150); vec3 kW2 = vec3(0.500,0.345,0.110);
  vec3 kW1 = vec3(0.440,0.290,0.075); vec3 kC = vec3(0.900,0.690,0.250);
  vec3 col = mix(mix(dB, kB, n1), nB, n2);
  col = mix(col, mix(mix(dW2, kW2, n1), nW2, n2), smoothstep(-0.6, 0.2, f));
  col = mix(col, mix(mix(dW1, kW1, n1), nW1, n2), smoothstep(0.0, 0.8, f));
  col = mix(col, mix(mix(dC, kC, n1), nC, n2), crest * mix(0.40, 0.62, n));
  col *= 1.0 - dot(uv,uv) * mix(0.03, 0.24, n);
  gl_FragColor = vec4(col, 1.0);
}`;

export function initBackground(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
  if (!gl) return null;
  const compile = (type: number, src: string) => {
    const s = gl.createShader(type)!;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  };
  const prog = gl.createProgram()!;
  gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
  gl.useProgram(prog);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'a');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const u = (name: string) => gl.getUniformLocation(prog, name);
  const uTime = u('uTime'), uRes = u('uRes'), uMouse = u('uMouse'), uScroll = u('uScroll'), uNight = u('uNight');
  return {
    resize() {
      // Le fond est flou par nature : on le calcule à basse résolution.
      const scale = Math.min(window.devicePixelRatio || 1, 1.5) * 0.6;
      canvas.width = Math.max(2, Math.round(canvas.clientWidth * scale));
      canvas.height = Math.max(2, Math.round(canvas.clientHeight * scale));
      gl.viewport(0, 0, canvas.width, canvas.height);
    },
    draw(time: number, p: number, n: number, mx: number, my: number) {
      gl.uniform1f(uTime, time);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mx, my);
      gl.uniform1f(uScroll, p);
      gl.uniform1f(uNight, n);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    },
  };
}

/* ── Les étincelles : de la poussière d'or le jour, des étincelles d'atelier la nuit ── */
function initSparks(canvas: HTMLCanvasElement, count: number) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  let w = 0, h = 0, dpr = 1;
  const parts = Array.from({ length: count }, () => ({
    x: Math.random(),
    y: Math.random(),
    vy: 0.015 + Math.random() * 0.045,
    vx: (Math.random() - 0.5) * 0.012,
    r: 0.6 + Math.random() * 1.5,
    ph: Math.random() * Math.PI * 2,
    sw: 0.5 + Math.random() * 1.5,
    a: 0.35 + Math.random() * 0.65,
  }));
  return {
    resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    },
    /* dir = +1 quand les heures montent, -1 quand le compteur revient en arrière. */
    draw(dt: number, t: number, n: number, vel: number, dir: number) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = n > 0.5 ? 'lighter' : 'source-over';
      const speed = (1 + vel * 320) * (vel > 0.0006 ? dir : 1);
      const base = 0.16 + 0.74 * n;
      for (const s of parts) {
        s.y -= s.vy * dt * speed;
        s.x += (s.vx + Math.sin(t * s.sw + s.ph) * 0.006 * (1 + vel * 120)) * dt;
        if (s.y < -0.04) { s.y = 1.04; s.x = Math.random(); }
        else if (s.y > 1.05) { s.y = -0.03; s.x = Math.random(); }
        if (s.x < -0.04 || s.x > 1.04) s.x = Math.random();
        const r = s.r * (1 + n * 0.9);
        const x = s.x * w, y = s.y * h;
        // La nuit, une étincelle rapide laisse une traînée.
        const trail = Math.min(46, vel * 5200) * n;
        if (trail > 3) {
          const g2 = ctx.createLinearGradient(x, y, x, y + trail * (speed > 0 ? 1 : -1));
          g2.addColorStop(0, `rgba(240,196,84,${base * s.a * 0.7})`);
          g2.addColorStop(1, 'rgba(212,160,23,0)');
          ctx.strokeStyle = g2;
          ctx.lineWidth = r * 0.9;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + trail * (speed > 0 ? 1 : -1));
          ctx.stroke();
        }
        const g = ctx.createRadialGradient(x, y, 0, x, y, r * 3);
        g.addColorStop(0, `rgba(240,196,84,${base * s.a})`);
        g.addColorStop(0.4, `rgba(212,160,23,${base * s.a * 0.45})`);
        g.addColorStop(1, 'rgba(212,160,23,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, r * 3, 0, Math.PI * 2);
        ctx.fill();
      }
    },
  };
}

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
  const bg = useRef<HTMLCanvasElement>(null);
  const sparks = useRef<HTMLCanvasElement>(null);
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
    const glBg = initBackground(bg.current!);
    const fx = reduce ? null : initSparks(sparks.current!, window.innerWidth < 760 ? 34 : 80);
    if (!glBg) stageEl.classList.add('no-gl');
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
      glBg?.resize();
      fx?.resize();
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
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
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
      stageEl.style.setProperty('--n', n.toFixed(3));

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
      document.documentElement.classList.toggle('hf-night', n > 0.5 && p < 0.999);
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

      glBg?.draw(time, p, n, mx, -my);
      fx?.draw(dt, time, n, vel, dir);
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
      document.documentElement.classList.remove('hf-night');
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  const tick = (hours: number) => ({ left: `${(hours / TOTAL) * 100}%` });
  const ghostText = `${t('film.ghost')} `.repeat(4);

  return (
    <section ref={wrap} className="hf" aria-label={t('film.aria')}>
      <div ref={stage} className="hf-stage">
        <canvas ref={bg} className="hf-bg" aria-hidden="true" />
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
        <canvas ref={sparks} className="hf-sparks" aria-hidden="true" />

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
