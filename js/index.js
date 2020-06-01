// Iteration 1: Names and Input
let hacker1='Jamil';
console.log(`the driver's name is ${hacker1}`);
let hacker2='Lupo';
console.log(`the navigators name is ${hacker2}`);
// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker2.length>hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}
// Iteration 3: Loops
// console.log(hacker1.split('',hacker1.length));
// let result=hacker1.split('').toString().toUpperCase();
// console.log(result);
for(let i=0;i<hacker1.length;i++){
var result=hacker1.slice(hacker1[i]).toUpperCase().split('').join(' ');
}
console.log(result);

for(let x=0;x<=hacker2.length;x++){
    var reversed=hacker2.slice(hacker2[x]).split('').reverse().join('');
}
console.log(reversed);
//==================================

if(hacker1.charAt(0)<hacker2.charAt(0)){
    console.log(`the driver's name goes first`)
}else if(hacker2.charAt(0)<hacker1.charAt(0)){
    console.log(`Yo, the navigator goes first definitely.`)
}else{
    console.log('What?! You both have the same name?')
}
//==================================
//bonus 1
let text=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum ut tristique et egestas. Dui nunc mattis enim ut tellus. Non consectetur a erat nam at lectus urna. Pretium quam vulputate dignissim suspendisse in est ante. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Arcu vitae elementum curabitur vitae. Ac turpis egestas sed tempus. Mattis nunc sed blandit libero. Tincidunt tortor aliquam nulla facilisi. Viverra aliquet eget sit amet tellus. Et ligula ullamcorper malesuada proin libero. Vulputate dignissim suspendisse in est ante in nibh. Purus in massa tempor nec feugiat nisl pretium fusce id. Sagittis id consectetur purus ut faucibus. Mattis aliquam faucibus purus in massa tempor. Nec tincidunt praesent semper feugiat nibh. Orci a scelerisque purus semper eget duis at tellus.
Praesent semper feugiat nibh sed pulvinar. Ut pharetra sit amet aliquam id. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Eget felis eget nunc lobortis mattis aliquam faucibus. Nunc aliquet bibendum enim facilisis. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Dignissim enim sit amet venenatis urna cursus eget. Nunc mattis enim ut tellus elementum. Augue eget arcu dictum varius duis at consectetur lorem donec. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Etiam non quam lacus suspendisse faucibus interdum posuere. Mauris rhoncus aenean vel elit scelerisque. Ac odio tempor orci dapibus ultrices in iaculis. Integer eget aliquet nibh praesent tristique magna sit amet purus. Diam sit amet nisl suscipit adipiscing. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Dictum sit amet justo donec enim diam vulputate ut. Praesent semper feugiat nibh sed pulvinar proin gravida. Tempor orci dapibus ultrices in iaculis nunc.
Orci eu lobortis elementum nibh tellus molestie nunc non. Tellus molestie nunc non blandit massa enim nec dui nunc. At elementum eu facilisis sed odio. Ullamcorper malesuada proin libero nunc. Leo urna molestie at elementum eu facilisis. Adipiscing elit pellentesque habitant morbi tristique senectus et. Sodales ut eu sem integer vitae justo eget. Interdum velit laoreet id donec. Urna et pharetra pharetra massa massa. Nisi est sit amet facilisis magna etiam tempor orci eu. Suspendisse in est ante in nibh mauris. A diam sollicitudin tempor id. Potenti nullam ac tortor vitae. Felis donec et odio pellentesque diam volutpat commodo sed egestas.`

let howManyTimes=text.match(/et/gi).length;
console.log(howManyTimes);

//bonus  2
let phraseToCheck='lili3';

function checkMe(phraseToCheck){
    let reversedPhrase=phraseToCheck.split('').reverse().join('');
    if(phraseToCheck===reversedPhrase){
        console.log('this is a palindrome')
    }else{
        console.log('this is not a palindrome')
    }
};
checkMe(phraseToCheck);