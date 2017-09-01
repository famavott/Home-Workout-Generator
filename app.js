'use strict';

var randomWorkout = [];
var generatedWorkout = [];
var workoutOptions = [];
var message10Min = 'Complete each exercise listed below to finish one circuit. Rest as little as necessary, then start the next circuit. Do three total circuits to finish!';
var message20Min = 'Complete each exercise listed below to finish one circuit. Rest as little as necessary, then start the next circuit. Do three total circuits to finish!';
var message30Min = 'Complete each exercise listed below to finish one circuit. Rest as little as necessary, then start the next circuit. Do six total circuits to finish!';
var message40Min = 'Complete each exercise listed below to finish one circuit. Rest as little as necessary, then start the next circuit. Do six total circuits to finish!';
var workoutId = ['workoutResults1', 'workoutResults2', 'workoutResults3', 'workoutResults4', 'workoutResults5', 'workoutResults6'];
var resultsPage = [];
var user = {
  name : '', age : '',level : '', length : '', type : '', goal : '', equipment : ''
};

function MakeWorkout(name, type, level, equipment, cardio, group, img, descr){
  this.name = name;
  this.type = type;
  this.level = level;
  this.equipment = equipment;
  this.cardio = cardio;
  this.group = group;
  this.img = img;
  this.descr = descr;
};

//Upper body - chest
var kneelPushup = new MakeWorkout('Kneeling Push-up', 'Upper', 'Beginner', false, false, 'chest', 'https://www.youtube.com/embed/wc-W05Gi9hU', 'A scaled version of the normal push-up that works primarily the chest and triceps.');
var regPushup = new MakeWorkout('Regular Push-up', 'Upper', 'Intermediate', false, false, 'chest', 'https://www.youtube.com/embed/v9LABVJzv8A', 'A classic calisthenic exercise that works the chest, triceps, shoulders, and core by raising and lowering the body towards the ground.');
var diamondPushup = new MakeWorkout('Diamond Push-up', 'Upper', 'Advanced', false, false, 'chest', 'https://www.youtube.com/embed/SwoNNo4W1OU', 'A more challenging version of the push-up that works the tricps more than the regular version.');
var benchPress = new MakeWorkout('Bench Press', 'Upper', 'Beginner', true, false, 'chest', 'https://www.youtube.com/embed/wzq57DB5Ppg', 'Increases upper-body pushing strength, explosiveness, and muscle growth. Can be done with a barbell or dumbbells.');
var flys = new MakeWorkout('Standing Flys', 'Upper', 'Intermediate', true, false, 'chest', 'https://www.youtube.com/embed/iA2UnDfRMOw', 'Focus on isolating the chest muscles by bringing weights in and squeezing the chest. Can be done laying on a bench if available.');
var weightedPushup = new MakeWorkout('Weighted Push-up', 'Upper', 'Advanced', true, false, 'chest', 'https://www.youtube.com/embed/22I56NRZ3cc', 'Make push-ups even more challenging by adding weight to your back. This can be done with a plate, backpack, or weighted vest.');
var closeGripBench = new MakeWorkout('Close Grip Bench Press', 'Upper', 'Advanced', true, false, 'chest', 'https://www.youtube.com/embed/J2tcpxNCuPY', 'Bring your hands in to establish a narrow grip, and push up like a normal bench press. This will work your arms more than the normal version.');
var oneLegPushup = new MakeWorkout('Single Leg Pushup', 'Upper', 'Intermediate', false, false, 'chest','https://www.youtube.com/embed/sEP82yp3vjo', 'Normal pushup position, except on alternating pushups, keep one leg raised in the air.');
var inclineBench = new MakeWorkout('Incline Bench Press', 'Upper', 'Intermediate', true, false, 'chest','https://www.youtube.com/embed/oe7N2GUzHIw', 'Lay on a bench angled at 30-45 deg. Push up dumbbells or barbell using your chest muscles.');
var declineBench = new MakeWorkout('Decline Bench Press', 'Upper', 'Advanced', true, false, 'chest','https://www.youtube.com/embed/Kxt_5D2Rpgg', 'From a decline position, push the dumbbells or a barbell towards the ceiling using your chest muscles and squeezing at the top.');
var shufflePushup = new MakeWorkout('Alternating Shuffle Pushup', 'Upper', 'Advanced', false, false, 'chest','https://www.youtube.com/embed/mbka9fCaS1U', 'Do a standard push up, then at the top position, release your left hand, and plant it next to your right hand. Release your right hand and readjust to the right so your hands are shoulder width apart again.');

// Upper body - shoulder/arms
var shoulderTaps = new MakeWorkout('Shoulder Taps', 'Upper', 'Beginner', false, false, 'shoulders_arms', 'https://www.youtube.com/embed/gWHQpMUd7vw', 'Works the deltoids, triceps, and core by forcing you to stabilize your body and touch your hand to the opposite shoulder.');
var superman = new MakeWorkout('Supermans', 'Upper', 'Intermediate', false, false, 'shoulders_arms', 'https://www.youtube.com/embed/67rgxYNKbZY', 'Simultaneously lift your arms, legs, and chest, and contract at the top of the movement. This exercise can be a good compliment to core movements.');
var dips = new MakeWorkout('Dips', 'Upper', 'Intermediate', false, false, 'shoulders_arms', 'https://www.youtube.com/embed/vhXqTx7JYSs', 'Dips work your shoulders, arms, and chest, and can be done with a dip bar, bench, or chair.');
var handstand = new MakeWorkout('Handstand Push-up', 'Upper', 'Advanced', false, false, 'shoulders_arms', 'https://www.youtube.com/embed/hvoQiF0kBI8', 'A very difficult gymnastics and strength move. Descend until the head touches the ground, brace the core, and push with the shoulders and arms.');
var curls = new MakeWorkout('Curls', 'Upper', 'Beginner', true, false, 'shoulders_arms', 'https://www.youtube.com/embed/av7-8igSXTs', 'Increase arm strength by doing curls with a barbell or dumbbells, bending at the elbow and concentrating on not swinging your body.');
var shoulderPress = new MakeWorkout('Shoulder Press', 'Upper', 'Intermediate', true, false, 'shoulders_arms', 'https://www.youtube.com/embed/xe19t2_6yis', 'Can be performed either seated or standing, and can be done with a barbell or dumbbells. A great test over overhead pressing strength.');
var pullup = new MakeWorkout('Pull-ups', 'Upper', 'Advanced', true, false, 'shoulders_arms', 'https://www.youtube.com/embed/aAggnpPyR6E', 'A compound upper-body exercise with palms facing forward on the bar.');
var triPushdown = new MakeWorkout('Triceps Push Down', 'Upper', 'Beginner', true, false, 'shoulders_arms','https://www.youtube.com/embed/zYdzpuxpQqg', 'Start with your torso straight, and bring the upper arms close to your body and perpendicular to the floor. Using the triceps, bring the rope down or bar down towards your sides.');
var inclineCurl = new MakeWorkout('Incline Dumbell Curl', 'Upper', 'Intermediate', true, false, 'shoulders_arms','https://www.youtube.com/embed/34gKm21dfuE','Rest your arms on a bench angled at 45 degrees, then curl the dumbbells up, bending the elbows and bringing both weights to your shoulders.');
var crossHammerCurl = new MakeWorkout('Cross Body Hammer Curl', 'Upper', 'Advanced', true, false, 'shoulders_arms','https://www.youtube.com/embed/BBKddrjlxWw', 'Keep your palms facing in and without twisting your arm, and curl the dumbbell of the right arm up towards your left shoulder. Repeat with each arm.');
var overheadPress = new MakeWorkout('Overhead Press', 'Upper', 'Beginner', false, false, 'shoulders_arms','https://www.youtube.com/embed/YPVFUjApHjM', 'Press arms upward until fully extended.  Be sure to engage the shoulders and triceps muscles.');
var singleArmResistCurl = new MakeWorkout('Single Arm Resisted Curl', 'Upper', 'Beginner', false, false, 'shoulders_arms', 'https://www.youtube.com/embed/PwBOPb13BfE', 'Place your left hand over your right fist, your left arm will provide the resistance for your right bicep. To perform a rep, simply try to bring your right fist up towards your right shoulder while you push down with your left arm. ');
var elevatedPikePushup = new MakeWorkout('Feet Elevated Pike Pushup', 'Upper', 'Advanced', false, false, 'shoulders_arms','https://www.youtube.com/embed/pel8eS42Lxc','Get into pushup position and rest your feet on a bench or box. Bend your hips, raising your butt toward the ceiling so that your torso is vertical. Lower your body to the floor.' );
var crabWalk = new MakeWorkout('Crab Walk', 'Upper', 'Intermediate', false, false, 'shoulders_arms', 'https://www.youtube.com/embed/luOfiPHbQyc', 'Sit on the floor and plant your hands under your shoulders. Place your feet flat and bend your knees. Extend your hips so they rise an inch or so above the floor—this is crab position. Next, walk forward on your hands and feet' );

//Lower body - glutes
var gluteBridge = new MakeWorkout('Glute Bridge', 'Lower', 'Beginner', false, false, 'glutes', 'https://www.youtube.com/embed/N48d7sm8dbU', 'Strengthens the glutes, and increases glute activation with no equipment necessary.');
var donkeykickbacks = new MakeWorkout('Donkey Kickbacks', 'Lower', 'Intermediate', false, false, 'glutes', 'https://www.youtube.com/embed/SJ1Xuz9D-ZQ', 'Targets each glute, and forced you to stabilize your core through the movement.');
var calfRaise = new MakeWorkout('Calf Raises', 'Lower', 'Beginner', false, false, 'glutes', 'https://www.youtube.com/embed/UV8gOrHmuKc', 'This builds muscle and tones the calves by lifting as high as you can onto your toes.');
var airSquat = new MakeWorkout('Air Squats', 'Lower', 'Beginner', false, false, 'glutes', 'https://www.youtube.com/embed/C_VtOYc6j5c', 'A classic athletic exercise that works most of the lower body, and is the foundation for any workout program.');
var deadlift = new MakeWorkout('Single-leg Deadlifts', 'Lower', 'Advanced', false, false, 'glutes', 'https://www.youtube.com/embed/HtHxnWmMgzM', 'A great move that develops balance, as well as hamstring and glute strength.');
var gobletSquat = new MakeWorkout('Goblet Squats', 'Lower', 'Beginner', true, false, 'glutes', 'https://www.youtube.com/embed/lyvMNn9e2d4', 'Another variation of the squat that works most of the lower body, and can be done with a variety of different styles of weights.');
var suitcaseDeadlift = new MakeWorkout('Suitcase Deadlifts', 'Lower', 'Intermediate', true, false, 'glutes', 'https://www.youtube.com/embed/0WPVOzTwCi4', 'A great move that works the hamstrings and glutes, while forcing you to stabilize the core.');
var hamstringDrop = new MakeWorkout('Hamstring Drop', 'Lower', 'Advanced', false, false, 'glutes', 'https://www.youtube.com/embed/pncd_eGzQ7U', 'A glute and hamstring workout that also tests your core strength.');
var plankLegRaises = new MakeWorkout('Elbow Plank Leg Raises', 'Lower', 'Intermediate', false, false, 'https://www.youtube.com/embed/Akf3IP0H9fA', 'A glute and leg workout that has the benefit of giving your core a good push as well.');
var squatCalfRaise = new MakeWorkout('Squat Hold Calf Raises', 'Lower', 'Beginner', false, false, 'glutes', 'https://www.youtube.com/embed/wYoE11arXIw', 'Full leg workout that specifically targets your calves while still giving you a complete leg workout.');
var sideKick = new MakeWorkout('Side Kick with Bent Knee', 'Lower', 'Intermediate', false, false, 'https://www.youtube.com/embed/9hKsATwrmzY', 'A glute workout that also targets your hip flexors and core. Make sure to concentrate on your form.');
var goodMorning = new MakeWorkout('Good Mornings', 'Lower', 'Intermediate', true, false, 'glutes', 'https://www.youtube.com/embed/XzD1_jz0si4', 'This workout targets your hamstrings, glutes, and lower back.');
var splitSquat = new MakeWorkout('Split Squat', 'Lower', 'Advanced', true, false, 'glutes', 'https://www.youtube.com/embed/6wIId6pQzHw', 'A tough single-leg move that will add size to your legs and improve balance.');

//Lower body - quad
var lunge = new MakeWorkout('Lunge', 'Lower', 'Beginner', false, false, 'quads', 'https://www.youtube.com/embed/UpyDdQjBTa0', 'Single-leg exercise that works the quadriceps, but also works the glutes, hamstrings, and core muscles.');
var boxJump = new MakeWorkout('Box Jump', 'Lower', 'Intermediate', false, true, 'quads', 'https://www.youtube.com/embed/52r_Ul5k03g', 'Great for improving athleticism and muscle that can become a challenging cardiovascular workout.');
var jumpLunge = new MakeWorkout('Jumping Lunges', 'Lower', 'Intermediate', false, true, 'quads', 'https://www.youtube.com/embed/Kq5lZ4o26Ho', 'Bring lunges to the next level by explosively jumping when transtioning between legs.');
var pistol = new MakeWorkout('Pistol Squat', 'Lower', 'Advanced', false, false, 'quads', 'https://www.youtube.com/embed/qDcniqddTeE', 'This advanced move requires flexibility, strength, balance, and coordination. This move can help build tremendous lower body strength.');
var weightedLunge = new MakeWorkout('Weighted Lunge', 'Lower', 'Beginner', true, false, 'quads', 'https://www.youtube.com/embed/UpyDdQjBTa0', 'Single-leg exercise that works the quadriceps, but also works the glutes, hamstrings, and core muscles. Use dumbells, kettlebells, or whatever is available to you to add weight.');
var weightedSideLunge = new MakeWorkout('Weighted Side Lunges', 'Lower', 'Intermediate', true, false, 'quads', 'https://www.youtube.com/embed/qDcniqddTeE', 'Works the quads, glutes, adductors, and other smaller stabilizer muscles. Focus on collapsing at the hip and sitting into the lunge.');
var weightedJumpLunge = new MakeWorkout('Weighted Jumping Lunge', 'Lower', 'Advanced', true, true, 'quads', 'https://www.youtube.com/embed/EmCJp5fLec8', 'Explode out of each lunge by jumping and switching legs, keeping the back straight, and controlling the descent of your rear knee to the ground.');
var bounds = new MakeWorkout('Straight Leg Bounds', 'Lower', 'Beginner', false, true, 'quads', 'https://www.youtube.com/embed/NYH6L2doDm4', 'Leg exercise that works the quadriceps and has the benefit of being a cardio workout.');
var jumpSquats = new MakeWorkout('Jump Squats', 'Lower', 'Intermediate', false, true, 'quads', 'https://www.youtube.com/embed/bv7as8mDXLQ', 'Full leg exercise that mainly targets the quadriceps and gives you a good cardiovascular workout as well.');
var reversePlankKick = new MakeWorkout('Reverse Plank Kicks', 'Lower', 'Advanced', false, false, 'quads', 'https://www.youtube.com/embed/3eIPmCV_1HM', 'A full body exercise that targets your quadriceps and hip flexors.');
var singleLegSquat = new MakeWorkout('Single Leg Squats', 'Lower', 'Intermediate', true, false, 'quads', 'https://www.youtube.com/embed/plHQfHhzW0M', 'Single-leg exercise that targets all leg muscles, but specifically your quadriceps.');

//Core
var crunch = new MakeWorkout('Crunches', 'Core', 'Beginner', false, false, 'core', 'https://www.youtube.com/embed/HiRsmHH7psA', 'A beginner exercise that helps strengthen the core.');
var legRaise = new MakeWorkout('Leg Raises', 'Core', 'Intermediate', false, false, 'core', 'https://www.youtube.com/embed/_OQaO65Vdzs', 'This exercise targets the abdominals and hip flexors, and will help to sculpt the core.');
var plank = new MakeWorkout('Plank', 'Core', 'Intermediate', false, false, 'core', 'https://www.youtube.com/embed/pSHjTRCQxIw', 'This static exercise works just about every muscle in the body, and helps to sculpt the core. Try 30 seconds if you\'re just starting out, or 1 minute if you\'re more experienced.');
var vUp = new MakeWorkout('V-ups', 'Core', 'Advanced', false, false, 'core', 'https://www.youtube.com/embed/-JIwvMSk4vo', 'Keep your legs straight and bring your upper body off of the floor to try and touch your toes. Great for targeting your middle and upper abs.');
var russianTwist = new MakeWorkout('Russian Twist', 'Core', 'Advanced', false, false, 'core', 'https://www.youtube.com/embed/l2XsG9W5rYo', 'This exercise strengthens the obliques, and can be performed with or without weight.');
var plank3pt = new MakeWorkout('3 point Plank', 'Core', 'Intermediate', false, false, 'core','https://www.youtube.com/embed/1jZDOKr9NjE', 'Start in a plank position with your body in a straight line. Lift your left leg up off the ground so that you are balancing on your right leg and both forearms. Hold for the desired amount of time and then switch legs so that your left leg is on the floor and your right is up in the air.');
var deadBug = new MakeWorkout('Dead Bug', 'Core', 'Advanced', false, false, 'core', 'https://www.youtube.com/embed/mKUvoquc54Y', 'Lie on your back and bend your hips and knees to a 90-degree angle. Extend your left leg toward the floor and bring your right arm overhead. Keep your abs tight and don\'t let your lower back arch. Return your arm and leg to the starting position.');
var hangingLegRaise = new MakeWorkout('Hanging Leg Raise', 'Core', 'Advanced', true, false, 'core', 'https://www.youtube.com/embed/uaxEVt2z4CE', 'With your legs completely straight the entire time, tighten your core and use your abs to raise your feet toward your shoulders. Pause when your thighs reach your chest.');
var cableCrunch = new MakeWorkout('Cable Crunch', 'Core', 'Intermediate', true, false, 'core', 'https://www.youtube.com/embed/W-frrCtNmic', 'Keeping your weight on your knees and shins, let the cable pull on your arms and torso so that you feel a light stretch in your abdominal muscles. From there, crunch your body, bringing your forearms down to your knees and your head to the floor. Slowly return to the starting position. ');
var seatedBarbellTwist = new MakeWorkout('Seated Barbell Twist', 'Core', 'Advanced', true, false, 'core', 'https://www.youtube.com/embed/pXmaiD4NIdg', 'Place weight on your shoulders, keeping your back straight and upright. Twist your torso to the left, pause for a moment and then move back to the center.');
var declineCrunch = new MakeWorkout('Decline Crunch', 'Core', 'Beginner', false, false, 'core','https://www.youtube.com/embed/g6Q81FYhRf0','Place your hands on either side of your head, without locking your fingers. Raise your body slowly while you contract your abs. Use a true decline bench, or something like a bench if you\'re at home.');
var dumbbellSideBend = new MakeWorkout('Dumbbell Side Bend', 'Core', 'Intermediate', true, false, 'core', 'https://www.youtube.com/embed/als3uIJaa8Q', 'Keeping your back straight and your eyes facing forwards, bend down to the right as far as you can, then back up again. Without pausing at the top, bend down to the left.');

//Total body
var jumpingJack = new MakeWorkout('Jumping Jack', 'Total', 'Beginner', false, true, 'Total', 'https://www.youtube.com/embed/gG2Z1siSvkk', 'A classic performed by jumping from a position with legs together, and arms at the sides, to a position with legs apart and arms over head.');
var bearcrawl = new MakeWorkout('Bear Crawl', 'Total', 'Beginner', false, true, 'Total', 'https://www.youtube.com/embed/bfT5TaRFKQw', 'Increase your heart rate and stabilize your core by doing this fun exercise.');
var mountainClimber = new MakeWorkout('Mountain Climber', 'Total', 'Intermediate', false, true, 'Total', 'https://www.youtube.com/embed/w2iTOneGPdU', 'A great total body exercise that heavily utilizes the core, and can be a difficult cardiovascular exercise.');
var spidermanPushup = new MakeWorkout('Spiderman Push-up', 'Total', 'Advanced', false, false, 'Total', 'https://www.youtube.com/embed/hWVf7gt5dQ8', 'An advanced version of the push-up that will work the chest, triceps, shoulders, core, and hip flexors. Go slow and focus on the form.');
var burpee = new MakeWorkout('Burpee', 'Total', 'Advanced', false, true, 'Total', 'https://www.youtube.com/embed/E-Oc0zjeqWo?list=PLQSMS0J6JbrKdSOSbyJXaQ_zN_HSSp7zZ', 'A great total body exercise that is performed in four steps, and can be a challenging cardiovascular exercise.');
var kbellSwing = new MakeWorkout('KettleBell Swings', 'Total', 'Beginner', true, true, 'Total', 'https://www.youtube.com/embed/OPcG_thX6Dc', 'Develops power in your hamstrings, glutes, core, and will get your heart rate up in no time. Focus on the hip hinge and being explosive.');
var thrusters = new MakeWorkout('Thrusters', 'Total', 'Intermediate', true, true, 'Total', 'https://www.youtube.com/embed/M5gEwLTtWbg', 'Combines a front squat with an overhead press. A great compound exercise that works the whole body.');
var snatch = new MakeWorkout('Single-arm Snatch', 'Total', 'Advanced', true, false, 'Total', 'https://www.youtube.com/embed/R0mhHuVrLHA', 'An advanced exercise that requires one fluid movement to take a dumbbell, kettlebell, or barbell from the ground to overhead.');
var halo = new MakeWorkout('Halo', 'Total', 'Intermediate', true, false, 'Total', 'https://www.youtube.com/embed/Zy6bgAxPeks', 'While holding onto a kettlebell with both hands move it around your head.');
var spiderWalk = new MakeWorkout('Spider Walk', 'Total', 'Beginner', false, false, 'Total', 'https://www.youtube.com/embed/TVQj8cc9ePA', 'Walk froward while in raised push up position.');
var lungWOP = new MakeWorkout('Lunge with overhead press', 'Total', 'Advanced', true, false, 'Total', 'https://www.youtube.com/embed/E5_YxmOyjiE', 'Hold weights at your sholders then go into a lunge pressing the weights up.');
var renegade = new MakeWorkout('Renegade Row', 'Total', 'Advanced', true, false, 'Total', 'https://www.youtube.com/embed/PJpTBj4ilZw', 'While in raised push up position lift weights.');
var figure8 = new MakeWorkout('Figure Eight', 'Total', 'Intermediate', true, false, 'Total', 'https://www.youtube.com/embed/xpHWMC2_e3c', 'Move kettlebell between legs in figure eight alternating the hand that holds it.');
var backCross = new MakeWorkout('Back bow crossover', 'Total', 'Beginner', false, false, 'Total', 'https://www.youtube.com/embed/JBJmsE6xGsA', 'While facing the floor, raise legs and arms moving both left and right touching down at the end of each motion.');

var upperBody = [regPushup, kneelPushup, diamondPushup, shoulderTaps, dips, handstand, superman, benchPress, flys, weightedPushup, curls, shoulderPress, pullup, crabWalk, elevatedPikePushup, singleArmResistCurl, overheadPress, crossHammerCurl, inclineCurl, triPushdown, shufflePushup, declineBench, inclineBench, oneLegPushup, closeGripBench];
var lowerBody = [gluteBridge, airSquat, deadlift, lunge, boxJump, pistol, jumpLunge, calfRaise, donkeykickbacks, gobletSquat, suitcaseDeadlift, splitSquat, weightedLunge, weightedSideLunge, weightedJumpLunge];
var totalBody = [burpee, bearcrawl, jumpingJack, mountainClimber, spidermanPushup, kbellSwing, thrusters, snatch, halo, spiderWalk, lungWOP, renegade, figure8, backCross, plank, oneLegPushup, vUp, gobletSquat, suitcaseDeadlift, superman, legRaise, airSquat, weightedLunge, lunge, shoulderPress, dips, regPushup, airSquat];
var core = [crunch, russianTwist, vUp, legRaise, plank, plank3pt, deadBug, hangingLegRaise, cableCrunch, seatedBarbellTwist, declineCrunch, dumbbellSideBend];

function pickUpperBody(){
  pickChest();
  pickShouldersArms();
  pickCore();
};

function pickLowerBody(){
  pickGlutes();
  pickQuads();
  pickCore();
};

function pickTotalBody(){
  for (var i = 0; i < 3; i++){
    if (workoutOptions.length > 1){
      var randoNum = Math.floor(Math.random() * workoutOptions.length);
      generatedWorkout.push(workoutOptions[randoNum]);
    }else{
      generatedWorkout.push(workoutOptions[0]);
    }
  }
};

function pickCore() {
  var randoNum = Math.floor(Math.random() * core.length);
  generatedWorkout.push(core[randoNum]);
};

function pickShouldersArms() {
  for (var i = 0; i < 1; i++){
    var randoNum = Math.floor(Math.random() * workoutOptions.length);
    if (workoutOptions[randoNum].group === 'shoulders_arms'){
      generatedWorkout.push(workoutOptions[randoNum]);
    }else {
      i--;
    }
  }
};

function pickChest() {
  for (var i = 0; i < 1; i++){
    var randoNum = Math.floor(Math.random() * workoutOptions.length);

    if (workoutOptions[randoNum].group === 'chest'){
      generatedWorkout.push(workoutOptions[randoNum]);
    }else {
      i--;
    }
  }
};

function pickGlutes() {
  for (var i = 0; i < 1; i++){
    var randoNum = Math.floor(Math.random() * workoutOptions.length);
    if (workoutOptions[randoNum].group === 'glutes'){
      generatedWorkout.push(workoutOptions[randoNum]);
    }else {
      i--;
    }
  }
};

function pickQuads() {
  for (var i = 0; i < 1; i++){
    var randoNum = Math.floor(Math.random() * workoutOptions.length);
    if (workoutOptions[randoNum].group === 'quads'){
      generatedWorkout.push(workoutOptions[randoNum]);
    }else {
      i--;
    }
  }
};

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
};

function genUserWorkout(){

  if (user.type === 'Upper'){
    workoutOptions = filterWorkouts(user, upperBody);
  } else if (user.type === 'Lower') {
    workoutOptions = filterWorkouts(user, lowerBody);
  } else {
    workoutOptions = filterWorkouts(user, totalBody);
  }

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
  localStorage.setItem('workoutData', JSON.stringify(generatedWorkout));
};

function getFormData (event) {
  event.preventDefault();
  var name = document.getElementsByName('name')[0].value;
  user.name = name; //somehow this got deleted?
  var age = document.getElementsByName('age')[0].value;
  user.age = age;
  var fitnessLevel = document.getElementsByName('level');
  for (var i = 0; i < fitnessLevel.length; i++){
    if (fitnessLevel[i].checked){
      user.level = fitnessLevel[i].value;
    }
  }

  var workoutLength = document.getElementsByName('length');
  for (var i = 0; i < workoutLength.length; i++){
    if (workoutLength[i].checked){
      user.length = workoutLength[i].value;
    }
  }

  var workoutType = document.getElementsByName('type');
  for (var i = 0; i < workoutType.length; i++){
    if (workoutType[i].checked){
      user.type = workoutType[i].value;
    }
  }

  var goals = document.getElementsByName('goal');
  for (var i = 0; i < goals.length; i++){
    if (goals[i].checked){
      user.goal = goals[i].value;
    }
  }

  var equipment = document.getElementsByName('equipment');

  if (equipment[0].checked){
    user.equipment = true;
  }else{
    user.equipment = false;
  }
  localStorage.setItem('userData', JSON.stringify(user));
  genUserWorkout();
  window.location = 'result.html';
}

document.getElementById('clickMe');
document.addEventListener('submit', getFormData);

function createWorkoutPage() {
  resultsPage = JSON.parse(localStorage.getItem('workoutData'));
  user = JSON.parse(localStorage.getItem('userData'));
  workoutInstructions();
  bringName();
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
    var exerciseTitle = document.createElement('p');
    exerciseTitle.setAttribute('class', 'extitle');
    exerciseTitle.innerHTML = resultsPage[i].name;
    workoutContainer.appendChild(exerciseTitle);
    var iframeDesc = document.createElement('p');
    iframeDesc.setAttribute('class', 'description');
    iframeDesc.innerHTML = resultsPage[i].descr;
    workoutContainer.appendChild(iframeDesc);
  }
  for(var i = 0; i < resultsPage.length; i++){
    var outlineBox = document.getElementById('resultsTitle');
    var outline = document.createElement('div');
    outline.setAttribute('id', 'exerciseList');
    if (resultsPage[i].name !== 'Plank' || resultsPage[i].name !== 'Crab Walk' || resultsPage[i].name !== '3 Point Plank') {
      outline.innerHTML = resultsPage[i].name + ' for 8-12 reps';
      outlineBox.appendChild(outline);
    }else {
      outline.innerHTML = resultsPage[i].name + ' for 30 to 60 secs';
      outlineBox.appendChild(outline);
    }
  }
};

function workoutInstructions() {
  if (!user) {
    var instructionsContainer = document.getElementById('instructions');
    var instructions = document.createElement('p');
    instructions.innerHTML = message40Min;
    instructionsContainer.appendChild(instructions);
  }else{
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
    }else if (user.length === '40min') {
      var instructionsContainer = document.getElementById('instructions');
      var instructions = document.createElement('p');
      instructions.innerHTML = message40Min;
      instructionsContainer.appendChild(instructions);
    }
  }
};

function bringName() {
  var getName = document.getElementById('showName');
  var appendName = document.createElement('p');
  if (user){
    appendName.innerText = 'Hey ' + user.name + ', let\'s get this workout started!';
  }else {
    appendName.innerText = 'Hey Bro, let\'s get this workout started!';
  }
  getName.appendChild(appendName);
};

function randomizedWorkout(){
  randomWorkout = [];
  localStorage.removeItem('userData');
  var fullWorkouts = upperBody.concat(lowerBody.concat(totalBody.concat(core)));
  var temp = [];
  for (var i = 0; i < 6; i++){
    var rando = Math.floor(Math.random() * fullWorkouts.length);
    if (!temp.includes(rando)){
      randomWorkout.push(fullWorkouts[rando]);
      temp.push(rando);
    }else {
      i--;
    }
  }
  return randomWorkout;
};

var button = document.getElementById('randomButton');
button.addEventListener('click', genRandomWorkout);

function genRandomWorkout(event){
  event.preventDefault();
  var tempWorkout = randomizedWorkout();
  localStorage.setItem('workoutData', JSON.stringify(tempWorkout));
  window.location = 'result.html';
}
