// Extend using for in
function Developer() {
  this.skills = [];

  this.learn = function(technology) {
    this.skills.push(technology);
  }
}
Developer.prototype.sayHello = function() {}

function WebDeveloper(name) {
    this.name = name;

    this.whatIcan = function() {
      console.log(this.name + " может: " + this.skills);
    }
}

// наследование
function _extend(C, P) {
  for(property in P) {
    if (P.hasOwnProperty(property))
    C[property] = P[property];
  }
}

var dev = new Developer()
var Jewgenij = new WebDeveloper('Женька')
_extend(Jewgenij, dev)

Jewgenij.learn('Js')
Jewgenij.learn('CSS')
Jewgenij.whatIcan()
