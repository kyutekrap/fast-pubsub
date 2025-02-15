import { PubSub } from "fast-pubsub";

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

content.publish("This is fast-pubsub");
setTimeout(() => {
    content.publish("made by kyutekrap");
}, 3000);
setTimeout(() => {
    content.publish("for JS/TS.");
}, 6000);