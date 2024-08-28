// Iteration 1: Names and Input
let hacker1 = "Alejandro";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Ana";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}else {
    console.log(`wow you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
//3.1
let capitalLetters=""
for (let i=0; i<hacker1.length; i++){

    if(i === hacker1.length-1){
        capitalLetters+=hacker1[i].toUpperCase();
    }else {
        capitalLetters+=hacker1[i].toUpperCase()+ " ";
    }
}
console.log(capitalLetters);

//3.2
let hacker2Reverse="";
for (let i=hacker2.length-1; i>=0; i--){
    hacker2Reverse+=hacker2[i];
}
console.log(hacker2Reverse);

//3.3

function lexicographic (hacker1, hacker2){
    let end;

    if(hacker1.length > hacker2.length){
        end = hacker2.length;
    }else {
        end=hacker1.length;
    }

    let x=0;
    for(let i = 0; i<end; i++){
        if(hacker1[i]<hacker2[i]){
            console.log(`The driver's name goes first`);
            x=1;
            break
        }else if(hacker2[i]<hacker1[i]){
            console.log(`Yo, the navigator goes first, definetly`);
            x=1;
            break
        }
    }

    if (x===0){
        console.log("What? You both have the same name");
    }
}

lexicographic (hacker1, hacker2);

//Alternativa

/* if(hacker2.localeCompare(hacker1) > 0){
    console.log(`The driver's name goes first`);
}else if(hacker2.localeCompare(hacker1) < 0){
    console.log(`Yo, the navigator goes first, definetly`);
}else{
    console.log("What? You both have the same name");
} */


//Bonus 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet mauris eu tincidunt eleifend. Proin sollicitudin turpis eget bibendum vehicula. Mauris porta ex orci, ut tempus turpis iaculis sed. Sed auctor semper vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus vestibulum convallis ultricies. Fusce cursus lorem id enim posuere ultrices. In et neque sapien. Maecenas nec ante ut leo dignissim pretium. Integer lectus magna, porta quis hendrerit quis, tincidunt eget dolor. Nam ut sodales felis. Cras facilisis ullamcorper convallis. Curabitur id dui a urna lobortis imperdiet. Phasellus elementum, lorem sed sollicitudin convallis, elit lectus pellentesque est, sit amet volutpat sapien nulla ac sem. Fusce semper iaculis enim sit amet hendrerit. Donec volutpat purus vel mi congue, id elementum justo tempus. Mauris cursus pellentesque dui id dictum. Pellentesque suscipit metus gravida, vestibulum est eu, dignissim dolor. Ut hendrerit cursus sem vel tempus. Proin sit amet nunc ut quam ullamcorper commodo sed at felis. Nam convallis ut velit in accumsan. Curabitur vel eros at nibh pretium maximus. Integer ullamcorper vehicula condimentum. Curabitur feugiat erat et vestibulum sagittis. Pellentesque eget fermentum tortor. Aenean vitae lacus erat. Morbi tincidunt libero ac mi viverra gravida. Sed sit amet facilisis arcu. Nam lobortis quis lorem non mattis. Ut lorem sem, semper vel purus id, feugiat tristique erat. Pellentesque eu ultrices justo, quis mattis orci. Aliquam accumsan orci eget tellus feugiat luctus eu at orci. Curabitur eros dui, semper vitae dignissim id, ultricies sit amet dui."
let sum=0;

if(longText[0] !== " " && longText.length > 1){
    sum=1;
}


for (let i=1; i<longText.length; i++){
    if(longText[i] !== " " && longText[i-1] === " "){
        sum++;
    }
}

console.log(sum);

//Bonus 1.2

let longLow = longText.toLowerCase();
let etSum=0;
if(longLow.slice(0,3) === "et "){
    etSum++;
}

if(longLow.slice(-3) === " et"){
    etSum++;
}

let index=0;

while (index >= 0){
    index=longLow.indexOf(" et ", index);
    if(index === -1){
        break
    }
    index+=3;
    etSum++;
}

console.log(etSum);

//Bonus 2

function palindrome (phrase){
    phrase=phrase.toLowerCase();
    let cleanPhrase=""; 

    for(let i=0; i<phrase.length; i++){
        if(phrase[i].charCodeAt()>=97 && phrase[i].charCodeAt()<=122){
            cleanPhrase+=phrase[i];
        }
    }
    for(let i=0; i < (cleanPhrase.length/2); i++){
        if(cleanPhrase[i] !== cleanPhrase[cleanPhrase.length-1-i]){
            return false;
        }
    }
    return true;
}

 console.log(palindrome ("A man, a plan, a canal, Panama!"));
 console.log(palindrome ("Amor, Roma"));
 console.log(palindrome ("race car"));
 console.log(palindrome ("stack cats"));
 console.log(palindrome ("step on no pets"));
 console.log(palindrome ("taco cat"));
 console.log(palindrome ("put it up"));
 console.log(palindrome ("Was it a car or a cat I saw?"));

