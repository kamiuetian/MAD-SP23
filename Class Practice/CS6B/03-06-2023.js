/**Block Scope */
{
  var a = 2;
}

console.log(a);

/**
 * String methods
 */
let str1 = "firstf";
let str2 = "second";
console.log(str1 + str2); //concatention
console.log(str1.endsWith("at")); //lenght

/**
 * Functions
 */
function my_func(p1 = 1, p2, p3) {
  console.log("I am a function with 3 params");
  let result = p1 + p2 + p3;

  return result;
}
let result = my_func;
console.log(result());
/**Function as arguments */
function func() {
  console.log("I am an argument function");
}
function my_func_higher(func) {
  let a = 30;
  function inner_function() {
    console.log("I am an inner function : " + a);
  }
  func();
  return inner_function;
}
let r = my_func_higher(func);
r();

/**Arrays */
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1[4]); //index base access
console.log(arr1.length); //length of array
for (a = 1; a <= arr1.length; a++) {
  //Access array in loop
}
/**Map */
function multiplier(x) {
  return x * 2;
}
let r_arr = arr1.map(filter_func);
/**
 * multipler(1) = 2
 * multipler(2) = 4
 */
console.log(r_arr);
/**Filter */
function filter_func(x) {
  if (x % 2 == 0) {
    return true;
  } else return false;
}
let r_f_result = arr1.filter(filter_func);
console.log(r_f_result);
/**
 * filter_func(1) =false
 * filter_func(2)=true
 * [f,t,f,t,f]
 */
/**
 * student1=[3 , 3.5 , 3.5 , 2]
 *
 * find the letter grade of each subject.
 * display all subjects with gpa greater than 3.
 */
