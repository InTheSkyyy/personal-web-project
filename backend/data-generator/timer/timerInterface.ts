export type EmptyFunction = () => void

export interface TimerInterface {
  start(callback: EmptyFunction): void
}
