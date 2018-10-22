console.log('Im ready !');

let hacker1 ='zack wuukihk';
let hacker2 = 'angel';
let sum = hacker1.length + hacker2.length;

console.log('the driver\'s name is  '+ hacker1);
console.log('the navigator\'s name is  '+ hacker2);

if (hacker1.length > hacker2.length){
  console.log('The driver has the longest name, it has' + hacker1.length )
}else if(hacker2.length > hacker1.length) {
    console.log('Yo, navigator got the longest name, it has ' + hacker2.length )
}else if (hacker1.length === hacker2.length){
  console.log('wow, you both got equally long names, '+sum)
}

console.log(hacker1.toUpperCase().split(''));

console.log(hacker1.toUpperCase().split('').reverse().join(''));

if(hacker1 < hacker2){
  console.log('The driver\'s name goes first')
}else if (hacker1 > hacker2) {
  console.log('Yo, the navigator goes first definitely')
}else if(hacker1 === hacker2){
  console.log('what?! you both got the same name?')
}

let result = '';

function palindrome(str){
  let remove = /[\W_]/g;
  str = str.toLowerCase().replace(remove,'');
  for(var i = str.length-1; i >=0; i--){
    result += str[i];
  }
  // console.log(result);
  if (result === str){
    console.log('correct');
  }else{
    console.log('incorrect')
  }
}
palindrome("'Was it a car or a cat I saw?'");

function reverse (str){
  str.toLowerCase().

}