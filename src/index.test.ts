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

  test("'1,2' returns 3", () => {
    expect(Add("1,2")).toBe(3);
  });

  test("comma delimiter => '1,2,3' returns 6", () => {
    expect(Add("1,2,3")).toBe(6);
  });
});
