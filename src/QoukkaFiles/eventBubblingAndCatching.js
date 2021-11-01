document.querySelector("#grandParent").addEventListener(
  "click",
  () => {
    console.log("grandparent is clicked");
  },
  false
);
document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("parent is clicked");
    e.stopPropagation();
  },
  false
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child is clicked");
  },
  false
);
