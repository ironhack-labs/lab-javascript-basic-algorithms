let hacker1 = "Alex"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Eren"

console.log(`The navigator's name is ${hacker2}`)


if(hacker1.length > hacker2.length){
  console.log(`hacke1 has the longest name it has ${hacker1.length} characters`)
} else if(hacker2.length > hacker1.length){
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
} else{
  console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`)
}



  var x = hacker1.toUpperCase().split('').join(' ')
  console.log(x)

  var y = hacker2.split('').reverse().join('')
  console.log(y)

//  console.log(y.revers())

var total = [hacker1, hacker2]

console.log(total.sort())

function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}

checkPalindrom("eye")
