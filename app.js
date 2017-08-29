'use strict';

var workouts = []; //might not need
var generatedWorkout = [];
var workoutOptions = [];

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
  pickChest();
  pickShouldersArms();
  pickCore();
}

function pickLowerBody(){
  pickGlutes();
  pickQuads();
  pickCore();
}

function pickTotalBody(){
  for (var i = 0; i < 3; i++){
    var randoNum = Math.floor(Math.random() * workoutOptions.length);
    generatedWorkout.push(totalBody[i]); //this could duplicate exercises
  }
}
//Test Object for user
var user = {type: 'Upper', level:'Intermediate', equipment: false};

/*
if user wants upper body workout sort through array of workouts to find type = upperBody

*/


////Initial Instances////////
var burpee = new MakeWorkout('Burpee', 'Total', 'Intermediate', false, false, 'Total', 'https://www.youtube.com/embed/E-Oc0zjeqWo?list=PLQSMS0J6JbrKdSOSbyJXaQ_zN_HSSp7zZ', 'A great total body exercise that is performed in four steps, and can be a challenging cardiovascular exercise.');
var jumpingJack = new MakeWorkout('Jumping Jack', 'Total', 'Beginner', false, true, 'Total', 'https://www.youtube.com/embed/gG2Z1siSvkk', 'A classic performed by jumping from a position with legs together, and arms at the sides, to a position with legs apart and arms over head.');
var snatch = new MakeWorkout('Snatch', 'Total', 'Advanced', true, false, 'Total', 'https://www.youtube.com/embed/R0mhHuVrLHA', 'An advanced exercise that requires one fluid movement to take a barbell or dumbbell from the ground to overhead.');
var pushup = new MakeWorkout('Push-up', 'Upper', 'Beginner', false, false, 'chest', 'https://www.youtube.com/embed/v9LABVJzv8A', 'A classic calisthenic exercise that works the chest, triceps, shoulders, and core by raising and lowering the body towards the ground.');
var pullup = new MakeWorkout('Pull-up', 'Upper', 'Intermediate', true, false, 'shoulders_arms', 'https://www.youtube.com/embed/aAggnpPyR6E', 'A compound upper-body exercise with palms facing forward on the bar.');
var shoulderPress = new MakeWorkout('Shoulder Press', 'Upper', 'Intermediate', true, false, 'shoulder_arms', 'https://www.youtube.com/embed/xe19t2_6yis', 'Can be performed either seated or standing, and can be done with a barbell or dumbbells. A great test of overhead pressing strength.' );
var squat = new MakeWorkout('Squats', 'Lower', 'Intermediate', true, false, 'glutes', 'https://www.youtube.com/embed/ultWZbUMPL8', 'A classic athletic exercise that works the entire body. Can be done with a barbell, kettlebell, dumbbells, or as a bodyweight exercise.');
var lunge = new MakeWorkout('Lunge', 'Lower', 'Beginner', false, false, 'quads', 'https://www.youtube.com/embed/UpyDdQjBTa0', 'Single-leg exercise that works the quadriceps, but also works the glutes, hamstrings, and core muscles.');
var pistol = new MakeWorkout('Pistol Squat', 'Lower', 'Advanced', false, false, 'quads', 'https://www.youtube.com/embed/qDcniqddTeE', 'This advanced move requires flexibility, strength, balance, and coordination. This move can help build tremendous lower body strength.');
var crunch = new MakeWorkout('Crunches', 'Core', 'Beginner', false, false, 'core', 'https://www.youtube.com/embed/HiRsmHH7psA', 'A beginner exercise that helps strengthen the core.');
var russianTwist = new MakeWorkout('Russian Twist', 'Core', 'Beginner', false, false, 'core', 'https://www.youtube.com/embed/l2XsG9W5rYo', 'This exercise strengthens the obliques, and can be performed with or without weight.');

var upperBody = [pushup, pullup, shoulderPress];
var lowerBody = [squat, lunge, pistol];
var totalBody = [burpee, jumpingJack, snatch];
var core = [crunch, russianTwist];

function pickCore() {
  var randoNum = Math.floor(Math.random() * core.length);
  return core[random];
}

function pickShouldersArms() {
  for (var i = 0; i < 1; i++){
    var randoNum = Math.floor(Math.random() * workoutOptions.length);
    if (workoutOptions[randoNum].group === 'shoulders_arms'){
      generatedWorkout.push(workoutOptions[randoNum]);
    }else {
      i--;
    }
  }
}

function pickChest() {
  for (var i = 0; i < 1; i++){
    var randoNum = Math.floor(Math.random() * workoutOptions.length);
    if (workoutOptions[randoNum].group === 'chest'){
      generatedWorkout.push(workoutOptions[randoNum]);
    }else {
      i--;
    }
  }
}

function pickGlutes() {
  for (var i = 0; i < 1; i++){
    var randoNum = Math.floor(Math.random() * workoutOptions.length);
    if (workoutOptions[randoNum].group === 'glutes'){
      generatedWorkout.push(workoutOptions[randoNum]);
    }else {
      i--;
    }
  }
}

function pickQuads() {
  for (var i = 0; i < 1; i++){
    var randoNum = Math.floor(Math.random() * workoutOptions.length);
    if (workoutOptions[randoNum].group === 'quads'){
      generatedWorkout.push(workoutOptions[randoNum]);
    }else {
      i--;
    }
  }
}

function filterWorkouts(user, typeArray){
  var newWorkouts = typeArray;
  if (user.equipment === true){
    newWorkouts = typeArray.filter(function(typeArray){
      return typeArray.equipment === true;
    });
  }
  else {
    newWorkouts = typeArray.filter(function(typeArray){
      return typeArray.equipment === false;
    });
  }
  if (user.level === 'Beginner'){
    newWorkouts = newWorkouts.filter(function(newWorkouts){
      return newWorkouts.level === 'Beginner';
    });
  }else if (user.level === 'Intermediate') {
    newWorkouts = newWorkouts.filter(function(newWorkouts){
      return newWorkouts.level === 'Intermediate';
    });
  }else {
    newWorkouts = newWorkouts.filter(function(newWorkouts){
      return newWorkouts.level === 'Advanced';
    });
  }
  return newWorkouts;
}

if (user.type === 'Upper'){
  workoutOptions = filterWorkouts(user, upperBody);
}else if (user.type === 'Lower'){
  workoutOptions = filterWorkouts(user, lowerBody);
}else{
  workoutOptions = filterWorkouts(user, totalBody);
}
















if (user.type === 'Upper'){
  pickUpperBody();
}else if (user.type === 'Lower'){
  pickLowerBody();
}else {
  pickTotalBody();
}


/*  Kavdi's area... DON"T TOUCH!!   */















var newPerson = [];

function getFormData (event) {
  event.preventDefault();
  var name = document.getElementsByName('Name').value;
  var age = document.getElementsByName('Age').value;
  var fitnessLevel = document.queryselector('input[name = level]:checked').value;
  var workoutLength = document.queryselector().value;
  var workoutType = document.queryselector().value;
  var goals = document.queryselector().value;
  var equipment = document.queryselector().value;
  newPerson.push(name, age, fitnessLevel, workoutLength, workoutType, goals, equipment);
}

document.getElementById('clickMe');
document.addEventListener('submit', getFormData);


/*
timer for result page
*/
// function timer(time) {
//   var getElementById('workoutTimer');
//
// }
