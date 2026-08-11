
const hamburger=document.getElementById('hamburger'),sidebar=document.getElementById('sidebar'),scrim=document.getElementById('scrim');
function closeSidebar(){sidebar?.classList.remove('open');scrim?.classList.remove('open')}
hamburger?.addEventListener('click',()=>{sidebar?.classList.toggle('open');scrim?.classList.toggle('open')});scrim?.addEventListener('click',closeSidebar);
document.querySelectorAll('.layer-item').forEach(a=>a.addEventListener('click',closeSidebar));
const coord=document.getElementById('coordReadout');if(coord)document.addEventListener('mousemove',e=>{const x=((e.clientX/innerWidth)*360-180).toFixed(4),y=(90-(e.clientY/innerHeight)*180).toFixed(4);coord.textContent=`${y}°, ${x}°`});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
const sio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,t=parseFloat(el.dataset.count),s=el.dataset.suffix||'',d=(el.dataset.count||'').includes('.'),st=performance.now();function tick(n){const p=Math.min((n-st)/900,1),v=t*(1-Math.pow(1-p,3));el.textContent=(d?v.toFixed(1):Math.round(v))+s;if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick);sio.unobserve(el)}),{threshold:.35});document.querySelectorAll('.stat-num').forEach(e=>sio.observe(e));
const bs=document.querySelectorAll('.filter-btn'),cs=document.querySelectorAll('.project-card');bs.forEach(b=>b.addEventListener('click',()=>{bs.forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;cs.forEach(c=>c.classList.toggle('hidden',!(f==='all'||c.dataset.cat===f)))}));
