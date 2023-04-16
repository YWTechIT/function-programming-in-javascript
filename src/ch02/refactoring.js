// imperative
const names = [
  "alonzo church",
  "Haskell curry",
  "stephen_kleene",
  "John Von Neumann",
  "stephen_kleene",
];

var result = [];
for (let i = 0; i < names.length; i++) {
  var n = names[i];
  if (n !== undefined && n !== null) {
    var ns = n.replace(/_/, " ").split(" ");
    for (let j = 0; j < ns.length; j++) {
      var p = ns[j];
      p = p.charAt(0).toUpperCase() + p.slice(1);
      ns[j] = p;
    }
    if (result.indexOf(ns.join(" ")) < 0) {
      // 중복제거
      result.push(ns.join(" "));
    }
  }
}

result.sort();

// functional
_.chain(names)
  .filter(isValid)
  .map((s) => s.replace(/_/, " "))
  .uniq() // 중복 제거
  .map(_.startCase) // 대소문자 맞추기
  .sort()
  .value();

// ['Alonzo Church', 'Haskell Curry', 'John Von Neumann', 'Stephen Kleene']
