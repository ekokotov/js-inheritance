// Extend prototype

function Developer() {
  this.skills = [];
  //side #1
  // return {
  //   a: 1
  // }

  // side #2
  //document.write('test')
}

// оптимизация ?!
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
WebDeveloper.prototype = new Developer()
var Jewgenij = new WebDeveloper('Женька')
//
Jewgenij.learn('Js')
Jewgenij.learn('CSS')
Jewgenij.whatIcan()
