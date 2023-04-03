/**conventional */
function adder(x, y) {
  return x + y;
}
/**Arrow function
 * () => {}
 */
/* const adder = (x, y) => {
  return x + y;
}; */
adder(2, 5);
/**Arrow function with no arguments */
const func_noArgs = () => {
  console.log("I am a function without args");
};
/**Arrow function with single argument */
const func_singleArgs = (x) => {
  console.log(x);
};
/***Arrow function with single return statement */
const func_singleRet = (x) => x ** 2;
console.log(func_singleRet(3));
/**Returning onject as a single return statemnt */
const func_retObj = () => {
  test: "test";
};
console.log(func_retObj());
/**Arrow functions as an arguments */
let arr = [1, 2, 3, 4, 5];
/**
 * function sqaurer(x)
 * {
 * return x**2
 * }
 */
arr.map((x) => {
  x ** 2;
});
/**REst operator
 * java: main ( str args[])
 */
const adder_multiple = (...args) => {
  console.log(args);
};
adder_multiple(1, 2);
adder_multiple(1, 2, 3, 4);
/**spread operator */
let arr1 = ["a", "b", "c"];
let arr2 = ["d", "e", "f"];
let arr3 = [...arr1, ...arr2];
console.log(...arr1, ...arr2);
/**Destructuring */
const func_arr = () => {
  return [1, 2, 3];
};
let result = func_arr();
/*let a=result[0]
let b
let c*/
//let [a = 5, b = 6, c = 10, d = 20] = result;
//let [a, b] = result;
//let [, , c] = result;
//console.log(c);
c = "initial";
let obj = { a: "a", b: "b", c: "c" };
//let { d: b, e: a, f: c } = obj;
let { b, a, d } = obj;
console.log(a, b, c, d);
/**object des */
console.log("-------------");
let obj_d = { q: "q", r: "r", s: "s" };
let { q: x, s: y, r: z } = obj_d;
console.log(x, y, z);
