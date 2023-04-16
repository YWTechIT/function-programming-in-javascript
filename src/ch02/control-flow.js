// Imperative
var loop = optC();

while (loop) {
  var condition = optA();
  if (condition) {
    optB1();
  } else {
    optB2();
  }
  loop = optC();
}

optD();

// Declarative
optA().optB().optC().optD();
