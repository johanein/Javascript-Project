setTimeout(() => {
  console.log("console logged");
}, 0);

const promiseTaken = Promise.resolve(
  "promise resolved after 10 raised to 9 while loop iterations"
);

promiseTaken.then((vary) => {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  console.log(vary);
});
