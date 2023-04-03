/* let arr = [1, 2, 3, 4, 5];
for (let [i, s] of arr.entries()) {
  console.log(i, s);
}
/**for in */
/* let obj = { a: 1, b: 2, c: 3 };
for (let index in obj) {
  console.log(index);
} */
/**classes */
const Student = class {
  constructor(name, reg) {
    this.name = name;
    this.reg = reg;
  }
  uni = "CUI";
  display() {
    console.log(this.name, this.reg);
  }
  get getname() {
    return this.name;
  }
  set setname(n) {
    if (n !== "") this.name = n;
    else return;
  }
};
/** */
/* let std1 = new Student("Ali", 01);
let std2 = new Student("Qasim", 05);
console.log(std1.name);
console.log(Student.uni); */
/* let str = `I am a long string that can 
on to multiple lines`;
let name = "Kamran";
let address = "CUI";
console.log("my name is " + name + " and my address is " + address);
console.log(`my name is ${name} and my adress is ${address}`);
 */
let content = `<html>
    <body>
        <h1>Hello World</h1>
        <img src="heelo.jpg"/>
        <p>"I am a quotation"</p>
    </body>\
</html>`;
/**this keyword*/
//console.log(this);
/* let speed = 50;
function display() {
  let speed = 30;
  let dip = (function () {
    console.log(this.speed);
  })();
}
let a = new display();
console.log(a.dip); */
let ob = {
  a: 1,
  b: 2,
  display: function () {
    console.log(this);
  },
};
//ob.display();
function Car() {
  this.speed = 0;
  //console.log(this); //0
  this.speedUp = function (speed) {
    this.speed = speed;
    //console.log(this); //50
    setTimeout(() => {
      console.log(this.speed); //50
    }, 1000);
  };
}

let car = new Car();

car.speedUp(50);
