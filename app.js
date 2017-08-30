'use strict';

var workouts = []; //might not need
var generatedWorkout = [];
var workoutOptions = [];
var message10Min = 'Complete the three exercises below as a circuit, completing one set of an exercise before moving onto the next movement.';
var message20Min = 'Complete the six exercises below as a circuit, completing one set of an exercise before moving onto the next movement.';
var message30Min = 'Complete the three exercises below as a circuit, completing one set of an exercise before moving onto the next movement, and after the first circuit is complete, begin another circuit.';
var message40Min = 'Complete the six exercises below as a circuit, completing one set of an exercise before moving onto the next movement, and after the first circuit is complete, begin another circuit.';

function MakeWorkout(name, type, level, equipment, cardio, group, img, descr){
  this.name = name;
  this.type = type;
  this.level = level;
  this.equipment = equipment;
  this.cardio = cardio;
  this.group = group;
  this.img = img;
  this.descr = descr;
}

function pickUpperBody(){
  pickChest();
  pickShouldersArms();
  pickCore();
  localStorage.setItem('workoutData', JSON.stringify(generatedWorkout));
}

function pickLowerBody(){
  pickGlutes();
  pickQuads();
  pickCore();
  localStorage.setItem('workoutData', JSON.stringify(generatedWorkout));
}

function pickTotalBody(){
  for (var i = 0; i < 3; i++){
    var randoNum = Math.floor(Math.random() * workoutOptions.length);
    generatedWorkout.push(totalBody[i]); //this could duplicate exercises
  }
  localStorage.setItem('workoutData', JSON.stringify(generatedWorkout));
}
//Test Object for user
// var user = {type: 'Total', level:'Advanced', equipment: false, length: '20min'};

/*
if user wants upper body workout sort through array of workouts to find type = upperBody

*/

//Upper body - chest
var kneelPushup = new MakeWorkout('Kneeling Push-up', 'Upper', 'Beginner', false, false, 'chest', 'https://www.youtube.com/embed/wc-W05Gi9hU', 'A scaled version of the normal push-up that works primarily the chest and triceps.');
var regPushup = new MakeWorkout('Regular Push-up', 'Upper', 'Intermediate', false, false, 'chest', 'https://www.youtube.com/embed/v9LABVJzv8A', 'A classic calisthenic exercise that works the chest, triceps, shoulders, and core by raising and lowering the body towards the ground.');
var diamondPushup = new MakeWorkout('Narrow/Diamond Push-up', 'Upper', 'Advanced', false, false, 'chest', 'https://www.youtube.com/embed/SwoNNo4W1OU', 'A more challenging version of the push-up that works the more than normal push-ups.');
//Upper body - shoulder/arms
var shoulderTaps = new MakeWorkout('Shoulder Taps', 'Upper', 'Beginner', false, false, 'shoulders_arms', 'https://www.youtube.com/embed/gWHQpMUd7vw', 'Works the deltoids, triceps, and core by forcing you to stabilize your body and touch your hand to the opposite shoulder.');
var superman = new MakeWorkout('Supermans', 'Upper', 'Intermediate', false, false, 'shoulders_arms', 'https://www.youtube.com/embed/67rgxYNKbZY', 'Simultaneously lift your arms, legs, and chest, and contract at the top of the movement. This exercise can be a good compliment to core movements.');
var dips = new MakeWorkout('Dips', 'Upper', 'Intermediate', false, false, 'shoulders_arms', 'https://www.youtube.com/embed/vhXqTx7JYSs', 'Dips work your shoulders, arms, and chest, and can be done with a dip bar, bench, or chair.');
var handstand = new MakeWorkout('Handstand Push-up', 'Upper', 'Advanced', false, false, 'shoulders_arms', 'https://www.youtube.com/embed/hvoQiF0kBI8', 'A very difficult gymnastics and strength move. Descend until the head touches the ground, brace the core, and push with the shoulders and arms.');
//Lower body - glutes
var gluteBridge = new MakeWorkout('Glute Bridge', 'Lower', 'Beginner', false, false, 'glutes', 'https://www.youtube.com/embed/N48d7sm8dbU', 'Strengthens the glutes, and increases glute activation with no equipment necessary.');
var donkeykickbacks = new MakeWorkout('Donkey Kickbakcs', 'Lower', 'Beginner', false, false, 'glutes', 'https://www.youtube.com/embed/SJ1Xuz9D-ZQ', 'Targets each glute, and forced you to stabilize your core through the movement.');
var calfRaise = new MakeWorkout('Calf Raises', 'Lower', 'Beginner', false, false, 'glutes', 'https://www.youtube.com/embed/UV8gOrHmuKc', 'This builds muscle and tones the calves by lifting as high as you can onto your toes.');
var squat = new MakeWorkout('Air Squats', 'Lower', 'Intermediate', false, false, 'glutes', 'https://www.youtube.com/embed/C_VtOYc6j5c', 'A classic athletic exercise that works most of the lower body, and is the foundation for any workout program.');
var deadlift = new MakeWorkout('Glute Bridge', 'Lower', 'Advanced', false, false, 'glutes', 'https://www.youtube.com/embed/HtHxnWmMgzM', 'A great move that develops balance, as well as hamstring and glue strength. Can be done with or without weights.');
//Lower body - quad
var lunge = new MakeWorkout('Lunge', 'Lower', 'Beginner', false, false, 'quads', 'https://www.youtube.com/embed/UpyDdQjBTa0', 'Single-leg exercise that works the quadriceps, but also works the glutes, hamstrings, and core muscles.');
var boxJump = new MakeWorkout('Box Jump', 'Lower', 'Intermediate', false, true, 'quads', 'https://www.youtube.com/embed/52r_Ul5k03g', 'Great for improving athleticism and muscle that can become a challenging cardiovascular workout.');
var jumpLunge = new MakeWorkout('Jumping Lunges', 'Lower', 'Intermediate', false, true, 'quads', 'https://www.youtube.com/embed/Kq5lZ4o26Ho', 'Bring lunges to the next level by explosively jumping when transtioning between legs.');
var pistol = new MakeWorkout('Pistol Squat', 'Lower', 'Advanced', false, false, 'quads', 'https://www.youtube.com/embed/qDcniqddTeE', 'This advanced move requires flexibility, strength, balance, and coordination. This move can help build tremendous lower body strength.');
//Core
var crunch = new MakeWorkout('Crunches', 'Core', 'Beginner', false, false, 'core', 'https://www.youtube.com/embed/HiRsmHH7psA', 'A beginner exercise that helps strengthen the core.');
var legRaise = new MakeWorkout('Leg Raises', 'Core', 'Intermediate', false, false, 'core', 'https://www.youtube.com/embed/_OQaO65Vdzs', 'This exercise targets the abdominals and hip flexors, and will help to sculpt the core.');
var plank = new MakeWorkout('Plank', 'Core', 'Intermediate', false, false, 'core', 'https://www.youtube.com/embed/pSHjTRCQxIw', 'This static exercise works just about every muscle in the body, and helps to sculpt the core.');
var vUp = new MakeWorkout('V-ups', 'Core', 'Advanced', false, false, 'core', 'https://www.youtube.com/embed/-JIwvMSk4vo', 'Keep your legs straight and bring your upper body off of the floor to try and touch your toes. Great for targeting your middle and upper abs.');
var russianTwist = new MakeWorkout('Russian Twist', 'Core', 'Advanced', false, false, 'core', 'https://www.youtube.com/embed/l2XsG9W5rYo', 'This exercise strengthens the obliques, and can be performed with or without weight.');
//Total body
var jumpingJack = new MakeWorkout('Jumping Jack', 'Total', 'Beginner', false, true, 'Total', 'https://www.youtube.com/embed/gG2Z1siSvkk', 'A classic performed by jumping from a position with legs together, and arms at the sides, to a position with legs apart and arms over head.');
var bearcrawl = new MakeWorkout('Bear Crawl', 'Total', 'Beginner', false, true, 'Total', 'https://www.youtube.com/embed/bfT5TaRFKQw', 'Increase your heart rate and stabilize your core by doing this fun exercise.');
var mountainClimber = new MakeWorkout('Mountain Climber', 'Total', 'Intermediate', false, true, 'Total', 'https://www.youtube.com/embed/w2iTOneGPdU', 'A great total body exercise that heavily utilizes the core, and can be a difficult cardiovascular exercise.');
var spidermanPushup = new MakeWorkout('Spiderman Push-up', 'Total', 'Advanced', false, false, 'Total', 'https://www.youtube.com/embed/hWVf7gt5dQ8', 'An advanced version of the push-up that will work the chest, triceps, shoulders, core, and hip flexors. Go slow and focus on the form.');
var burpee = new MakeWorkout('Burpee', 'Total', 'Advanced', false, true, 'Total', 'https://www.youtube.com/embed/E-Oc0zjeqWo?list=PLQSMS0J6JbrKdSOSbyJXaQ_zN_HSSp7zZ', 'A great total body exercise that is performed in four steps, and can be a challenging cardiovascular exercise.');

var upperBody = [regPushup, kneelPushup, diamondPushup, shoulderTaps, dips, handstand, superman];
var lowerBody = [gluteBridge, squat, deadlift, lunge, boxJump, pistol, jumpLunge, calfRaise, donkeykickbacks];
var totalBody = [burpee, bearcrawl, jumpingJack, mountainClimber, spidermanPushup];
var core = [crunch, russianTwist, vUp, legRaise, plank];

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
} else if (user.type === 'Lower') {
  workoutOptions = filterWorkouts(user, lowerBody);
} else {
  workoutOptions = filterWorkouts(user, totalBody);
}
//Code below selects workouts based on type and duration of workout
// if (user.type === 'Upper') {
//   pickUpperBody();
// } else if (user.type === 'Lower') {
//   pickLowerBody();
// } else {
//   pickTotalBody();
// }
if (user.length === '10min' || user.length === '30min') {
  if (user.type === 'Upper') {
    pickUpperBody();
  } else if (user.type === 'Lower') {
    pickLowerBody();
  } else {
    pickTotalBody();
  }
}
else if (user.length === '20min' || user.length === '40min' ) {
  if (user.type === 'Upper') {
    pickUpperBody();
    pickUpperBody();
  } else if (user.type === 'Lower') {
    pickLowerBody();
    pickLowerBody();
  } else {
    pickTotalBody();
    pickTotalBody();
  }
}
console.log(generatedWorkout);


//
// /*  Kavdi's area... DON"T TOUCH!!   */
//
//


var newPerson = [];

function getFormData (event) {
  event.preventDefault();
  var name = document.getElementsByName('Name')[0].value;
  person.name = name;
  var age = document.getElementsByName('Age')[0].value;
  person.age = age;
  newPerson.push(name, age);
  var fitnessLevel = document.getElementsByName('level');
  for (var i = 0; i < fitnessLevel.length; i++){
    if (fitnessLevel[i].checked){
      newPerson.push(fitnessLevel[i].value);
      person.level = fitnessLevel[i].value;
    }
  }
  var workoutLength = document.getElementsByName('length');
  for (var i = 0; i < workoutLength.length; i++){
    if (workoutLength[i].checked){
      newPerson.push(workoutLength[i].value);
      person.length = workoutLength[i].value;
    }
  }
  var workoutType = document.getElementsByName('type');
  for (var i = 0; i < workoutType.length; i++){
    if (workoutType[i].checked){
      newPerson.push(workoutType[i].value);
      person.type = workoutType[i].value;
    }
  }
  var goals = document.getElementsByName('goal');
  for (var i = 0; i < goals.length; i++){
    if (goals[i].checked){
      newPerson.push(goals[i].value);
      person.goal = goals[i].value;
    }
  }
  var equipment = document.getElementsByName('equipment');
  for (var i = 0; i < equipment.length; i++){
    if (equipment[i].checked){
      newPerson.push(equipment[i].value);
      person.equipment = equipment[i].value;
    }
  }
  window.location = 'result.html';
}

document.getElementById('clickMe');
document.addEventListener('submit', getFormData);


var person = {
  name : '', age : '',level : '', length : '', type : '', goal : '', equipment : ''
};


/*
timer for result page
*/
// function timer(time) {
//   var getElementById('workoutTimer');
//
// }

var resultsPage = [];
var workoutId = ['workoutResults1', 'workoutResults2', 'workoutResults3', 'workoutResults4', 'workoutResults5', 'workoutResults6'];
function createWorkoutPage() {
  workoutInstructions();
  resultsPage = JSON.parse(localStorage.getItem('workoutData'));
  for(var i = 0; i < resultsPage.length; i++){
    var workoutContainer = document.getElementById('workoutResults');
    var vidContainer = document.createElement('div');
    vidContainer.setAttribute('class', 'workoutFrame');
    vidContainer.setAttribute('id', workoutId[i]);
    var video = document.createElement('iframe');
    video.setAttribute('class', 'iframeSizing');
    video.src = resultsPage[i].img;
    workoutContainer.appendChild(vidContainer);
    vidContainer.appendChild(video);
  }
  for(var i = 0; i < resultsPage.length; i++){
    var workoutContainer = document.getElementById(workoutId[i]);
    var iframeDesc = document.createElement('p');
    iframeDesc.setAttribute('class', 'description');
    iframeDesc.innerHTML = resultsPage[i].descr;
    workoutContainer.appendChild(iframeDesc);
  }
}
createWorkoutPage();
function workoutInstructions() {
  if(user.length === '10min') {
    var instructionsContainer = document.getElementById('instructions');
    var instructions = document.createElement('p');
    instructions.innerHTML = message10Min;
    instructionsContainer.appendChild(instructions);
  }else if(user.length === '20min') {
    var instructionsContainer = document.getElementById('instructions');
    var instructions = document.createElement('p');
    instructions.innerHTML = message20Min;
    instructionsContainer.appendChild(instructions);
  }else if(user.length === '30min') {
    var instructionsContainer = document.getElementById('instructions');
    var instructions = document.createElement('p');
    instructions.innerHTML = message30Min;
    instructionsContainer.appendChild(instructions);
  }else {
    var instructionsContainer = document.getElementById('instructions');
    var instructions = document.createElement('p');
    instructions.innerHTML = message40Min;
    instructionsContainer.appendChild(instructions);
  }
};
