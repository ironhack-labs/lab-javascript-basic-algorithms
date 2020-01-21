
// Iteration 1: Names and Input
let hacker1 = 'CynthiaA'; //Driver
 console.log(`The driver's name is ${hacker1}`);
 let hacker2 = 'Cynthia'; //Navigator
 console.log(`The driver's name is ${hacker2}`);
// Iteration 2: Conditionals
if ( hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length){
    console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow! You both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let result = '';
for (let i=0;i<hacker1.length;i++){
    result += hacker1[i].toUpperCase();
    if(i<hacker1.length-1){
        result += ' ';
    }
}
console.log(result);
let reverseNav = '';
for (let i=hacker2.length-1; i>=0; i--){
    reverseNav += hacker2[i];
}
console.log(reverseNav);
let i = 0;
if(hacker1==hacker2) {
    console.log(`What?! You both have the same name.`);
} else{
while(i<= hacker1.length && i<=hacker2.length){
if(hacker1[i]<hacker2[i] || hacker1[i]==undefined){
    console.log(`The driver's name goes first.`);
    break;
} else if (hacker2[i]<hacker1[i] || hacker2[i]==undefined){
    console.log(`Yo, the navigator goes first, definitely.`);
    break;
} else {
    i++;
}
}
}
//Bonus 1
let par = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium elit eu lacinia viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ultricies, augue a consectetur scelerisque, ex leo luctus libero, sit amet blandit dui nunc vitae mauris. Donec fringilla dui nec laoreet finibus. Maecenas eu purus odio. Vestibulum ut ipsum urna. Fusce lobortis augue id urna tincidunt gravida. Vestibulum laoreet ante sed aliquet convallis. Integer a dictum eros. Vivamus sit amet pharetra erat. Mauris viverra diam tristique congue porta.
Vestibulum tempor dignissim nisi, non porttitor neque mollis a. Suspendisse sed mattis nisl, et volutpat erat. Ut gravida, sapien nec venenatis efficitur, tortor nibh consectetur leo, sed mollis elit nunc id neque. Nunc ac convallis est. Vestibulum ac blandit tortor. Nulla lacinia pellentesque fringilla. Duis faucibus ante et porta malesuada. In malesuada ac ligula eget lacinia. Vestibulum porttitor nulla at nisi elementum, sed pharetra dolor rutrum. Phasellus lobortis metus eget egestas accumsan. Vivamus at efficitur lorem, a rhoncus metus. Vestibulum dictum arcu eget mauris dignissim, et consequat sem efficitur. Suspendisse quis dignissim urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.
Fusce vehicula iaculis egestas. Sed molestie aliquam purus, ac facilisis tellus egestas at. Vivamus tempus pharetra consectetur. Nunc luctus efficitur pharetra. Praesent convallis, sapien a bibendum tincidunt, diam metus mattis enim, et maximus nibh erat at orci. In est lectus, rhoncus quis fringilla vel, tristique sollicitudin arcu. In auctor cursus erat ac eleifend.`;
let compare = 0;
for(i=0;i<par.length;i++){
    if(par[i] == ' ' ){
        compare++;
    } else if (par[i] == '\n'){
        compare += 0.5;
    }
}
compare++;
console.log(compare);

//Bonus 2
let phraseToCheck = 'Was it a car or a cat I saw?';
phraseToCheck = phraseToCheck.replace(/[^a-zA-Z ]/g, "").toLowerCase();

for (let i=0; i< (phraseToCheck.length/2); i++){
    if (phraseToCheck.charAt(i) == phraseToCheck.charAt(phraseToCheck.length - 1 - i)){
        console.log('It is a palindrome!')
        break;
    } else {
    console.log('They are not palindrome...')
    break;
    }
}

