console.log("This file is linked!");

// Teacher Variables
var tName = ('Sally Jones');
var tDepartment = ('Physics');
var x = 3.75414;
var y = 4.78234;
var z = 2.2097;
var tRating = [Math.round(x*100)/100, Math.round(y*100)/100, Math.round(z*100)/100];
var avgMath = [(x+y+z)/3];
var avgRating = (Math.round(avgMath*100)/100)

console.log("Teacher: " + tName, "Department: " + tDepartment, "Ratings: " + tRating, "Average: " + avgRating);


//Student Variables
var sName = ('Sally Jones');
var sCourses = ['Calculus', 'Econ 101'];
var x = 5.75414;
var y = 4.78234;
var z = 4.2097;
var sGPA = [Math.round(x*100)/100, Math.round(y*100)/100, Math.round(z*100)/100];
var avgsMath = [(x+y+z)/3];
var avgsGPA = (Math.round(avgsMath*100)/100)

console.log("Student: " + sName, "Courses: " + sCourses, "GPA: " + sGPA, "Average: " + avgsGPA);


//Courses Variables
var cName = ('Astronomy');
var courseDepartment = ('Physics');
var cTeacher = ('Sally Jones');
var cSemester = ('Fall 2017')

console.log("Course: " + cName, "Department: " + courseDepartment, "Teacher: " + cTeacher, "Semester: " + cSemester);
