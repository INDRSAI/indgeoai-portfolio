
document.querySelector('.menu-btn')?.addEventListener('click',()=>document.querySelector('.nav-links')?.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav-links')?.classList.remove('open')));

const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}
  })
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const filterButtons=document.querySelectorAll('.filter-btn');
const projectCards=document.querySelectorAll('.project-card');
filterButtons.forEach(btn=>btn.addEventListener('click',()=>{
  filterButtons.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const f=btn.dataset.filter;
  projectCards.forEach(card=>card.classList.toggle('hidden',!(f==='all'||card.dataset.cat===f)));
}));
