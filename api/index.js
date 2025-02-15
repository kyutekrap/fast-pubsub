export class PubSub {

    constructor() {
        this.value = undefined;
        this.subscribers = [];
    }

    parameter(value = this.value) {
        this.value = value;
        return this.value;
    }

    publish(value) {
        this.parameter(value);
        this.subscribers.forEach(sub => sub(value));
    }

    subscribe(fx) {
        this.subscribers.push(fx);
    }
}