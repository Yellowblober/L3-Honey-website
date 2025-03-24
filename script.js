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
        const timelineSection = document.querySelector('.timeline-section');
        const timeline = document.querySelector('.timeline');
        const timelineWidth = timeline.scrollWidth; // Total width of the timeline
        const containerWidth = timelineSection.clientWidth; // Visible width of the container

        let isScrollingTimeline = false;

        window.addEventListener('scroll', function () {
            const scrollY = window.scrollY; // Vertical scroll position
            const sectionTop = timelineSection.offsetTop; // Top position of the timeline section
            const sectionHeight = timelineSection.clientHeight; // Height of the timeline section

            // Check if the user has scrolled into the timeline section
            if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
                isScrollingTimeline = true;
                document.body.style.overflowY = 'hidden'; // Disable vertical scrolling
                timeline.style.overflowX = 'scroll'; // Enable horizontal scrolling
            } else {
                if (isScrollingTimeline) {
                    isScrollingTimeline = false;
                    document.body.style.overflowY = 'auto'; // Re-enable vertical scrolling
                    timeline.style.overflowX = 'hidden'; // Disable horizontal scrolling
                }
            }
        });
    });

