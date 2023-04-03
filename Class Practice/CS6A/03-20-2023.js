/**for of loop */
//let scores = [10, 20, 40];
/* let scores = { a: 20, b: 30, c: 40 };
for (let s in scores) {
  console.log(s);
} */
/**classes */
/* let Car = class {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  get getcolor() {
    return this.color;
  }
  set setcolor(c) {
    if (c !== "") {
      this.color = c;
    } else {
      return;
    }
  }
  displaycar() {
    console.log(
      "color of my car is " + this.color + " and the model is " + this.model
    );

    console.log(
      `color of my car is ${this.color} and the model is ${this.model}`
    );
  }
};

/**literals */

/**use of this keyword */

//console.log(this);
function Car() {
  this.speed = 0;
  //console.log(this);
  this.speedUp = function (speed) {
    this.speed = speed;
    //console.log(this);
    let self = this;
    setTimeout(function () {
      console.log(self);
      50; // undefined
    }, 1000);
  };
}

let car = new Car();
console.log(car.speed); //0
car.speedUp(50); // 50
