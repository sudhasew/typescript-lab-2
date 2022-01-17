import { Greeter } from "./Greeter";

export class LoudGreeter extends Greeter {
  extra: string = "!";

  greet(name: string): string {
    return super.greet(name) + this.extra;
  }
  addVolume() {
    this.extra += "!";
  }
}
const loud = new LoudGreeter("Hi");
//By calling the loud.addVolume();, every time it will add !.
loud.addVolume();
//loud.addVolume();
// loud.addVolume();
console.log(loud.greet("Hello"));
