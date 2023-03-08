let arr = [1, 2, 3, 4, 5];
/**
 * reduce function
 */
function reducer(x, y) {
  return x + y;
}
arr.reduce(reducer, 0);
/**
 * reducer(1,2) = 3 | reducer(100,1) =101
 * reducer(3,3) =6
 * reducer(6,4) =10
 * reducer (10,5)=15
 */
/**Objects */
let obj = { name: "Ali", reg: 01 };
console.log(obj);
let obj2 = new Object();
obj2.name = "Asim";
obj2["reg"] = 02;
console.log(obj.name + obj["reg"]);
let arr1 = [
  1,
  2,
  3,
  "ALi",
  { name: "kamran" },
  function test() {
    console.log("Ia m a function inside array");
  },
];
arr1[5]();
/**Template function */
function Student(n, r) {
  this.name = n;
  this.reg = r;
}
let o1 = new Student("kamran", 01);
let o2 = new Student("kamran", 01);
let o3 = o1;
console.log(o1 == o3);
//console.log(o1);
//delete o1.name;
//console.log(o1);
