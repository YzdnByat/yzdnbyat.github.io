const NS = 'http://www.w3.org/2000/svg';
const cloud = document.getElementById('cloud');
if (cloud) {
const points = [];
// A deterministic, abstract 3D surface; this illustration is not experimental data.
for (let ring=0;ring<36;ring++) {
  const v=(ring+0.5)/36*Math.PI;
  const n=Math.max(12,Math.round(76*Math.sin(v)));
  for(let j=0;j<n;j++) {
    const u=j/n*Math.PI*2;
    const r=146*(1+.095*Math.sin(4*u+2*v)+.07*Math.cos(5*v));
    const x=r*Math.sin(v)*Math.cos(u), y=r*Math.cos(v), z=r*Math.sin(v)*Math.sin(u);
    const x2=x*.83+z*.55, z2=-x*.55+z*.83;
    const y2=y*.93-z2*.36, z3=y*.36+z2*.93;
    points.push({x:270+x2,y:247+y2,z:z3,r:.8+(z3+170)/340*.65});
  }
}
points.sort((a,b)=>a.z-b.z).forEach(p=>{
  const c=document.createElementNS(NS,'circle');
  c.setAttribute('cx',p.x.toFixed(2));c.setAttribute('cy',p.y.toFixed(2));c.setAttribute('r',p.r.toFixed(2));
  c.setAttribute('fill',p.z>0?'#a65136':'#b3876a');c.setAttribute('opacity',(.22+(p.z+170)/340*.7).toFixed(2));cloud.append(c);
});
}
const iris=document.getElementById('iris-lines');
if (iris) {
for(let i=0;i<110;i++){
 const a=i/110*Math.PI*2;const line=document.createElementNS(NS,'path');
 const r1=25+(i%5),r2=66+(i%7);line.setAttribute('d',`M${Math.cos(a)*r1} ${Math.sin(a)*r1}L${Math.cos(a+.05)*r2} ${Math.sin(a+.05)*r2}`);iris.append(line);
}
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const copyEmail = document.querySelector('[data-copy-email]');
if (copyEmail) {
  copyEmail.addEventListener('click', async () => {
    const address = document.getElementById('contact-email-address');
    const status = document.getElementById('copy-status');
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(address.textContent.trim());
      status.textContent = 'Email address copied.';
      copyEmail.textContent = 'Email copied';
      setTimeout(() => { copyEmail.textContent = 'Copy email address'; }, 2500);
    } catch {
      const range = document.createRange();
      range.selectNodeContents(address);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Email address selected. Copy it using your keyboard or selection menu.';
    }
  });
}

// Native disclosure menu keeps all navigation available on small screens.
(() => {
  const menu = document.querySelector('.mobile-menu');
  if (!menu) return;
  const summary = menu.querySelector('summary');
  menu.addEventListener('click', event => {
    if (!event.target.closest('a[href]') || event.defaultPrevented) return;
    // Keep the tapped link rendered through its native activation. Closing
    // <details> during click dispatch can cancel navigation in mobile Safari.
    setTimeout(() => { menu.open = false; }, 0);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      summary.focus();
    }
  });
  document.addEventListener('pointerdown', event => {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });
  // Touch browsers can report relatedTarget=null while focus moves to a link.
  // Leave focus changes alone; Escape and outside taps still dismiss the menu.
  window.addEventListener('pagehide', () => { menu.open = false; });
})();

// Pointer-reactive light and restrained tilt; clicks and navigation stay native.
(() => {
  if (typeof window.matchMedia !== 'function') return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const controls = document.querySelectorAll('.button, .header-contact, .project-code-link, .social-link');
  const resets = [];

  controls.forEach(control => {
    let frame = 0;
    let bounds;
    let point;
    const reset = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      bounds = null;
      point = null;
      ['--glass-x', '--glass-y', '--glass-rx', '--glass-ry'].forEach(name => control.style.removeProperty(name));
    };
    resets.push(reset);
    const paint = () => {
      frame = 0;
      if (!point || !bounds || reduceMotion.matches || !finePointer.matches) return;
      const x = Math.min(1, Math.max(0, (point.x - bounds.left) / bounds.width));
      const y = Math.min(1, Math.max(0, (point.y - bounds.top) / bounds.height));
      control.style.setProperty('--glass-x', `${(x * 100).toFixed(1)}%`);
      control.style.setProperty('--glass-y', `${(y * 100).toFixed(1)}%`);
      control.style.setProperty('--glass-rx', `${((.5 - y) * 3).toFixed(2)}deg`);
      control.style.setProperty('--glass-ry', `${((x - .5) * 4).toFixed(2)}deg`);
    };
    const track = event => {
      if (event.pointerType === 'touch' || reduceMotion.matches || !finePointer.matches) return;
      if (!bounds) bounds = control.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      point = {x:event.clientX, y:event.clientY};
      if (!frame) frame = requestAnimationFrame(paint);
    };
    control.addEventListener('pointerenter', track);
    control.addEventListener('pointermove', track);
    control.addEventListener('pointerleave', reset);
    control.addEventListener('pointercancel', reset);
    control.addEventListener('blur', reset);
  });
  const resetAll = () => resets.forEach(reset => reset());
  reduceMotion.addEventListener?.('change', resetAll);
  finePointer.addEventListener?.('change', resetAll);
  window.addEventListener('resize', resetAll, {passive:true});
  window.addEventListener('scroll', resetAll, {passive:true});
  window.addEventListener('pagehide', resetAll);
})();
