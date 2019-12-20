let hacker = "Jose";
console.log('The driver`s name is ' + hacker);

let hacker2 = "Firefox";
console.log("he navigator's name is " + hacker2);

if (hacker.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has "+ hacker2.length+ " characters.");
} else if (hacker.length > hacker2.length) {
    console.log("The driver has the longest name, it has "+ hacker.length+ " characters.");
} else {
    console.log("Wow, you both have equally long names, "+ hacker.length +" characters!");
}
let tempName = "";
for (let i = 0; i < hacker.length; i++) {
    tempName += hacker.charAt(i).toUpperCase();

    if (i+1 != hacker.length) tempName += " ";
}
console.log(tempName);
tempName = "";
for ( let i = hacker.length-1; i >= 0; i--) {
    tempName += hacker.charAt(i);
}
console.log(tempName);

let hackerCharValues = 0;
for (let i = 0; i < hacker.length; i++) {
    hackerCharValues += hacker.charCodeAt(i);

}
let hacker2CharValues = 0;
for (let i = 0; i < hacker2.length; i++) {
    hacker2CharValues += hacker2.charCodeAt(i);

}
if ( hackerCharValues < hacker2CharValues) {
    console.log("Yo, the navigator goes first definitely.");
} else if ( hacker2CharValues < hackerCharValues) {
    console.log("The driver's name goes first.");
} else {
    console.log("What?! You both have the same name?");
}

const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a aliquam dui. Donec sit amet ante nec eros eleifend venenatis vitae vel sapien. Nam viverra, felis ac rutrum sodales, lacus massa porta turpis, in bibendum nibh urna ac lorem. Morbi eleifend ultricies nisi, sed maximus enim egestas vitae. Curabitur porttitor erat risus, ut scelerisque tortor molestie sed. Duis dictum eros at ligula rhoncus, vitae vestibulum elit blandit. Aenean eget hendrerit ipsum. Nulla vitae ipsum vel tortor mollis volutpat. Suspendisse non sapien ut ante venenatis vulputate. Aliquam rutrum euismod ipsum, et consectetur mi. Vivamus nec vehicula nulla. Phasellus at nulla vel neque sodales pulvinar. Sed pretium lectus metus, nec euismod ante tincidunt non. Integer quis mauris tempus, mattis sapien non, semper mi. Vivamus placerat nunc ac ipsum suscipit, et dictum augue tempus. Sed malesuada leo aliquam elit lobortis, nec lobortis metus vestibulum. In nec neque metus. Nunc ornare elit vel neque bibendum aliquet. Vivamus cursus consectetur lacus quis scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed cursus sagittis vehicula. Etiam ut libero sit amet mauris porttitor aliquet. Nam placerat dolor eu mauris varius scelerisque. Morbi orci eros, sollicitudin vitae risus ut, ultricies laoreet ligula. Nam et euismod ante, quis ornare sapien.";

console.log("Number of words (lorem ipsum) => " + loremIpsumText.split(' ').length);
console.log("Number of 'et' (lorem ipsum) => " + (loremIpsumText.match('[et]/g')||[]).length);