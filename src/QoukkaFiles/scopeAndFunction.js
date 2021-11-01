function b() {
  function d() {
    console.log(a);
  }
  var a = 10;
  d();
  console.log(c);
}
// console.log(c); // here we get the message 'cannot access before initialization'
const c = 20;
b();
let e = 10;
console.log(e);
{
  var a = 10; // if we delete this block, the statement below should give not defined
  console.log(a);
  e = 8;
}
console.log(a);
console.log(e);
