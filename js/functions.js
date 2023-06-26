export default class View {
    $ = {};


    constructor() {
        this.$.chatCont = document.querySelector('[data-id="chatCont"]');
        this.$.sendBtn = document.querySelector('[data-id="sendBtn"]');
        this.$.inputField = document.querySelector('[data-id="inputField"]');
        this.$.menuBtn = document.querySelector('[data-id="menuBtn"]');
    }

    sendMessage(handler, key) {
        this.$.sendBtn.addEventListener('click', handler);
        this.$.inputField.addEventListener('keyup', key);
    }

    displayMessage() {
        const value = this.$.inputField.value;

        const date = new Date();

        const hours = date.getHours();
        const minutes = date.getMinutes();

        const chatBox = document.createElement('div');
        const chatText = document.createElement('p');
        const chatTime = document.createElement('p');

        chatBox.classList.add('chatbox');

        chatText.classList.add('chat-content');
        chatTime.classList.add('date');

        chatText.innerText = `${value}`;

        chatTime.innerText = `${hours}:${minutes}`;


        this.$.chatCont.appendChild(chatBox);
        chatBox.appendChild(chatText);
        chatBox.appendChild(chatTime);

        this.$.inputField.value = '';
    }
}