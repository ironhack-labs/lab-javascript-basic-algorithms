// Iteration 1: Names and Input
let hacker1 = "Jose";
let hacker2 = "Max";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters");
}
else if(hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}
    else {
console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

// Iteration 3: Loops
let aux = "";
for(let i = 0; i < hacker1.length; i++){
    aux += hacker1[i].toUpperCase() + " ";
}
console.log(aux)

let reverseName = hacker2.split("").reverse().join("");
console.log(reverseName);

if(hacker1 < hacker2) {
    console.log("The driver's name goes first.")
}
else if(hacker2 < hacker1){
    console.log("`Yo, the navigator goes first definitely.`")
}
else{
    console.log(`What?! You both have the same name?`)

}



let ipsu1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus mollis leo. Aliquam sagittis nulla id odio mattis imperdiet. Vivamus ante elit, posuere eu risus nec, congue feugiat felis. Aliquam id quam rutrum libero sodales convallis ut quis lorem. Quisque blandit leo aliquet scelerisque consectetur. Quisque in egestas magna, quis convallis sapien. Cras eget maximus mi. Nam posuere velit sit amet nisi maximus, eu convallis massa tristique. 
Sed tincidunt ut quam sit amet posuere. Pellentesque sit amet vestibulum lectus, in accumsan dolor.
Vivamus rhoncus tellus id rutrum hendrerit. Sed est lacus, fermentum ut mi at, 
vulputate vulputate lectus. Mauris mi libero, aliquam vel commodo vitae, mattis sit amet arcu. Morbi feugiat est sit amet elementum vehicula. Vestibulum sed tempus odio. Pellentesque ut nisl risus. Donec sit amet laoreet ipsum.
Phasellus condimentum elit accumsan leo commodo, eget scelerisque metus mollis. Fusce erat lacus, dignissim ut maximus vitae, dictum a ipsum. Maecenas neque nunc, facilisis ut porta sed, commodo a ligula. Fusce condimentum, tortor vitae aliquet elementum, enim dui ultrices est, ac interdum mi nisl nec leo. Mauris porta facilisis viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae tortor condimentum, congue nisi vel, porta ligula. 
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce at lorem eu odio vestibulum molestie eget sed nunc. Maecenas id nisi turpis. Mauris ut egestas magna.`
function WordCount(str) { 
    let words = str.split(" ").length - 2;
    let wordEt = str.split(" et ").length - 1;

    return `The total of words are ${words} and the totals of "et" is ${wordEt}!`
  }
  
  console.log(WordCount(ipsu1));

  let phraseToCheck = `No 'x' in Nixon`

  let justLetters = phraseToCheck.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  let reverLetters = justLetters.split('').reverse().join('').toLocaleLowerCase();
  
  if (justLetters === reverLetters) {
      console.log(`This phrase is a polindrome.`);
  } else {
      console.log(`This phrase isn't a polindrome.`);
  }