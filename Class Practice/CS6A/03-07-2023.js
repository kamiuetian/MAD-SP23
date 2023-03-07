let arr = [1, 2, 3, 4, 5];
let result = arr.reduce(reducer, 100);
console.log(result);
/**
 *
 * reducer(1,2) = 3   | reducer(100,1) =101
 * reducer (3,3)= 6   | reducer(101,2) =103
 * reducer (6,4) =10
 * reducer (10,5) =15
 */
function reducer(x, y) {
  return x + y;
}
/**Objects */
let std1 = { name: "kamran", age: 30, reg: 01 };
console.log(std1["name"]);
console.log(std1.age);
let std2 = new Object();
std2.name = "kamran";
std2.age = 30;
std2.reg = 01;
let std3=std1;
console.log(std3==std1);
//console.log(std2.reg == std1.reg);
/**Constructor */
/* function Student(name, age) {
  this.name = name;
  this.age = age;
}
let c1 = new Student("kashif", 20);
console.log(c1);
delete std1.name;
console.log(std1); */

/**Values in arrays and objects */
/* let a = [1, 2, 3, 4, "abc", true, false, function () {}, {}];
let o = {
  name: "abc",
  age: 20,
  printdetail: function () {
    console.log(this.name + this.age);
  },
  address: { street: 13, house: 123, city: "Attock" },
};
o.printdetail();
console.log(o.address.city) */
