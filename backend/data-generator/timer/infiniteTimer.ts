import { TimerInterface } from "./timerInterface";

export class InfiniteTimer implements TimerInterface {

    constructor(public readonly interval: number) { }

    start(callback: Function): void {
        setInterval(callback, this.interval)
    }

}