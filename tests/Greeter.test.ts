import { Greeter } from "../Greeter";

describe("Greeter", () => {
  test("It returns Hello,Sudha when you run", () => {
    let greeter = new Greeter("Hello");
    expect(greeter.greet("Sudha")).toEqual("Hello,Sudha!");
  });
  test("It returns Hello,Nish when you run", () => {
    let greeter = new Greeter("Hello");
    expect(greeter.greet("Nish")).toEqual("Hello,Nish!");
  });
  test("It returns Hi! There,How are you doing?! when you run", () => {
    let greeter = new Greeter("Hi! There");
    expect(greeter.greet("How are you doing?")).toEqual(
      "Hi! There,How are you doing?!"
    );
  });
  test("It returns Hello World when you run", () => {
    let greeter = new Greeter("Hello");
    expect(greeter.greet("World")).toEqual("Hello,World!");
  });
});
