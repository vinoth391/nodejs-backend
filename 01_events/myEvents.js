const EventEmitter = require("events")

const eventEmitter = new EventEmitter()

eventEmitter.on("greet", (username) => {
    console.log(`hello ${username} and welcome to events in node js`);
    
})

eventEmitter.once("pushnotify", () => {
    console.log("this will run only once");
    
})
// eventEmitter.emit("greet","vino")

const myListener = () => console.log("I am a test listener")
eventEmitter.on("test", myListener)

console