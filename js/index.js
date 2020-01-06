//console.log("Im ready")

//Crea dos variables ---------
// Iteration 1: Names and Input
let hacker1 = "Juan"
let hacker2 ="Diego"
//console.log("The driver is name is " + hacker1)
//console.log("The navigator is name "+ hacker2)


//Condicionales ----------
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length}`)
}else if (hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}`)
}
else{
  console.log(`wow,you both have equally long names ${hacker1.length}`)
}


//Ciclos --------

// Iteration 3: Loops

let iron =[]
for(let i = 0; i < hacker1.length; i++){
  iron[i]=hacker1[i]
  
}

console.log(iron.join(" ").toUpperCase())
console.log(iron.reverse().join(""))



if(hacker1.localeCompare(hacker2)>0){
  console.log("Yo, the navigator goes first definitely")
}else if (hacker1.localeCompare(hacker2)<0){
  console.log("Drivers name go first")
}else{
  console.log("What? you both have the same name")
}



// ----Bonus lorem----

let parrafo1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in nibh eu magna auctor dapibus. Nunc vehicula hendrerit convallis. In sollicitudin eros vel velit consequat, in dictum lectus laoreet. Nunc porttitor feugiat mattis. Fusce congue, massa sed aliquam vestibulum, felis sem mollis elit, bibendum imperdiet nisi felis eget dui. Nam sollicitudin interdum diam, sit amet interdum erat venenatis lacinia. Sed in consequat est. Curabitur eget ultrices sapien. Aenean sit amet egestas erat, eget sollicitudin nulla. Quisque bibendum aliquam aliquam. Aliquam eu diam ut enim auctor molestie. Suspendisse sollicitudin, turpis nec auctor fringilla, nunc est commodo eros, nec lobortis ex nunc non eros. Integer malesuada mattis quam id porta. Nulla in pretium est. Morbi eu sapien erat. Morbi ac magna eget diam molestie cursus sit amet ut leo. Donec vel tempus augue, ac iaculis quam. Nullam faucibus quis urna eu maximus. Praesent ac fermentum ipsum. Proin in metus convallis, porta ante eget, feugiat massa. Nam finibus nisl eu mi luctus, quis hendrerit orci semper. Morbi porta nisi at nisi tristique, eget viverra neque lacinia. Donec a ligula nunc. Aliquam laoreet, risus sit amet interdum pharetra, metus diam dignissim velit, vel vestibulum ipsum ipsum a nulla. "

// --punto 2---
console.log("Cantidad de palabras : " + parrafo1.split(" ").length)

//--Punto 3---

let hack=[]
let parrafo2 = parrafo1.split(" ")

for(let i = 0; i < parrafo1.split(" ").length;i++){
  
  if(parrafo2[i] == "sit"){
    hack.push(i)
    
  }
}
console.log(`Hay un total de ${hack.length} `)


//Bonus 2 palidromo
let phraseToCheck = "amor,roma"
let apoyo = phraseToCheck.split(" ").join("")

let apoyoArray = []
for (let i = 0; i <apoyo.length;i++){
  apoyoArray[i] = apoyo[i]
}


if (apoyo === apoyoArray.reverse().join("")){
  console.log("Palindromo")
}else{
  console.log("Este no es un palindromo")
}
