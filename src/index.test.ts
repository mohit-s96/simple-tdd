import { greet } from "./index";

describe("checks if project setup is working", () => {
  test("greet function is compiled without errors", () => {
    expect(greet()).toBe("hello");
  });
});
