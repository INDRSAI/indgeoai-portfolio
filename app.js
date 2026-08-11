// ---------------- mobile sidebar toggle ----------------
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const scrim = document.getElementById('scrim');
function closeSidebar(){ sidebar?.classList.remove('open'); scrim?.classList.remove('open'); }
hamburger?.addEventListener('click', ()=>{
  sidebar.classList.toggle('open');
  scrim.classList.toggle('open');
});
scrim?.addEventListener('click', closeSidebar);
document.querySelectorAll('.layer-item').forEach(el=>el.addEventListener('click', closeSidebar));

// ---------------- live coordinate readout ----------------
// Decorative: maps cursor position to a plausible lat/long-style readout,
// in keeping with a GIS application's status bar.
const coordEl = document.getElementById('coordReadout');
if(coordEl){
  document.addEventListener('mousemove', (e)=>{
    const lat = (90 - (e.clientY / window.innerHeight) * 180).toFixed(4);
    const lng = ((e.clientX / window.innerWidth) * 360 - 180).toFixed(4);
    coordEl.textContent = `${lat}°, ${lng}°`;
  });
}

// ---------------- scroll reveal ----------------
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
}, {threshold:0.1});
revealEls.forEach(el=>io.observe(el));

// ---------------- animated stat counters ----------------
const statNums = document.querySelectorAll('.stat-num');
const statIO = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    const el = e.target;
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const isDecimal = el.dataset.count.includes('.');
    const duration = 1000;
    const start = performance.now();
    function tick(now){
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      el.textContent = (isDecimal ? val.toFixed(1) : Math.round(val)) + suffix;
      if(p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    statIO.unobserve(el);
  });
}, {threshold:0.4});
statNums.forEach(el=>statIO.observe(el));

// ---------------- project category filter ----------------
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    filterBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card=>{
      const match = filter === 'all' || card.dataset.cat === filter;
      card.classList.toggle('hidden', !match);
    });
  });
});
