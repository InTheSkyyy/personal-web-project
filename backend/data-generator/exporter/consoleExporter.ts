import { ExporterInterface } from './exporterInterface'

export class ConsoleExporter implements ExporterInterface {
  export(data: any): void {
    console.log(data)
  }
}
