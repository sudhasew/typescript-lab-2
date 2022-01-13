class Greeter {
  greeting: string;
  constructor(greeting: string) {
    this.greeting = greeting;
  }
  greet(name: string) {
    let result = this.greeting + ", " + name;
    return result;
  }
}
const greeter = new Greeter("Hi! there");

export { greeter };
