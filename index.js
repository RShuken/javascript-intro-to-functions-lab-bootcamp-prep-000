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
 if ( string.toLowerCase() === "hello!" ) {
    console.log(`I can't hear you!`);
  } else {
    console.log(`Are you eating enough?`);
  }
}