export function helloPerson(person: { name: string; lastName: string }) {
  // person: { name: string , lastName: string }
  console.log("Hello " + person.name + " " + person.lastName);
}

export function addNumbers({ a, b }: { a: number; b: number }) {
  // argument1: { a: number , b: number }
  console.log("Result: ", a + b);
}
