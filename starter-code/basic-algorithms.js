// Names and Input
var hacker1 = "Juan";
console.log("The driver's name is " +hacker1)
var hacker2 =  window.prompt("Input navigator's name");
console.log("The navigator's name is "+hacker2);
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has "+hacker1.length+ " characters");
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has "+hacker2.length+ " characters");
} else {
  console.log("Wow, you both got equally long names, "+hacker1.length+ " characters!!");
}
//Conditionals
let arrayh1 = [];
for (var z=0; z<hacker1.length; z++) {
  arrayh1.push(hacker1[z])
}
let stringh1 = arrayh1.toString();
let stringh1final = stringh1.replace(/,/g, " ");
console.log(stringh1final.toUpperCase()); 

let rev = arrayh1.reverse().toString().replace(/,/g, "");
console.log(rev);

let comp = hacker1.localeCompare(hacker2);
if (comp === -1) {
  console.log("The driver's name goes first");
} else if (comp === 0) {
  console.log("What?! you both got the same name?")
} else {
  console.log("Yo, the navigator goes first defintely")
}

var palindrome =  window.prompt("Input a string");
var quitar = palindrome.replace(/[\W_]/g,"").toLowerCase();
var reversePal =  quitar.split('').reverse().join('');
if (reversePal === quitar) {
  console.log("It's a Palindrome");
} else {
  console.log("This is a shit");
}


// Lorem ipsum generator

var strLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet varius ligula, congue dictum tortor pulvinar vitae. Vestibulum vitae arcu dictum, fermentum neque eu, fringilla metus. Vestibulum at eros massa. Fusce ut elit quis augue condimentum laoreet in quis tellus. Nullam ultricies felis sit amet lacus tempor pulvinar. Maecenas gravida ipsum vel enim fringilla elementum. Proin tincidunt nisl sed tortor condimentum, sit amet viverra quam blandit. Nulla tempus dictum dolor sit amet viverra. Aliquam erat volutpat. Sed semper dictum ullamcorper. Nullam ac congue lorem, ut convallis felis. Nulla in velit a diam mollis commodo. Nulla non nibh commodo dolor semper pellentesque. Aenean non metus nunc. Ut tincidunt auctor lobortis. Integer eu cursus neque, nec auctor est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce nisl sapien, luctus ut porttitor vel, pretium eu est. Fusce ac gravida leo. Aliquam tincidunt nunc ligula, eu sollicitudin nisl egestas a. Nam elementum tempor efficitur. Duis metus ante, fringilla sed hendrerit aliquet, dignissim in odio. Fusce elementum congue enim eu accumsan. Etiam nec ante nec dolor elementum congue. Proin eros nunc, posuere in finibus et, volutpat a felis. Aenean at faucibus justo, in volutpat odio. Pellentesque sed elit mi. Praesent vitae dictum lacus."

