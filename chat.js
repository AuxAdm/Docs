const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

function addMessage(text, sender) {
    const message = document.createElement('div');
    message.className = 'message ' + sender;
    const bubble = document.createElement('div');
    bubble.className = 'text';
    bubble.textContent = text;
    message.appendChild(bubble);
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = userInput.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    userInput.value = '';
    addMessage('Buscando información...', 'bot');
    // Aquí se puede conectar al backend en el futuro
    setTimeout(() => {
        chatBox.removeChild(chatBox.lastChild);
        addMessage('Gracias por tu pregunta. Esta función estará disponible pronto, mientras tanto consulta: https://www.uts.edu.co/sitio/atencion-al-ciudadano/', 'bot');
    }, 1200);
});
