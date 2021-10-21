// Iteration 1: Names and Input
let hacker1 = 'Miky'

console.log(`The driver's name is ${hacker1}`) 

let hacker2 = "Adri"

console.log(`The navigator's name is ${hacker2}`) 


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops
let driverNameinCapitals = ''

for (let i = 0; i < hacker1.length; i++) {
  driverNameinCapitals += (hacker1[i].toUpperCase() + ' ')
}
console.log(driverNameinCapitals)

let navigatorNameReverse = ''

for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorNameReverse += hacker2[i]
}
console.log(navigatorNameReverse)

for (let i = 0; i < hacker1.length; i++) {
  if (hacker1[i].localeCompare(hacker2[i]) === -1) {
    console.log("The driver's name goes first.")
    break
  }

  if (hacker1[i].localeCompare(hacker2[i]) === 1) {
    console.log("Yo, the navigator goes first definitely.")
    break
  }
 
  if (hacker1[i].localeCompare(hacker2[i]) === 0) {
    console.log("What?! You both have the same name?")
    break
  }
}


// Bonus 1
let loreIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id metus mollis, auctor lacus sit amet, rhoncus massa. Quisque accumsan volutpat est vel rhoncus. Quisque egestas quis sem id euismod. Praesent mollis lacus elit, vel ullamcorper mauris porttitor ac. Pellentesque vel placerat sapien. Nulla iaculis sapien vel justo mollis rhoncus. Phasellus ullamcorper libero vitae posuere egestas. Sed vitae ante pharetra, faucibus est sed, interdum velit. Aenean ut interdum ex, et vehicula sem. Cras congue magna aliquet, vehicula velit et, consequat magna. Vestibulum porta dui nec massa pretium vulputate. Nunc sed lorem eget nisl molestie tristique. Nunc in fermentum ex. Vivamus gravida, nulla a convallis facilisis, justo quam accumsan libero, at posuere orci tortor sit amet nunc. Cras ornare viverra ex vitae volutpat. In eget mattis orci. Nulla eu porttitor ipsum. Vestibulum id leo sit amet velit mattis sollicitudin. Aenean tempor tempus quam, non aliquam nibh vehicula vel. Nulla ut ultricies leo. Aenean sed congue massa, quis cursus arcu. Sed in ligula eu dui tempus dapibus et in dui. Mauris ullamcorper enim vel ultricies egestas. Sed et dolor felis. Vestibulum id pulvinar nunc. Maecenas sed lacus condimentum, vulputate dolor in, interdum sapien. Donec ac nunc vel ex porta imperdiet quis et orci. Donec dignissim felis ut ante vestibulum, at mollis nisl consectetur. Vivamus semper id nunc a lobortis. Nullam lacus tellus, consequat dignissim vestibulum quis, suscipit eu purus. Vivamus dui arcu, rutrum in diam a, pellentesque maximus augue. Cras feugiat convallis dignissim. Etiam quis magna pharetra erat fermentum efficitur et suscipit risus. Nam varius mi porttitor, semper justo a, congue velit. Nunc lacinia porta consectetur. Nunc sodales fermentum arcu non interdum.'

function countEt(str) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i -1] === ' ' && str[i] === 'e' && str[i + 1] === 't' && str[i +2] === ' ') {
      count++
    }
  }
  return count;
}

console.log(countEt(loreIpsum))


// Bonus 2
function checkPalindrome(str) {
  const re = /[\W_]/g

  const lowRegStr = str.toLowerCase().replace(re, '')
  const reverseStr = lowRegStr.split('').reverse().join('')

  return reverseStr === lowRegStr ? 'Is a palindrome' : "Not a palindrome"
}

console.log(checkPalindrome(`A man, a plan, a canal, Panama!`))