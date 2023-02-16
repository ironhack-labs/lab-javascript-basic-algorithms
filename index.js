// Iteration 1: Names and Input
let hacker1 = "Nicolas";
<<<<<<< HEAD
console.log("the driver's name is", hacker1)

=======
console.log(`the driver's name is ${hacker1} ` )
>>>>>>> 820255e08fcc4595eef04357c3057e1be4821174
let hacker2= "Rayane";
console.log("the navigator's name is " ,hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} charachters.`)
  }  else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} charachters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

// Iteration 1 //
let hacker1 = "Nicolas";
console.log(`the driver's name is ${hacker1} ` )
let hacker2= "Rayane";
console.log("the navigator's name is " ,hacker2);

//Iteration 2//
let shorterName = ""
if(hacker1.length > hacker2.length){
  shorterName=hacker2;
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
 }
 else if(hacker2.length > hacker1.length){
   shorterName=hacker1;
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
 }
else{
  shorterName=hacker1;
  console.log(`Wow, you both have equally long names, ${hacker2.length}  characters !`)
}

//Iteration 3//
let UpperCased = hacker1.toUpperCase();
let UpperCasedSpace = ""
for(let i=0 ; i < hacker1.length ; i++){
  UpperCasedSpace += UpperCased[i] 
  UpperCasedSpace += ' '
}
console.log(UpperCasedSpace)

let Reverse = ""
for(let i=(hacker2.length-1) ; i>=0 ; i--) {
  Reverse+= hacker2[i];
}
console.log(Reverse)

/*for(let i=97 ; i<=(97+25) ; i++){
  console.log(String.fromCharCode(i));
} ;*/
let counter=0;

for(let i=0 ; i<shorterName.length ; i++){
  if(hacker1.charCodeAt(i)<hacker2.charCodeAt(i)){
    console.log("The driver's name goes first.");
    break;
  }
  else if(hacker1.charCodeAt(i)>hacker2.charCodeAt(i)){
    console.log("Yo, the navigator goes first definitely.");
    break;
  }
  else{
    counter+=1
  }
}
if(counter === shorterName.length && hacker1.length < hacker2.length){
  console.log("The driver's name goes first.")
}
else if (counter === shorterName.length && hacker1.length > hacker2.length){
  console.log("Yo, the navigator goes first definitely.")
}
else if(counter === shorterName.length){
  console.log('What?! You both have the same name?')
}

//Bonus Time //
let longText=` orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices ligula quis elit tempor, nec consectetur purus lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut tristique mauris. Vivamus in nisl et augue vulputate porttitor tempus at nisi. Aenean sed odio lacus. Nulla nec odio arcu. Aliquam vestibulum viverra augue varius consectetur. Praesent viverra laoreet risus, in elementum nulla blandit sit amet. Praesent at hendrerit justo. Praesent ut luctus odio. Pellentesque tempus faucibus varius. Nulla a porttitor tortor, a vestibulum sapien. Suspendisse placerat lorem ornare ipsum vestibulum, in sagittis dolor vehicula. Maecenas rhoncus purus ut elit blandit faucibus. 

Etiam nec pharetra est. Vivamus vitae imperdiet turpis. Proin risus justo, porttitor ac pharetra quis, cursus ut felis. Sed hendrerit in quam vitae tristique. Aliquam pretium elit at blandit lacinia. Sed malesuada, mi a congue pulvinar, eros erat consectetur urna, eu suscipit turpis nulla quis arcu. Proin tristique eros id nisi pretium ultricies. Morbi luctus pretium quam, eu volutpat dolor porttitor eget. Mauris aliquet et leo et venenatis. Etiam ac leo et augue pulvinar porta id ac augue. Donec commodo porta leo eget suscipit. 

Praesent egestas sollicitudin rutrum. Fusce sodales augue id purus laoreet, ut venenatis purus congue. Phasellus at nulla volutpat, mollis eros ut, hendrerit dolor. Duis sit amet ornare lorem. Integer hendrerit nunc quis tellus mollis mattis. Sed venenatis augue vitae fermentum bibendum. Duis suscipit sodales sollicitudin. Sed posuere ante tellus, vitae ornare arcu finibus eu. Pellentesque accumsan dolor vel condimentum luctus. Suspendisse ut turpis sit amet sem faucibus feugiat ac a leo. Ut viverra nibh velit, sed dignissim metus tempor a. `

console.log(`Ce texte fait ${longText.length} caractères`)
let numberEt=0

for(let i=0; i<(longText.length-1); i++){
  if(longText[i]==="e"&&longText[i+1]==="t"){
    numberEt += 1;
  }
}
console.log(`il y a ${numberEt} "et" dans ce texte`);

//Bonus 2//
let phraseToCheck= "step on no pets";
phraseToCheck= phraseToCheck.toLowerCase();
let concatenate="";
for(let i=0; i<phraseToCheck.length ;i++){
  if(phraseToCheck.charCodeAt(i)<97 || phraseToCheck.charCodeAt(i)>(97+25) ){
    continue;
  }
  else{
    concatenate+=phraseToCheck[i]
  }
}
//console.log(concatenate);
//console.log(`la taille de concatenate est ${concatenate.length}`)

let secondCounter = 0
let backward = concatenate.length;

if(concatenate.length % 2 === 0){
  for(let i=0 ; i<(concatenate.length/2); i++){
    if(concatenate[i]===concatenate[backward-1]){
      secondCounter+=1;
    }
    backward -= 1;
  }
  if(secondCounter===((concatenate.length)/2)){console.log("Ceci est un palyndrome")
  }
  else{console.log("Perdu ! Ce n'est pas un palyndrome")}
}
else {
  for(let i=0 ; i<((concatenate.length+1)/2); i++){
    if(concatenate[i]===concatenate[backward-1]){
      secondCounter+=1;
     }
    backward -= 1;
  }
  if(secondCounter===((concatenate.length+1)/2)){
    console.log("Ceci est un palyndrome")
     }
  else{console.log("Perdu ! Ce n'est pas un palyndrome")}
  }
//console.log(secondCounter);