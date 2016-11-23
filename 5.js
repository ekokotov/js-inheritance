//  prototype to prototype

function Developer() {
  this.skills = [];
}

Developer.prototype.learn = function(technology) {
  this.skills.push(technology);
}

function WebDeveloper(name) {
    this.skills = [];
    this.name = name;
    //this.writeCode = function() {}
}

// наследование
WebDeveloper.prototype = Developer.prototype;
WebDeveloper.prototype.constructor = WebDeveloper;
WebDeveloper.prototype.writeCode = function() {}

var Jewgenij = new WebDeveloper('Женька');
Jewgenij.learn('Js');

//console.log(Jewgenij.constructor);
