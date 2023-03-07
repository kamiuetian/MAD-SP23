/**Variable declaration */
/*var numb = 50;
console.log(typeof numb);
numb = "my value";
console.log(typeof numb);*/
let numb2 = true;
console.log(typeof numb2);
/*const numb3 = 30;
numb3 = 50;
console.log(numb3);*/
let numb = null;
//console.log(typeof numb);
/* if (numb === null) {
  console.log(numb == null);
} */

//console.log(2 === "2");
console.log(2 * "2" + 2);
let a = 2;
if (a == 2) {
  var myvar = "inside if";
}
console.log(myvar);
let str1 = "first string srting";
let str2 = "2nd string";
/**javascript is an higher order  */
/**
 *
 * my_func()  this is function call
 * my_func    this is function reference
 */
function my_func(func) {
  function inner_func() {
    console.log("I am an inner function");
  }
  return inner_func;
}
function func_arg() {
  console.log("I am an argument function");
}
//let receive_var = my_func(func_arg);
//inner_func();
//receive_var();
/**
 * Filter
 */
function divby2filter(x) {
  if (x % 2 == 0) {
    return true;
  } else return false;
}
let array = [1, 2, 3, 4, 5, 6];
let arr2 = array.filter(divby2filter);
console.log(arr2);
/**
 * divby2filter(1)=false
 * divby2filter(2)=true
 *
 * divby2filter(6)=true
 * [f,t,f,t,f,t]
 */
/**
 *
 * Map
 */
function squarer(x) {
  return x ** 2;
}
let square_arr = array.map(divby2filter);
console.log(square_arr);
/**
 * squarer(1)=1
 * squarer(2)=4
 *
 *
 * squarer(6)=36
 */

/**
 * [3.5 , 2 , 3.1 , 4 , 1.6]
 * create a filter function that filters all students having gpa greater than 3.
 * and multiply each element of the returned array by 2.
 */
