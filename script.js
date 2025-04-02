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

// Show overlay
function showOverlay() {
  const overlay = document.getElementById('inspect-overlay');
  overlay.classList.add('show');
}

// Hide overlay
function hideOverlay() {
  const overlay = document.getElementById('inspect-overlay');
  overlay.classList.remove('show');
}

// Example usage in your existing code:
document.addEventListener("DOMContentLoaded", function () {
  const tooltip = document.getElementById('tooltip');
  const images = document.querySelectorAll('.inspect-img');
  const overlay = document.getElementById('inspect-overlay');
  const overlayImg = document.getElementById('overlay-img');
  const overlayTitle = document.getElementById('overlay-title');
  const overlayDesc = document.getElementById('overlay-desc');
  const closeBtn = document.getElementById('close-overlay');
  
  // Tooltip logic (unchanged)
  images.forEach(img => {
    img.addEventListener('mousemove', (e) => {
      tooltip.style.top = (e.pageY + 15) + 'px';
      tooltip.style.left = (e.pageX + 15) + 'px';
      tooltip.style.opacity = 1;
    });
    img.addEventListener('mouseleave', () => {
      tooltip.style.opacity = 0;
    });
    
    // On click, show the overlay with unique info
    img.addEventListener('click', () => {
      overlayImg.src = img.src || 'images/placeholder.jpg';
      overlayTitle.textContent = img.getAttribute('data-title') || 'Inspecting Image';
      overlayDesc.textContent = img.getAttribute('data-desc') || 'Detailed information...';
      
      showOverlay(); // Fade in
    });
  });

  // Close button
  closeBtn.addEventListener('click', hideOverlay); // Fade out
});

 function calculateHoney() {
	const hives = document.getElementById("hiveCount").value;
	const averageYield = 25; // Average honey production per hive in kg
	const totalHoney = hives * averageYield;
	const output = document.getElementById("honey-output");
	output.textContent = `Estimated honey production: ${totalHoney} kg per year.`;
	output.classList.remove("hidden");
}

function toggleFAQ(num) {
  var answer = document.getElementById("faq-answer-" + num);
  answer.classList.toggle("open");
}