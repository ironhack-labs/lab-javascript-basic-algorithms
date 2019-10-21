let hacker1 = "Nico"
hacker1.toUpperCase()
console.log(`the driver's name is ${hacker1}`)
var splitString = hacker1.split("");


let hacker2 = "Nico"

console.log(`the navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length){
console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker1.length < hacker2.length){
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)
}
else if (hacker1.length === hacker2.length){
  console.log(`wow you both have equally long names, with ${hacker1.length} characters.`)
}
let arr1 =hacker1.split("").join(" ")
console.log(arr1.toUpperCase())

let arr2 = hacker2.split("")
console.log(arr2.reverse().join(""))

if (hacker1.localeCompare(hacker2)===1){
  console.log("yo the navigators name goes first definitely")
}
else if (hacker1.localeCompare(hacker2)=== -1){
  console.log("the driver's name goes first definitely")
}
else if(hacker1.localeCompare(hacker2)=== 0){
  console.log("What?! you both got the same name.")
}


let paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna at ipsum varius placerat. Sed est nisi, luctus eget aliquam eget, euismod vitae orci. Cras non ex pretium massa cursus consectetur. Aliquam id neque eget libero hendrerit interdum. Duis efficitur turpis at ante mattis, sit amet interdum ipsum vestibulum. Quisque vestibulum, nulla at tristique viverra, urna risus rutrum lacus, sed gravida magna turpis sed risus. Sed non tortor ac justo placerat porttitor sed sed enim. Proin ullamcorper purus et est malesuada tempus at non velit. Vivamus vehicula, massa a vulputate facilisis, urna diam fermentum diam, ac varius nulla nibh at turpis. Aenean consectetur, nunc eget fermentum viverra, urna velit bibendum ligula, vitae cursus massa lorem a eros. Suspendisse potenti. Proin at dui nec lectus auctor fermentum.

Morbi lobortis, arcu a eleifend laoreet, nisi urna aliquam ligula, non fermentum felis turpis sed libero. Sed dictum ornare ex, a facilisis ligula molestie in. Proin fermentum eu justo vitae sagittis. Aliquam interdum ornare sapien, vitae vehicula nulla sodales ut. Pellentesque convallis tincidunt venenatis. Sed porta egestas sem ac pellentesque. In eget libero tristique, pellentesque purus vel, sagittis risus. Quisque euismod dolor sed augue dapibus porta.

Nunc et purus vel nisl hendrerit aliquet nec non sapien. Praesent nunc enim, dignissim ut blandit ac, porttitor sed dui. Integer in justo ac lorem suscipit sagittis et at libero. Curabitur ornare justo lorem, quis ornare odio sollicitudin ac. Aliquam commodo turpis a lacus eleifend, non blandit purus auctor. Mauris viverra imperdiet risus vitae venenatis. Sed sollicitudin lacus eros, et dapibus risus varius sed. Nunc sit amet nisl faucibus, auctor lectus et, lobortis ex. Donec vel mattis est, sit amet mollis sapien. Vivamus non placerat enim. Vivamus convallis nisi mauris, a imperdiet lorem fringilla vestibulum. Fusce rhoncus erat maximus egestas rutrum. In hac habitasse platea dictumst. Pellentesque nec efficitur lectus, in convallis quam. Vestibulum nec diam id lorem dictum aliquam non scelerisque lorem.`

let paraArr = paragraphs.split(" ")
console.log(paraArr.length)