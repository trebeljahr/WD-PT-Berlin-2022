// null, undefined, number, string, Date (any class as a type!), any, boolean, void
import { nanoid } from "nanoid";

type Person = { name: string; lastName?: string };

export function helloPerson(person: Person, greeting?: string) {
  // person: { name: string , lastName: string }
  console.log(
    (greeting || "Hello") + " " + person.name + " " + (person.lastName || "")
  );
}

type Friendship = { person1: Person; person2: Person };

const friends: Friendship[] = [];

export function befriend(person1: Person, person2: Person) {
  friends.push({ person1, person2 });
  // return undefined; => this is not *exactly* like void.
}

export function addNumbers({ a, b }: { a: number; b: number }) {
  // argument1: { a: number , b: number }
  console.log("Result: ", a + b);
}

export function thisReturnsNothing(): void {
  console.log("abc");
}

export function createPerson(name: string, lastName?: string): Person {
  return { name, lastName };
}

class MyCustomClass {
  public length: number;
  constructor() {
    this.length = 5;
  }
}

export function typeInference(date: Date | string | MyCustomClass) {
  if (date instanceof Date) {
    // date.length => doesn't work here because TS infers type to be Date instead of string
    // do one thing
  } else {
    date.length;
    // do another thing
  }
}

// objects in TS...
// Person above is an object
const ids = new Array(5).fill(0).map((_) => nanoid());
console.log(ids);
