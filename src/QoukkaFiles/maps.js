const mapVar = new Map([
  [1, "a"],
  [2, "b"],
]);

for (const [key, value] of mapVar.entries()) {
  console.log({ key, value });
}
