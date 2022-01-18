import { HtmlGreeter } from "../HtmlGreeter";
describe("HtmlGreeter", () => {
  test("It returns the <h1>Hello,Sudha!</h1> with default tagName", () => {
    const htmlGreeter = new HtmlGreeter("Hello");
    expect(htmlGreeter.greet("Sudha")).toBe("<h1>Hello,Sudha!</h1>");
  });
  test("It returns the <h1>Hello,Jaas!</h1>", () => {
    const htmlGreeter = new HtmlGreeter("Hello");
    expect(htmlGreeter.greet("Jaas")).toBe("<h1>Hello,Jaas!</h1>");
  });
  test("It returns the <h2>How are you doing,Jaas!</h2>", () => {
    const htmlGreeter = new HtmlGreeter("How are you doing");
    htmlGreeter.tagName = "h2";
    expect(htmlGreeter.greet("Nish")).toBe("<h2>How are you doing,Nish!</h2>");
  });
  test("It returns the <h3>How are you doing,Jaas!</h3>", () => {
    const htmlGreeter = new HtmlGreeter("How are you doing");
    htmlGreeter.tagName = "h3";
    expect(htmlGreeter.greet("Nish")).toBe("<h3>How are you doing,Nish!</h3>");
  });
  test("It returns the <h5>How are you doing,Jaas!</h5>", () => {
    const htmlGreeter = new HtmlGreeter("How are you doing");
    htmlGreeter.tagName = "h5";
    expect(htmlGreeter.greet("Nish")).toBe("<h5>How are you doing,Nish!</h5>");
  });
});
