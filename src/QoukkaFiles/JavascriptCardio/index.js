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
};

// console.log(functions.capitalizeLetter("i love javaScript"));
// console.log(functions.capitalizeLetter1("i love javaScript"));
// console.log(functions.capitalizeLetter2("i love javaScript"));
// console.log(functions.maxCharacter("javaScripttttt"));
console.log(functions.fizzBuzz());
