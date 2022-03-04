export function greet() {
  return "hello";
}
export function Add(input: string) {
  let sum = 0;

  if (input === "") return sum;
  if (!input) throw Error("invalid input");

  const delimiter = new RegExp(/[,\n]/);

  input.split(delimiter).forEach((num) => {
    const number = Number(num);

    // checks for !num because "" coerces to zero causing isNaN(number) to be false
    // safegaurds against invalid condition with contigous delimiters. For eg. "1,\n"
    if (isNaN(number) || !num) {
      throw Error("invalid input");
    } else {
      sum += number;
    }
  });
  return sum;
}
