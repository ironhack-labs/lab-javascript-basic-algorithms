console.log('Im ready!');
const hacker1 = 'Vinh';
const hacker2 = 'Patrick';

if (hacker1.length > hacker2.length) {
  console.log(`Driver has a longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems the navigator has a longest name, it has ${hacker2.length} characters.`);
}
else {
  console.log(`Well, you both have equally long name ${hacker1.length} characters.`)
}
//---------------------
let hacker1Big = '';

for (let i = 0; i < hacker1.length; i++) {
  hacker1Big += hacker1[i].toUpperCase() + ` `
  
}
console.log(hacker1Big);
//---------------------
let hacker2Big = '';

for (let i = hacker2.length-1; i >=0; i--) {
  hacker2Big += hacker2[i]
}
console.log(hacker2Big);

//--------

if (hacker1[0] > hacker2[0]) {
  console.log("Yo, the navigator goes first definitely.")
}
else if (hacker1[0] < hacker2[0]) {
  console.log("The driver's name goes first.")
}
else{
  console.log('What?! You both have the same name?')
}

//-----------

let loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32."

let loremIpsumWords = 1;
let loremIpsumEts = 0;
  
for (let i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum[i] === " ") {
    loremIpsumWords++;
  }
  if (loremIpsum[i] === "e" && loremIpsum[i + 1] === "t" && loremIpsum[i-1] === " " && loremIpsum[i+2] === " ") {
    loremIpsumEts++;
  }
}
console.log(loremIpsumWords);
console.log(loremIpsumEts);
//----------

let words ="No 'x' in Nixon"
let cleanWords= ""
let reverse =""

for (let i=0; i<words.length; i++){
  if(words[i]===" ")
  {
    continue;
    
  } 
  else if (words[i]===",")
  {
      continue;
  }
  else if (words[i]==="!")
  {
    continue;
  }
  else if (words[i]===".")
  {
    continue;
  }
  else if (words[i]==="?")
  {
    continue;
  }
  else if (words[i]==="'")
  {
    continue;
  }
    
cleanWords +=words[i];
}


for (i =cleanWords.length -1 ; i >=0; i--){
  reverse += cleanWords[i];
}
console.log(cleanWords)
console.log(reverse)

if (reverse.toUpperCase() == cleanWords.toUpperCase()){
  console.log("It's a palindrome");
}
else
{
 console.log("It's not a palindrome") 
}

