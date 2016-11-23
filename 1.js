//  ЗАДАЧА
function Developer() {
  this.skills = [];

  this.learn = function(technology) {
    this.skills.push(technology);
  }
}

function WebDeveloper(name) {
    this.name = name;

    this.whatIcan = function() {
      console.log(this.name + " может: " + this.skills);
    }
}
// наследование
//.....

var Jewgenij = new WebDeveloper('Женька')
Jewgenij.learn('Js')
Jewgenij.learn('CSS')
Jewgenij.whatIcan()
