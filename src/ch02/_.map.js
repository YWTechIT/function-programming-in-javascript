import { _map } from "lodash";

var result = [];
var persons = [p1, p2, p3, p4];

// Imperative
for (let i = 0; i < persons.length; i++) {
  var p = persons[i];
  if (p !== null && p !== undefined) {
    result.push(p.fullname);
  }
}

// Declarative
_.map(persons, (s) => (s !== null && s !== undefined ? s.fullname : ""));
