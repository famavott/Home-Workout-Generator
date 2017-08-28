'use strict';

var workouts = [];

function MakeWorkout(name, type, level, equipment, cardio, group, img, descr){
  this.name = name;
  this.type = type;
  this.level = level;
  this.equipment = equipment;
  this.cardio = cardio;
  this.group = group;
  this.img = group;
  this.descr = descr;
}

function pickUpperBody(){
}

function pickLowerBody(){
}

function pickCore() {
}

function pickTotalBody(){

}

/*
if user wants upper body workout sort through array of workouts to find type = upperBody

*/


////Initial Instances////////
var burpee = new MakeWorkout('Burpee', 'Total', 'Intermediate', False, False, 'Total', 'https://www.youtube.com/embed/E-Oc0zjeqWo?list=PLQSMS0J6JbrKdSOSbyJXaQ_zN_HSSp7zZ', 'A great total body exercise that is performed in four steps, and can be a challenging cardiovascular exercise.');
var jumpingJack = new MakeWorkout('Jumping Jack', 'Total', 'Beginner', False, True, 'Total', 'https://www.youtube.com/embed/gG2Z1siSvkk', 'A classic performed by jumping from a position with legs together, and arms at the sides, to a position with legs apart and arms over head.');
var snatch = new MakeWorkout('Snatch', 'Total', 'Advanced', True, False, 'Total', 'https://www.youtube.com/embed/R0mhHuVrLHA', 'An advanced exercise that requires one fluid movement to take a barbell or dumbbell from the ground to overhead.');
var pushup = new MakeWorkout('Push-up', 'Upper', 'Beginner', False, False, 'chest', 'https://www.youtube.com/embed/v9LABVJzv8A', 'A classic calisthenic exercise that works the chest, triceps, shoulders, and core by raising and lowering the body towards the ground.');
var pullup = new MakeWorkout('Pull-up', 'Upper', 'Intermediate', True, False, 'shoulders_arms', 'https://www.youtube.com/embed/aAggnpPyR6E', 'A compound upper-body exercise with palms facing forward on the bar.');
var shoulderPress = new MakeWorkout('Shoulder Press', 'Upper', 'Intermediate', True, False, 'shoulder_arms', 'https://www.youtube.com/embed/xe19t2_6yis', 'Can be performed either seated or standing, and can be done with a barbell or dumbbells. A great test of overhead pressing strength.' );
var squat = new MakeWorkout('Squats', 'Lower', 'Intermediate', True, False, 'glutes', 'https://www.youtube.com/embed/ultWZbUMPL8', 'A classic athletic exercise that works the entire body. Can be done with a barbell, kettlebell, dumbbells, or as a bodyweight exercise.');
var lunge = new MakeWorkout('Lunge', 'Lower', 'Beginner', False, False, 'quads', 'https://www.youtube.com/embed/UpyDdQjBTa0', 'Single-leg exercise that works the quadriceps, but also works the glutes, hamstrings, and core muscles.');
var pistol = new MakeWorkout('Pistol Squat', 'Lower', 'Advanced', False, False, 'quads', 'https://www.youtube.com/embed/qDcniqddTeE', 'This advanced move requires flexibility, strength, balance, and coordination. This move can help build tremendous lower body strength.');
var crunch = new MakeWorkout('Crunches', 'Core', 'Beginner', False, False, 'core', 'https://www.youtube.com/embed/HiRsmHH7psA', 'A beginner exercise that helps strengthen the core.');
var russianTwist = new MakeWorkout('Russian Twist', 'Core', 'Beginner', False, False, 'core', 'https://www.youtube.com/embed/l2XsG9W5rYo', 'This exercise strengthens the obliques, and can be performed with or without weight.');

































var newPerson = [];

document.getElementById('clickMe');
document.addEventListener('submit', 'clickMe');

function getFormData (event) {
  event.preventDefault();
  var name = document.getElementsByName('Name').value;
  var age = document.getElementsByName('Age').value;
  var fitnessLevel = document.getElementsByName('level').value;
  var workoutLength = document.getElementsByName('length').value;
  var workoutType = document.getElementsByName('type').value;
  var goals = document.getElementsByName('goal').value;
  var equipment = document.getElementsByName('equipment').value;
  newPerson.push(name, age, fitnessLevel, workoutLength, workoutType, goals, equipment);
}
getFormData();
console.log(newPerson);




/*
timer for result page
*/
// function timer(time) {
//   var getElementById('workoutTimer');
//
// }
