'use strict';
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
function closeMenu(){ nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','開啟導覽選單'); }
menuButton.addEventListener('click',()=>{const open = nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'關閉導覽選單':'開啟導覽選單');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menuButton.focus();}});
window.matchMedia('(min-width: 761px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
function filterCatalog(category){
  document.querySelectorAll('.filter').forEach(button=>{const active=button.dataset.filter===category;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
  let count=0;
  document.querySelectorAll('.product').forEach(product=>{product.hidden=category!=='all'&&product.dataset.category!==category;if(!product.hidden)count++;});
  document.querySelector('#filter-status').textContent=`顯示 ${count} 個${category==='health'?'保健與醫材':category==='nature'?'爬蟲與自然':''}項目`;
}
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>filterCatalog(button.dataset.filter)));
document.querySelectorAll('[data-jump-filter]').forEach(link=>link.addEventListener('click',()=>filterCatalog(link.dataset.jumpFilter)));
const luluButton=document.querySelector('#lulu-button');
luluButton.addEventListener('click',()=>{const message=document.querySelector('#lulu-message');message.hidden=!message.hidden;luluButton.setAttribute('aria-expanded',String(!message.hidden));});
document.querySelector('#year').textContent=new Date().getFullYear();
