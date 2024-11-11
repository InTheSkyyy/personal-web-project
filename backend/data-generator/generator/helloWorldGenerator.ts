import { GeneratorInterface } from './generatorInterface'

export class HelloWorldGenerator implements GeneratorInterface {
  generate() {
    return 'Hello World!'
  }
}
