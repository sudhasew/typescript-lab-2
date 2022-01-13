import { Greeter } from "./Greeter";
class HtmlGreeter extends Greeter {
  tagName: string;
  constructor(greeting: string, tagName: string) {
    super(greeting);
    this.greeting = greeting;
    this.tagName = "h1";
  }
  greet() {
    this.tagName = "hi";
    return "<h1>Hello, Grant!</h1>";
  }
}
const htmlGreeter = new HtmlGreeter("Hello", "Sudha");
export { htmlGreeter, HtmlGreeter };
