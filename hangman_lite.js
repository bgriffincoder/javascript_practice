(function(){
  let word ="zipper";
  let letter = "p";
  let numLetters = word.split(letter).length-1;
  if (numLetters>0) {
    console.log("Yeah, the letter " + letter + " exists " + numLetters + " times in my word.");
  } else {
    console.log("Nope, that letter doesn't exist in my word.");
  }
})()
