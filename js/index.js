// Iteration 1: Names and Input
let driver = "Roberto"
let navigator = "Alberto"

console.log(`The driver's name is ${driver}`)
console.log(`The navigator's name is ${navigator}`)

// Iteration 2: Conditionals
if(driver.length > navigator.length){
    console.log(`The driver has the longest name, it has ${driver.length} characters.`)
} else if (navigator.length > driver.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.`)
} else if (driver.length = navigator.length) {
    console.log(`Wow, you both have equially long names, ${driver.length} characters!`)
}

// Iteration 3: Loops
let espacio = ""
for(let i = 0; i < driver.length; i++){
  console.log(driver[i])
}

for (let i = 0; i < navigator.length; i++){
  console.log(navigator[i])
}

//3.2
let driTamaño = navigator.length;
let driReverse = "";
  while (driTamaño>=0) {
    driReverse = driReverse + driver.charAt(driTamaño);
    driTamaño--;
    console.log(driReverse)
  }

let navTamaño = navigator.length;
let navReverse = "";
  while (navTamaño>=0) {
    navReverse = navReverse + navigator.charAt(navTamaño);
    navTamaño--;
    console.log(navReverse)
  }

//BONUS 1
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, massa vitae imperdiet mattis, orci est convallis est, ut tincidunt dui quam eget nisi. Nunc id ultricies enim. Aenean ac tellus ac ante euismod imperdiet. Donec commodo ligula facilisis, sollicitudin ante eget, fermentum tellus. Maecenas id rhoncus enim. Nullam eu risus sed erat ornare sollicitudin. Suspendisse nec risus viverra, consectetur elit eget, lobortis ligula. Aenean massa eros, egestas eget convallis vitae, dapibus quis mi. Morbi tincidunt augue eu magna porttitor, eget varius tortor faucibus. Donec vitae ante ac risus lacinia tristique ac sit amet lorem. Ut id leo eleifend, congue odio eu, tristique nibh. Phasellus ex ante, ultrices id egestas a, sollicitudin at urna. Vivamus interdum, purus molestie ultrices laoreet, lorem lacus venenatis odio, sed facilisis eros elit vitae mauris. Aliquam bibendum orci sit amet neque luctus tempus. Sed et pellentesque urna, sed congue metus.

Integer a leo lacus. Nunc rutrum nunc eget elit pellentesque, eu blandit ex vestibulum. Curabitur a magna sit amet nulla facilisis bibendum vitae nec mauris. Phasellus rhoncus lacinia lectus, in eleifend magna ultrices quis. Mauris tempus, ipsum fringilla pulvinar posuere, erat quam egestas justo, ac maximus nisl ex et metus. Morbi nunc justo, efficitur ut neque eget, varius consequat velit. Sed enim ligula, gravida vel imperdiet at, fermentum id nisl. Maecenas at libero non libero tincidunt semper at ac nibh. In eget mauris a sapien pretium porttitor. In a sagittis justo. Proin vestibulum eros sem, quis porttitor risus ornare a. Nam et nunc in lorem tincidunt bibendum nec ut nibh. Proin eros leo, elementum ac dapibus ut, auctor et orci. Nullam in odio metus.

Duis orci odio, pulvinar sit amet euismod eu, pharetra et massa. Donec eu condimentum enim. Sed dignissim nisl in ullamcorper convallis. Aliquam non neque vitae urna feugiat facilisis ac vitae massa. Sed euismod congue vestibulum. Fusce ultricies dui a leo semper, ut elementum metus molestie. Etiam ultrices lectus nec massa faucibus, vitae fermentum nisi efficitur. Morbi et purus eu neque pretium fermentum ac vel eros. Donec non aliquet mauris.`


console.log(lorem.split("").length)

let contar = lorem.match(/et/g).length;
console.log(contar);


/BONUS 2

