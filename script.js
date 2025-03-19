let rotation = 0; // Initialize rotation angle

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const button = document.querySelector('.menu-toggle');
		
  sidebar.classList.toggle('active'); // Toggle sidebar

  if (sidebar.classList.contains("active")) {
    button.style.position = "fixed";
    button.style.top = "20px";
    button.style.right = "35px";
  } else {
    // If sidebar is inactive, delay the position change to the top
    setTimeout(() => {
      button.style.position = "absolute";
      button.style.top = "20px";
      button.style.right = "20px";
    }, 450); // this is in ms
  }
	
  // Rotate the image
  rotateImage();

  // Animate sidebar text
  const sidebarTexts = document.querySelectorAll('.sidebar-text');
  sidebarTexts.forEach((text, index) => {
    setTimeout(() => {
      text.classList.toggle('visible');
    }, index * 100); // Staggered delay for each text item
  });
}

function rotateImage() {
  const img = document.getElementById('sidebarButton');
  rotation = (rotation + 45) % 360; // Increment rotation by 45 degrees

  if (rotation === 0) {
    // Add a class to trigger the spin reset animation
    img.classList.add('spin-reset');
    // Remove the class after the animation ends
    img.addEventListener('animationend', () => {
      img.classList.remove('spin-reset');
    }, { once: true });
  }

  img.style.transform = `rotate(${rotation}deg)`; // Apply rotation
}