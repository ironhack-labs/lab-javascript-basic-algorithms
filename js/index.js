let hacker1 = 'Marija';
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = 'Daniel';
console.log(`The navigator's name is ${hacker2}.`);

if (hacker1.length == hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
else if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

// iteration 3
//3.1
let driverCapitals = hacker1.toUpperCase();
console.log(driverCapitals);
let hackerOneCapitals = driverCapitals.split('').join(' ');
console.log(hackerOneCapitals);
// 3.2
console.log(hacker2.length);  //6
let hackerTwo = hacker2.split("");
console.log(hackerTwo);   // array D,a,n,i,e,l
let reverseHackerTwo = hackerTwo.reverse();
console.log(reverseHackerTwo);
let reverseHacker2 = reverseHackerTwo.join("");
console.log(reverseHacker2);
// 3.3
if (hacker1.localeCompare(hacker2) == 1) {
  console.log("Yo, the navigator goes first definitely.")
} else if (hacker1.localeCompare(hacker2) == 0) {
  console.log("What?! You both have the same name?")
} else if (hacker1.localeCompare(hacker2) == -1) {
  console.log("The driver's name goes first.")
}

let loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id justo sit amet velit consequat vulputate sit amet sed elit. Integer ipsum justo, pretium a porttitor quis, elementum ac velit. Sed sagittis, ante quis ultrices eleifend, diam nisi porta diam, vel sodales magna metus at nisl. Donec augue dui, pulvinar et lacinia nec, vestibulum at nisi. Curabitur sit amet felis mattis, viverra tortor consequat, sagittis mauris. Proin ipsum risus, accumsan vel arcu sit amet, eleifend volutpat nibh. Cras venenatis tellus at convallis blandit. Cras auctor placerat lacinia. Aliquam sapien leo, elementum ac accumsan vitae, facilisis at ligula. Suspendisse tempus odio velit, sed porta turpis congue nec. Sed vel diam eu justo condimentum eleifend vitae nec leo. Aenean elementum egestas eros nec volutpat. Proin lacinia vitae orci malesuada dapibus. Sed dui nunc, fermentum imperdiet iaculis id, iaculis nec ex. Nunc eget semper sem. Sed gravida tincidunt purus sit amet dictum.

Proin ligula turpis, luctus vel finibus a, ullamcorper congue ligula. Fusce rhoncus et odio vel placerat. Quisque tincidunt dictum hendrerit. Mauris porttitor dolor eu risus ornare, eget vehicula enim volutpat. Morbi efficitur eros eget ornare auctor. Curabitur vitae magna non enim tempor finibus vitae in risus. Mauris sollicitudin metus sapien. Sed pharetra consequat orci, rhoncus fringilla velit lacinia vitae. Proin gravida volutpat lectus, eu elementum diam lacinia ac. Proin placerat turpis vel ex placerat, non lacinia nisl dignissim. Pellentesque id ex at urna porttitor tempus. Suspendisse varius eros et massa sodales, quis fringilla arcu lacinia. Proin consectetur faucibus sapien, a sagittis ligula sodales maximus. Proin volutpat magna nec facilisis iaculis. Morbi ligula diam, pretium et mi id, feugiat varius sapien. Sed interdum est ut convallis vehicula.

Quisque urna nibh, hendrerit non sagittis quis, placerat ac turpis. Sed libero neque, dictum nec mattis at, dignissim vitae nisl. Donec tincidunt suscipit orci quis dapibus. Sed rhoncus hendrerit diam sed efficitur. Suspendisse et erat placerat nisi scelerisque commodo sed sit amet felis. Vivamus semper pretium aliquet. In mollis quam sem, sit amet convallis ante viverra et. Fusce eu sem ac nisi mollis viverra eu nec mauris. Praesent fringilla lacus justo, eget facilisis massa semper eu. Nullam aliquet quis leo at aliquet. Vestibulum metus quam, tincidunt vitae quam eget, porta pellentesque lacus. Duis id varius enim, at laoreet erat.`

function countWords(loremText) {
  const arr = loremText.split(' ');
  return arr.filter(word => word !== '').length;
}
console.log(countWords(loremText));

function etCount (loremText) {
  return loremText.split(' et').length -1;
}
console.log(etCount(loremText));

function checkPalindrome(phraseToCheck){
  let reversed = phraseToCheck.split("").reverse().join("");
  return phraseToCheck === reversed
}
console.log(checkPalindrome('step on no pets'));