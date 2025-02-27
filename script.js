document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Close mobile menu if open
      if (mobileMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
      }
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 64, // Account for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Active link highlighting based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = {
    desktop: document.querySelectorAll('.navbar-link'),
    mobile: document.querySelectorAll('.mobile-menu-link')
  };
  
  function setActiveLink() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        // Set active state for desktop links
        navLinks.desktop.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
        
        // Set active state for mobile links
        navLinks.mobile.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', setActiveLink);
  setActiveLink(); // Set initial active link
  
  // Form submission handling
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const formValues = Object.fromEntries(formData.entries());
      
      // Here you would typically send the form data to a server
      // For this example, we'll just log it and show a success message
      console.log('Form submitted with values:', formValues);
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset form
      contactForm.reset();
    });
  }
});