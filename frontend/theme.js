// theme.js
const themeBtn = document.getElementById('themeToggle');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  // Optional: save preference in localStorage
  if (document.body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
});

// Apply saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  }
});
