console.log("I'm ready")
// Iteration 1: Names and Input
var hacker1 = "Isaac"
var hacker2 = "melvin"
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)

}else if (hacker1.length < hacker2.length){ 
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} character`)

}else if(hacker1.length === hacker2.length){
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
console.log(hacker1.toUpperCase().split("").join(" "))
console.log(hacker2.split("").reverse().join(""))
let lexo = hacker1.localeCompare(hacker2)
if(lexo === 1) {
  console.log("Yo, the navigator goes first definitely")
}else if (lexo === -1) {
  console.log("The driver's name goes first.")
}else{
  console.log("What?! You both have the same name?")
}

let nonesense = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus tristique purus, non varius ipsum auctor non. Integer non sollicitudin arcu. Maecenas tempor vel elit euismod maximus. Fusce pellentesque sapien ipsum, nec egestas nisi vehicula ut. Ut et turpis at purus tempor cursus. Phasellus elementum a odio volutpat maximus. Fusce maximus malesuada sem ac pharetra. Ut venenatis odio id dolor lobortis, dapibus suscipit nibh maximus. Curabitur ornare lectus nec rhoncus blandit. Cras convallis nisi vel ligula imperdiet, vel maximus risus porttitor. Nam sed facilisis lacus. Nam cursus fringilla erat, eget lacinia orci condimentum vel. Nunc cursus sed mauris nec semper. Nunc sit amet imperdiet nibh. Maecenas ac fermentum est, at cursus ex. Suspendisse lorem nibh, pulvinar eu quam in, tempus posuere nisi. Fusce dui mi, dictum quis mattis sit amet, commodo eu arcu. Aenean luctus arcu in erat dapibus faucibus. Nam id turpis egestas, maximus massa hendrerit, iaculis eros. Aliquam diam lacus, porta ac erat et, condimentum vulputate arcu. Nam est enim, lacinia in placerat vel, tempus sit amet libero. Morbi quis diam sed mi accumsan commodo ac at neque. Mauris sollicitudin metus quam. Curabitur id enim rhoncus, mattis magna id, sagittis nunc. Nulla vitae ex ligula. Curabitur ut sollicitudin massa. Etiam dignissim odio diam, bibendum posuere urna venenatis ac. Duis sed purus at odio sollicitudin commodo ut aliquam dolor. Donec pellentesque mi sed purus accumsan, nec hendrerit lectus finibus. Suspendisse tempus at nulla sit amet varius. Ut lobortis, nibh id varius luctus, eros purus posuere nisi, et aliquam diam neque sed diam."
console.log(nonesense.length)

let count = nonesense.match(/et/g).length

console.log(count) 