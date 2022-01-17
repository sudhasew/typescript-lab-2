import { Greeter } from "./Greeter";

export class JavaScriptGreeter extends Greeter {
  greet(name: string): string {
    let result = `console.log('${this.greeting}'!)`;
    return result;
  }
}

const javaScriptGreeter = new JavaScriptGreeter("`${greeting}, ${name}`");

javaScriptGreeter.greet("");
// export { JavaScriptGreeter, javaScriptGreeter };
