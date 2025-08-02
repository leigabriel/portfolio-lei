// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});

const themeIcons = document.querySelectorAll('.theme-toggle');
const body = document.body;

// Load theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.remove('light', 'dark');
    body.classList.add(savedTheme);

    // Update icons accordingly
    themeIcons.forEach(icon => {
        icon.classList.toggle('fa-sun', savedTheme === 'dark');
        icon.classList.toggle('fa-moon', savedTheme !== 'dark');
    });
}

// Theme toggle function
function toggleTheme() {
    body.classList.toggle('dark');
    body.classList.toggle('light');

    const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);

    themeIcons.forEach(icon => {
        icon.classList.toggle('fa-sun', currentTheme === 'dark');
        icon.classList.toggle('fa-moon', currentTheme !== 'dark');
    });
}

// Listen for toggle clicks
themeIcons.forEach(icon => {
    icon.addEventListener('click', toggleTheme);
});

// read More
function toggleAbout() {
    const moreText = document.getElementById("moreText");
    const btn = event.target;
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btn.textContent = "Less";
    } else {
        moreText.style.display = "none";
        btn.textContent = "Read More";
    }
}

function toggleProfileCard() {
    const modal = document.getElementById('profileCard');
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
}


// Lightbox Functionality
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        lightboxImg.src = img.src;
    });
});
lightbox.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
});