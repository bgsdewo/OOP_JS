//contoh 1
let arr = [123];
console.log(arr);
arr.hello = () => {
  console.log("Hello world");
};

console.log(arr);
console.log(arr.hello());

//contoh 2
// let arr2 = [3, 4];
// console.log(arr2.hello()); //ini gabisa!

//solusinya
Array.prototype.hello = () => {
  console.log("hello World");
};

//bikin baru lagi untuk ngetes
const kelas1 = [1, 2, 3];
const kelas2 = [4, 5, 6];
console.log(kelas1.hello());
console.log(kelas2.hello());

//bisa custom jiga
Array.prototype.pop = () => {
  return "pop dinonaktifkan";
};
console.log(kelas1.pop());
