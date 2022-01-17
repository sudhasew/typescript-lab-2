import { Greeter } from "./Greeter";

export class LoudGreeter extends Greeter {
  extra: string = "!";
  greet(name: string): string {
    return super.greet(name) + this.extra;
  }
  addVolume() {
    this.extra = "!";
  }
}
const loud = new LoudGreeter("Hi");
loud.addVolume();
loud.addVolume();
// loudGreeter.addVolume();
console.log(loud.greet("Hello"));
