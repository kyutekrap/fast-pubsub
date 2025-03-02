import { PubSub } from "fast-pubsub";

const content = new PubSub<string>("This is fast-pubsub");

class MyComponent {

    private span: HTMLSpanElement;

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

setTimeout(() => {
    content.publish("made by kyutekrap");
}, 3000);
setTimeout(() => {
    content.publish("for JS/TS.");
}, 6000);