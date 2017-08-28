# Workout Generator Project (CF 201d25)

## Group Members

Rob Bronson
Brian Wheeler
Kavdi Hogsdon
Matt Favoino

## Project Overview and Problem Domain

With minimal time in the day to find time to get in the gym, people are looking for ways to stay fit without having to take an hour or more out of their routine. Even if you get to the gym, the same stale routine makes it easy to start making excuses for why you can't workout. Our team is working to help solve these problems by providing people with an intuitive workout generator that is focused on providing a structured workout that can be done at home with little to no equipment. By considering less than ten inputs that the user has to provide, our workout generator will create a customized workout that can be done almost anywhere, and is tailored to the user's needs.

Our group intends to use three pages to create our website. The first will be a welcome page explaining the concept of the website, the second will be a form that the user completes to generate a workout, and the third will provide the user with a customized workout to complete based on the information provided on the second page. A picture of our initial wireframes is located at the following link: INSERT LINK HERE.

### Technical Considerations

We intend to use a form with user input on the second page to customize workouts. Our group has decided to create an exercise object with properties that are directly related to the questions that the user is asked on the form. This will allow us to build out logic that will narrow down the types of exercises that the person can get for their workout. The exercise objects will utilize a function that utilizes the includes method to narrow down the choices of possible exercises, creating a new array that is persisted in local storage, and that can be further narrowed down based on each question the user is asked. Once all of user input is created and the array of possible objects is narrowed down to its smallest size, we intend to populate the workout with exercises that meet the criteria based on the input of the user. Other elements necessary will be a function that randomizes workouts that are available after all of the non-applicable exercises have been stripped from the possible exercises array.

### User Stories

1. As a user, I want to have a workout suggested to me that meets my unique fitness goals and abilities.
2. As a user, I want to have a workout created for me without providing an excessive amount of information.
3. As a user, I want explicit instructions that tell me what exercises to conduct, and how to do them properly.
4. As a user, I want an intuitive interface with minimal friction that allows me to generate a workout in just a couple of minutes.
5. As a user, I want a wide variety of exercises and possible workout combinations that ensures that my routine is always changing and never boring.
6. As a user, I want my favorite workouts to be saved for me to reference at a later date.

### Other Applicable information
Preliminary color palette: http://www.iscd.edu.au/admin/uploads/image/blog/dulux-colour-forecast-2015/swatch-wildland.jpg
Domain model diagram:   
