// Iteration 1: Names and Input
const hacker1 = 'adrian'
const hacker2 = 'juan'

console.log('The driver name is ' + hacker1)
console.log('The navigator name is ' + hacker2)


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
  console.log('The driver has the longest name, it has ' + hacker1.length + ' characters.')
} else if(hacker1.length < hacker2.length){
  console.log('It seems that the navigator has the longest name, it has ' + hacker2.length + ' characters.')
} else {
  console.log('Wow, you both have equially long names, ' + hacker1.length + ' characters.')
}

let capital = hacker1.toUpperCase()
let space = capital.split("").join(" ")
//.join es para unir y en los parentesis va la condicion
console.log(space)

console.log(hacker2.split("").reverse().join(""))

let compare = hacker2.localeCompare(hacker1)


// Iteration 3: Loops
if (compare === 1){
  console.log('The drivers name goes first')
} else if (compare === -1){
  console.log('Yo, the navigator goes first definitely')
} else{
  console.log('What?! You both have the same name')
}

//bonus

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris augue leo, finibus et augue sed, facilisis faucibus arcu. Nunc sodales ornare arcu, et interdum nulla hendrerit ut. Nullam finibus metus metus, vel blandit tellus interdum eu. Integer laoreet malesuada maximus. Nulla nec orci vestibulum odio mattis imperdiet eu vitae orci. Proin gravida tempor nisl at accumsan. Curabitur auctor gravida diam. Ut cursus tempus pretium. Integer ac tortor a tortor laoreet tempor sed varius enim. Suspendisse volutpat dignissim ante, ac pulvinar mauris gravida ut. In neque leo, sagittis et nibh sit amet, porttitor tincidunt nunc. Cras non sollicitudin justo, sit amet consectetur nunc. Nullam eu dolor ex. Phasellus in nibh urna. Quisque blandit aliquam felis, eu ultrices nibh mollis nec. Suspendisse pulvinar lobortis ipsum, quis blandit elit lacinia sit amet. Vivamus consequat accumsan pulvinar. Aenean leo felis, auctor in erat vel, cursus tristique libero. Nam finibus porta eros, id blandit erat posuere sit amet. Proin accumsan magna vitae enim mollis finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis tellus lectus, eu porttitor neque imperdiet eu. Vestibulum nec sapien eu lectus vehicula bibendum ut eget odio. Etiam lorem velit, varius nec porttitor ac, consectetur eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eget quam ipsum. Aenean posuere ligula at maximus lacinia. Nulla faucibus, ligula id ultrices eleifend, elit sem feugiat mauris, eget tincidunt odio enim sit amet erat. Quisque elementum ut nisl a laoreet. Donec elit lacus, euismod a neque in, finibus sodales dui. Aenean vitae nunc mollis, tincidunt lectus eget, bibendum nulla. Vestibulum euismod interdum urna, vel rhoncus massa elementum non. Suspendisse maximus elit vel orci ultricies consectetur. Praesent eu imperdiet nunc. Pellentesque a odio massa. Praesent pretium leo sed fringilla interdum. Vestibulum eu tempor diam. Curabitur vel elit venenatis, congue tortor a, mattis sem. Etiam laoreet justo a est fringilla, eget congue dui pretium. Nam condimentum convallis massa non interdum et."

const spaceWorl = text.split(" ")
const numberWorl = spaceWorl.length
console.log(numberWorl)

let counter = 0

for (let i = 0; i <= spaceWorl.length; i++){
  if(spaceWorl[i] = 'et'){
    counter = counter + 1
  }
}

 
console.log(counter)
