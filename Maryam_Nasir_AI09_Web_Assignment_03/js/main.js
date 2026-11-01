(function(){
  const menuBtn=document.querySelector('[data-menu]');
  const menu=document.querySelector('[data-nav-links]');
  if(menuBtn&&menu){menuBtn.addEventListener('click',()=>menu.classList.toggle('open'));}
  const year=document.querySelector('[data-year]'); if(year) year.textContent=new Date().getFullYear();
  const user=JSON.parse(localStorage.getItem('unis_user')||'null');
  const session=JSON.parse(localStorage.getItem('unis_session')||'null');
  if(user&&session){document.querySelectorAll('[data-profile]').forEach(el=>{el.style.display='inline-flex';el.textContent='Hi, '+user.firstName+' · Logout';el.style.cursor='pointer';el.title='Click to sign out';el.addEventListener('click',()=>{localStorage.removeItem('unis_session');location.reload();});});document.querySelectorAll('[data-auth-link]').forEach(el=>el.style.display='none');}
  document.querySelectorAll('[data-logout]').forEach(btn=>btn.addEventListener('click',()=>{localStorage.removeItem('unis_session');location.href='../pages/signin.html';}));
  window.showToast=function(message){const t=document.getElementById('toast');if(!t)return;t.textContent=message;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2800)};
})();
