const obj = {
  name: 5,
};

const arr = [1, 2, 3];

function funcToBeExecUsingCall(params) {
  return this.name + params;
}
function funcToBeExecUsingApply(params, param2) {
  return this.name + params + param2;
}
function funcToBeExecUsingBind(params) {
  return this.name + params;
}

console.log(funcToBeExecUsingCall.call(obj, 4)); // expect 9
console.log(funcToBeExecUsingApply.apply(obj, arr)); // expect 8

// binding the object to the function
const bound = funcToBeExecUsingBind.bind(obj);

console.log(bound(2)); // expect to return 7
