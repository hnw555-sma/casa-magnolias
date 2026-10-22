
// Grouped gallery viewer: arrows, keyboard navigation and touch swipes.
(()=>{
 const dlg=document.getElementById('lightbox'), photo=document.getElementById('lightboxImg'), caption=document.getElementById('lightboxCaption'), position=document.getElementById('lightboxPosition');
 const previous=document.getElementById('lightboxPrev'), next=document.getElementById('lightboxNext');
 let items=[],index=0,startX=null;
 const getItem=(anchor)=>({src:anchor.querySelector('img')?.getAttribute('src'),label:anchor.closest('figure')?.querySelector('figcaption')?.textContent?.trim()||anchor.querySelector('img')?.alt||'Construction photo'});
 function display(n){
   if(!items.length)return; index=(n+items.length)%items.length;
   const item=items[index];photo.src=item.src;photo.alt=item.label;caption.textContent=item.label;position.textContent=(index+1)+' of '+items.length;
   const disabled=items.length<2;previous.disabled=disabled;next.disabled=disabled;
 }
 function open(group,start){items=group;display(start);if(!dlg.open)dlg.showModal()}
 document.querySelectorAll('.construction-group').forEach(group=>{
   const anchors=[...group.querySelectorAll('.construction-card a[href]')];const groupItems=anchors.map(getItem);
   anchors.forEach((anchor,i)=>{anchor.addEventListener('click',e=>{e.preventDefault();open(groupItems,i)})});
 });
 // Renderings form a separate gallery. Override the initial click handlers from the earlier site.
 const rendered=[...document.querySelectorAll('#galleryGrid .photo-card button')].filter(b=>b.querySelector('img'));
 const renderItems=rendered.map(b=>({src:b.querySelector('img').getAttribute('src'),label:b.closest('.photo-card')?.querySelector('.photo-description strong')?.textContent||b.querySelector('img').alt}));
 rendered.forEach((b,i)=>b.onclick=()=>open(renderItems,i));
 previous.addEventListener('click',()=>display(index-1));next.addEventListener('click',()=>display(index+1));
 dlg.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();display(index-1)}else if(e.key==='ArrowRight'){e.preventDefault();display(index+1)}});
 photo.addEventListener('touchstart',e=>{startX=e.changedTouches[0].clientX},{passive:true});
 photo.addEventListener('touchend',e=>{if(startX===null)return;const dx=e.changedTouches[0].clientX-startX;if(Math.abs(dx)>45)display(index+(dx<0?1:-1));startX=null},{passive:true});
})();
