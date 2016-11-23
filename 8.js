// множественное наследование интерфейсов

function BackendDeveloper(platform) {
  this.platform = platform;
  this.writeBackend = function() {
    console.log('I can write backend');
  }
}

function FrontEndDeveloper(skills) {
  this.skills = skills;
  this.writeFrontEnd = function() {
    console.log('I can write backend');
  }
}

function FullStackDeveloper(name, platform, skills) {
    this.name = name;
    BackendDeveloper.call(this, platform);
    FrontEndDeveloper.call(this, skills);
}

// + тут ещё в прототип можно унаследовать
// ...

var Jewgenij = new FullStackDeveloper('Женька', 'PHP', ['CSS', 'HTML'])
console.dir(Jewgenij)
