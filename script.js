	let rotation = 0; // Initialize rotation angle

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const button = document.querySelector('.menu-toggle');
		
  sidebar.classList.toggle('active'); // Toggle sidebar

  if (sidebar.classList.contains("active")) {
    button.style.position = "fixed";
  } else {
    // If sidebar is inactive, delay the position change to the top
    setTimeout(() => {
      button.style.position = "absolute";
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

// new

    document.addEventListener('DOMContentLoaded', function () {
        const checkboxes = document.querySelectorAll('.check-item');
        const learnMoreLink = document.querySelector('.learn-more-link'); 
		const learnMoreText = document.querySelector('.learn-more-text');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                // Check if all checkboxes are checked
                const allChecked = Array.from(checkboxes).every(cb => cb.checked);
                // Show or hide the "Learn More" link
                learnMoreLink.style.display = allChecked ? 'block' : 'none';
				learnMoreText.style.display = allChecked ? 'block' : 'none';
			});
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    const prevButton = document.querySelector('.arrow.left');
    const nextButton = document.querySelector('.arrow.right');
    let currentIndex = 0;

    function showSlide(index) {
        const slideWidth = slides.children[0].clientWidth;
        slides.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.children.length - 1;
        showSlide(currentIndex);
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex < slides.children.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });
});

