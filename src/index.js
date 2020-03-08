import Person from './person';
import { pipe, compose } from './utils/index';

class Me extends Person {
  fullName() {
    return this.firstName + this.lastName;
  }
}

const main = () => {
  const itWroks =
    pipe(Math.pow, Math.sqrt)(2, 3) === compose(Math.sqrt, Math.pow)(2, 3);
  console.log(itWroks);
  console.log(new Me({ firstName: 'ayub', lastName: 'begimkulov', age: 17 }));
};

main();
