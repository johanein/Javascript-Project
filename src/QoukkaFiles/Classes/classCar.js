class Car {
  constructor(a = 1, b = 2) {
    console.log(a + b);
    // return { a, b };
  }

  race() {
    return "I can race";
  }
}

const benzCar = new Car();

console.log({
  benzCar,
  call: benzCar.race(),
});
