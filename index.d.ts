import { PubSub } from './api/index.js';

declare module 'fast-pubsub' {
    export { PubSub };
}