// Iteration 1: Names and Input

//Driver
let hacker1 = "Group"; 

console.log(`The driver's name is ${hacker1}`);

//Navigator
let hacker2 = "AGroup_Nav";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if((hacker1.length < hacker2.length)){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops

//3.1

let NewName = "";

for(let i=0; i<(hacker1.length);i++){
    

    NewName = NewName + hacker1[i].toUpperCase();
    NewName = NewName + " ";
}

console.log(NewName);


//3.2
let Reversed = "";
for(let i=(hacker2.length)-1; i>=0;i--){
    Reversed += hacker2[i];
}

console.log(Reversed);


//3.3
//way1
const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


let cnt=0;
let indicador=false;
while(indicador===false){
    
    //cnt++;
   
    if((hacker1[cnt]===undefined)&&(hacker2[cnt]!==undefined)){
        console.log("The driver's name goes first.");
        break;
    }
    else if((hacker2[cnt]===undefined)&&(hacker1[cnt]!==undefined)){
        console.log("Yo, the navigator goes first, definitely.");
        break;
    }
    else if((hacker2[cnt]===undefined)&&(hacker1[cnt]===undefined)){
        console.log("What?! You both have the same name?");
        break;
    }
    for(let i=0;i<abc.length;i++){
        if((hacker1[cnt].toUpperCase()===abc[i])&&(hacker2[cnt]===abc[i])||((hacker1[cnt].toUpperCase()!==abc[i])&&(hacker2[cnt]!==abc[i]))){
            cnt++;
            break;
        }
        else if((hacker1[cnt].toUpperCase()===abc[i])&&(hacker2[cnt]!==abc[i])){
            console.log("The driver's name goes first.");
            indicador=true;
            break;
        }
        else if((hacker1[cnt].toUpperCase()!==abc[i])&&(hacker2[cnt]===abc[i])){
            console.log("Yo, the navigator goes first, definitely.");
            indicador=true;
            break;

        }
    }
    
}

//way 2

let iterateHackName=0;

compare=[undefined,"A"];

while(true){
    
    compare= [hacker1[iterateHackName], hacker2[iterateHackName]];
    compare.sort();
    if((compare[0]===hacker1[iterateHackName])&&(compare[0]!==hacker2[iterateHackName])){
        console.log("The driver's name goes first.");
        break;
    }
    else if((compare[0]!==hacker1[iterateHackName])&&(compare[0]===hacker2[iterateHackName])){
        console.log("Yo, the navigator goes first, definitely.");
        break;
    }
    else if((compare[0]===hacker1[iterateHackName])&&(compare[0]===hacker2[iterateHackName])){
        iterateHackName++;
    }

    if((hacker1===undefined)||(hacker2===undefined)){
        break;
    }
    
}

//Bonus 1
let longText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus sapien non mauris commodo, ut consectetur nisl efficitur. Sed ultricies leo pharetra, sagittis eros in, tempus metus. Suspendisse quam ex, bibendum sed tincidunt nec, facilisis id quam. Praesent varius fermentum blandit. Morbi vel risus luctus, viverra arcu vitae, euismod turpis. Donec sed magna suscipit, gravida nibh eu, viverra sapien. Integer faucibus sem id lorem auctor pulvinar. Phasellus suscipit vestibulum eros, sed convallis nibh semper eu. Quisque iaculis ac velit a interdum. Maecenas leo mauris, egestas nec mauris ut, gravida elementum magna. Proin tempus aliquet ligula, ac semper eros suscipit sed. Donec id tellus lorem. In nec lorem id ex semper maximus non id nisi. Sed purus erat, bibendum id mollis nec, tincidunt sit amet dolor. Suspendisse interdum orci sem, et imperdiet ipsum hendrerit sit amet. Donec vitae consequat arcu. Duis sapien turpis, imperdiet vitae arcu vel, suscipit fringilla ligula. Vivamus pharetra lorem quis odio luctus, porttitor egestas nunc commodo. Duis imperdiet diam a iaculis interdum. Morbi vitae congue turpis. Mauris vulputate vulputate lacus, in pretium tortor. In dictum ac neque quis venenatis. Praesent lacinia lacinia purus, a dignissim felis dapibus in. Nulla malesuada maximus ipsum non euismod. Duis semper commodo quam non finibus. Praesent quis ullamcorper felis. Maecenas dignissim sodales nisi et lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam at mi viverra, varius ex in, laoreet justo. In auctor rutrum dui, non interdum nulla vehicula in.";

let arrayWords=[""];
let WordCount=0;

let flag=0;
let indexArray=0;
for(let i=0; i<longText.length;i++ ){
    
    

    if(longText[i]!== " "){
        flag=1;
        arrayWords[indexArray]=arrayWords[indexArray]+ longText[i];
    }
    
    else if(longText[i] === " " && (flag===1)){
        indexArray++;
        arrayWords[indexArray]="";
        flag=0;
    }
    }

    //console.log(arrayWords.length);
    for(let i=0;i<arrayWords.length;i++){
        if(arrayWords[i]==="et"){
            WordCount++;
        }
    }
    console.log(WordCount);



//Bonus 2
let phraseToCheck="!!nnbNNq-";
let phraseToCheckFiltered="";
let phraseToCheckRev="";

const ABCdar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(ABCdar.length);

let cntcnt=0

for(let i = 0;i<phraseToCheck.length;i++){
    for(let j=0;j<ABCdar.length;j++){
        if(phraseToCheck[i].toUpperCase() === ABCdar[j].toUpperCase()){
            phraseToCheckFiltered+=phraseToCheck[i];
        }
        //console.log("dentro");
    }
    //console.log("fora");
            
}
//console.log("\n");
console.log(phraseToCheckFiltered);
//console.log("!".toUpperCase === "A");
for(let i = phraseToCheckFiltered.length-1;i>=0;i--){
    phraseToCheckRev+=phraseToCheckFiltered[i];
}

console.log(phraseToCheckRev);

if(phraseToCheckRev.toUpperCase()===phraseToCheckFiltered.toUpperCase()){
    console.log(`It is a palindrome: ${phraseToCheck}`);
}
else{
    console.log(`It is not a palindrome: ${phraseToCheck}`);
}
