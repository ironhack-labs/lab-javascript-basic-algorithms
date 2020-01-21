// Iteration 1

let hacker1 = "Chaba";

console.log("The driver's name is "+hacker1)

let hacker2 = "Igor";

console.log("The navigator's name is "+hacker2)

// Iteration 2

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length = hacker2.length){
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
} else {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}


// Iteration 3

let emptyString = ""
let arr=[hacker1,hacker2]
arr = arr.sort()

for (i=0;i<arr[0].length;i++){
  emptyString += " " + arr[0].charAt(i)
}

emptyString = emptyString.toUpperCase()

console.log(emptyString)

let emptyString2 =""

for (i<arr[1].length;i>=0;i--){
  emptyString2 += arr[1].charAt(i)
}

console.log(emptyString2)

if(arr[0]==hacker1){
  console.log("The driver's name goes first.")
} else if (arr[0]==arr[1]){
  console.log("What?! You both have the same name?")
} else {
  console.log("Yo, the navigator goes first definitely.")
}

// Bonus 1

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula dictum metus, non sodales lacus sodales ac. Aliquam et porttitor erat. Morbi et enim at nisi facilisis gravida gravida id erat. Donec et erat vel dui rutrum varius. Duis ac tincidunt massa, in condimentum lacus. Cras facilisis arcu eu sollicitudin imperdiet. In porta, ante eu elementum vulputate, erat nulla viverra nisl, non aliquet velit orci hendrerit nisi.

Cras a enim massa. Praesent eget mi a augue porta dignissim. Aliquam id dignissim arcu. Mauris eget neque a sem sollicitudin viverra a ac mauris. Cras in justo at mi pharetra scelerisque. Pellentesque semper interdum posuere. Morbi in magna quis tellus tempus accumsan. Nam ante dolor, blandit vitae ante ac, fringilla congue dolor. Curabitur consequat eros quis risus dapibus, ac suscipit diam euismod. Aliquam vel arcu id nulla auctor fringilla. Aenean congue sit amet risus id cursus. Morbi aliquet massa quis interdum condimentum. Nullam consequat at urna sit amet placerat. Sed venenatis mauris ut tellus tempor imperdiet.

Duis gravida mattis velit ac varius. Nulla elementum, massa sit amet tincidunt imperdiet, erat orci feugiat risus, congue ornare magna sem in nunc. Mauris pretium, lacus a malesuada ornare, diam tellus fringilla erat, eget dignissim nulla massa vitae quam. Nullam placerat sapien finibus dui fermentum tincidunt. Vivamus eget enim sed sapien sollicitudin cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque vel ornare leo. Fusce maximus eget tortor non convallis. Aliquam pharetra lacus id tortor eleifend, sed mattis nulla placerat. Cras ipsum neque, consequat id lorem faucibus, tincidunt maximus nisl. In dictum sem sit amet dolor scelerisque ultricies.`

function wordCounter(str){
  console.log(str.split(' ').length)

  let loremArr = str.split(" ")

  let count = 0
  for (i=0;i<loremArr.length;i++){
    if (loremArr[i]=="et"){
      count += 1
    }
  }
  
  console.log( `There's ${count} "et" here.`)

}

wordCounter(lorem)

// Bonus 2

let phraseToCheck = "Amor Roma"

function reverseThing(str){
  forwardArray= str.toUpperCase().split('')
  reverseArray = str.toUpperCase().split('').reverse()
  if (forwardArray.join("")==reverseArray.join("")){
    console.log(`${phraseToCheck} is a Palindrome`)
  } else {
    console.log(`${phraseToCheck} is not a Palindrome`)
  }
}

reverseThing(phraseToCheck)