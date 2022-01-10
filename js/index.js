// Iteration 1: Names and Input
let hacker1 = "Michael Scott"
console.log(`The driver's name is ${hacker1}.`)

let hacker2 = "Dwayne Johnson"
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

// Iteration 3: Loops

let hacker1Big = '';

for (let i=0; i<hacker1.length; i++){
    hacker1Big += hacker1[i].toUpperCase() + ` `
}
console.log(hacker1Big);

let hacker2Big = '';

for(let i=hacker2.length; i>=0; i--) {
    hacker2Big += hacker2[i]
}

// Iteration 3: Loops

//--------

if (hacker1[0] > hacker2[0]) {
  console.log("Yo, the navigator goes first definitely.")
}
else if (hacker1[0] < hacker2[0]) {
  console.log("The driver's name goes first.")
}
else{
  console.log('What?! You both have the same name?')
}

//-----------
// Bonus 1
const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mi nec dolor faucibus porttitor sed et lectus. In sed metus sed leo ultricies tincidunt ac ac turpis. Ut pretium risus sit amet augue suscipit, vitae dapibus ex mollis. Nullam vitae risus varius, finibus ligula nec, bibendum augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc tellus nulla, sollicitudin eget placerat quis, vehicula et nulla. Sed tincidunt varius mi eu convallis. Nulla quis diam lectus. Integer fringilla lectus eu porttitor euismod. Etiam quis tortor sit amet est aliquet tempus euismod eu orci. Suspendisse id sapien iaculis, placerat ex porttitor, porttitor diam. Nulla a sem laoreet, faucibus urna id, rutrum tortor. Pellentesque tincidunt at tortor quis fermentum.

Donec rutrum viverra libero sed tempus. Vestibulum tellus eros, tincidunt sed mollis vitae, vulputate a arcu. Ut elementum suscipit tortor, eu auctor sem feugiat pharetra. Sed maximus mollis libero, quis varius est pulvinar at. Vivamus euismod at dolor a hendrerit. Sed aliquam neque ac molestie commodo. Quisque id maximus arcu. Proin porttitor orci elit, in consectetur augue luctus ut. Nulla tincidunt, lorem sed molestie congue, risus est lobortis mi, et lacinia sem lorem quis ante. Suspendisse fermentum, enim nec scelerisque molestie, sem nibh gravida ipsum, sit amet suscipit elit elit quis magna. Morbi et tempus nisl, eget rhoncus nulla.

Quisque vitae feugiat dui, et mattis felis. Phasellus vulputate pharetra dapibus. Nam ornare cursus eleifend. Nam sagittis ante mi. Duis sit amet imperdiet dolor. Donec interdum lectus diam, non commodo eros tempus eget. Vestibulum velit felis, commodo aliquet ultrices in, pellentesque vel urna.`

let numWords = paragraph.split(" ").length;
console.log(numWords);

let countOccurrences = 1;
paragraph.split(" ").forEach((word) => {
  if (word === "et") {
    countOccurrences++;
  }
});
console.log(countOccurrences);

