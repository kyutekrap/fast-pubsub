import { PubSub } from "../index.js";

const content = new PubSub();

class MyComponent {

    span;

    constructor() {
        this.span = document.createElement("span");
        content.subscribe(() => this.onEvent());
        document.body.appendChild(this.span);
    }

    onEvent() {
        this.span.innerHTML = content.parameter();
    }
}

new MyComponent();

content.publish("This is easy-pubsub");
setTimeout(() => {
    content.publish("made by kyutekrap");
}, 3000);
setTimeout(() => {
    content.publish("for TypeScript.");
}, 6000);