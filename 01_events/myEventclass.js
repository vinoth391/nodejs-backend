const EventEmitter = require('events');

class Chat extends EventEmitter {
    sendMessage(msg) {
        console.log(`message sent: ${msg}`);
        this.emit('messageReceived', msg); // spelling fixed
    }
}

const chat = new Chat();

chat.on("messageReceived", (msg) => {
    console.log(`new Message: ${msg}`);
});

chat.sendMessage("Hello vino");
