
// Iteration 1

let hacker1 = "Xavi";
let hacker2= "Cris";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length}  characters`)
} else if (hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3

let newDriver = "";
for(let i=0 ; i< hacker1.length; i++){
  if(i!==hacker1.length-1){
    newDriver=(newDriver+hacker1[i].toUpperCase()) + " ";
  } else {
    newDriver=newDriver+hacker1[i].toUpperCase();
  }
}
 console.log(newDriver);


let newNavigator = "";
for (let i=hacker2.length-1; i>-1; i--){
  newNavigator+=hacker2[i];
}
console.log(newNavigator);


let smallerName;

if(hacker1.length > hacker2.length){
  smallerName=hacker2.length;
} else {
  smallerName=hacker1.length;
}

for(let i=0; i<smallerName; i++){
  if(hacker1[i]<hacker2[i]){
    console.log("The driver's name goes first");
    break;
  } else if(hacker1[i]>hacker2[i]){
    console.log("Yo, the navigator goes first definitely.");
    break;
  } else if( hacker1 === hacker2){
    console.log("What?! You both have the same name?");
    break;
  }

  }
 
// Bonus 1

var myText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam, ante ac finibus pellentesque, eros tortor laoreet ipsum, ut fringilla nunc nisl eget purus. Suspendisse potenti. Integer eget velit lacus. Sed sagittis dolor in quam pharetra, non vestibulum lorem tincidunt. Sed iaculis volutpat felis, non sollicitudin libero iaculis sed. Morbi vel imperdiet neque. Nullam orci sem, maximus at mi in, auctor tempus massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis consequat, risus et condimentum fermentum, quam ex dapibus velit, id venenatis ante nulla sodales odio. Cras vitae volutpat tellus. Praesent ultricies ligula nisi, suscipit mattis enim dignissim vel. Aenean tortor enim, aliquet ut dolor vel, accumsan lacinia magna. Morbi rhoncus gravida quam, id aliquam nunc volutpat quis. Nunc efficitur felis eu placerat commodo. Etiam a malesuada lectus. Nunc ultricies purus quis nibh tempor, id volutpat augue aliquam. In hac habitasse platea dictumst. Curabitur mauris leo, cursus a gravida vel, sollicitudin sed turpis. Etiam ut nulla varius, viverra nunc vitae, ornare lectus. Nam vitae enim quam. Quisque sed lobortis massa. Integer ut dapibus lacus, a ullamcorper enim. Suspendisse interdum porta nibh, eget feugiat nisi. Donec mi augue, dapibus ut diam eget, sollicitudin finibus lectus. Quisque faucibus nulla et mauris laoreet consectetur. Aenean vitae venenatis metus, vel pharetra metus. Vestibulum imperdiet, justo in pellentesque tempor, felis massa scelerisque nulla, tempus cursus odio lorem non felis. Aliquam hendrerit rhoncus urna vitae vulputate. Cras at odio eget velit rutrum congue. Proin eget dapibus leo. Etiam vestibulum velit eget tincidunt sodales. Maecenas in nibh vitae enim maximus gravida quis at quam. In blandit tellus velit, nec luctus diam mollis nec. Nulla fringilla augue augue, sed malesuada turpis luctus id. Donec at elit purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam eget leo semper, eleifend leo sed, fermentum tellus. Integer pellentesque ac turpis ac aliquam. Pellentesque erat lacus, eleifend et ultricies a, finibus ut lacus. Suspendisse leo tellus, interdum nec ex eget, porttitor aliquam ante."


let letterCount= 0;
for (let i=0; i<myText.length; i++){
  if ((myText[i]=="," || myText[i]== "." || myText[i]== " ") && (myText[i+1] !== "," && myText[i+1] !== "." && myText[i+1] !== " ")){
    letterCount+=1;
  }
}
console.log(letterCount);


// Bonus 2

function phraseToCheck(string){
    let newString="";
  
  for(let i=0; i<string.length; i++){
    if(/[A-Za-z]/.test(string[i])){
      newString+=string[i];
    }
  }
  newString=newString.toLowerCase();
  console.log(newString);
  let reversedString ="";
  for (let i=newString.length-1; i>-1; i--){
    reversedString+=newString[i];
  }
  console.log(reversedString==newString);
  } 
  
  phraseToCheck("stack cats");