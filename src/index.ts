export function greet() {
  return "hello";
}

export function Add(input: string) {
  let sum = 0;
  input.split(",").forEach((num) => {
    const number = Number(num);
    sum += number;
  });
  return sum;
}
