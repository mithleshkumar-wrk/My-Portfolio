const menuHandler = document.getElementById('nav-menu');

function navHandler(){
    menuHandler.classList.toggle("hidden");
}

function menuOption(){
    menuHandler.classList.toggle("hidden");
}


function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.nav-link');
  
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
  
    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }
  
  // Add event listeners
  window.addEventListener('scroll', updateActiveLink);
  window.addEventListener('load', updateActiveLink);
  
  