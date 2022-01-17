import { Greeter } from "./Greeter";
class HtmlGreeter extends Greeter {
  //tagName: string;
  constructor(greeting: string, public tagName: string = "h1") {
    super(greeting);
  }
  greet(name: string): string {
    return `<${this.tagName}>${super.greet(name)}</${this.tagName}>`;
  }
}
const htmlGreeter = new HtmlGreeter("Hello");
htmlGreeter.greet("Sudha");
export default HtmlGreeter;

console.log(htmlGreeter.greet("Sudha"));
