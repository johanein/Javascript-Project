const functions = {
  capitalizeLetter: (str) => {
    const strArray = str.split(" ");
    for (let i = 0; i < strArray.length; i++) {
      strArray[i] =
        strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1);
    }
    return strArray.join(" ");
  },
  capitalizeLetter1: (str) => {
    return str
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.substr(1))
      .join(" ");
  },
  capitalizeLetter2: (str) => {
    return str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
  },
  maxCharacter: (str) => {
    const charDictionary = {};
    let maxNumber = 0;
    let maxChar = "";
    Array.from(str).forEach((element) => {
      if (charDictionary[element]) {
        charDictionary[element] += 1;
      } else {
        charDictionary[element] = 1;
      }
    });
    for (const key in charDictionary) {
      if (charDictionary[key] > maxNumber) {
        maxNumber = charDictionary[key];
        maxChar = key;
        debugger;
      }
    }
    return maxChar;
  },
  // multiple of 3 'fizz', multiple of 5 'buzz', multiple of 3 and 5 'fizzbuzz'
  fizzBuzz: () => {
    const returnArray = [];
    for (let index = 1; index <= 100; index++) {
      if (index % 15 === 0) {
        returnArray.push("fizzBuzz");
        continue;
      }
      if (index % 3 === 0) {
        returnArray.push("fizz");
        continue;
      }
      if (index % 5 === 0) {
        returnArray.push("buzz");
        continue;
      }

      returnArray.push(index);
    }

    return returnArray;
  },
  longestWord: (stn) => {
    // create filtered array
    const wordArray = stn.match(/[a-z0-9]+/gi);
    // sort based on lenth
    const sortedArray = wordArray.sort((a, b) => b.length - a.length);
    // find longest word array
    const longestWordArray = sortedArray.filter(
      (item) => item.length >= sortedArray[0].length
    );
    if (longestWordArray.length === 1) return longestWordArray[0];
    return longestWordArray;
  },
  chunkedArray: (arr, length) => {
    const chunkedArray = [];
    let i = 0;
    while (i < arr.length) {
      chunkedArray.push(arr.slice(i, i + length));
      i += length;
    }
    return chunkedArray;
  },
  chunkedArray1: (arr, length) => {
    const chunkedArray = [];
    arr.forEach((val) => {
      const last = chunkedArray[chunkedArray.length - 1];
      if (!last || last.length === length) {
        chunkedArray.push([val]);
      } else {
        last.push(val);
      }
    });
    return chunkedArray;
  },
  flattenArraySimple: (arrays) => arrays.flat(Infinity),
  flattenArray: (arrays) => [].concat(...arrays),
  flattenArray1: (arrays) =>
    arrays.reduce((acc, item) => [...acc, ...item], []),
  flattenArray2: (arrays) => [].concat.apply([], arrays),
  formatString: (str) =>
    str.replace(/\W/g, "").toLowerCase().split("").sort().join(""),
  isAnagram: (str1, str2) =>
    functions.formatString(str1) === functions.formatString(str2),
  letterChanges: (str) =>
    str.replace(/[a-z]/gi, (char) => {
      if (char === "z" || char === "Z") return "a";
      return String.fromCharCode(char.charCodeAt() + 1);
    }),
  vowelToUpperCase: (str) =>
    str.replace(/a|e|i|o|u/gi, (vowel) => vowel.toUpperCase()),
  addAll: (...arr) => arr.reduce((acc, item) => acc + item),
  checkForPrime: (num) => {
    for (let index = 2; index < num; index++) {
      if (num % index === 0) {
        return false;
      }
    }
    return true;
  },
  sumOfAllPrime: (num) => {
    let total = 0;
    for (let index = 2; index < num; index++) {
      if (functions.checkForPrime(index)) {
        total += index;
      }
    }
    return total;
  },
  seekAndDestroy: (arr, ...restArgs) => {
    return arr.filter((item) => restArgs.indexOf(item) === -1);
  },
  seekAndDestroy1: (arr, ...restArgs) => {
    return arr.filter((item) => !restArgs.includes(item));
  },
  sortByHeight: (arr) => {
    const { indexArray, valueArray } = arr.reduce(
      (acc, value, index) => {
        if (value === -1) {
          acc.indexArray = [...acc.indexArray, index];
        } else {
          acc.valueArray = [...acc.valueArray, value].sort((a, b) => a - b);
        }
        return acc;
      },
      { indexArray: [], valueArray: [] }
    );
    valueArray.forEach((value, index) =>
      valueArray.splice(indexArray[index], 0, -1)
    );
    return valueArray;
  },
  missingLetters: (str) => {
    let charCode = str.charCodeAt(0);
    let missingChar;
    str.split("").forEach((c) => {
      if (c.charCodeAt() === charCode) {
        ++charCode;
      } else {
        missingChar = String.fromCharCode(charCode);
      }
    });
    return missingChar;
  },
  evenOddSum: (arr) => {
    return arr.reduce(
      (acc, item) => {
        if (item % 2 === 0) {
          acc[0] += item;
        } else {
          acc[1] += item;
        }
        return acc;
      },
      [0, 0]
    );
  },
};

function argumentsInJavascript(...restArgs) {
  return { arguments, restArgs, arrayFromArguments: Array.from(arguments) };
}
console.log(functions.evenOddSum([1, 2, 3, 4, 5, 6]));
// missingLetters ex: 'abcdefghi', 'abce'
// console.log(functions.missingLetters("abcefghi"));
// sort by height ex: [-1,150,190,170,-1,-1,160,180]
// console.log(functions.sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
// console.log(functions.seekAndDestroy1([2, 3, 4, 6, 6, "hello"], 2, 6));
// console.log(functions.seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6));
// console.log(argumentsInJavascript([2, 3, 4, 6, 6, "hello"], 2, 6));
// console.log(functions.sumOfAllPrime(10));
// console.log(functions.addAll(1, 2, 3, 4));
// console.log(functions.capitalizeLetter("i love javaScript"));
// console.log(functions.capitalizeLetter1("i love javaScript"));
// console.log(functions.capitalizeLetter2("i love javaScript"));
// console.log(functions.maxCharacter("javaScripttttt"));
// console.log(functions.fizzBuzz());
// console.log(functions.longestWord("Hellooo, i'm albert"));
// console.log(functions.chunkedArray([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(functions.chunkedArray1([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
// console.log(functions.flattenArraySimple([[1, 2, 3, 4], [5, 6, 7, 8], [9]], 2));
// console.log(functions.flattenArray([[1, 2, 3, 4], [5, 6, 7, 8], [9]], 2));
// console.log(functions.flattenArray1([[1, 2, 3, 4], [5, 6, 7, 8], [9]], 2));
// console.log(functions.flattenArray2([[1, 2, 3, 4], [5, 6, 7, 8], [9]], 2));
// ex: 'dormitory' and 'dirty room', elbow and below
// console.log(functions.formatString("Good day"));
//letter changes. ex: 'hello there' === 'Ifmmp Uifof'
// console.log(functions.isAnagram("elbow", "below"));
// changes each and every letters into the next alphabet
// console.log(functions.letterChanges("hello There"));
// console.log(functions.vowelToUpperCase("hello There"));
