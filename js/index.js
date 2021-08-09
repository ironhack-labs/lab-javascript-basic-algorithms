// Iteration 1: Names and Input
let hacker1 = prompt('Name of driver please')
console.log (`"The driver's name is" ${hacker1}`)

let hacker2 = prompt ('Name of navigator please')
console.log(`"The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length == hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
}

// Iteration 3: Loops
capitalDriver = hacker1.toUpperCase()
    console.log(capitalDriver.split('').join(' '));


    hacker1.split('').reverse().join('')

    let nameReverse = hacker1.split('').reverse().join('')



if (hacker1.localeCompare(hacker2) == -1){
    console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) == 0){
    console.log(`What, you both have the same name?`);
} else {
    console.log(`Yo, the navigator goes first definitely.`);
}



//const lorem = “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis enim ut mi efficitur laoreet. Aliquam vehicula lobortis lorem ac condimentum. Mauris facilisis molestie magna, eu vestibulum massa. Pellentesque id congue metus. Duis fermentum neque et metus suscipit mollis. Ut ut venenatis sapien. Aenean volutpat elit ut turpis molestie, id molestie nisl placerat. Fusce cursus euismod nisi quis ullamcorper. Vestibulum porta magna sed sem dapibus, ut euismod mauris gravida. Maecenas ac condimentum justo, eget ornare enim. Fusce vel dui dui. Praesent a magna sit amet felis sollicitudin porta sed id mi. /n Aenean feugiat libero at pulvinar imperdiet. Praesent vestibulum nisl eget turpis imperdiet lacinia. Phasellus fermentum justo ac orci fringilla vulputate. Nam diam enim, laoreet eleifend dui in, venenatis tempus arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras sed massa in sem maximus congue quis in massa. Mauris quis ante venenatis lacus consectetur auctor ac sed nisl. Sed id sodales felis, a faucibus ipsum. Nullam sed neque at nulla dignissim tristique. Vivamus porttitor arcu et eros posuere rhoncus. Suspendisse sit amet elementum metus, ornare faucibus nisi. Etiam mollis faucibus metus, ac auctor lectus blandit in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat nisi, facilisis et malesuada quis, scelerisque ut tortor. Sed consectetur nec nulla eu ullamcorper. Vivamus lacinia ornare justo vitae porttitor. /n Quisque vitae augue erat. Donec malesuada feugiat nulla, at euismod magna convallis non. Proin bibendum, urna ac commodo fermentum, elit nulla viverra quam, eu tempor est enim id enim. Quisque faucibus elit quis ultrices volutpat. Aenean consequat arcu in erat vestibulum iaculis. Sed ut tristique neque, sit amet mattis libero. Praesent aliquet neque quis erat mollis elementum. Aliquam molestie nisi eleifend lacus pulvinar suscipit. Nulla facilisi. Nunc interdum tristique purus, eu sollicitudin urna auctor a. Morbi consectetur eleifend nulla, a malesuada massa dignissim sit amet.”


// for (let i = 0, i < hacker1.length, i++){
//     console.log(hacker1[i].toUpperCase)
// }
// for (let p=hacker1.length, p >= 0, p--){

// }

