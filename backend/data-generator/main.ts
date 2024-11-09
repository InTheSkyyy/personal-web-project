import { InfiniteTimer } from "./timer/infiniteTimer";
import { RandomTimer } from "./timer/randomTimer";
import { TimerInterface } from "./timer/timerInterface";

// The timer
const timer: TimerInterface = new RandomTimer()

// The generator
const callback: Function = () => {
    // The exporter
    console.log('Hello world!')
}

// Start the thing
timer.start(callback)