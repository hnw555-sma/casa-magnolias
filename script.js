const timeline = document.getElementById('timeline');
for (const item of milestones) {
  const article=document.createElement('article'); article.className='milestone';
  const date=document.createElement('div');date.className='date';date.textContent=item.date;
  const title=document.createElement('h3');title.textContent=item.title;
  const body=document.createElement('p');body.textContent=item.description;
  article.append(date,title,body);timeline.append(article);
}
const gallery=document.getElementById('galleryGrid');
const modal=document.getElementById('lightbox');
for(const p of photos){
 const card=document.createElement('article');card.className='photo-card';
 const control=document.createElement('button');control.type='button';control.setAttribute('aria-label','View '+p.title);
 if(p.src){const img=document.createElement('img');img.src=p.src;img.alt=p.title;img.loading='lazy';control.append(img);control.onclick=()=>{document.getElementById('lightboxImg').src=p.src;document.getElementById('lightboxImg').alt=p.title;document.getElementById('lightboxCaption').textContent=p.title+' · '+p.date;modal.showModal()}}
 else {const placeholder=document.createElement('div');placeholder.className='photo-placeholder';placeholder.textContent='✺';control.disabled=true;control.append(placeholder)}
 const description=document.createElement('div');description.className='photo-description';const title=document.createElement('strong');title.textContent=p.title;const date=document.createElement('span');date.textContent=p.date;description.append(title,date);card.append(control,description);gallery.append(card);
}
document.getElementById('closeLightbox').onclick=()=>modal.close();modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});document.getElementById('year').textContent=new Date().getFullYear();


// Homepage slideshow: keyboard-accessible arrows/dots, plus touch swiping.
const slides=[...document.querySelectorAll('.hero-slide')];
const dotsContainer=document.getElementById('carouselDots');
const carouselCount=document.getElementById('carouselCount');
let slideIndex=0;
function showSlide(next){
  slideIndex=(next+slides.length)%slides.length;
  slides.forEach((slide,i)=>{
    const active=i===slideIndex;
    slide.classList.toggle('is-active',active);
    slide.setAttribute('aria-hidden',String(!active));
  });
  [...dotsContainer.children].forEach((dot,i)=>dot.setAttribute('aria-current',String(i===slideIndex)));
  carouselCount.textContent=`${slideIndex+1} / ${slides.length}`;
}
slides.forEach((slide,i)=>{
  const dot=document.createElement('button');
  dot.type='button';dot.className='carousel-dot';
  dot.setAttribute('aria-label',`View rendering ${i+1}: ${slide.querySelector('img').alt}`);
  dot.onclick=()=>showSlide(i);
  dotsContainer.append(dot);
});
document.getElementById('carouselPrev').onclick=()=>showSlide(slideIndex-1);
document.getElementById('carouselNext').onclick=()=>showSlide(slideIndex+1);
const carousel=document.querySelector('.hero-carousel');
let touchStartX=null;
carousel.addEventListener('touchstart',e=>{touchStartX=e.changedTouches[0].screenX},{passive:true});
carousel.addEventListener('touchend',e=>{
  if(touchStartX===null)return;
  const delta=e.changedTouches[0].screenX-touchStartX;
  if(Math.abs(delta)>45)showSlide(slideIndex+(delta<0?1:-1));
  touchStartX=null;
},{passive:true});
carousel.addEventListener('keydown',e=>{
  if(e.key==='ArrowLeft'){e.preventDefault();showSlide(slideIndex-1)}
  if(e.key==='ArrowRight'){e.preventDefault();showSlide(slideIndex+1)}
});
showSlide(0);
