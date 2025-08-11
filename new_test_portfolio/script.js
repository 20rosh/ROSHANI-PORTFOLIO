// Script for Hamburger Menu Toggle

// Toggle function to handle opening and closing of the mobile menu
function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  
  // Toggle the 'open' class to show/hide the menu
  menuLinks.classList.toggle('open');
  
  // Toggle the 'open' class for the hamburger icon to change its appearance
  hamburgerIcon.classList.toggle('open');
}
