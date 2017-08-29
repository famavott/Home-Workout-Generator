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

//Upper body - chest
var kneelPushup = new MakeWorkout('Kneeling Push-up', 'Upper', 'Beginner', false, false, 'chest', 'https://www.youtube.com/embed/wc-W05Gi9hU', 'A scaled version of the normal push-up that works primarily the chest and triceps.');
var regPushup = new MakeWorkout('Regular Push-up', 'Upper', 'Intermediate', false, false, 'chest', 'https://www.youtube.com/embed/v9LABVJzv8A', 'A classic calisthenic exercise that works the chest, triceps, shoulders, and core by raising and lowering the body towards the ground.');
var diamondPushup = new MakeWorkout('Narrow/Diamond Push-up', 'Upper', 'Advanced', false, false, 'chest', 'https://www.youtube.com/embed/SwoNNo4W1OU', 'A more challenging version of the push-up that works the more than normal push-ups.');
//Upper body - shoulder/arms
var shoulderTaps = new MakeWorkout('Shoulder Taps', 'Upper', 'Beginner', false, false, 'shoulders_arms', 'https://www.youtube.com/embed/gWHQpMUd7vw', 'Works the deltoids, triceps, and core by forcing you to stabilize your body and touch your hand to the opposite shoulder.');
var dips = new MakeWorkout('Dips', 'Upper', 'Intermediate', false, false, 'shoulders_arms', 'https://www.youtube.com/embed/vhXqTx7JYSs', 'Dips work your shoulders, arms, and chest, and can be done with a dip bar, bench, or chair.');
var handstand = new MakeWorkout('Handstand Push-up', 'Upper', 'Advanced', false, false, 'shoulders_arms', 'https://www.youtube.com/embed/hvoQiF0kBI8', 'A very difficult gymnastics and strength move. Descend until the head touches the ground, brace the core, and push with the shoulders and arms.');
//Lower body - glutes
var gluteBridge = new MakeWorkout('Glute Bridge', 'Lower', 'Beginner', false, false, 'glutes', 'https://www.youtube.com/embed/N48d7sm8dbU', 'Strengthens the glutes, and increases glute activation with no equipment necessary.');
var squat = new MakeWorkout('Air Squats', 'Lower', 'Intermediate', false, false, 'glutes', 'https://www.youtube.com/embed/C_VtOYc6j5c', 'A classic athletic exercise that works most of the lower body, and is the foundation for any workout program.');
var deadlift = new MakeWorkout('Glute Bridge', 'Lower', 'Advanced', false, false, 'glutes', 'https://www.youtube.com/embed/HtHxnWmMgzM', 'A great move that develops balance, as well as hamstring and glue strength. Can be done with or without weights.');
//Lower body - quad
var lunge = new MakeWorkout('Lunge', 'Lower', 'Beginner', false, false, 'quads', 'https://www.youtube.com/embed/UpyDdQjBTa0', 'Single-leg exercise that works the quadriceps, but also works the glutes, hamstrings, and core muscles.');
var boxJump = new MakeWorkout('Box Jump', 'Lower', 'Intermediate', false, true, 'quads', 'https://www.youtube.com/embed/52r_Ul5k03g', 'Great for improving athleticism and muscle that can become a challenging cardiovascular workout.');
var pistol = new MakeWorkout('Pistol Squat', 'Lower', 'Advanced', false, false, 'quads', 'https://www.youtube.com/embed/qDcniqddTeE', 'This advanced move requires flexibility, strength, balance, and coordination. This move can help build tremendous lower body strength.');
//Core
var crunch = new MakeWorkout('Crunches', 'Core', 'Beginner', false, false, 'core', 'https://www.youtube.com/embed/HiRsmHH7psA', 'A beginner exercise that helps strengthen the core.');
var legRaise = new MakeWorkout('Leg Raises', 'Core', 'Intermediate', false, false, 'core', 'https://www.youtube.com/embed/_OQaO65Vdzs', 'This exercise targets the abdominals and hip flexors, and will help to sculpt the core.');
var russianTwist = new MakeWorkout('Russian Twist', 'Core', 'Advanced', false, false, 'core', 'https://www.youtube.com/embed/l2XsG9W5rYo', 'This exercise strengthens the obliques, and can be performed with or without weight.');
//Total body
var jumpingJack = new MakeWorkout('Jumping Jack', 'Total', 'Beginner', false, true, 'Total', 'https://www.youtube.com/embed/gG2Z1siSvkk', 'A classic performed by jumping from a position with legs together, and arms at the sides, to a position with legs apart and arms over head.');
var mountainClimber = new MakeWorkout('Mountain Climber', 'Total', 'Intermediate', false, true, 'Total', 'https://www.youtube.com/embed/w2iTOneGPdU', 'A great total body exercise that heavily utilizes the core, and can be a difficult cardiovascular exercise.');
var burpee = new MakeWorkout('Burpee', 'Total', 'Advanced', false, true, 'Total', 'https://www.youtube.com/embed/E-Oc0zjeqWo?list=PLQSMS0J6JbrKdSOSbyJXaQ_zN_HSSp7zZ', 'A great total body exercise that is performed in four steps, and can be a challenging cardiovascular exercise.');

var upperBody = [regPushup, kneelPushup, diamondPushup, shoulderTaps, dips, handstand];
var lowerBody = [gluteBridge, squat, deadlift, lunge, boxJump, pistol];
var totalBody = [burpee, jumpingJack, mountainClimber];
var core = [crunch, russianTwist, legRaise];

function pickCore() {
  var randoNum = Math.floor(Math.random() * core.length);
  generatedWorkout.push(core[randoNum]);
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
    console.log(randoNum);

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
console.log(generatedWorkout);


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
