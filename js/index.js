// Iteration 1: Names and Input
const hacker1 ="Haridha";//driver
const hacker2 ="Rajesh";//Navigator
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let hacker2Reverse=[];
let hacker1Uppercase=[];

for(let i = hacker2.length-1; i>=0; i--){
    hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);

let separator = " "
for(let i=0; i<hacker1.length;i++){
    hacker1Uppercase += hacker1[i].toUpperCase()+separator;

}
console.log(hacker1Uppercase);


if(hacker1Uppercase.localeCompare(hacker2Reverse) === -1){
    console.log(`The driver's name goes first.`);
}else if(hacker1Uppercase.localeCompare(hacker2Reverse) === 1){
    console.log(`Yo, the navigator goes first definitely.`);
}else{
    console.log(`What?! You both have the same name?`);
}

// Method Two - using bult-in function

/*let hacker1Uppercase = hacker1.split('').join(' ').toUpperCase();
console.log(hacker1Uppercase);

let hacker2Reverse = hacker2.split('').reverse().join('');
console.log(hacker2Reverse);

if(hacker1Uppercase.localeCompare(hacker2Reverse) === -1){
  console.log(`The driver's name goes first.`);
}else if(hacker1Uppercase.localeCompare(hacker2Reverse) === 1){
  console.log(`Yo, the navigator goes first definitely.`);
}else{
console.log(`What?! You both have the same name?`);
}*/



//Bonus 1: 

let paragraphText = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue nunc eu aliquet ornare. Quisque sem ipsum, finibus ut facilisis nec, varius varius dui. Donec euismod turpis a ultrices dapibus. Curabitur accumsan ex ut ligula finibus, lobortis mollis risus euismod. Etiam eu dolor vulputate, vehicula sem ac, pellentesque urna. Maecenas tempus quam tortor, commodo bibendum purus lacinia elementum. Aliquam porttitor dapibus orci id sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec non pulvinar risus, eget finibus nulla. Phasellus eget nulla eget est egestas scelerisque sit amet vitae nisi. In vel nisl tellus. Curabitur dignissim venenatis magna eget blandit. Nulla nulla urna, mollis in imperdiet eget, volutpat ac lacus. Vestibulum maximus ullamcorper nunc vitae varius. Ut ac rutrum lorem, non fringilla nisl.

Fusce posuere nibh augue, id sodales dui aliquam at. Cras mauris ante, porta nec vulputate in, consequat nec lorem. Vivamus sagittis quam nec elit euismod faucibus. Pellentesque lorem velit, fermentum at sem in, tincidunt fringilla tortor. Vivamus pharetra diam vel iaculis sodales. Duis mattis convallis dolor, eu volutpat nunc auctor ut. Curabitur varius malesuada nibh, at imperdiet velit tempor sit amet. Phasellus pellentesque lorem sed urna imperdiet, ut eleifend dui pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consequat quam in nisl consectetur aliquet. Proin non maximus libero. Morbi aliquam sapien libero, et ultricies tortor blandit ac. Aliquam tristique odio ut dui porttitor, ac venenatis justo faucibus. Fusce nec pharetra odio.

Integer justo lectus, aliquam et aliquet ut, semper sed nulla. Nunc ut tellus ut est accumsan venenatis. Nam egestas pretium dictum. Proin sed purus sed lacus ornare facilisis. Aliquam lacus elit, placerat non turpis id, pellentesque finibus ante. Mauris sagittis lacinia magna et iaculis. Maecenas eleifend lacinia tortor, ut vulputate magna pellentesque in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. `

let count= 0;
 let wordsArray = paragraphText.split(' ');
console.log(`Total word count in the paragraph : ${paragraphText.split(' ').length}`);
for (i=0; i< wordsArray.length;i++){
  if(wordsArray[i] === 'et'){
    //b.push(a[i]);
    count += 1;
  }
  
}
console.log(`Total count of 'et' in the paragraph : ${count}`);



//Bonus 2:

//let newLowercaseString = phraseToCheck.replace(/[&\/\\#^+()$~%.'":*?<>{}!@,]/g, '').toLowerCase().split(' ').join('');
let phraseToCheck="A man, a plan, a canal, Panama!";
let reversedSecondString = [];
let secondString = [];
let firstString=[];
let stringIgnore =`/[&\/\\#^+()$~%.'":*?<>{}!@,]/g`;


//first string
for(i=0;i<phraseToCheck.length;i++){
 
    if((stringIgnore.includes(phraseToCheck[i]) || (phraseToCheck[i])===' ')){
        continue;
      }
  firstString.push(phraseToCheck[i]);

}
 let firstStringCompare = firstString.join('').toLowerCase();
console.log(`First string: ${firstStringCompare}`);

//second string

for(i=phraseToCheck.length-1;i>=0;i--){
 
    if((stringIgnore.includes(phraseToCheck[i]) ||(phraseToCheck[i])===' ')){
        continue;
      }
  secondString.push(phraseToCheck[i]);

}
reversedSecondString = secondString.join('').toLowerCase();
console.log(`Second string: ${reversedSecondString}`);


if(firstStringCompare === reversedSecondString){
  console.log(`It's a palindrome`);
}else{
    console.log(`It's not a palindrome`);
}
