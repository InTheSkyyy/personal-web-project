import { EmptyFunction, TimerInterface } from './timerInterface'

export class RandomTimer implements TimerInterface {
  start(callback: EmptyFunction): void {
    const nextRandomCall = (timeout: number) => {
      setTimeout(() => {
        nextRandomCall(this.randomInterval())
        callback()
      }, timeout)
    }
    nextRandomCall(this.randomInterval())
  }

  private randomInterval(): number {
    return Math.round(Math.random() * 1000)
  }
}
