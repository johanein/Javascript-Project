// 2, 4, 9, -11, 5;
// 1, 4, -1, 6
// 1, -4, 1, 6
// -1, -4, -1, -6
const findContigousSumSelf = (array) => {
  // not currect implementation
  // This doesn't work with all negative numbers
  let maxSum = 0;
  let sumArray = [];
  for (let i = 0; i < array.length; i++) {
    const currSum = maxSum + array[i];
    if (currSum <= maxSum) {
      sumArray.push(maxSum);
      maxSum = 0;
    } else {
      maxSum = currSum;
      sumArray.push(currSum);
    }
  }
  return Math.max(...sumArray);
};
const findContigousSumRefer = (array) => {
  let maxSum = array[0];
  let currentSum = array[0];
  for (let i = 1; i < array.length; i++) {
    // current sum should not return its previous value
    currentSum = Math.max(array[i], currentSum + array[i]); // here currentSum is not added as a single argument to avoid carrying of value when the sum value is reducing
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

const variableChecking = [-1, -4, -1, -6];

console.log(findContigousSumSelf(variableChecking));
console.log(findContigousSumRefer(variableChecking));
