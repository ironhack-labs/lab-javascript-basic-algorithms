// LAB | Algoritmos básicos JS


// Iteración 1: nombres y entrada

let hacker1 = "tomy"
console.log(`The driver's name is ${hacker1}`);


let hacker2 = "tomas"
console.log(`The navigator's name is ${hacker2}`);

// Iteración 2: condicionales

if (hacker1.length > hacker2.length) {
  console.log(`The drivers has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
 console.log(`it seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`wow, you both have equally long names, ${hacker1.length} characters!`)
}
 

// Iteración 3: bucles

//3.1
var content = ""

for (let i = 0; i < hacker1.length; i++) {
 
content = content + hacker1[i].toUpperCase() + " "

}

console.log(content)

//3.2
var content2 = ""

for (let i = hacker2.length-1; i >= 0; i--) {

content2 = content2 + hacker2[i] + ""

}

console.log(content2)

//3.3 (probando los operadores <> he conseguido que funcione pero no entiendo del todo porque)

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.")
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}

// BONUS

// bonus 1


let lorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend massa a aliquam eleifend. Integer sodales imperdiet velit, nec rutrum enim maximus a. Nunc tellus lacus, pellentesque quis purus vel, mollis finibus lectus. Mauris facilisis nisi eu fermentum venenatis. Suspendisse a faucibus felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ac molestie dolor. Quisque cursus odio sit amet finibus lacinia. Ut tincidunt tortor lorem, accumsan pretium nunc elementum eu. Morbi nunc magna, ullamcorper et est non, interdum interdum lectus."

 
let lorem2 = "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec a nibh a purus imperdiet interdum quis eget metus. Nullam gravida dolor eget erat imperdiet congue. Nam eu efficitur leo, quis faucibus libero. Donec vitae felis volutpat, condimentum nibh quis, consectetur ipsum. Suspendisse nec lectus quam. Sed at velit luctus justo pretium fringilla. Pellentesque luctus sed nisi a cursus. Donec finibus pharetra velit, in rutrum ligula. Integer maximus, elit nec pretium congue, mauris est auctor erat, pellentesque vehicula mauris est vel ante. Ut tincidunt nibh sit amet ex placerat dapibus. Donec euismod mauris risus, sit amet consectetur ex porta vel."


let lorem3 = "Aenean sem dolor, molestie sit amet velit nec, venenatis imperdiet leo. Sed efficitur consequat quam, eget laoreet erat lacinia id. Nullam malesuada accumsan hendrerit. Nunc ac ipsum quis enim ullamcorper ultricies sed ut neque. Donec pharetra diam in sapien vestibulum, dictum convallis arcu iaculis. Donec porttitor urna eget massa imperdiet, non feugiat purus commodo. Donec rutrum nisl odio, ut interdum elit cursus in. Duis eu finibus enim, ac efficitur lacus. Nulla vel quam mi. Curabitur ut lacus a ex porta porta quis id eros. Phasellus magna tortor, tincidunt vel diam ac, vulputate rutrum ipsum. Integer faucibus eget magna non condimentum. Fusce ut malesuada eros. Duis non libero risus. Quisque id volutpat lectus."


function countWords(text) {
 let loremCount = text.split(" ")
  console.log(`"That string have ${loremCount.length} words"`)
  let x = 0
  
  loremCount.forEach(function(elem) {
    if (elem === "et") {
      x++
    } 
  })
console.log(`number of "et" word is: ${x}`)
}

countWords(lorem1)