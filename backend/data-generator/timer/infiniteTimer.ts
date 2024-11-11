import { EmptyFunction, TimerInterface } from './timerInterface'

export class InfiniteTimer implements TimerInterface {
  constructor(public readonly interval: number) {}

  start(callback: EmptyFunction): void {
    setInterval(callback, this.interval)
  }
}
