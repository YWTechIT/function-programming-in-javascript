function applyOperation(
  a: number,
  b: number,
  opt: (a: number, b: number) => void
) {
  return opt(a, b);
}

const multiplier = (a: number, b: number) => a * b;

const mathResult = applyOperation(2, 3, multiplier);
console.log("mathResult :>> ", mathResult);

function add(a: number) {
  return function (b: number) {
    return a + b;
  };
}

const resultAdd = add(2)(3);
console.log("resultAdd :>> ", resultAdd);

// AS-IS
function printPeopleInTheUs(people) {
  for (let i = 0; i < people.length; i++) {
    const thisPerson = people[i];
    if (thisPerson.address.country === "US") {
      console.log("thisPerson :>> ", thisPerson);
    }
  }
}

// TO-BE
function printPeople(people, action) {
  for (let i = 0; i < people.length; i++) {
    action(people[i]);
  }
}

function action(person) {
  if (person.address.country === "US") {
    console.log("person :>> ", person);
  }
}

// const result = printPeople(people, action);
