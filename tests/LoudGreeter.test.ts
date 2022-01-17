import { LoudGreeter } from "../LoudGreeter";

describe("LoudGreeter", () => {
  test("It will return the name with greeting", () => {
    const loud = new LoudGreeter("Hello");
    expect(loud.greet("How are you?")).toBe("Hello,How are you?!!");
  });
  test("It will return the name with greeting", () => {
    const loud = new LoudGreeter("Hi");
    expect(loud.greet("Sudha!")).toBe("Hi,Sudha!!!");
  });
});
