function adder(x, y) {
  return x + y;
}
/**Arrow function */

/* const adder = (x, y) => {
  return x + y;
}; */
/**one parameter */

const func_one_param = (x) => {
  return x;
};
/**arow function as argument */
let arr = [1, 2, 3, 4, 5];
arr.map((x) => x ** 2);
/**Returning object */
const func_ret_obj = () => {};

//console.log(func_ret_obj());
/**rest operator */
const rest_func = (...args) => {
  console.log(args);
};
rest_func(1, 2, 3, 4, 5, 6);
rest_func(1, 2);
/**Spread Operator */
let arr_spread = ["a", 1, true];
let arr_2 = [...arr_spread, "d", "e", "f"];

//console.log(typeof arr_2[1]);
/**Destructuring */
const func_arr = () => {
  return {
    std1: { name: "ali" },
    std2: { name: "asim" },
    std3: { name: "qasim" },
  };
};
//let [std1, std2, std3, std4 = { name: "kamran" }] = func_arr(); // [{},{},{}]
let [s3] = func_arr(); // [{},{},{}]

console.log(s3);
