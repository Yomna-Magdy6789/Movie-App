document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.navbar');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('bg-dark', 'shadow-sm');
    } else {
      header.classList.remove('bg-dark', 'shadow-sm');
    }
  });
});