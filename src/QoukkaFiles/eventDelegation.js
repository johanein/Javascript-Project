document.querySelector("#categories").addEventListener(
  "click",
  (e) => {
    console.log(e.target.id);
    console.log(e.target.dataset.dataid);
  },
  false
);
