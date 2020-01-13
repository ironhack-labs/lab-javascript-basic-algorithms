var hacker1 = "john";
console.log("The driver's name is "+hacker1);

var hacker2 = "Sarah";
console.log("The navigator's name is " +hacker2);

var hacker1Length = hacker1.length;
var hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length){
  console.log(`The driver has the longest name, it has ${hacker1} characters.`);
}

else if (hacker1Length < hacker2Length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`);
}

else{
  console.log("Wow, you both have equally long names, XX characters!.");
}
var capitalHacker1 = "";
for (var i=0; i< hacker1Length; i++){
  capitalHacker1 +=hacker1[i].toUpperCase()+" ";  
}
console.log(capitalHacker1);
var reverseHacker1 = "";
for (var j=hacker1Length-1; j>=0; j--){
  reverseHacker1 +=hacker1[j];
}
console.log(reverseHacker1);

var compareTheName = hacker1.localeCompare(hacker2);
if (compareTheName == -1){
  console.log("The driver's name goes first");
}
else if (compareTheName == 1){
  console.log("Yo, the navigator goes first definitely.");
}
else{
  console.log("What?! You both have the same name?");
}

var loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui purus, molestie eu vehicula non, rhoncus et libero. Donec vel cursus turpis, a lobortis elit. Quisque maximus urna nec nisi pulvinar fermentum. Nullam euismod orci eget pretium venenatis. In hac habitasse platea dictumst. Donec gravida ornare bibendum. Proin a ex vestibulum, tempus turpis sit amet, tempus ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam ac risus ut magna elementum lobortis. Sed eu finibus augue, id consequat velit. Nullam consequat scelerisque erat, hendrerit lobortis tellus tincidunt nec. Duis imperdiet ipsum sapien, et luctus lectus tempus quis. Pellentesque risus nibh, convallis vel tortor ac, malesuada mollis libero. Maecenas commodo volutpat mauris, eu porttitor ex cursus sed. Aenean id mi id nibh consequat ultrices. Vivamus vel malesuada erat, sit amet luctus diam.

Nunc sed quam in orci convallis blandit sed quis diam. Vivamus eget odio eget velit auctor tempor ut quis urna. Donec sollicitudin velit id malesuada euismod. Nulla tempor urna elit, a suscipit sapien aliquet et. Donec leo nisi, ullamcorper ut ultrices sit amet, placerat eu sapien. Quisque congue egestas lorem sed auctor. Sed volutpat tellus quis tellus tincidunt posuere. Aliquam ut finibus est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas non nulla felis. Nunc finibus, dolor a mattis cursus, purus leo porta quam, in luctus massa velit vitae tellus.

Aliquam erat volutpat. Sed at posuere enim. Morbi placerat vehicula dolor, sit amet efficitur est viverra ut. Maecenas suscipit non sapien sed pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sollicitudin nulla vitae massa vestibulum convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ut elit faucibus, interdum diam sit amet, maximus odio. Nunc finibus ipsum non elit viverra, nec sodales ante sagittis. Morbi tempor bibendum ipsum, ac maximus tellus. Pellentesque feugiat fringilla dictum. Suspendisse nec ante ut orci consectetur congue vitae nec quam. Proin scelerisque orci ac placerat feugiat. Etiam maximus accumsan ipsum in sollicitudin. Sed tristique sem viverra eros imperdiet tincidunt.`;

var loremIpsumLength = loremIpsum.length;
var count = 1;
for (var k= 0; k<loremIpsumLength;k++){
  if(loremIpsum[k]==" "){
    count+=1;
  }
}
console.log(count);
console.log((loremIpsum.match(/et/g) || []).length);

var phraseToCheck = "race car";
var phraseLength = phraseToCheck.length;
var newPhrase = "";
for (var l=0;l<phraseLength; l++){
  if (phraseToCheck[l]!=" " && phraseToCheck[l]!="," &&phraseToCheck[l]!="?" && phraseToCheck[l]!="!"){
    newPhrase+=phraseToCheck[l];
  }
}
var lenNew = newPhrase.length;
var palindrome = true;
for (var k = 0; k < lenNew/2; k++){
  if(newPhrase[k]!=newPhrase[lenNew-1-k]){
    palindrome = false;
  }
}
if(palindrome){
  console.log("It is palindrome");
}
else{
  console.log("It is not a palindrome");
}