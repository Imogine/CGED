function Student(n,m,e,c,g) {
  this.name = n;
  this.major = m;
  this.email = e;
  this.courses = c;
  this.grades = g;
}

Student.prototype.addCourse =
  function (newCourse) {

  };

Students.prototype.dropCourse =
  function(removeCourse) {

  };

Students.prototype.changeMajor =
  function(majChange) {

  };

Students.prototype.avgGPA =
  function () {
    var sum = this.grades.reduce(function (a, b) { return a + b; });
    var avg = sum / this.grades.length;
    var clean = Math.round(avg * 10) / 10;
    return clean;
  };

var studentVilanelle = new Student("Oksana Astonkova", "Creative Writing", "villanelle@gmail.com", ["Poetry", "Advanced Writing", "Anatomy", "Krav Maga"], [3.5, 2.6, 4.2, 4.0])

console.log(studentVilanelle.name);
console.log(studentVilanelle.major);
console.log(studentVilanelle.email);
