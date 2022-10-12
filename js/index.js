// Iteration 1: Names and Input

let hacker1 = 'John'
console.log(`The driver's name is`, hacker1)

let hacker2 = 'Paul'
console.log(`The navigator's name is`, hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length)  {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length)  {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker2.length === hacker1.length) {
    console.log(`Wow, you both have equally long names,  ${hacker2.length} characters!`);
} else {
    console.log(`Something's wrong`)
}

// Iteration 3: Loops

// 3.1

let hackerName = "";
for (let i = 0; i < hacker1.length; i++) {
    hackerName += hacker1[i] + " "
}
console.log(hackerName.toUpperCase());

// 3.2

let hackerNameReverse = "";
for (let i = hacker1.length - 1; i >=0; i--) {
    hackerNameReverse += hacker1[i]
}
console.log(hackerNameReverse);


// 3.3


const alphabetObject = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

if (alphabetObject.indexOf(hacker1[0]) < alphabetObject.indexOf(hacker2[0])) {
    console.log(`The driver's name goes first.`)
}   else if (alphabetObject.indexOf(hacker2[0]) < alphabetObject.indexOf(hacker1[0])) {
    console.log("Yo, the navigator goes first definitely.")
} else if (alphabetObject.indexOf(hacker2[0]) === alphabetObject.indexOf(hacker1[0])) {
    console.log("What?! You both have the same name?")
}

// Bonus

let bonusParagraph = 
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac felis nec arcu blandit dignissim. Donec et accumsan eros. Duis tincidunt eget lectus at vulputate. Pellentesque euismod tortor eu luctus commodo. Curabitur mi libero, tempus quis posuere eu, eleifend sit amet elit. Nullam dapibus congue auctor. Etiam mattis enim quis porttitor vulputate.
Cras aliquam non nunc eu venenatis. Nulla condimentum enim lorem, vel mattis risus lobortis a. Maecenas leo felis, elementum ac libero laoreet, pharetra sodales urna. Nullam vitae arcu eget nibh laoreet fringilla sit amet id mauris. Nulla ultricies velit sed quam venenatis iaculis. Nulla dignissim augue vel neque laoreet, a hendrerit eros fringilla. Sed viverra justo at egestas suscipit. Praesent justo nisi, hendrerit mollis venenatis ut, eleifend vitae eros. Ut tempus sagittis sapien volutpat tincidunt. Proin lobortis nulla eget suscipit auctor. Mauris eu magna nec dui commodo accumsan eu ullamcorper justo.
Donec vitae lorem viverra, tempus lacus vitae, molestie leo. Ut eleifend ex a laoreet efficitur. Proin congue justo et congue luctus. Duis non libero vel tortor fringilla aliquam. Nam id sem felis. Suspendisse id luctus tellus, at elementum lacus. Suspendisse ligula quam, volutpat sit amet fermentum rutrum, tincidunt sit amet turpis. Aliquam varius, odio ut aliquam vulputate, libero orci pretium dui, at sagittis nibh nibh vel mi. Aliquam rhoncus dictum massa, id tempor velit commodo eget. Nam justo metus, venenatis quis tellus sed, pharetra rhoncus justo. Mauris placerat, enim at fermentum tristique, urna arcu bibendum est, vel lacinia sapien nibh sit amet magna. Integer porta suscipit vehicula. Nunc quis nisi neque. Nulla at rutrum sem.
`

let bonusParagraphWords = bonusParagraph.split() 

console.log(bonusParagraphWords)
console.log(bonusParagraphWords.length)

// // .includes('et')