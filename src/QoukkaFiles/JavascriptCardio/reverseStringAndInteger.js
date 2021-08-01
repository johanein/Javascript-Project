(function name(str = "albert") {
  // method 1
  //   const arrayStr = str.split("");
  //   const reverseArray = arrayStr.reverse();
  //   console.log(reverseArray.join(""));

  // method 2
  //   console.log(str.split("").reverse().join(""));

  // method 3
  console.log(str.split("").reduce((acc, item) => item + acc, ""));
})();

// reverse integer

((interger = 789) => {
  console.log(interger.toString().split("").reverse().join(""));
})();
