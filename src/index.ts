export function greet() {
  return "hello";
}

type DelimiterData = {
  str: string;
  delimiter: RegExp;
};

function extractDelimiter(str: string): DelimiterData {
  if (str.startsWith("//")) {
    /**
     * //;\n would place delimiter at index 2
     */
    const validDelimIndex = 2;
    const delim = str[validDelimIndex];

    const filteredString = str.slice(validDelimIndex + 2);
    return { delimiter: new RegExp(`[${delim},\n]`), str: filteredString };
  } else {
    return { delimiter: new RegExp(/[,\n]/), str };
  }
}

export function Add(input: string) {
  let sum = 0;

  if (input === "") return sum;
  if (!input) throw Error("invalid input");

  const { delimiter, str } = extractDelimiter(input);

  str.split(delimiter).forEach((num) => {
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
