const promise1 = new Promise((resolve) => {
  resolve("albs");
});
const promise2 = new Promise((resolve, reject) => {
  resolve("angs");
  //   reject("failed one");
});
const promise3 = new Promise((resolve) => {
  resolve("arun");
});

Promise.__proto__.myAll = async (arg1) => {
  const returnArray = [];
  const errorArray = [];
  await arg1.forEach(async (each) => {
    await each
      .then((res) => {
        returnArray.push(res);
      })
      .catch((err) => {
        errorArray.push(err);
        console.log(errorArray);
      });
  });
  return new Promise((resolve, reject) => {
    if (errorArray.length) {
      reject(errorArray.join(""));
    } else {
      resolve(returnArray);
    }
  });
};

Promise.myAll([promise1, promise2, promise3])
  .then((var1) => {
    console.log(var1);
  })
  .catch((err) => {
    console.log(err);
  });
