import React, { useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────────────────────────────────
   Le fond du site (19/11/2026) : la nuit du film d'accueil, partout.

   Un seul fond fixe derrière toutes les pages : des plis de lumière or sur
   noir (un petit shader WebGL) et une poussière d'étincelles (canvas 2D).
   Le film d'accueil ne dessine plus son propre fond : il règle celui-ci.
   Il écrit dans `nightState`, le fond lit.
     heat : 0 = la nuit calme, 1 = le moment fort du film (650 h)
     vel  : la vitesse du défilement dans le film (traînées des étincelles)
     dir  : +1 quand les heures montent, -1 quand le compteur revient
   ───────────────────────────────────────────────────────────────────────── */

export const nightState = { heat: 0, vel: 0, dir: 1 };

const VERT = 'attribute vec2 a;void main(){gl_Position=vec4(a,0.0,1.0);}';
const FRAG = `
precision mediump float;
uniform float uTime; uniform vec2 uRes; uniform vec2 uMouse; uniform float uScroll; uniform float uHeat;
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
  // La nuit : noir chaud, plis bruns, crêtes or.
  vec3 nB = vec3(0.030,0.027,0.022); vec3 nW2 = vec3(0.062,0.048,0.022);
  vec3 nW1 = vec3(0.110,0.080,0.026); vec3 nC = vec3(0.660,0.480,0.110);
  // Le moment fort : les mêmes plis, plus chauds et plus lumineux.
  vec3 hB = vec3(0.085,0.058,0.020); vec3 hW2 = vec3(0.150,0.100,0.030);
  vec3 hW1 = vec3(0.230,0.150,0.040); vec3 hC = vec3(0.900,0.690,0.250);
  float h = uHeat;
  vec3 col = mix(nB, hB, h);
  col = mix(col, mix(nW2, hW2, h), smoothstep(-0.6, 0.2, f));
  col = mix(col, mix(nW1, hW1, h), smoothstep(0.0, 0.8, f));
  col = mix(col, mix(nC, hC, h), crest * mix(0.62, 0.86, h));
  col *= 1.0 - dot(uv,uv) * 0.24;
  gl_FragColor = vec4(col, 1.0);
}`;

function initBackground(canvas: HTMLCanvasElement) {
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
  const uTime = u('uTime'), uRes = u('uRes'), uMouse = u('uMouse'), uScroll = u('uScroll'), uHeat = u('uHeat');
  return {
    resize() {
      // Le fond est flou par nature : on le calcule à basse résolution.
      const scale = Math.min(window.devicePixelRatio || 1, 1.5) * 0.6;
      canvas.width = Math.max(2, Math.round(canvas.clientWidth * scale));
      canvas.height = Math.max(2, Math.round(canvas.clientHeight * scale));
      gl.viewport(0, 0, canvas.width, canvas.height);
    },
    draw(time: number, scroll: number, heat: number, mx: number, my: number) {
      gl.uniform1f(uTime, time);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mx, my);
      gl.uniform1f(uScroll, scroll);
      gl.uniform1f(uHeat, heat);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    },
  };
}

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
    draw(dt: number, t: number, heat: number, vel: number, dir: number) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      const speed = (1 + vel * 320) * (vel > 0.0006 ? dir : 1);
      const base = 0.5 + 0.4 * heat;
      for (const s of parts) {
        s.y -= s.vy * dt * speed;
        s.x += (s.vx + Math.sin(t * s.sw + s.ph) * 0.006 * (1 + vel * 120)) * dt;
        if (s.y < -0.04) { s.y = 1.04; s.x = Math.random(); }
        else if (s.y > 1.05) { s.y = -0.03; s.x = Math.random(); }
        if (s.x < -0.04 || s.x > 1.04) s.x = Math.random();
        const r = s.r * (1.5 + heat * 0.4);
        const x = s.x * w, y = s.y * h;
        // Une étincelle rapide laisse une traînée.
        const trail = Math.min(46, vel * 5200);
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

export const NightBackground = () => {
  const bg = useRef<HTMLCanvasElement>(null);
  const fx = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const glBg = initBackground(bg.current!);
    const sparks = reduce ? null : initSparks(fx.current!, window.innerWidth < 760 ? 30 : 70);
    let raf = 0, running = false;
    let last = performance.now();
    const t0 = last;
    let mx = 0, my = 0, tmx = 0, tmy = 0, heat = 0, width = 0;

    const resize = () => {
      // Sur téléphone la hauteur change quand la barre d'adresse se replie :
      // on ne recalcule que si la largeur change, sinon le fond saute.
      if (window.innerWidth === width) return;
      width = window.innerWidth;
      glBg?.resize();
      sparks?.resize();
      if (reduce) glBg?.draw(0, 0, 0, 0, 0);
    };
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      mx += (tmx - mx) * 0.06;
      my += (tmy - my) * 0.06;
      heat += (nightState.heat - heat) * 0.12;
      const time = (now - t0) / 1000;
      glBg?.draw(time, window.scrollY / 4200, heat, mx, -my);
      sparks?.draw(dt, time, heat, nightState.vel, nightState.dir);
    };
    const start = () => {
      if (running || reduce) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };
    const onVisible = () => (document.hidden ? stop() : start());
    const onMove = (e: PointerEvent) => {
      tmx = (e.clientX / window.innerWidth) * 2 - 1;
      tmy = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('visibilitychange', onVisible);
    resize();
    start();
    return () => {
      stop();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, []);

  return (
    <div className="night-bg" aria-hidden="true">
      <canvas ref={bg} />
      <canvas ref={fx} />
    </div>
  );
};
