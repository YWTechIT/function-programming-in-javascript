var myVar = "foo";
function doWork() {
  this.myVar = "123";
  // this.myVar = "myVar";
  console.log(this.myVar);
}

doWork();

var obj = {
  prop: "fee",
  getProp: function () {
    console.log(this.prop);
    return this.prop;
  },
};

obj.getProp();

function myType(arg) {
  this.props = arg;
}

var someVal = new myType("어떤 인수");
console.log("someVal :>> ", someVal);
