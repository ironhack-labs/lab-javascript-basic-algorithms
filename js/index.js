// Iteration 1: Names and Input
let hacker1 = "Carlos", hacker2 = "Carlos2";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`);
}

// Iteration 3: Loops

let str = "";

for(let value of hacker1){
    str += value.toUpperCase() + " ";
}
str = str.slice(0,str.length-1)
console.log(str);

let str2 = "";

for(let i = hacker2.length-1; i >= 0; i--){
    str2 += hacker2[i];
}
console.log(str2);

let comp = hacker1.localeCompare(hacker2);

if(comp === -1){
    console.log("The driver's name goes first.");
}else if(comp === 1){
    console.log("Yo, the navigator goes first definitely.");
}else{
    console.log("What?! You both have the same name?");
}

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu molestie arcu. Nunc et neque magna. Sed hendrerit eros tincidunt nisl luctus tincidunt. Pellentesque dolor massa, ornare at accumsan id, fringilla nec lectus. Donec ut felis massa. Aenean porttitor massa magna, id convallis neque varius non. Donec ultricies iaculis risus, in ultrices est maximus ut. Nam vel felis vitae nunc fringilla molestie vel at odio. Integer faucibus et leo vel cursus. Integer aliquet turpis ac interdum imperdiet. Integer ac congue ex, non ultricies metus. Nulla dapibus gravida tristique. Fusce efficitur non nibh non venenatis. Praesent ac interdum ante. Aliquam tincidunt nibh pulvinar volutpat interdum. Sed imperdiet, libero vitae congue interdum, risus ante condimentum elit, a rutrum mauris elit quis dolor. Nunc sed rhoncus enim, eu aliquam ex. Duis enim purus, molestie eu tortor sed, malesuada luctus nibh. Pellentesque auctor auctor libero, sed molestie ligula venenatis ac. Nullam at ante eu turpis facilisis tempor. Integer tempus mattis consectetur. Nulla facilisi. Nam rutrum, lectus et suscipit vehicula, massa velit pharetra mi, et suscipit risus mi et neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus venenatis sagittis quam, vitae faucibus justo rhoncus et. Sed lobortis tempor velit. Quisque vulputate volutpat viverra. Etiam est erat, congue tempor scelerisque eget, consectetur sit amet libero. Nam id tortor sed nibh dignissim tempor et nec augue. Mauris lacinia ipsum in convallis egestas. Curabitur et sem ligula. Morbi luctus sem eget pulvinar ultrices. Maecenas facilisis sodales quam ac consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sed interdum metus. Aenean sodales viverra quam quis feugiat.";

let counter = 1, index = lorem.indexOf(" ");
while(index !== -1){
    counter++;
    index = lorem.indexOf(" ", index+1);
}
console.log(counter);

counter = 0;

index=lorem.indexOf(" et ");
while(index !== -1){
    counter++;
    index = lorem.indexOf(" et ", index+1);
}
index=lorem.indexOf(" Et ");
while(index !== -1){
    counter++;
    index = lorem.indexOf(" Et ", index+1);
}
index=lorem.indexOf(" et.");
while(index !== -1){
    counter++;
    index = lorem.indexOf(" et.", index+1);
}

console.log(counter);

function removeCharacter(str, character){
    let index = str.indexOf(character);
    while(index !== -1){
        str = str.slice(0,index) + str.slice(index+1, str.length);
        index = str.indexOf(character);
    }

    return str;
}

function reverseStr(str){
    let revStr= "";
    for(let i = str.length-1; i >=0; i--){
        revStr += str[i];
    }
    return revStr;
}

let phraseToCheck = "A man, a plan, a canal, Panama!";

phraseToCheck = removeCharacter(phraseToCheck, ",");
phraseToCheck = removeCharacter(phraseToCheck, "!");
phraseToCheck = removeCharacter(phraseToCheck, "?");
phraseToCheck = removeCharacter(phraseToCheck, " ")
phraseToCheck = phraseToCheck.toLowerCase();

if(phraseToCheck === reverseStr(phraseToCheck)){
    console.log("It is a palindrome");
}else{
    console.log("It is not a palindrome");
}

