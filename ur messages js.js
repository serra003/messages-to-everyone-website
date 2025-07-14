// Dummy data for testing
if (!localStorage.getItem("drafts")) {
  localStorage.setItem("drafts", JSON.stringify([
    { id: 1, text: "Draft: I miss you.", created: Date.now() }
  ]));
}
if (!localStorage.getItem("scheduled")) {
  localStorage.setItem("scheduled", JSON.stringify([
    { id: 1, text: "Happy Birthday in advance!", sendAt: Date.now() + 86400000 }
  ]));
}
if (!localStorage.getItem("sent")) {
  localStorage.setItem("sent", JSON.stringify([
    { id: 1, text: "You're amazing.", sentAt: Date.now() - 86400000 }
  ]));
}

function loadMessages() {
  loadSection("drafts", "draftList", "Edit");
  loadSection("scheduled", "scheduledList", "Reschedule");
  loadSection("sent", "sentList", "Delete");
}

function loadSection(type, containerId, actionLabel) {
  const container = document.getElementById(containerId);
  const items = JSON.parse(localStorage.getItem(type)) || [];

  if (items.length === 0) {
    container.innerHTML = "<p>No messages yet.</p>";
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="message">
      <p>${item.text}</p>
      <small>${type === "scheduled" ? `Send At: ${new Date(item.sendAt).toLocaleString()}` :
                type === "sent" ? `Sent At: ${new Date(item.sentAt).toLocaleString()}` :
                `Created: ${new Date(item.created).toLocaleString()}`}</small>
      <button onclick="handleAction('${type}', ${item.id})">${actionLabel}</button>
    </div>
  `).join("");
}

function handleAction(type, id) {
  let messages = JSON.parse(localStorage.getItem(type));
  const message = messages.find(m => m.id === id);

  if (type === "drafts") {
    alert(`Edit this draft:\n\n${message.text}`);
    // You could redirect to edit page or open a modal here.
  } else if (type === "scheduled") {
    alert(`Reschedule this message:\n\n${message.text}`);
  } else if (type === "sent") {
    if (confirm("Delete this sent message?")) {
      messages = messages.filter(m => m.id !== id);
      localStorage.setItem(type, JSON.stringify(messages));
      loadMessages();
    }
  }
}

window.onload = loadMessages;
