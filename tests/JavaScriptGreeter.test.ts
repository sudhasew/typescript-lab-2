//import { Greeter } from "./Greeter";
import { JavaScriptGreeter } from "../JavaScriptGreeter";

describe("JavaScriptGreeter", () => {
  test("It returns console.log('Hello, Grant!') when you run", () => {
    let javaScriptGreeter = new JavaScriptGreeter("Hello, Grant");
    expect(javaScriptGreeter.greet("")).toEqual("console.log('Hello, Grant'!)");
  });

  test("It returns console.log('Hello, Grant!') when you run", () => {
    let javaScriptGreeter = new JavaScriptGreeter("Hello, Sudha");
    expect(javaScriptGreeter.greet("")).toEqual("console.log('Hello, Sudha'!)");
  });

  test("It returns console.log('Hello, Grant!') when you run", () => {
    let javaScriptGreeter = new JavaScriptGreeter("Hello, Nishritha");
    expect(javaScriptGreeter.greet("")).toEqual(
      "console.log('Hello, Nishritha'!)"
    );
  });
});
