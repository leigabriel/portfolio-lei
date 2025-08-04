// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeCheckbox = document.querySelector('.theme-switch__checkbox');
  const mobileThemeToggle = document.querySelector('.theme-toggle');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    body.classList.add(savedTheme);
    if (themeCheckbox) themeCheckbox.checked = savedTheme === 'dark';
    updateMobileIcon(savedTheme);
  } else {
    body.classList.add('light');
    if (themeCheckbox) themeCheckbox.checked = false;
    updateMobileIcon('light');
  }

  // Theme switch from desktop toggle
  if (themeCheckbox) {
    themeCheckbox.addEventListener('change', () => {
      const newTheme = themeCheckbox.checked ? 'dark' : 'light';
      body.classList.remove('light', 'dark');
      body.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
      updateMobileIcon(newTheme);
    });
  }

  // Theme switch from mobile icon
  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', () => {
      const newTheme = body.classList.contains('dark') ? 'light' : 'dark';
      body.classList.remove('light', 'dark');
      body.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
      if (themeCheckbox) themeCheckbox.checked = newTheme === 'dark';
      updateMobileIcon(newTheme);
    });
  }

  // Mobile menu toggle
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Update mobile icon class (sun/moon)
  function updateMobileIcon(theme) {
    if (!mobileThemeToggle) return;
    mobileThemeToggle.classList.remove('fa-sun', 'fa-moon');
    mobileThemeToggle.classList.add(theme === 'dark' ? 'fa-sun' : 'fa-moon');
  }
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
