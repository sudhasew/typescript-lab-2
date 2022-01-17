import { LoudGreeter } from "../LoudGreeter";

describe("LoudGreeter", () => {
  test("It will return the name with greeting", () => {
    const loud = new LoudGreeter("Hello");
    expect(loud.greet("How are you?")).toBe("Hello,How are you?!!");
  });
  test("It will return the name with greeting", () => {
    const loud = new LoudGreeter("Hi");
    loud.addVolume();
    expect(loud.greet("Sudha")).toBe("Hi,Sudha!!!");
  });
  test("It will return the name with greeting", () => {
    const loud = new LoudGreeter("Hi! There");
    loud.addVolume();
    expect(loud.greet("Sudha")).toBe("Hi! There,Sudha!!!");
  });
  test("It will return the name with greeting", () => {
    const loud = new LoudGreeter("Hi! There");
    loud.addVolume();
    loud.addVolume();
    expect(loud.greet("Sudha")).toBe("Hi! There,Sudha!!!!");
  });
});
