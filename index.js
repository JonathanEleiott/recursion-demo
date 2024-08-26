// factorial -> 5! = 5 * 4 * 3 * 2 * 1 => 120

const factorial = (num) => {
  if(num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// console.log(factorial(3));

// factorial(5) => 5 * factorial(4) -> 5 * 24 -> 120
// factorial(4) => 4 * factorial(3) -> 4 * 6 -> 24
// factorial(3) => 3 * factorial(2) -> 3 * 2 -> 6
// factorial(2) => 2 * factorial(1) -> 2 * 1 -> 2
// factoiral(1) => 1



// power 2^3 -> 2 * 2 * 2 -> 8
// power 3^4 -> 3 * 3 * 3 * 3 -> 81

const power = (base, exponent) => {
  if(exponent === 1) {
    return base;
  } else {
    return base * power(base, exponent - 1);
  }
}

// console.log(power(2, 3));

// power(3, 4) => 3 * power(3, 3) -> 3 * 27 -> 81
// power(3, 3) => 3 * power(3, 2) -> 3 * 9 -> 27
// power(3, 2) => 3 * power(3, 1) -> 3 * 3 -> 9
// power(3, 1) => 3


// "Hello" -> "olleH"
// "Take my string, flip it, and reverse it!" -> "!ti esrever dna ,ti pilf ,gnirts ym ekaT"
// "race car #8" -> "8# rac ecar"
// "was it a car or a cat i saw" -> "was i tac a ro rac a ti saw"
// "" -> ""

// write a function called reverseString
// reverseString should take in a string
const reverseString = (str) => {
  // if the string is empty, return an empty string
  if(str === "") {
    return "";
    
    // if the string is down to one letter
  } else if(str.length === 1) {
    // return that one letter
    return str;

    // otherwise,
  } else {
    // return reverseString on everything but the first letter, add the first letter at the end
    return reverseString(str.slice(1)) + str[0];
  }
}

console.log(reverseString(""));

// reverseString("Hello") => reverseString("ello") + "H" => "olle" + "H" -> "olleH"
// reverseString("ello") => reverseString("llo") + "e" => "oll" + "e" -> "olle"
// reverseString("llo") => reverseString("lo") + "l" => "ol" + "l" -> "oll"
// reverseString("lo") => reverseString("o") + "l" => "o" + "l" -> "ol"
// reverseString("o") => "o"