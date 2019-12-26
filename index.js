function wakeDog(dogName, dogBreed) {
  var message = `Wake ${dogName} the ${dogBreed}`
  return message;
}

function leashDog(dogName, dogBreed) {
  var message = `Leash ${dogName} the ${dogBreed}`;
  return message;
}

function walkToPark(dogName, dogBreed) {
  var message = `Walk to the park with ${dogName} the ${dogBreed}`;
  return message;
}

function throwFrisbee(dogName, dogBreed) {
  var message = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  return message;
}

function walkHome(dogName, dogBreed) {
  var message = `Walk home with ${dogName} the ${dogBreed}`;
  return message;
}

function unleashDog(dogName, dogBreed) {
  var message = `Unleash ${dogName} the ${dogBreed}`;
  return message;
}

const routine = [wakeDog(dogName, dogBreed), leashDog(dogName, dogBreed), walkToPark(dogName, dogBreed),throwFrisbee(dogName, dogBreed), walkHome(dogName, dogBreed), unleashDog(dogName, dogBreed)];

function exerciseDog(dogName, dogBreed) {
  var returnedMessages = [];
  for (action in routine)
}





