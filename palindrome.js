(function(){
  function palindrome(str) {
    var newString = str.replace(/[A-Z0-9]/ig, "").toLowerCase();
    var rev = newString.split("").reverse().join("");
  if (rev == newStr) {
    return true;
  }  else {
      return false; }
  }
  let isItPalindrome = "racecar";
  console.log("The word " + isItPalindrome + " is " + palindrome(isItPalindrome) +" to be a palindrome!");
})()
