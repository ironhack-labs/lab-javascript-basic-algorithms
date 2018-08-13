const hacker1 = "Benjamin"
console.log(`The drivers name is ${hacker1}`)

const hacker2 = "Alex"
console.log(`The navigators name is ${hacker2}`)

if(hacker1.length > hacker2.length){
  console.log("The driver has the longer name, which is " + hacker1.length + " characters long")
  }else if(hacker1.length < hacker2.length){
    console.log("The navigator has the longer name " + hacker2.length + " characters long")
  }else{
    console.log("WOW! you both have equally long names " + hacker1.length + " characters long")
  }

let x = hacker1.toUpperCase();
let y = x.split('');
console.log(y.join(' '))

console.log(hacker2.split('').reverse().join(''))

let total = [hacker1, hacker2];
console.log(total.sort())

function checkPalindrome(str){
  return str == str.split('').reverse().join('');
}

checkPalindrome("banana")
  