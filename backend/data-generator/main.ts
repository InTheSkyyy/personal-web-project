import { ConsoleExporter } from './exporter/consoleExporter'
import { ExporterInterface } from './exporter/exporterInterface'
import { GeneratorInterface } from './generator/generatorInterface'
import { HelloWorldGenerator } from './generator/helloWorldGenerator'
import { RandomTimer } from './timer/randomTimer'
import { TimerInterface } from './timer/timerInterface'

// The timer
const timer: TimerInterface = new RandomTimer()
// The generator
const generator: GeneratorInterface = new HelloWorldGenerator()
// The exporter
const exporter: ExporterInterface = new ConsoleExporter()

// Start the thing
const callback = () => {
  exporter.export(generator.generate())
}
timer.start(callback)
