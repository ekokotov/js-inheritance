// Object.create

function Developer() {
  this.skills = [];
}
// Методы -- в прототип
Developer.prototype.learn = function(technology) {
  this.skills.push(technology);
}

function WebDeveloper(name) {
    this.name = name;
    this.skills = []; // а если б не было

    this.whatIcan = function() {
      console.log(this.name + " может: " + this.skills);
    }
}

// наследование
WebDeveloper.prototype = Object.create(Developer.prototype);
WebDeveloper.prototype.constructor = WebDeveloper;

var Jewgenij = new WebDeveloper('Женька')

Jewgenij.learn('Js')
Jewgenij.learn('CSS')
Jewgenij.whatIcan()
