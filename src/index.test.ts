import { Add, greet } from "./index";

describe("checks if project setup is working", () => {
  test("greet function is compiled without errors", () => {
    expect(greet()).toBe("hello");
  });
});

describe("verifies Add function is working accordingly", () => {
  test("Add is a valid function exported properly", () => {
    expect(typeof Add).toBe("function");
  });

  test("emty string returns zero", () => {
    expect(Add("")).toBe(0);
  });
});
