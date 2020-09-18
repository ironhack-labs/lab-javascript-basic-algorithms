// Iteration 1: Names and Input
let hacker1 = 'Mike';
let hacker2 = 'Ashley';

console.log(`"The driver's name is ${hacker1}"`);
console.log(`"The navigator's name is ${hacker2}"`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`"The driver has the longest name, it has ${hacker1.length} characters."`)
  }
else if (hacker1.length < hacker2.length) {
    console.log(`"It seems that the navigator has the longest name, it has ${hacker2.length} characters."`)
  }
else {
    console.log(`"Wow, you both have equally long names, ${hacker1.length} characters!"`)
  };


// Iteration 3: Loops
let loopHacker1 = ' ';
let loopHacker2 = ' ';

for (i=0; i <= hacker1.length; i++) {
  loopHacker1 += hacker1.charAt(i) + " "
};

for (i=hacker2.length; i>=0; i--) {
  loopHacker2 += hacker2.charAt(i)
};

console.log(loopHacker1.toUpperCase());
console.log(loopHacker2);


if (hacker1 < hacker2) {
    console.log(`"The driver's name goes first."`)
  }
  else if (hacker1 > hacker2) {
    console.log(`"Yo, the navigator goes first definitely."`)
  }
  else {
    console.log(`What?! You both have the same name?`)
   } 


// Bonus 1:
let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis, leo sit amet consequat porttitor, augue tellus tristique tortor, et finibus justo enim vulputate nulla. Donec pretium maximus arcu ut ultrices. Aliquam erat volutpat. Ut scelerisque bibendum libero, a tempor mi imperdiet eu. In id rhoncus dolor, non sodales augue. Praesent quis odio ut justo sodales iaculis. Praesent nec posuere ex. Fusce tincidunt leo lectus, vitae ornare justo tincidunt nec. Etiam at ipsum et metus viverra viverra. Duis diam lorem, elementum laoreet dolor non, sodales eleifend orci. Donec ac odio volutpat, porttitor neque eu, luctus elit. Nunc porta orci nibh, a lacinia libero pretium non.

Donec vel orci tempus ex interdum porttitor nec vel lorem. Phasellus varius quam sed nibh aliquam, nec elementum massa tempus. Proin vitae turpis id justo consequat bibendum. Integer et ipsum vitae lectus vestibulum sodales sit amet et purus. Donec blandit elementum lacus viverra faucibus. Cras auctor eu tellus sit amet mollis. Sed risus mauris, suscipit a facilisis sit amet, luctus non orci. Sed eget est vel ligula egestas accumsan. Aliquam erat volutpat. Aenean eleifend posuere bibendum. Nam id sodales massa, non facilisis tellus. Pellentesque neque eros, convallis a ex et, tincidunt tincidunt velit. Nunc venenatis risus vel nisi blandit dignissim. Donec semper erat ut ipsum egestas lacinia.

Etiam facilisis mauris aliquam, dignissim purus nec, luctus urna. Nulla commodo lorem volutpat malesuada dignissim. Aenean fermentum leo ut odio porta, sed imperdiet neque efficitur. Praesent vitae gravida dolor, eu auctor purus. Suspendisse tempor lectus sit amet turpis consectetur suscipit a vitae quam. Praesent malesuada, dui non mattis ornare, mauris odio tempor purus, sed luctus diam justo nec sapien. Nunc convallis neque nec bibendum mollis.`;


function countWords() {
    console.log(paragraph.split(" ").length);
  };
  
  function countEt() {
    console.log(paragraph.match(/\bet\b/gi).length);
    // console.log(paragraph.split('et').length -1);
  };
  
  countWords();
  countEt();
  
  // Bonus 2:
  function removeSpecialChar (str){
    return strClean =  str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase()  
  };
  
  function isPali (str){
    let cleanString = removeSpecialChar(str);
    
    if (cleanString.split(' ').join('') == cleanString.split(' ').join('').split('').reverse().join('')){
      return 'Palindrome'
    }else{
      return 'Not a Palindrome'
    }
  };
  
  console.log(isPali('step on no pets'));