// ============================
// THEME TOGGLE
// ============================
const themeBtn = document.getElementById('themeToggle');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  // Optional: Save theme preference
  if (document.body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
});

// Apply saved theme on load
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  }
});

// ============================
// FEATURED RANDOM THOUGHTS
// ============================
const featuredContainer = document.querySelector('.featured');
const randomThoughts = [
  "You don't know me, but I hope you're okay.",
  "Sometimes the best thing we can do is just breathe.",
  "I'm scared to grow up. Anyone else?",
  "Keep going, even when no one notices.",
  "Small acts of kindness matter more than you think."
];

// Clear existing blockquotes
featuredContainer.innerHTML = "<h3>💬 A few random thoughts from strangers:</h3>";

// Add thoughts dynamically
randomThoughts.forEach(thought => {
  const blockquote = document.createElement('blockquote');
  blockquote.textContent = thought;
  featuredContainer.appendChild(blockquote);
});

// ============================
// HOMEPAGE BUTTON ANIMATION
// ============================
const homepageButtons = document.querySelectorAll('.homepage-buttons button');

homepageButtons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.05)';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
});
