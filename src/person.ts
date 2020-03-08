interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
}

export default abstract class Person {
  protected firstName: string;
  protected lastName: string;
  protected age: number;
  constructor({ firstName, lastName, age }: IPerson) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  greet() {
    console.log('Hello, my name is' + this.fullName());
  }
  abstract fullName(): string;
}
