function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log('hello'.toUpperCase());
}

function logWhisper(string) {
  console.log('hello'.toLowerCase());
}

function sayHiToGrandma(string) {
  var lowercase = 'hello!';
  var uppercase = 'HELLO!';
  var mixedCase = 'Hi there!';
  
  if (string.toUpperCase() === uppercase){
    console.log("YES INDEED!");
  } if ( string.toLowerCase() === lowercase ) {
    console.log("I can\'t hear you!");
  } if (string.mixedCase === "I love you, Grandma.") {
    console.log("I love you, too.");
  }

}