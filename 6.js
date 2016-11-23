// temp function

function Developer() {
  this.skills = [];
}
// Методы -- в прототип
Developer.prototype.learn = function(technology) {
  this.skills.push(technology);
}

function WebDeveloper(name) {
    this.name = name;

    this.whatIcan = function() {
      console.log(this.name + " может: " + this.skills);
    }
}

// наследование
function tempF(){}
tempF.prototype = new Developer(); // я ж еще не создал ничего
WebDeveloper.prototype = new tempF();
WebDeveloper.prototype.constructor = WebDeveloper;

var Jewgenij = new WebDeveloper('Женька')

Jewgenij.learn('Js')
Jewgenij.learn('CSS')
Jewgenij.whatIcan()
