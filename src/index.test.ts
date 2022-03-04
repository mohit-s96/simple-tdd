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

  // invalid number f
  test("an invalid number 'f' => '1,2,f' throws invalid input", () => {
    expect(() => Add("1,2,f")).toThrowError(Error("invalid input"));
  });

  test("comma and newline delimiters => '1,2\\n3' returns 6", () => {
    expect(Add("1,2\n3")).toBe(6);
  });

  test("2 contiguous delimiters => '1,\\n' throws invalid input", () => {
    expect(() => Add("1,\n")).toThrowError(Error("invalid input"));
  });

  test("custom delimiter => '//;\\n1;2;3' returns 6", () => {
    expect(Add("//;\n1;2;3")).toBe(6);
  });

  test("custom delimiter with backwards compat => '//;\\n1;2;3\\n4,5' returns 15", () => {
    expect(Add("//;\n1;2;3\n4,5")).toBe(15);
  });

  test("custom delimiter without newline => '//;1;2;3' throws invalid input", () => {
    expect(() => Add("//;1;2;3")).toThrowError(Error("invalid input"));
  });

  test("negative number => '1,2,3,4\\n-5' throws error", () => {
    const error = Error("negatives not allowed - -5");
    expect(() => Add("1,2,3,4\n-5")).toThrowError(error);
  });

  test("negative numbers => '1,2,-3,4\\n-5,-7' throws error", () => {
    const error = Error("negatives not allowed - -3,-5,-7");
    expect(() => Add("1,2,-3,4\n-5,-7")).toThrowError(error);
  });
});
