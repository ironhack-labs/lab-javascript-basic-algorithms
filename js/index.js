// Iteration 1: Names and Input

//console.log("I'm ready!");
let hacker1 = "Mariana";
console.log(`The driver's name is ${hacker1}`)
let hacker2 =  "João and Chloé";
console.log(`The navigator's name are ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if ( hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

//Option 1:
let nameWithSpace ="";
for (letters in hacker1){
   // console.log(hacker1[letters].toUpperCase());
   // console.log(” “);
   nameWithSpace += hacker1[letters].toUpperCase();
   nameWithSpace += " ";
}
console.log(nameWithSpace);
let reversedNavigator ="";
for (i= hacker2.length-1; i >= 0; i--){
    reversedNavigator += hacker2[i];
    reversedNavigator+= " ";
}
console.log(reversedNavigator);
let phraseToPrint = "";
let lexicographicOrderResult = hacker1.localeCompare(hacker2)
switch(lexicographicOrderResult){
    case 1:
        phraseToPrint = `Yo, the navigator goes first definitely.`;
        break;
    case -1:
        phraseToPrint = `The driver's name goes first.`
        break;
    case 0:
        phraseToPrint = `What?! You both have the same name?`
        break;
}
console.log(phraseToPrint);
//Option 2:
let withSpace ="";
for (let i = 0; i<hacker1.length; i++){
    withSpace += hacker1[i].toUpperCase();
    withSpace += " ";
};
console.log(withSpace);
let navigator =""
for(let i= hacker2.length - 1; i >= 0; i--){
    navigator += hacker2[i]
};
console.log(navigator);
let result= hacker1.localeCompare(hacker2)
    if(result==1){
        console.log(`Yo, the navigator goes first definitely.`)
} else if(result==0){
    console.log(`What?! You both have the same name?`)
} else if(result==-1){
    console.log(`The driver's name goes first.`)
};


//  BONUS 1
let paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec est pretium suscipit eget non dui. Maecenas felis enim, dignissim nec nulla vel, posuere porttitor mi. Pellentesque a arcu nisl. Nunc consequat sit amet ante sit amet ullamcorper. Donec dictum lacus ut magna pretium, rhoncus scelerisque massa congue. Nulla facilisi. Proin tincidunt eget nulla eu luctus. Donec tincidunt felis massa, in placerat tellus lobortis fermentum. Sed quam est, egestas vitae vehicula eget, scelerisque non sapien. Nullam aliquet finibus convallis. Ut vehicula sodales nisl et congue. In sapien magna, varius vitae sem et, aliquam facilisis velit. In non vestibulum purus. Suspendisse dictum erat nibh, a porttitor turpis placerat in. Nunc aliquet diam vel sem aliquet, finibus iaculis nunc varius. Praesent euismod, ipsum ut aliquet interdum, metus ligula iaculis diam, molestie dapibus nisl quam at orci. Morbi porttitor, ante non placerat congue, magna mi mattis enim, ut facilisis ligula augue a libero. Nam egestas ante ac neque pellentesque, quis varius turpis ornare. Nullam ullamcorper nec arcu nec elementum. Aliquam tincidunt, tellus in fermentum aliquam, sapien mi pellentesque turpis, nec pellentesque neque libero quis tortor. Sed consectetur est quis porta bibendum. Nullam efficitur tincidunt sem, tincidunt varius ipsum semper vitae. Phasellus ac faucibus nisl. Nulla mi dolor, porta ut magna sit amet, convallis efficitur turpis. Aliquam bibendum at lacus et suscipit. Etiam pharetra sit amet elit eu fermentum. Suspendisse laoreet arcu eu aliquam vestibulum. Phasellus sed imperdiet nunc, at dapibus sem. Morbi sollicitudin tempor tellus, ut pharetra quam dapibus ut. Nulla facilisi. Vestibulum et ipsum urna. Quisque vel purus a sapien lobortis cursus ac id dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper urna ut dolor volutpat, interdum laoreet risus blandit. Nullam ligula nisl, molestie bibendum dolor vitae, accumsan cursus neque. Aliquam vestibulum, tellus in placerat viverra, sapien diam rutrum neque, at eleifend urna felis non justo. Pellentesque sed ultrices felis, et fringilla dui."

//word counter
let count = 1
for(let i = 0; i<paragraphs.length; i++){
    if(paragraphs[i]=== " "){
        count +=1;
     
    }
  
}
console.log(count)   


// word "et" counter
let etCounter = 0;
for(let i = 0; i< paragraphs.length; i++){
    if(paragraphs[i] ===" " && paragraphs[i+1] === "e" && paragraphs[i+2]=== "t"){
        etCounter += 1;
    }
}

console.log(etCounter)

//BONUS 2
let phraseToCheck="roma amor";
let result2;

for (let i = 0; i <= phraseToCheck.length/2; i++){
    for (let j = phraseToCheck.length; j >= phraseToCheck.length/2; j--){ 
        if(phraseToCheck[i]=== " " || phraseToCheck[j] === " "){
            continue;    
        }else if (phraseToCheck[i] === phraseToCheck[j]){
            result2 = true;
        }else{
            result2 = false;
        };
    };
 };


 if(result2 == true){ 
    console.log(`${phraseToCheck} is a palindrome!`)
 } else if(result2 == false){
    console.log(`${phraseToCheck} is not a palindrome!`)
 };