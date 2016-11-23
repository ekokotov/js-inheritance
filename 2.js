// What is prototype

function Developer() {
  this.skills = [];
}

Developer.prototype.sayHello = function () {
  console.log('hello')
}

var devs = [];
for (var i = 0; i < 100; i++) {
  devs.push(new Developer());
}

devs[5].sayHello();
// console.log(devs[5].constructor === Developer);
// console.log(devs[5] instanceof Developer);

Developer.prototype.sayHello = function() {
  console.log("Fking job");
}
devs[5].sayHello();

devs[5].sayHello = function() {
  alert('Привет')
}
// devs[5].sayHello();
//
// delete devs[5].sayHello;
// devs[5].sayHello();
