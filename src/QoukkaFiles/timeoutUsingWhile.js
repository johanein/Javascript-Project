const first = new Date().getTime();
let last = first;

while (last < first + 5000) {
  last = new Date().getTime();
}

console.log("after 5s");
