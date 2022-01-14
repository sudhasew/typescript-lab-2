import { Greeter } from "./Greeter";

class LoudGreeter extends Greeter {
  private extra: string = "";
  addVolume(): void {
    this.extra = this.extra + "!";
  }
  greet(name: string): string {
    return "Hello, Grant!!!" + this.extra;
  }
}
const loudGreeter = new LoudGreeter("");

loudGreeter.addVolume();

export { loudGreeter, LoudGreeter };
