// Iteration 1: Names and Input

let hacker1 = "Karina";
console.log("The driver's name is ", hacker1);
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Anne";
console.log("The navigator's name is ", hacker2);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let driverName = "";
for (i=0; i < hacker1.length; i++){
    driverName += hacker1.charAt(i) + " ";
    
}
console.log(driverName.toUpperCase());

let navegatorName = "";
for (i = hacker2.length - 1; i >= 0; i--) {
    navegatorName += hacker2[i];
}
console.log(navegatorName);

if (hacker1 < hacker2){
    console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definitely.");
} else if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
}

// BONUS1

let paragraphsLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta diam orci, eget blandit neque semper et. Ut sit amet ultricies eros. Suspendisse tellus magna, rhoncus vel varius in, auctor non lacus. Suspendisse semper nisi in dictum tristique. Phasellus sagittis ultrices ante ac consequat. Aenean interdum nulla lacus, id dignissim elit ultricies quis. Nam faucibus, enim sed euismod egestas, augue nulla semper est, nec sagittis turpis nulla tempor erat. Maecenas faucibus ut odio nec tincidunt. Curabitur diam augue, dignissim et tempor vulputate, posuere sed orci. Maecenas id accumsan augue. Morbi eu commodo mauris. Vivamus imperdiet dapibus odio, eget mattis dui dapibus sit amet. Duis nec est pretium, vehicula sapien vitae, auctor nulla. Phasellus suscipit, purus a tristique eleifend, urna nibh ultricies nibh, eget interdum libero enim et turpis. Suspendisse consequat efficitur quam, ac laoreet metus scelerisque sodales. Quisque accumsan, lorem elementum imperdiet interdum, massa lectus facilisis tellus, vitae mattis leo velit eget elit. Nunc nisl felis, porttitor eget finibus nec, scelerisque in dui. Maecenas ut venenatis tortor, et pellentesque sapien. Pellentesque ac mi eu orci ultricies facilisis. Etiam vel eros non purus consectetur convallis porttitor ac purus. Etiam nibh tortor, viverra sit amet lorem at, vestibulum lobortis ante. Donec id mollis neque. Mauris vestibulum neque a scelerisque lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie, urna vel maximus placerat, leo tortor suscipit metus, eu accumsan arcu odio eu metus. Vivamus dignissim malesuada elementum. Nunc sodales risus in dolor auctor feugiat. Ut lobortis, velit in efficitur hendrerit, turpis massa porttitor massa, suscipit aliquam elit tortor sed tortor. Nunc at neque ac elit pulvinar tristique lacinia in urna. Morbi est lorem, tincidunt ac augue et, lacinia consectetur nunc. Sed eleifend magna sit amet condimentum porttitor. Nullam condimentum nisi ut sem vestibulum, at sagittis enim feugiat. Suspendisse quam nisi, semper eu pharetra vitae, fermentum sed nulla. Nunc luctus, ipsum ac cursus congue, velit ex feugiat ante, in laoreet risus velit id nisl. Vestibulum commodo arcu nec laoreet placerat. Praesent ornare nisl vel mi ultricies, nec pellentesque ante sollicitudin. Donec dignissim justo non egestas rhoncus. Mauris cursus suscipit posuere. In tristique id dolor et fermentum. Vestibulum aliquet eu ipsum eu volutpat. Mauris pulvinar arcu vitae vulputate fermentum. Vivamus ac orci vitae velit venenatis molestie."

let countWords = paragraphsLorem.split(' ').length; 
console.log(countWords);

function countOccurences(string, word) {
    return string.split(word).length - 1;
}
console.log(countOccurences(paragraphsLorem, "et"));

//BONUS2

let phraseToCheck = "";

