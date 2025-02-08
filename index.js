// Iteration 1: Names and Input
let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Jane";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

hacker1?.length > hacker2?.length
  ? console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    )
  : hacker1?.length < hacker2?.length
  ? console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    )
  : console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!`
    );

// Iteration 3: Loops

hacker1 = hacker1.toUpperCase().split("").join(" ");
console.log(hacker1);

hacker2 = hacker2.split("").reverse().join("");
console.log(hacker2);

console.log(hacker1.localeCompare(hacker2));
console.log(hacker2.localeCompare(hacker1));

hacker1.localeCompare(hacker2) === -1
  ? console.log(`The driver's name goes first.`)
  : hacker1.localeCompare(hacker2) === 1
  ? console.log(`Yo, the navigator goes first definitely.`)
  : console.log(`What?! You both have the same name?`);

// Bonus 1

const longText = `Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus at eget torquent nibh aenean fames leo. Conubia aliquam eget tortor; dignissim molestie amet a venenatis. Etiam elit venenatis nibh ornare iaculis vulputate vulputate. Est pellentesque mollis phasellus eros pellentesque montes penatibus sit maecenas. Dictum interdum ipsum facilisi aenean purus dapibus.

Purus euismod primis himenaeos tincidunt leo ornare. Semper ultrices velit eu urna nascetur at gravida. Platea gravida venenatis integer pellentesque ridiculus dis eros nulla? Ridiculus eleifend nascetur himenaeos hendrerit nibh dui. Suspendisse tortor ornare felis velit odio metus. Porttitor sodales semper pulvinar orci fusce quisque augue. Ridiculus eu tempor nunc pharetra ullamcorper. Ultrices nunc curabitur maecenas varius posuere, eget volutpat. Risus vitae ante mauris at posuere malesuada.

Eu primis senectus luctus curabitur habitant pellentesque et ut. Senectus inceptos mauris at dictum vel himenaeos vel. Sit venenatis primis elit netus, sapien eu turpis sapien. Dapibus sapien tincidunt potenti nulla suspendisse mus ad morbi. Tempus diam natoque condimentum laoreet ut nibh. Diam torquent dignissim porta viverra dui cras magnis. Dictum gravida vestibulum auctor enim nullam finibus enim iaculis risus. Quis ante facilisis mus gravida congue etiam.`;

console.log(longText.split(" ").length);

console.log(longText.split("et").length - 1);

// Bonus 2

let phraseToCheck = "Amor, Roma";

function isPalindrome(phrase) {
  let cleanedPhrase = phrase.toLowerCase().replace(/[^a-z]/g, "");
  console.log("Cleaned phrase: ", cleanedPhrase);
  let reversedPhrase = cleanedPhrase.split("").reverse().join("");
  console.log("Reversed phrase: ", reversedPhrase);
  return cleanedPhrase === reversedPhrase;
}
isPalindrome(phraseToCheck);

console.log(
  isPalindrome(phraseToCheck)
    ? "The phrase is a palindrome."
    : "The phrase is not a palindrome."
);
