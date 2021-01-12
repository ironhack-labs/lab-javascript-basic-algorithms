// Iteration 1: Names and Input
const hacker1 = 'Diego Barrera'
console.log(hacker1);

const hacker2 = "Sebastian Septien";
console.log(hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`${hacker1},it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`${hacker2}, it has ${hacker2.length} characters.`)
} else {console.log(`Wow, you both have equally long names ${hacker1.length}`)}

// Iteration 3: Loops
//3.1 Print all the characters of the driver's name
const hackerUpperCase1 = hacker1.toUpperCase();

const hackerSpace1 = []
for (let i = 0; i < hackerUpperCase1.length; i++) {
    hackerSpace1.push(hackerUpperCase1[i])
    hackerSpace1.push(' ')
}

let hackerSpaceCapital1 = hackerSpace1.join('')

// 3.2 Print all the characters of the navigator's name, in reverse order
let reverseName = ''
  for (let i = hacker2.length - 1; i >= 0; i--){        
    reverseName += hacker2[i];
  }    
console.log(reverseName)

// 3.3 Depending on the lexicographic order of the strings
let y = 0
while (y < 1) {
  if (hacker1[y] > hacker2[y]) { 
    console.log(`The driver's name goes first`)
  } else if (hacker2[y] > hacker1[y]) {
    console.log("Yo, the navigator goes first definitely.")
  } else {
    console.log("What?! You both have the same name?")
  }
  y++
}


// Bouns
// Go to Lorem Pisum Generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.

let parrafo1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor blandit dui eu vestibulum. Cras facilisis auctor rutrum. Nulla accumsan tincidunt erat, id elementum nibh fringilla ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam enim orci, ullamcorper eget lacus ac, tempor condimentum nisi. Maecenas nec nunc sed augue congue maximus. Ut ullamcorper feugiat gravida. Pellentesque auctor metus eget finibus gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet dui cursus, semper mi et, tincidunt diam. Pellentesque iaculis, dui vitae pretium varius, tellus ante blandit mauris, vel tempus sapien dolor in massa. Sed at pretium sem, sed ornare augue. Aenean ut mauris nibh. Sed at lacinia elit, suscipit semper eros. Etiam ornare consectetur est, ac tincidunt justo elementum sit amet."

let parrafo2 = "Proin molestie porta ligula non accumsan. Vivamus a nunc pulvinar, egestas felis sit amet, dapibus ex. Aliquam tristique arcu lorem, quis pharetra felis euismod convallis. Donec faucibus, ipsum sed vestibulum feugiat, risus velit dictum ipsum, vel hendrerit augue nulla ac ipsum. Donec bibendum justo tellus, at luctus lectus scelerisque eget. Vestibulum ac tempus tellus, sit amet viverra sem. Sed in orci nec sapien fermentum feugiat interdum quis sapien. Vestibulum sed posuere dolor. Nullam purus arcu, convallis et lorem eget, elementum dignissim purus."

let parrafo3 = "Sed rhoncus nec lacus nec accumsan. Sed vel neque hendrerit, convallis lectus sit amet, mattis augue. Vivamus ac nibh et ipsum finibus aliquet eget sodales ante. Donec accumsan tempor dictum. Praesent sagittis, magna at dignissim sodales, mauris libero tempus nulla, quis molestie nisl lacus in urna. Cras elementum consequat justo, ac ullamcorper dui eleifend sit amet. Nullam iaculis mauris in dui blandit imperdiet. Morbi ut diam sit amet diam congue eleifend. Nulla tempus tincidunt tortor eu bibendum. Vestibulum at leo sodales, eleifend erat non, rhoncus nunc. Pellentesque et aliquet metus. Duis libero lectus, rhoncus non pretium et, viverra ac ante. Aenean sollicitudin tellus id arcu scelerisque ultricies. Quisque congue vehicula pharetra."

let parrafoArray1 = parrafo1.split(/[\s,]+/);

let counEt1=0;
for (let i=0; i <= parrafoArray1.length; i++){
  if(parrafoArray1[i]=="et"){
    counEt1 += 1
  }
}

let parrafoArray2 = parrafo2.split(/[\s,]+/);

let counEt2=0;
for (let i=0; i <= parrafoArray2.length; i++){
  if(parrafoArray2[i]=="et"){
    counEt2 += 1
  }
}

let parrafoArray3 = parrafo3.split(/[\s,]+/);

let counEt3=0;
for (let i=0; i <= parrafoArray3.length; i++){
  if(parrafoArray3[i]=="et"){
    counEt3 += 1
  }
}

console.log(counEt1,counEt2,counEt3);