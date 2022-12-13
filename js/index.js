// Iteration 1: Names and Input
let hacker1 = "Josep";
let hacker2 = "Carlos";
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);
console.log("The driver's name is", hacker1);
console.log(`The driver's name is ${hacker1}` );
//
// Iteration 2: Conditionals

// hacker1.length>hacker2.length ? console.log("The driver has the longest name, it has " + hacker1.length + " characters.") : console.log( `It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
// if (hacker1.length == hacker2.length) console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
let hak1Leng = hacker1.length;
let hak2Leng = hacker2.length;
if (hak1Leng > hak2Leng) console.log("The driver has the longest name, it has " + hak1Leng + " characters.");
else if (hak2Leng > hak1Leng) console.log (`It seems that the navigator has the longest name, it has ${hak2Leng} characters`)
else console.log("Wow, you both have equally long names, " + hak1Leng + " characters!")



// Iteration 3: Loops
let nameUperSpace = "";
for (let i = 0; i<hak1Leng; i++){
    nameUperSpace += hacker1[i] + " "
    console.log("iteration: ",nameUperSpace)
}
let resultA = nameUperSpace.toUpperCase()
console.log("Name: ", resultA)

///
let nameReverse = "";
for (let i = hacker2.length -1; i>=0; i--){
    nameReverse += hacker2[i]
}
console.log(nameReverse);

///
const newArr = [hacker1,hacker2];
console.log("new Arr: " + newArr)
const sortArr = newArr.sort();
console.log ("ordenada :" + sortArr)
if (hacker1=== sortArr[0]) {
    console.log ("The driver's name goes first.")
} else if (hacker2 === sortArr[0]){
    console.log ("Yo, the navigator goes first definitely.")
} else {
    console.log("Both name")
}
/// BONUS
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis neque eget velit hendrerit elementum. Ut tellus felis, sagittis sit amet nisl a, aliquet condimentum massa. Aliquam at ex non magna auctor dignissim. Quisque eu eros id magna cursus pulvinar a at ex. Sed in massa mauris. Donec vel accumsan nisi, non pretium mi. Etiam blandit ante non augue consectetur, non ultricies sapien porta. Phasellus a pharetra nulla. Etiam quis purus mauris. Phasellus ut auctor neque. Aliquam ac velit sed dolor mattis vehicula.

Aliquam lacinia arcu vehicula dolor rhoncus congue. Quisque aliquet porta libero. Etiam quis molestie purus. Nulla ultrices diam eget tortor lacinia tempus. Phasellus tristique nisi mi. Fusce eleifend volutpat risus eu malesuada. Aliquam maximus dapibus tortor, at condimentum nibh pellentesque et. Quisque blandit neque a dui scelerisque, vel tincidunt quam tristique. Aliquam velit velit, efficitur eu porttitor tempor, rutrum eget enim. Nunc vulputate urna quis commodo fermentum. Mauris eget volutpat risus. Ut et libero sem. Cras in elit eu metus imperdiet posuere. Nunc at sapien felis.

Cras cursus diam sit amet sagittis cursus. Nunc mauris lacus, auctor vel scelerisque quis, accumsan non enim. Nullam posuere, ex at viverra ornare, leo libero laoreet dolor, id interdum tellus nisi eu augue. Morbi tristique neque pellentesque velit feugiat, quis ultricies libero auctor. Vestibulum lobortis erat eros, id euismod metus laoreet dapibus. Vestibulum rhoncus non quam et tristique. Sed lectus enim, rhoncus faucibus consequat et, lacinia nec massa. Proin quis venenatis nulla. Morbi at lectus vel odio tempus sodales a non massa.`;

const arrSplit = text.split(" ");
console.log (arrSplit)
const lengthText = arrSplit.length;
console.log (lengthText);
let counter = 0;
 for (let i = 0; i< arrSplit.length; i++){
    if (arrSplit[i]== `et`){
        counter++
        
        
    }
 }
console.log("counter et:",counter);
/// 
let phraseToCheck = "anna";
let reversePhraseToCheck = ""
for(let i = phraseToCheck.length - 1; i>=0; i--){
    
    reversePhraseToCheck += phraseToCheck[i];
    const checkArr = [phraseToCheck , reversePhraseToCheck]
    for (let i = 0;  i<checkArr.length; i++){
        if (phraseToCheck === reversePhraseToCheck){
            console.log ("son iguals.")
        }
    }

}




// Start
console.log("I'm ready!");



