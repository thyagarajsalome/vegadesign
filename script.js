document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navLinks = document.querySelector('.nav-links');

  navbarToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navLinks.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
          navLinks.classList.remove('active');
      }
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
      const isClickInsideNavbar = navbarToggle.contains(e.target) || navLinks.contains(e.target);
      if (!isClickInsideNavbar && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
      }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});