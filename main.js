console.log("This file is linked!");

// Teacher Variables
var tName = ("Sally Jones");
var tDepartment = ("Physics");

// Now that we know about the array data structure, it would do a much better job at storing our teacher ratings. So go ahead and create an array to store the teacher ratings.
var rRatings = [3.754, 4.782, 2.209];
var tRating = [Math.round(rRatings[0] * 10) / 10, Math.round(rRatings[1] * 10) / 10, Math.round(rRatings[2] * 10) / 10];

// Create a function called getRatingAvg that takes one parameter, an array of ratings. The function should calculate and return the average rating from all the ratings in the array that is passed into the function (as a parameter).
function getRatingAvg(a) {
    return (a[0] + a[1] + a[2]) / rRatings.length;
}
var avgRating = getRatingAvg(tRating);

// Create function called addTeacherRating, that takes 2 parameters… a ratings array and a new rating.
// This function should add the new rating to the ratings array and return the array.

function addTeacherRating() {
    var ntRating = (4);
    return (tRating.push(ntRating));
}

// Now time to put all the pieces together… create a prompt that asks the user to review a teacher… the prompt should say..
// “We would like for you to review . Please enter a rating between 0.0 - 5.0?"
// note: make sure you store that value in a variable so you can use the users response…
// then… 1) check that the user entered a number between 0.0 and 5.0… 2) if they did not, prompt them again… 3) if they did, add the rating value to the teacher’s rating array 4) AND alert back to the user… “Thanks for you review! <teacher’s name> average rating is now ."

// var ntRating = prompt("We would like for you to review " + tName + ". Please enter a rating between 0.0 and 5.0", 0);
// if (ntRating > 0 && ntRating < 5) {
//     tRating.push(ntRating);
//     alert("Thank You!");
// }
// else {
//     ntRating = prompt("I'm sorry, you failed to rate " + tName + ". Please enter a rating between 0.0 and 5.0 and try again", 0);
// }

console.log("Teacher: " + tName);
console.log("Department: " + tDepartment);
console.log("Ratings: " + tRating);
console.log("Average: " + avgRating);


//Student Variables
var sName = ("Sally Jones");
var sCourses = ["Calculus", "Econ 101"];
var rGPA = [5.754, 4.782, 4.209];
var sGPA = [Math.round(rGPA[0] * 100) / 100, Math.round(rGPA[1] * 100) / 100, Math.round(rGPA[2] * 100) / 100];
var avgsMath = [(rGPA[0] + rGPA[1] + rGPA[2]) / 3];
var avgsGPA = (Math.round(avgsMath * 100) / 100);

console.log("Student: " + sName);
console.log("Courses: " + sCourses);
console.log("GPA: " + sGPA);
console.log("Average: " + avgsGPA);


//Courses Variables
// This courses array is actually going to be a double array… meaning it will be an array of arrays! Don’t worry… one thing at a time.
// You want your courses array to look like this…
// [
//     [<course-title>, <course-department>],
//     [<course-title>, <course-department>],
//     ..etc
// ]
// course will be an array filled with courses and each course is an array with index 0 being a course title and index 1 being the department the course is associated with.

// var cName = ("Astronomy");
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
]

var lOCourses = [];

function cCall(x) {
    for (var i = 0, len = cDep.length; i < len; i++) {
        if (cDep[i][1] == x) {
            // console.log( "Courses in " + x + ": " + cDep[i][0]);
            lOCourses.push(cDep[i][0])
        }
    }
}

var dep = ["Life Science", "Graphic Design", "Data Science"]
var depa = prompt("Please enter the Department Name to view the Courses: ", "Department Name");
if (depa == dep[0]) {
    cCall(dep[0])
    alert("Thank you! Here are the courses you can choose from;\n" + lOCourses.toString())
}
if (depa == dep[1]) {
    cCall(dep[1])
    alert("Thank you! Here are the courses you can choose from;\n" + lOCourses.toString())
}
if (depa == dep[2]) {
    cCall(dep[2])
    alert("Thank you! Here are the courses you can choose from;\n" + lOCourses.toString())
} else {
    depa = prompt("I'm sorry, that's not a valid department. Please enter the Department Name to view the Courses: ", "Department Name");
}



var cDepartment = ("Physics");
var cTeacher = ("Sally Jones");
var cSemester = ("Fall 2017");
// This function should take 2 parameter a course array and a department. The function should return a new array filled with courses that are ONLY in the department specified in the parameter.
// note: to test that this works… I would suggest calling the function and then console.log the result to make sure it is filtering as expected.

// function(cDepartment) {
// I want to go through all of the arrays in 'courses' and check to see if [1] == cDepartment --- loop?
// call courses[x] where x = 0-courseDep.length-1 if courseDep[x][y] and y = cDepartment console.log(x);
// }

console.log("Course: " + cDepartment);
console.log("Department: " + cDepartment);
console.log("Teacher: " + cTeacher);
console.log("Semester: " + cSemester);
