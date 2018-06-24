console.log("This file is linked!");

 // Teacher Variables
// var tName = ("Sally Jones");
// var tDepartment = ("Physics");

 // Now that we know about the array data structure, it would do a much better job at storing our teacher ratings. So go ahead and create an array to store the teacher ratings.
// var rratings = [3.754, 4.782, 2.209];
// var tratings = [Math.round(rratings[0] * 10) / 10, Math.round(rratings[1] * 10) / 10, Math.round(rratings[2] * 10) / 10];

 // Create a function called getratingsAvg that takes one parameter, an array of ratings. The function should calculate and return the average ratings from all the ratings in the array that is passed into the function (as a parameter).
// function getratingsAvg(a) {
//     return (a[0] + a[1] + a[2]) / rratings.length;
// }
// var avgratings = getratingsAvg(tratings);

 // Create function called addTeacherratings, that takes 2 parameters… a ratings array and a new ratings.
 // This function should add the new ratings to the ratings array and return the array.

// function addTeacherratings() {
//     var addRatings = (4);
//     return (tratings.push(addRatings));
// }

 // Now time to put all the pieces together… create a prompt that asks the user to review a teacher… the prompt should say..
 // “We would like for you to review . Please enter a ratings between 0.0 - 5.0?"
 // note: make sure you store that value in a variable so you can use the users response…
 // then… 1) check that the user entered a number between 0.0 and 5.0… 2) if they did not, prompt them again… 3) if they did, add the ratings value to the teacher’s ratings array 4) AND alert back to the user… “Thanks for you review! <teacher’s name> average ratings is now ."

 var addRatings = prompt("We would like for you to review " + tName + ". Please enter a ratings between 0.0 and 5.0", 0);
 if (addRatings > 0 && addRatings < 5) {
     tratings.push(addRatings);
     alert("Thank You!");
 }
 else {
     addRatings = prompt("I'm sorry, you failed to rate " + tName + ". Please enter a ratings between 0.0 and 5.0 and try again", 0);
 }

console.log("Teacher: " + tName);
console.log("Department: " + tDepartment);
console.log("ratings: " + tratings);
console.log("Average: " + avgratings);


// Student Variables
var sName = ("Sally Jones");
var sCourses = ["Calculus", "Econ 101"];
var rGPA = [5.754, 4.782, 4.209];
var sGPA = [Math.round(rGPA[0] * 100) / 100, Math.round(rGPA[1] * 100) / 100, Math.round(rGPA[2] * 100) / 100];
var avgsMath = [(rGPA[0] + rGPA[1] + rGPA[2]) / 3];
var avgsGPA = (Math.round(avgsMath * 100) / 100);



// Courses Variables
//  This courses array is actually going to be a double array… meaning it will be an array of arrays! Don’t worry… one thing at a time.
//  You want your courses array to look like this…
//  [
//      [<course-title>, <course-department>],
//      [<course-title>, <course-department>],
//      ..etc
//  ]
//  course will be an array filled with courses and each course is an array with index 0 being a course title and index 1 being the department the course is associated with.

 var cName = ("Astronomy");
 var cDep = [
     ["Machine Learning", "Data Science"],
     ["R Programming", "Data Science"],
     ["Getting and Cleaning Data", "Data Science"],
     ["Exploratory Data Analysis", "Data Science"],
     ["Fundamentals of Graphic Design", "Graphic Design"],
     ["Introduction to Typography", "Graphic Design"],
     ["Introduction to Imagemaking", "Graphic Design"],
     ["Ideas from the History of Graphic Design", "Graphic Design"],
     ["Brand New Brand", "Graphic Design"],
     ["Dog Emotion and Cognition", "Life Science"],
     ["Chicken Behavior and Welfare", "Life Science"],
     ["The Truth About Cats and Dogs", "Life Science"],
     ["Animal Behaviour and Wellfare", "Life Science"],
     ["DNA Decoded", "Life Science"],
     ["Global Health at the Human-Animal-Ecosystem Interface", "Life Science"],
 ];

 var lOCourses = [];

 function cCall(x) {
     for (var i = 0, len = cDep.length; i < len; i++) {
         if (cDep[i][1] == x) {
             // console.log( "Courses in " + x + ": " + cDep[i][0]);
             lOCourses.push(cDep[i][0]);
         }
     }
 }

 var dep = ["Life Science", "Graphic Design", "Data Science"];
 var depa = prompt("Please enter the Department Name to view the Courses: ", "Department Name");
 if (depa == dep[0]) {
     cCall(dep[0]);
     alert("Thank you! Here are the courses you can choose from;\n" + lOCourses.toString());
 }
 if (depa == dep[1]) {
     cCall(dep[1]);
     alert("Thank you! Here are the courses you can choose from;\n" + lOCourses.toString());
 }
 if (depa == dep[2]) {
     cCall(dep[2]);
     alert("Thank you! Here are the courses you can choose from;\n" + lOCourses.toString());
 } else {
     depa = prompt("I'm sorry, that's not a valid department. Please enter the Department Name to view the Courses: ", "Department Name");
 }



var cDepartment = ("Physics");
var cTeacher = ("Sally Jones");
var cSemester = ("Fall 2017");
//  This function should take 2 parameter a course array and a department. The function should return a new array filled with courses that are ONLY in the department specified in the parameter.
//  note: to test that this works… I would suggest calling the function and then console.log the result to make sure it is filtering as expected.

//  function(cDepartment) {
//  I want to go through all of the arrays in 'courses' and check to see if [1] == cDepartment --- loop?
//  call courses[x] where x = 0-courseDep.length-1 if courseDep[x][y] and y = cDepartment console.log(x);
//  }

console.log("Course: " + cDepartment);
console.log("Department: " + cDepartment);
console.log("Teacher: " + cTeacher);
console.log("Semester: " + cSemester);







 // CG ED 3 - Welcome!


var today = new Date("January 1, 2018 00:00:01");
var year = today.getFullYear();
var grdyr = prompt("Please enter your graduation year: ", 2018);
if (grdyr < year) {
  grdyr = prompt("I'm sorry, that's not a valid year. Please re-enter", 2018);
} else if (grdyr > (year + 8)) {
  grdyr = alert("Whoa, college is some years away...");
}

function clgYear(x,y) {
  var clgClass = [];
  if (x == (year) && y == grd[0] || x == (year + 1) && y == grd[1]) {
    clgClass.push("Senior!");
  } else if (x == (year + 1) && y == grd[0] || x == (year + 2) && y == grd[1]) {
    clgClass.push("Junior!");
  } else if (x == (year + 2) && y == grd[0] || x == (year + 3) && y == grd[1]) {
    clgClass.push("Sophomore!");
  } else if (x == (year + 3) && y == grd[0] || x == (year + 4) && y == grd[1]) {
    clgClass.push("Freshman!");
  }
  return clgClass;
}

function hsYear(x) {
  var hsClass = [];
  if (x == (year + 4)) {
    hsClass.push("Senior!");
  } else if (x == (year + 5)) {
    hsClass.push("Junior!");
  } else if (x == (year + 6)) {
    hsClass.push("Sophomore!");
  } else if (x == (year + 7)) {
    hsClass.push("Freshman!");
  }
  return hsClass;
}
if (grdyr > (year + 3) && grdyr < (year + 7)) {
alert("You're a Highschool " + hsYear(grdyr) + " Get outta here ya filthy animal!!!");
} else if (grdyr <= (year + 3) && grdyr >= year) {
alert("Thanks! One more thing....");}


var grd = ["May","December"];
var month = prompt("Which month are you graduating?", "May or December");
if (month == grd[0] || month == grd[1]){
  alert("Welcome, " + clgYear(grdyr, month) + "!");
}

// CG ED 3 - Teacher Objects

// var teacher = {
//     // list and fill properties here
//   name: cTeacher,
//   department: cDepartment,
//   ratings: [],
//   addRatings: function (newRatings){
//         this.ratings.push(newRatings);
//     },
//   getAvgRatings: function (){
// 		var sum = this.ratings.reduce(function(a, b) { return a + b; });
// 		var avg = sum / this.ratings.length;
// 	}
// };
//
//
//   console.log("Student: " + sName);
//   console.log("Courses: " + sCourses);
//   console.log("GPA: " + sGPA);
//   console.log("Average: " + teacher.ratings);
