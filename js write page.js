// Get the button and input elements
const toggleBtn = document.getElementById('privacy-toggle');
const nameField = document.getElementById('name-field');
const nameInput = document.getElementById('name');

// Add event listener to the privacy toggle button
toggleBtn.addEventListener('click', function () {
  // Check if the current state is Anonymous (Private)
  const isAnonymous = toggleBtn.textContent.includes('Anonymous');

  // Toggle button text and visibility of the name input field
  if (isAnonymous) {
    toggleBtn.textContent = 'Public (With Name)'; // Change button text to 'Public'
    nameField.style.display = 'block'; // Show name input field
  } else {
    toggleBtn.textContent = 'Anonymous (Private)'; // Change button text to 'Anonymous'
    nameField.style.display = 'none'; // Hide name input field
    nameInput.value = ''; // Clear the name input value
  }
});

// JavaScript to handle the "Edit Textbox" button functionality
document.getElementById('edit-button').addEventListener('click', function() {
  // Toggle the visibility of the edit options
  const editOptions = document.querySelector('.edit-options');
  editOptions.style.display = (editOptions.style.display === 'none' || editOptions.style.display === '') ? 'block' : 'none';
});

// JavaScript to apply the selected styles
document.getElementById('apply-style').addEventListener('click', function() {
  const fontFamily = document.getElementById('font-family').value;
  const fontSize = document.getElementById('font-size').value + 'px';
  const fontColor = document.getElementById('font-color').value;
  const bgColor = document.getElementById('bg-color').value;

  // Apply the styles to the textarea
  const messageBox = document.getElementById('message');
  messageBox.style.fontFamily = fontFamily;
  messageBox.style.fontSize = fontSize;
  messageBox.style.color = fontColor;
  messageBox.style.backgroundColor = bgColor;
});
