document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Hitung posisi target dengan offset untuk navbar fixed
      const navbarHeight = document.querySelector('header').offsetHeight;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      // Animasi scroll
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Tambahkan class aktif sementara (opsional)
      document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    }
  });
});