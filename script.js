let rotation = 0; // Initialize rotation angle

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active'); // Toggle sidebar
    rotateImage(); // Rotate the image
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

//Smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    const scrollToFooterLink = document.getElementById('scrollToFooter'); // making sure there is smooth scrolling throughout the page

    scrollToFooterLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of link
        const footer = document.getElementById('footer');
        footer.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the footer
    });
})