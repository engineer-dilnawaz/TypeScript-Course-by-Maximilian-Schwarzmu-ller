function getLength(value: string): string;
function getLength(value: any[]): number;

function getLength(value: string | any[]) {
  if (typeof value === "string") {
    // X word for string
    const numberOfWords = value.split(" ").length;
    return `${numberOfWords} words`;
  }
  return value.length;
}

const numOfWords = getLength("does this work?");
numOfWords.length; //error as retunr type is string or number

const numItems = getLength(["Sports", "Cooking"]);
