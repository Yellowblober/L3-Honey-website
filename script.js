// Get elements
const menuButton = document.getElementById('menu-button');
const navbar = document.getElementById('navbar');

// Toggle navbar on button click
menuButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
});