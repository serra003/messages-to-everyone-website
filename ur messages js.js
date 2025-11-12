const API_URL = 'http://127.0.0.1:5000/messages';

// For demo, you can set your name here or get it dynamically
const currentUser = 'Anonymous';

const yourMessagesDiv = document.getElementById('yourMessages');
const othersMessagesDiv = document.getElementById('othersMessages');

async function fetchMessages() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch messages');
    const messages = await response.json();
    
    // Clear divs
    yourMessagesDiv.innerHTML = '';
    othersMessagesDiv.innerHTML = '';

    messages.forEach(msg => {
      const messageEl = document.createElement('div');
      messageEl.classList.add('message');
      messageEl.innerHTML = `
        <p>${msg.content}</p>
        <small>${msg.author} • ${new Date(msg.timestamp).toLocaleString()}</small>
      `;
      
      if (msg.author === currentUser) {
        yourMessagesDiv.appendChild(messageEl);
      } else {
        othersMessagesDiv.appendChild(messageEl);
      }
    });

    if (yourMessagesDiv.innerHTML === '') {
      yourMessagesDiv.innerHTML = '<p>No messages sent yet.</p>';
    }
    if (othersMessagesDiv.innerHTML === '') {
      othersMessagesDiv.innerHTML = '<p>No messages from others yet.</p>';
    }

  } catch (err) {
    console.error(err);
    yourMessagesDiv.innerHTML = '<p>Error fetching messages. Is the backend running?</p>';
  }
}

window.onload = fetchMessages;
