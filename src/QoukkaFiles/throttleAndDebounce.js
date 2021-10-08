let last = 0;
const delay = 1000;
let timer;

const throttle = () => {
  const now = new Date().getTime();
  const periode = now - last;
  if (periode > delay) {
    last = now;
    console.log("clicked me");
  }
};

const debounce = () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    console.log("clicked me");
  }, delay);
};
