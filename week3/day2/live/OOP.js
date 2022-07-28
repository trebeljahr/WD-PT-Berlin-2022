// oop - object oriented programming
const spiderMan = {
  firstName: "Peter",
  lastName: "Parker",
  revealSecretIdentity() {
    console.log("🕸️  I am spider man 🕸️");
  },
  sayHello() {
    console.log(`Hello there I am ${this.firstName} ${this.lastName}`);
    // methods can even call other methods!
    this.sayBye();
  },
  sayBye: function () {
    console.log("Gotta go, I need to save New York!");
  },
};

spiderMan.sayHello();

// console.log();

const myConsole = {
  log() {
    console.log("*********");
    console.log(...arguments);
    console.log("*********");
  },
};

myConsole.log("Funny that this works");

// a class / constructor functions is like a template that we can use to create new "instances" which are new objects
class Superhero {
  #secretIdentity;
  constructor(firstName, lastName, city, secretIdentity) {
    console.log("Hello I am called from the constructor");
    console.log(firstName, lastName);
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.#secretIdentity = secretIdentity;
  }

  //   debug() {
  //     console.log("Hello I am the debug method");
  //   }
  revealSecretIdentity() {
    console.log(`I am ${this.#secretIdentity}`);
  }

  sayHello() {
    console.log(`Hello there I am ${this.firstName} ${this.lastName}`);
    // methods can even call other methods!
    this.sayBye();
  }

  sayBye() {
    console.log(`Gotta go, I need to save ${this.city}`);
  }
}

// how to make an instance of a class
const superMan = new Superhero("Clark", "Kent", "Earth", "Superman");
console.log(typeof superMan);
console.log(superMan);
superMan.sayHello();
superMan.revealSecretIdentity();
console.log("=================");
// superMan.firstName = "Something entirely different"
console.log(superMan.secretIdentity);
// console.log(superMan.debug());

const spiderMan2 = new Superhero("Peter", "Parker", "New York", "Spiderman");
spiderMan2.sayHello();
spiderMan2.revealSecretIdentity();

class Shape {
  constructor(name, numberOfCorners, numberOfEdges) {
    this.name = name;
    this.numberOfCorners = numberOfCorners;
    this.numberOfEdges = numberOfEdges;
  }

  info() {
    console.log(
      `This is a ${this.name}. It has ${this.numberOfCorners} corners and ${this.numberOfEdges} edges`
    );
  }
}

class Rectangle extends Shape {
  constructor(a, b) {
    super("Rectangle", 4, 4);
    this.a = a;
    this.b = b;
  }

  // getter / setter;
  get area() {
    return this.a * this.b;
  }

  //   area() {
  //     return this.a * this.b;
  //   }

  info() {
    super.info();
    console.log(`It has sidelengths a: ${this.a} and b: ${this.b}`);
  }
}

const rect1 = new Rectangle(10, 5);
console.log(rect1);
rect1.info();
console.log(rect1.area);

class Circle extends Shape {
  constructor(r) {
    super("Circle", 0, 1);
    this.r = r;
  }
  area() {
    return 2 * Math.PI * this.r;
  }
}

const circle1 = new Circle(20);
console.log(circle1);
circle1.info();
console.log(circle1.area());

class Square extends Rectangle {
  constructor(a) {
    super(a, a);
    this.name = "Square";
  }
}

const square1 = new Square(5);
square1.info();
console.log(square1.area);
