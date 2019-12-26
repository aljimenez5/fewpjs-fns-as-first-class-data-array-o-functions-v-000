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

var walkHome = function(dogName, dogBreed) {
  var message = `Walk home with ${dogName} the ${dogBreed}`;
  return message;
}

var unleashDog = function(dogName, dogBreed) {
  var message = `Unleash ${dogName} the ${dogBreed}`;
  return message;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  return routine.map(funct => funct(dogName, dogBreed))
}
