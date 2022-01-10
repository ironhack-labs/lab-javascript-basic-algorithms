// Iteration 1: Names and Input
let hacker1 = "Mister Smith"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Mister Smith"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) { 
    console.log(`The driver has the longest name, it has ${hacker1.length}`)
  } else if(hacker1.length < hacker2.length) { 
  console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters`)
  } else {
    console.log(`Wow, you both have eqyally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

let hacker1space = ' ';

for (let i = 0; i < hacker1.length; i++) {
  hacker1space += hacker1[i].toUpperCase()+ ` `
}
console.log(hacker1space)

let hacker2space = '';
for (let i = hacker2.length-1; i >= 0; i--) {
  hacker2space += hacker2[i] + ``
}
console.log(hacker2space)

if (hacker1 < hacker2) {
  console.log("The drive's name goes first")
} else if(hacker1 > hacker2) {
  console.log("Yo, the navigator goes  first definitely.")
} else console.log("What?! You both have the same name?")

// Bonus Content
let text = `Lorem ipsum dolor sit am, consectur adipiscing elit. Quisque pharra arcu felis, at suscipit eros dapibus eg. Vestibulum eu diam lacus. Nam porta posuere purus, id mattis tellus dignissim eg. Duis turpis nunc, placerat vitae massa vel, venenatis ultricies justo. Donec in ante ac mi malesuada scelerisque non  dolor. Duis pharra nulla a rhoncus commodo. In sit am aliqu quam. Aliquam rutrum accumsan libero, eg gravida tortor fermentum .

In hac habitasse platea dictumst. Nullam egestas bibendum ex, ac consectur purus cursus eu. In hac habitasse platea dictumst. et et Ut sollicitudin urna in eros cursus malesuada. Nam eg velit quis velit fringilla iaculis quis non tortor. Vestibulum tincidunt, ante at placerat porttitor, nisl nibh tincidunt ante, id egestas quam augue non massa. Nam maximus sodales ex. Mauris ac euismod turpis, nec tincidunt dui. Aliquam aliqu dolor ut libero condimentum, sed tincidunt mus venenatis. Integer  velit augue. 

Suspendisse tincidunt enim at orci blandit, in interdum eros rutrum. Cras vel enim rhoncus nisi sodales vestibulum ut vitae lorem. Duis sapien elit, pharra vitae tempor eu, laore quis ligula. Nulla nec urna varius, lacinia mauris eg, auctor eros. Orci varius natoque penatibus  et magnis dis parturient montes, nascur ridiculus mus. Vestibulum lacinia, enim quis scelerisque porttitor, nunc leo finibus purus, ut consectur mauris felis nec dui. Maecenas consequat ac nunc ac consectur. Aenean eg nibh sodales, feugiat  sem eu, luctus nunc. Suspendisse rutrum nunc venenatis lectus ornare, nec aliqu risus malesuada. Nam tincidunt porta est, a vulputate enim lobortis at. Nulla egestas efficitur dolor sit am fringilla. Sed quis aliquam erat, sed lobortis turpis. Nam faucibus, neque vitae euismod dictum, nisi libero elementum leo, eu suscipit quam sem lobortis est.`

function wordCount(string) {
  return string.split(' ').length
}

console.log(wordCount(text))


let countOccurrences = 0;
text.split(" ").forEach((word) => {
  if (word === "et") {
    countOccurrences++;
  }
});
console.log(countOccurrences);