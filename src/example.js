import { PubSub } from "../index.js";

const content = new PubSub("This is fast-pubsub");

class MyComponent {
    constructor() {
        this.span = document.createElement("span");
        this.onEvent();
        content.subscribe(() => this.onEvent());
        document.body.appendChild(this.span);
    }

    onEvent() {
        this.span.innerHTML = content.parameter();
    }
}

new MyComponent();

setTimeout(() => {
    content.publish("made by kyutekrap");
}, 3000);
setTimeout(() => {
    content.publish("for JS/TS.");
}, 6000);