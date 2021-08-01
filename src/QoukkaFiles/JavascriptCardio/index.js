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
};

// console.log(functions.capitalizeLetter("i love javaScript"));
// console.log(functions.capitalizeLetter1("i love javaScript"));
// console.log(functions.capitalizeLetter2("i love javaScript"));
// console.log(functions.maxCharacter("javaScripttttt"));
// console.log(functions.fizzBuzz());
// console.log(functions.longestWord("Hellooo, i'm albert"));
// console.log(functions.chunkedArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(functions.chunkedArray1([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
