declare class PubSub<T = any> {
    private value: T;
    private subscribers: Function[];

    constructor();

    parameter(value?: T): T | void;

    publish(value: T): void;

    subscribe(fx: Function): void;
}