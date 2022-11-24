// null, undefined, number, string, Date (any class as a type!), any, boolean, void
import { nanoid } from "nanoid";

interface PersonInterface {
  name: string;
  lastName?: string;
}

interface PersonWithAgeInterface extends PersonInterface {
  age: number;
}

type Person = { name: string; lastName?: string };

interface PersonWithAge extends Person {
  age: number;
}

// type Pets = "dog" | "cat" | "fish";
interface PersonWithPet<Pet> extends Person {
  pet: Pet;
}

const somePersonWithADog: PersonWithPet<"anything"> = {
  name: "Walter",
  pet: "anything",
};

const thePet = somePersonWithADog.pet;

interface ComplicatedObject {
  keyA: string;
  keyB: string;
  keyC: string;
  keyD: string;
  pizza: string;
  personsWithsDogs: Record<string, PersonWithPet<"doggos">>;
  keyE: string;
  keyF: string;
}

// interface PizzaAndPersonsObject {
//   pizza: string;
//   personsWithsDogs: Record<string, PersonWithPet<"dog">>;
// }

type PizzaAndPersonsObject = Pick<
  ComplicatedObject,
  "pizza" | "personsWithsDogs"
>;

type WithoutPizzaAndPersonsObject = Omit<
  ComplicatedObject,
  "pizza" | "personsWithsDogs"
>;

export function helloPerson(person: PersonWithAge, greeting?: string) {
  // person: { name: string , lastName: string }
  console.log(
    (greeting || "Hello") + " " + person.name + " " + (person.lastName || "")
  );
}
helloPerson({ name: "", age: 70 });

export function helloPersonInterface(
  person: PersonInterface,
  greeting?: string
) {
  // person: { name: string , lastName: string }
  console.log(
    (greeting || "Hello") + " " + person.name + " " + (person.lastName || "")
  );
}

helloPersonInterface({ name: "", age: 70 } as PersonInterface);

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

type IdsToPersons = Record<string, Person | undefined>;

let someId = "";
// objects in TS...
// Person above is an object
const persons = new Array(5)
  .fill(0)
  .map((_) => nanoid())
  .reduce((agg, id) => {
    someId = id;
    return { ...agg, [id]: { name: "", lastName: "", id } };
  }, {}) as IdsToPersons;

console.log(someId);
console.log(persons);

const singlePerson = persons[someId];
console.log(singlePerson);

function identity<T>(a: T): T {
  return a;
}

const result = identity<string>("hello");

function makeArrayOf5<A>(a: A): A[] {
  return [a, a, a, a, a];
}

function makeArrayOfLen<A>(a: A, b: number): A[] {
  return new Array(b).fill(a);
}

// { "some-id-abcdef": { } }
function returnFromObjectWithDefault<A, X>(
  a: Record<string, A>,
  b: string,
  defaultValue: X
): X | A {
  const out = a[b];
  return out || defaultValue;
}

returnFromObjectWithDefault(persons, someId, "not-found");
returnFromObjectWithDefault({ a: "a", b: "b" }, someId, "not-found");
returnFromObjectWithDefault(
  { func1: () => {}, func2: () => {} },
  someId,
  "not-found"
);

// function sum<T extends string | number>(a: T, b: T): T {
//   return a + b;
// }
// sum<string | number>("a", 1);

// function overloads
function sum(a: string, b: string): string;
function sum(a: number, b: number): number;
// you could add many many more...
function sum(a: any, b: any): any {
  // you can, but probably shouldn't
  // if (typeof a === "string") {
  //   return "these are strings I am not going to sum them!";
  // }
  return a + b;
}

const res = sum(1, 2);
// this wouldn't work
// const res = sum("1", 2);
// neither would this
// const res = sum(undefined, 2);

const resString = sum("1", "2");
