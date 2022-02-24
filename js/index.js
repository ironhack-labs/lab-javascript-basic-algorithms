console.log("I am ready1");
// Iteration 1 :Names and Input
let hacker1 = "ODriverJJ"
console.log(`The dirver's name is ${hacker1}.`);
let hacker2 = "NavigatorJJ"
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
  console.log(`Wow, you both have equally long names,${hacker1.length} characters`);
}
// Iteration 3
console.log(`The Driver's name in Capital is ${hacker1.toUpperCase()}`)
let hacker2Reverse = [];
let hacker2Counter = 0;
let hacker2ReverseJoin;
for (i=hacker2.length;i>=0;i--){
  hacker2Reverse[hacker2Counter] = hacker2[i];
  hacker2Counter++;}
hacker2ReverseJoin = hacker2Reverse.join("");
console.log(hacker2ReverseJoin);
let resultCompare;
resultCompare = hacker1.localeCompare(hacker2);
if (resultCompare === -1){
  console.log("The Driver's name goes first");
}
else if (resultCompare === 1 ) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
}
//Bonus 1

let loremlipsumString = "Hello World";
loremlipsumString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac egestas urna, vestibulum auctor nunc. Vestibulum egestas ipsum egestas mi viverra elementum. Curabitur eget turpis eu turpis volutpat consequat in ac nisi. Maecenas tincidunt aliquet nisi, vitae efficitur eros mattis sit amet. Aliquam lobortis vehicula laoreet. Proin finibus velit non sagittis congue. Ut vitae erat ipsum. Phasellus et finibus lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur scelerisque commodo pretium. In venenatis congue vestibulum. Praesent sodales, massa vitae dictum finibus, purus metus dignissim nisl, tincidunt maximus risus lorem at eros. Phasellus nec ullamcorper ante. Phasellus sit amet est efficitur, aliquam mauris nec, viverra libero. In iaculis accumsan metus, in elementum neque condimentum aliquet. Ut interdum laoreet velit, vitae vehicula libero maximus ac. In hac habitasse platea dictumst. Integer condimentum a est ut consequat. In ac massa viverra, porttitor nunc vitae, facilisis lacus. Aenean interdum molestie ipsum, nec efficitur augue condimentum non. Suspendisse sem felis, hendrerit eu blandit a, dignissim vel diam. Vestibulum aliquam quis justo nec ultrices. Donec bibendum faucibus faucibus. Maecenas volutpat est nec porta rutrum. Cras vestibulum gravida scelerisque. Duis consectetur aliquam convallis. Nulla facilisi. Aliquam blandit, urna ac tempus iaculis, nibh nibh cursus risus, vitae rhoncus lectus lorem vitae urna. Duis scelerisque lorem non elit ornare dignissim. Morbi non consectetur nisi, eget maximus felis. Pellentesque lorem sapien, scelerisque eget condimentum vitae, tincidunt nec enim. Curabitur lacinia ipsum est, in molestie nisl viverra sit amet. Sed hendrerit volutpat tortor. Sed elementum lacus sed libero aliquet molestie. Etiam dignissim imperdiet massa, sagittis eleifend erat sollicitudin sed. Mauris dignissim elementum sagittis. Pellentesque sit amet dui metus. Pellentesque mi magna, iaculis ac cursus iaculis, tincidunt ut erat.";
let wordCountString;
wordCountString = loremlipsumString.split(" ").length;
console.log("Word Count : "+wordCountString)

let etStringCount = 0;
for (i=0;i<loremlipsumString.length;i++) {
  if (loremlipsumString[i] === 'e' && loremlipsumString[i+1] === 't') {
    etStringCount++
  }
}
console.log("etStringCount : "+etStringCount);

// Bonus 2
let phraseToCheck, phraseToCheckLength,varPallindrome;
varPallindrome = false;
phraseToCheck = "race car";
phraseToCheckLength = phraseToCheck.length;
counterReverse = phraseToCheckLength;
phraseToCheckUpper = phraseToCheck.toUpperCase();
console.log(phraseToCheckUpper);
for (i = 0;i < phraseToCheckUpper.length;i++){
  if (phraseToCheckUpper[i] === ',' || phraseToCheckUpper[i] === '!' || phraseToCheckUpper[i] === " "){continue;}
  while ((phraseToCheckUpper[counterReverse-1]=== ',' || phraseToCheckUpper[counterReverse-1] === '!' || phraseToCheckUpper[counterReverse-1] === " ") && counterReverse > 0){
  counterReverse--;}
  if (phraseToCheckUpper[i] === phraseToCheckUpper[counterReverse-1]) {
    varPallindrome = true;
    counterReverse--;
    //console.log(`${varPallindrome} ${i} ${counterReverse}`);
  }
  else {
    varPallindrome = false;
   // console.log(`${varPallindrome} ${i} ${counterReverse}`);
    break;
  }
}
console.log('The String is a Pallindrom:'+varPallindrome);

