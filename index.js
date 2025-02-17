// Iteration 1: Names and Input
let hacker1 = "pedrot"
let hacker2 = "pedros"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

// Iteration 3: Loops

//3.1
let nameArr = hacker1.toUpperCase()
let nameUpperCase = ''

for(i=0; i<nameArr.length; i++){
   if(i<nameArr.length - 1) {
    nameUpperCase += `${nameArr[i]} `
   } else {
    nameUpperCase += `${nameArr[i]}`
   }
    
}

console.log(nameUpperCase.length)


//3.2
let reverseName = ""
for(i=hacker1.length -1 ; i>=0; i--){
    reverseName += `${hacker1[i]}`
}

console.log(reverseName)

//3.3 

let arr = [hacker1, hacker2]

arr.sort(function(a,b) {
    return a.localeCompare(b)
})

console.log(arr)

if(arr[0] === hacker1 && arr[0] !== hacker2) {
    console.log("the driver's name goes first.")
} else if(arr[0] === hacker2 && arr[0] !== hacker1){
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
} 

//4.1 (bonus)
let longText ="Integer commodo libero a est malesuada tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras aliquet, sapien at tempus porta, purus sem vestibulum nisl, id posuere magna ex sit amet ligula. Mauris aliquet mattis nulla eget blandit. Donec venenatis ut arcu id vulputate. Curabitur auctor odio quis diam auctor, ut auctor elit viverra. Vestibulum faucibus neque a imperdiet efficitur. Etiam turpis mauris, tempus at suscipit ut, finibus id diam. Integer ut suscipit justo, sed vestibulum tortor. Aliquam at blandit orci. Integer nisi tortor, condimentum nec eros at, gravida rhoncus ante. Sed molestie metus a turpis finibus, id maximus tellus imperdiet. Morbi hendrerit aliquet est, nec molestie erat finibus ut. Duis in justo eu felis congue faucibus lobortis nec justo. Aenean ultrices sapien tortor, at finibus ipsum congue quis."

let numberOfSpaces = 0

for(i=0; i<longText.length; i++){
    if( longText[i]=== " "){
        numberOfSpaces++
    }
}

let numberOfWords = numberOfSpaces + 1
console.log(numberOfWords)

//4.2
let numberOfEts = 0
for(i=0; i<longText.length; i++){
    if( longText[i]=== "e" && longText[i + 1] ==="t"){
        numberOfEts ++
    }
}

console.log(numberOfEts)
// console.log(longText)