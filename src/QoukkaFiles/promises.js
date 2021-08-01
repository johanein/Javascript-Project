console.log("start 1");

const getValueAPI = (cb) => {
  setTimeout(() => {
    cb(1);
  }, 3000);
};
const getValueAPI1 = (cb) => {
  setTimeout(() => {
    cb(2);
  }, 3000);
};
const getValueAPI2 = (cb) => {
  setTimeout(() => {
    cb(3);
  }, 3000);
};

// call back hell example
getValueAPI((params) => {
  console.log(params);
  getValueAPI1((params1) => {
    console.log(params + params1);
    getValueAPI2((params2) => {
      console.log(params + params1 + params2);
    });
  });
});

const getValuePromise = new Promise((resolve, reject) => {
  resolve([1]);
});
const getValuePromise1 = new Promise((resolve, reject) => {
  resolve([2]);
});
const getValuePromise2 = new Promise((resolve, reject) => {
  reject([3]);
});

// Promise all
const allPromises = Promise.all([
  getValuePromise,
  getValuePromise1,
  getValuePromise2,
]);
allPromises
  .then((params) => {
    console.log(params.flat(Infinity));
  })
  .catch((err) => {
    console.log(err);
  });

// promise all settled
const allPromisesSettled = Promise.allSettled([
  getValuePromise,
  getValuePromise1,
  getValuePromise2,
]);
allPromisesSettled
  .then((params) => {
    console.log(params);
  })
  .catch((err) => {
    console.log(err);
  });

// promise any
const PromisesAny = Promise.any([
  getValuePromise,
  getValuePromise1,
  getValuePromise2,
]);
PromisesAny.then((params) => {
  console.log(params);
}).catch((err) => {
  console.log(err);
});

// promise race
const PromisesRace = Promise.race([
  getValuePromise,
  getValuePromise1,
  getValuePromise2,
]);
PromisesRace.then((params) => {
  console.log(params);
}).catch((err) => {
  console.log(err);
});

console.log("end 2");
