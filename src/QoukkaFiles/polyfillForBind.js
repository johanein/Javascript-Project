const nameObj = {
  firstName: "Albert",
  lastName: "Yohannan",
};

function getName(hometown, parentPlace, grandparentPlace) {
  console.log(
    `${this.firstName} ${this.lastName} lives  in ${hometown} which is in ${parentPlace} under ${grandparentPlace}`
  );
}

const printName = getName.bind(nameObj, "Mangalam");

printName("Wadakkanchery", "Thrissur");

Function.prototype.myBind = function (...bindArray) {
  const thisCallFn = this;
  return function (...callObject) {
    thisCallFn.call(...bindArray, ...callObject);
  };
};

printName2 = getName.myBind(nameObj, "Wadakkanchery");
printName2("Thrissur", "Kerala");
