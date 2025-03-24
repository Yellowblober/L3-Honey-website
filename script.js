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

    document.addEventListener("DOMContentLoaded", function () {
      const timelineContainer = document.querySelector(".timeline-container");
      let isHorizontal = false;
      
      function updateScrollBehavior() {
        const rect = timelineContainer.getBoundingClientRect();
        // When the timeline container is centered in the viewport, disable vertical scrolling
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          document.body.style.overflowY = "hidden";
          isHorizontal = true;
        } else {
          document.body.style.overflowY = "auto";
          isHorizontal = false;
        }
      }
      
      window.addEventListener("scroll", updateScrollBehavior);
      updateScrollBehavior();
      
      // Convert vertical wheel events into horizontal scrolling
      timelineContainer.addEventListener("wheel", function (event) {
        if (isHorizontal) {
          event.preventDefault();
          timelineContainer.scrollLeft += event.deltaY;
        }
      });
    });

