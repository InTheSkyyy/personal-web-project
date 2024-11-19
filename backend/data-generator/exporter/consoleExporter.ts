import { ExporterInterface } from './exporterInterface';

export class ConsoleExporter implements ExporterInterface {
  export(data: unknown): void {
    console.log(data);
  }
}
