
// --------------------TEACHER PROTOTYPE--------------------
function Teacher(n,d,c,r) {
  this.name = n;
  this.department = d;
  this.class = c;
  this.rating = r;
}
  Teacher.prototype.addRatings =
  function (newRatings){
          this.rating.push(newRatings);
        };

  Teacher.prototype.getAvgRatings =
  function (){
      var sum = this.rating.reduce(function (a, b) { return a + b; });
      var avg = sum / this.rating.length;
      var clean = Math.round(avg * 10) / 10;
      return clean;
    };



var teacherEve = new Teacher("Eve Polastri", "Investigative Science", "Homicide Investigation",[3, 4, 2, 2, 5, 4] );
var teacherLana = new Teacher("Lana Winters", "Journalism", "Investigative Reporting",[4, 2, 5, 5, 2, 5, 5] );
var teacherMichelle = new Teacher("Michelle McNamara", "Architecture", "Architecture of Pataloma Valley: 1950-1976",[2, 5, 5, 5, 2, 3, 5, 4] );

console.log("Teacher Info: ");
console.log(teacherEve.name);
console.log(teacherEve.department);
console.log("Avg. Rating: " + teacherEve.getAvgRatings());
console.log("Adding Rating: " + "5");
teacherEve.addRatings(5);
console.log("New Avg. Rating: " + teacherEve.getAvgRatings());


// --------------------COURSES PROTOTYPE--------------------
function Course(d, n, cH, t) {
  this.name = n;
  this.department = d;
  this.creditHr = cH;
  this.teacher = t;
}

var courseHomInv = new Course("Investigative Science", "Homicide Investigation", "3", teacherEve.name);
var courseInvRep = new Course("Journalism", "Investigative Reporting", "3", teacherLana.name);
var courseArch = new Course("Architecture", "Architecture of Pataloma Valley: 1950-1976", "3", teacherMichelle.name);

console.log(" ");
console.log("Course Info: ");
console.log("Course Name: " + courseHomInv.name);
console.log("Course Department: " + courseHomInv.department);
console.log("Credit Hours: " + courseHomInv.creditHr);
console.log("Teacher: " + courseHomInv.teacher);


// -------------------- STUDENT PROTOTYPE --------------------
function Student(n,m,e,c,g) {
  this.name = n;
  this.major = m;
  this.email = e;
  this.courses = c;
  this.grades = g;
}

// ADDCOURSE FUNCTION
Student.prototype.addCourse =
  function (newCourse) {
    this.courses.push(newCourse);
  };


// DROPCOURSE FUNCTION
Student.prototype.dropCourse =
  function(removeCourse) {
    for (var i = 0; i < this.courses.length; i++) {
      if (this.courses[i] == removeCourse) {
        this.courses.splice([i], 1);
      };
    };
  };

// CHANGEMAJOR FUNCTION

Student.prototype.changeMajor =
  function(majChange) {
    this.major = majChange;
  };

Student.prototype.avgGPA =
  function () {
    var sum = this.grades.reduce(function (a, b) { return a + b; });
    var avg = sum / this.grades.length;
    var clean = Math.round(avg * 10) / 10;
    return clean;
  };


var studentVilanelle = new Student("Oksana Astonkova", "Creative Writing", "villanelle@gmail.com", ["Poetry", "Advanced Writing", "Anatomy", "Krav Maga"], [3.5, 2.6, 4.2, 4.0])


console.log(" ");
console.log("Student Info: ");
console.log(studentVilanelle.name);
console.log("Major: " + studentVilanelle.major);
console.log("Change Major: " + "Fine Art");
studentVilanelle.changeMajor("Fine Art");
console.log("Major (updated): " + studentVilanelle.major);
console.log(studentVilanelle.email);
console.log("Courses: " + studentVilanelle.courses);
console.log("Add New Course: " + "Drawing 101");
console.log("Drop Course: " + "Krav Maga");
studentVilanelle.addCourse("Drawing 101");
studentVilanelle.dropCourse("Krav Maga");
console.log("Courses (updated): " + studentVilanelle.courses);

