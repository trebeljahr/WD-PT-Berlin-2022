export function helloPerson(person) {
  // person: { name: string , lastName: string }
  console.log("Hello " + person.name + " " + person.lastName);
}

export function addNumbers({ a, b }) {
  // argument1: { a: number , b: number }
  console.log("Result: ", a + b);
}
