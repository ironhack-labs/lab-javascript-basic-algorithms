console.log("I'm ready!");
let hacker1= "Raiza";
console.log(`The driver's name is ${hacker1}`);
let hacker2="Eric";
console.log(`The navigator's name is ${hacker2}`);

// End of iteration 1

if(hacker1.length>hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker2.length>hacker1.length){
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else{
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// End of iteration 2

let driver=""
for(let i=0; i<hacker1.length;i++){
  driver+=hacker1[i].toUpperCase() + " ";
}
let navigator=""
let long=hacker2.length-1;
for (let i= 0; i<hacker2.length; i++){
  navigator +=hacker2[long];
  long--
}
console.log(driver);
console.log(navigator);
if (hacker1.localeCompare(hacker2)<0){
console.log("The driver's name goes first");
}
else if(hacker1.localeCompare(hacker2)>0){
  console.log("Yo, the navigator goes first definitely");
}
else{
  console.log("What?! You both have the same name?");
}

// End of iteration 3

let lorem= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet convallis nunc. Etiam dapibus eget est vitae tincidunt. Nunc blandit arcu nibh, a pharetra diam feugiat in. Sed tempus congue orci sed vulputate. Proin at massa a nisi aliquet ultricies. Vestibulum id suscipit neque. Proin in arcu ac sapien posuere iaculis. Pellentesque gravida consequat enim. Integer convallis tincidunt dui, in commodo lectus scelerisque vel. Nullam in lorem nec metus suscipit rutrum nec ac ante. Sed porta suscipit ipsum, quis fermentum felis aliquet id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi elementum faucibus leo non faucibus. Ut et rutrum nisl, at rhoncus risus. Donec bibendum dui ut malesuada egestas. Morbi eget leo non ante blandit iaculis. Mauris fermentum, nisi ut condimentum fringilla, ante justo pharetra erat, sed posuere metus metus et ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi gravida venenatis mi dapibus rutrum. Morbi lacinia iaculis viverra. Sed ultricies id justo ut venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum nibh volutpat, consequat libero id, pharetra urna. Sed nunc dui, vehicula eu sollicitudin at, mattis at lectus. Sed nisl tellus, tincidunt vitae erat quis, pharetra aliquet nisi. Fusce lacinia, sapien et vulputate convallis, nibh nisi gravida risus, et cursus magna massa at diam. In vehicula odio blandit dui maximus, in pharetra ligula accumsan. Donec ligula urna, gravida nec posuere in, ornare non nisi. Maecenas luctus ac ante a elementum."
let count=1;
for(let i=0; i<lorem.length;i++){
  if(lorem[i]===" "){
    count++;
  }
}
let contar= (lorem.split(" et ").length-1 + lorem.split(" Et ").length-1 + lorem.split(" et.").length-1);
console.log(contar);

// End of Bonus 1

let phraseToCheck ="put it up";
let phraseReverse= "";
for (let i=phraseToCheck.length-1; i>=0; i--){
  phraseReverse+=phraseToCheck[i];
}
console.log(phraseReverse);
if(phraseToCheck===phraseReverse){
  console.log("We have a palindrome!!");
}
else{
  console.log("We don`t have a palindrome")
}