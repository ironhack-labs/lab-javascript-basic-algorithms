const hacker1 = "Hans";
const hacker2 = "Dampf";

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}else if(hacker1.length < hacker2.length){
  console.log(`It's seems that the navigator has the longest name, it has ${hacker2.length} characters!`);
}else if(hacker1.length === hacker2.length){
  console.log(`Wow both have ${hacker1.length} characters!`);
}



 let upWord = "";
const lowWord = "mongo";

for (i=0;i<lowWord.length;i++) {
  let el = lowWord[i] + " ";
  upWord += el;
}
console.log(`What is ${upWord.toUpperCase()}?`);




let word = "ALITA";
let nameReverse = "";

for (let i=word.length -1;i>=0;i--) {
  nameReverse += word[i];
}
console.log(`The mongol-king was ${nameReverse}`);



let longWord = "alles ist was es ist oder ist es doch eher ist";
let longWordArray = longWord.split(" ");
console.log(`We have ${longWordArray.length} words`)



let istCount = 0;

for (const word of longWordArray) {
  if (word === "ist") {
    istCount++
  }
}
console.log(`The word "ist" is counted ${istCount} times`);
