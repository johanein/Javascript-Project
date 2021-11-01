const radius = [1, 2, 3];

const square = (r) => r * r;

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let index = 0; index < this.length; index++) {
    output.push(logic(this[index]));
  }
  return output;
};
console.log(radius.calculate(square)); // here calculate works as map method
