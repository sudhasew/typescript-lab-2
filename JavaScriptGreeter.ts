import { Greeter } from "./Greeter";

class JavaScriptGreeter extends Greeter {
  greet(name: string): string {
    console.log("Hello, Grant!");
    return "console.log('Hello, Grant!')";
  }
}

const javaScriptGreeter = new JavaScriptGreeter("Hi");
javaScriptGreeter.greet("");
export { JavaScriptGreeter, javaScriptGreeter };
