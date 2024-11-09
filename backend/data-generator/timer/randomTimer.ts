import { TimerInterface } from "./timerInterface";

export class RandomTimer implements TimerInterface {

    start(callback: Function): void {
        const nextRandomCall = (timeout: number) => {
            setTimeout(() => {
                nextRandomCall(this.randomInterval())
                callback()
            }, timeout)
        }
        nextRandomCall(this.randomInterval())
    }

    private randomInterval(): number { return Math.round(Math.random() * 1000) }

}