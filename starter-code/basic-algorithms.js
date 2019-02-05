function compareNames(name1) {
  const hacker1 = name1;
  console.log("The driver's name is " + hacker1);
  let hacker2 = prompt("Whats your name?");
  if (hacker2 === null || !isNaN(hacker2)) {
    while (hacker2 !== null || isNaN(hacker2)) {
      alert("Invalid name, please try again");
      hacker2 = prompt("What is your name ? ");
      if (hacker2 !== null || isNaN(hacker2)) {
        document.write("Hello ", hacker2);
      }
    }
  }

  console.log("The navigator's name is" + hacker2);

  if (hacker1.length > hacker2.length) {
    console.log(
      "The driver has the longest name, it has " +
        hacker1.length +
        " characters"
    );
  } else if (hacker1.length < hacker2.length) {
    console.log(
      "Yo navigator got the longest name, it has " +
        hacker2.length +
        " characters"
    );
  } else {
    console.log(
      "Wow, you got equally long names, " + hacker1.length + " characters"
    );
  }

  for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase() + " ");
  }
  for (let i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2[i]);
  }

  if (hacker1 === hacker2) {
    console.log("what?! You both the same name?");
  }

  let arrayNames = Array.of(hacker1, hacker2);
  console.log(arrayNames);
  arrayNames.sort();
  console.log(arrayNames);

  if (arrayNames[0] === hacker1) {
    console.log("The driver's name goes first");
  } else {
    console.log("Yo, the navigator's goes first definetly");
  }
}

let userString = prompt("Enter a palindrome phrase");

function checkIfPalindrome(userString) {
  let comparer = userString
    .split(" ")
    .join("")
    .toLowerCase();
  comparer = comparer.replace(/,/, "");
  for (let i = 0; i < comparer.length; i++) {
    if (comparer[i].charCodeAt() < 97 || comparer[i].charCodeAt() > 122) {
      return "Invalid string, special characters detected";
    }
  }

  let answer = "";

  for (let i = comparer.length - 1; i >= 0; i--) {
    answer += comparer[i];
  }
  answer.toLowerCase();

  return answer === comparer ? "It's a palindrome" : "It's not a palindrome";
}

function countLorenIpsun(string, number) {
  const stringLoren = string.repeat(number);
  const timesEtAppears = stringLoren.split("et").length;
  const numberOfWords = stringLoren.split(" ").length;
  return (
    "The string length is " +
    numberOfWords +
    ' words, the number of times "et" appears is ' +
    timesEtAppears
  );
}
