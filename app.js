'use strict';

var workouts = [];

function makeWorkout(name, type, level, equipment, cardio, group, img, descr){
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

function filterWorkouts(workoutArray, user){
  var newWorkouts;
  if (user.type === 'upper'){
    newWorkouts = workoutArray.filter(function(workoutArray){
      return workoutArray.type === 'upper';
    });
  }else if (user.type === 'lower'){
    newWorkouts = workoutArray.filter(function(workoutArray){
      return workoutArray.type === 'lower';
    });
  }
  else {
    newWorkouts = workoutArray.filter(function(workoutArray){
      return workoutArray.type === 'total';
    });
  }

  if (user.)
}

/*
if user wants upper body workout sort through array of workouts to find type = upperBody
var longWords = words.filter(function(word){
  return word.length > 6;
});
*/
