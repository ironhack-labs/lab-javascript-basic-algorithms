// Iteration 1: Names and Input


console.log("I'm ready!");

let hacker1 = "Zeta";
let navigator = "Zeta";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${navigator}`);

// Iteration 2: Conditionals

if(hacker1.length > navigator.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}else if(navigator.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters`);
}else{
    console.log(`Wow, you both have equalle long names, ${hacker1.length} characters`);
}


// Iteration 3: Loops

//Exercise 1
let name = "";
for( char of hacker1){
    name += char + " ";
}

console.log(name.toUpperCase());

//Exercise 2
let backwardsName = "";
for(let i = (navigator.length - 1); i >= 0; i--){
    backwardsName += navigator[i];
    
};

console.log(backwardsName);

//Exercise 3


let arrNames = [ hacker1, navigator];
let sorted = arrNames.sort();


if( sorted[0] === sorted[1]){
    console.log("What?! You both have the same name?")
}
else if( sorted[0] === hacker1){
    console.log("The driver's name goes first");
}else if(sorted[0] === navigator){
    console.log("Yo, the navigator goes first definitely.")
}

//BONUS 1

let textInLatin = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit velit sapien, ut hendrerit felis tempus vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque blandit ipsum in maximus sollicitudin. Etiam non sagittis felis, vehicula eleifend odio. Curabitur vitae iaculis ex. Fusce posuere turpis in diam euismod gravida. Vivamus sit amet tellus et eros feugiat ullamcorper. Sed posuere pellentesque est, sit amet consectetur orci imperdiet eget. Maecenas molestie lorem erat, nec facilisis nulla euismod sit amet. Vivamus urna nulla, euismod non rutrum a, accumsan non sapien. Curabitur molestie, turpis eget posuere dignissim, tortor tellus tempor sem, quis euismod justo sem ac risus. Pellentesque nisi nisl, varius laoreet diam id, volutpat faucibus velit. Donec condimentum ipsum id dapibus egestas. Sed faucibus non leo nec tempus. Ut vel nisi nisl. Donec aliquam, nibh id facilisis suscipit, quam nibh varius ante, et ullamcorper velit neque id mauris.
Donec quis elementum nunc, sit amet convallis nunc. Donec est odio, cursus a sapien eu, dignissim fermentum dui. Maecenas vel maximus ipsum, ut consequat dolor. Maecenas sit amet mauris at felis aliquam dapibus. Donec non iaculis lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sodales, justo quis sollicitudin auctor, odio libero interdum turpis, sit amet fringilla orci elit vitae nisi. Nulla posuere mollis urna, et pretium felis iaculis eu. Donec non malesuada eros. Nunc vulputate enim vel laoreet semper. Donec efficitur laoreet aliquet. In hac habitasse platea dictumst. Donec vehicula augue sit amet iaculis pretium.
Sed convallis orci eu augue interdum tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ut euismod ipsum. Sed justo urna, semper sit amet efficitur sit amet, mollis ac lorem. Pellentesque interdum efficitur turpis, dapibus tincidunt metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent dignissim, est nec congue fermentum, erat velit vestibulum elit, vel ultricies tortor arcu ac leo. Etiam vel arcu vel massa tincidunt tempor nec vitae diam. Etiam ex dolor, vehicula quis diam in, facilisis ultrices tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent tincidunt erat purus, ut suscipit felis posuere vitae. In eget pulvinar metus, imperdiet porta mauris. Nam nec tristique nulla. Curabitur lorem eros, dignissim et viverra ac, vestibulum vitae ante. `



let countWords = textInLatin.split(' ').length;
console.log(`The paragraph has ${countWords} words`);

let et = textInLatin.split(' et ').length -1 ;
console.log(et)

//Bonus 2

let phraseToCheck = "race car";

//I put it backwards
let backwardsPhrase = ""
for(let i = (phraseToCheck.length - 1); i >= 0; i--){
   backwardsPhrase += phraseToCheck[i]
};

//I put it in lowercase

let lowerCasePhrase = backwardsPhrase.toLowerCase()
console.log(lowerCasePhrase)

//I take away the , and the spaces
let comparePhrase = "";
for (char of lowerCasePhrase ){
    if ( char !== "," && char !== " "){
        comparePhrase += char;
    }
}

//I take away the , and spaces in my first phrase in lowercase

let secondComparePhrase = "";
for(char of phraseToCheck.toLowerCase()){
    if ( char !== "," && char !== " "){
        secondComparePhrase += char;
    }
}

//I compare if they are the same!
if( comparePhrase === secondComparePhrase){
    console.log("WE HAVE A PALINDROME!!")
}