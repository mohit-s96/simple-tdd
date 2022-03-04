export function greet() {
  return "hello";
}
export function Add(input: string) {
  let sum = 0;
  const delimiter = new RegExp(/[,\n]/);

  input.split(delimiter).forEach((num) => {
    const number = Number(num);
    if (isNaN(number)) {
      throw Error("invalid input");
    } else {
      sum += number;
    }
  });
  return sum;
}
