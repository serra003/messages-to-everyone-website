// ============================
// PRIVACY TOGGLE
// ============================
const toggleBtn = document.getElementById('privacy-toggle');
const nameField = document.getElementById('name-field');
const nameInput = document.getElementById('name');

toggleBtn.addEventListener('click', () => {
  const isAnonymous = toggleBtn.textContent.includes('Anonymous');
  if (isAnonymous) {
    toggleBtn.textContent = 'Public (With Name)';
    nameField.style.display = 'block';
  } else {
    toggleBtn.textContent = 'Anonymous (Private)';
    nameField.style.display = 'none';
    nameInput.value = '';
  }
});

// ============================
// TEXTBOX STYLE EDIT
// ============================
document.getElementById('edit-button').addEventListener('click', () => {
  const editOptions = document.querySelector('.edit-options');
  editOptions.style.display =
    editOptions.style.display === 'none' || editOptions.style.display === ''
      ? 'block'
      : 'none';
});

document.getElementById('apply-style').addEventListener('click', () => {
  const messageBox = document.getElementById('message');
  messageBox.style.fontFamily = document.getElementById('font-family').value;
  messageBox.style.fontSize = document.getElementById('font-size').value + 'px';
  messageBox.style.color = document.getElementById('font-color').value;
  messageBox.style.backgroundColor = document.getElementById('bg-color').value;
});

// ============================
// SEND MESSAGE TO BACKEND
// ============================
const form = document.getElementById('messageForm');
const API_URL = 'http://127.0.0.1:5000/messages';

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const content = document.getElementById('message').value.trim();
  const author = toggleBtn.textContent.includes('Anonymous') ? 'Anonymous' : (nameInput.value.trim() || 'Anonymous');

  if (!content) {
    alert('Please write something!');
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, author })
    });

    if (response.ok) {
      // Optional: show message on page instead of alert
      alert('Message sent!');
      
      // Reset form and toggle
      form.reset();
      nameField.style.display = 'none';
      toggleBtn.textContent = 'Anonymous (Private)';
    } else {
      const errorText = await response.text();
      console.error(errorText);
      alert('Failed to send. Check console for details.');
    }
  } catch (err) {
    console.error(err);
    alert('Error connecting to backend.');
  }
});
