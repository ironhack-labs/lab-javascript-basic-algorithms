// Names and Input
let hacker1 ='Danilo';
let hacker2 ='Mateus';

//Conditionals

if(hacker1.length>hacker2.length){
console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
}else if (hacker2.length>hacker1.length){
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`wow, you both got equally long names,${hacker1.length} characters!!`)
}

// LOOPS

let nameCaps = '';
let n = 0;
while(hacker1.length-1>=n){
nameCaps += hacker1[n] +' ';
n +=1;
}
console.log(nameCaps.toUpperCase());*/


let nameReverse ='';
let nReverse = 1;
while(hacker1.length>=nReverse){
  nameReverse += hacker1[hacker1.length-nReverse]
  nReverse += 1;
}
console.log(nameReverse);*/


let lexicoName = hacker1.localeCompare(hacker2);
console.log(lexicoName);

if(lexicoName === -1){
  console.log('The driver`s name goes first')
}else if (lexicoName === 1){
  console.log('Yo, the navigator goes first definitely')
}else if (lexicoName === 0){
  console.log('What?! You both got the same name?')
}


// BONUS TIME

let wordByUser = 'night';
let testYourPalindrome = '';
i = 1;
while(wordByUser.length >= i){
  testYourPalindrome += wordByUser[wordByUser.length-i];
  i += 1;
}
if(wordByUser === testYourPalindrome){
console.log('Yes, it`s a Palindrome')
} else {console.log('Sorry it`s not a Paldindrome')
}


// Lorem ipsum generator

let loren='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id est nec mauris consectetur molestie. Pellentesque nec consectetur felis. Sed efficitur sapien vitae nunc lacinia, dapibus tristique lacus ultrices. Nulla iaculis metus eget turpis suscipit, vitae consectetur leo lacinia. Suspendisse hendrerit aliquam diam, vel suscipit lectus consequat et. Sed pretium dui quam, quis pretium tortor pretium a. Nunc varius consequat diam, nec sagittis mi accumsan vestibulum. In ornare ipsum et elit tempus, id posuere justo aliquam. Sed imperdiet condimentum massa. Donec sit amet massa sem. Integer ultrices velit luctus turpis venenatis euismod. Sed et sem vestibulum, posuere purus a, posuere magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in dui sit amet nulla sodales pulvinar. Mauris ultrices accumsan erat, sed iaculis est convallis at. Phasellus maximus diam sed neque pharetra luctus at ut mi. Aliquam interdum maximus nisi, ac laoreet eros pharetra nec. Ut volutpat faucibus semper. Donec quis tincidunt nunc, malesuada porta sem. Sed at diam at augue dapibus euismod et quis nibh. Nam sed semper ex, venenatis aliquam ligula. Curabitur congue nisl nec arcu sodales, blandit ullamcorper justo condimentum. Fusce feugiat laoreet odio, non aliquet orci auctor non. Donec auctor, tortor a accumsan laoreet, ipsum ligula rhoncus nunc, eget bibendum erat elit eu nibh. In ornare nibh ac turpis pharetra, vel consectetur diam venenatis. Vestibulum placerat volutpat nisi non posuere. Vestibulum viverra odio felis, non mollis massa ornare ut. Vestibulum blandit leo gravida convallis placerat. Integer varius urna nec odio feugiat, eget imperdiet nulla sagittis. Suspendisse neque turpis, suscipit ut vehicula et, vulputate eget enim. Nunc sed quam efficitur, dictum metus eu, dictum urna. Duis dictum ipsum non libero euismod accumsan. Maecenas ut maximus turpis, non blandit tortor.'

let wordsArray = loren.split(" ");
let totalWords = wordsArray.length;
let countEt = 0 ;
let i = 0;
while (i < totalWords){
  if (wordsArray[i]==='et'){
    countEt += 1;
}  i += 1;
}
console.log(countEt)
