// Footer year auto-update
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for nav links
document.querySelectorAll('header nav a').forEach(link=>{
  link.addEventListener('click', e=>{
    const target = link.getAttribute('href');
    if(target.startsWith('#')){
      e.preventDefault();
      document.querySelector(target)?.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
