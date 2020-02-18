// Iteration 1: Names and Input

let hacker1 = "Cristina";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Angela";
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)
}


// Iteration 3: Loops
//3.1
let driverUpperCase = hacker1.toUpperCase();

let separated = "";

for (let i = 0; i < driverUpperCase.length; i++) {
    separated += driverUpperCase[i] + " ";
}


console.log(separated);


//3.2
let reversed = "";


for (let j = navigator.length - 1; j >= 0; j--) {
    reversed += navigator[j] + "";
}

console.log(reversed);

//3.3
if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
} else if (hacker1 < hacker2) {
    console.log("The driver's name goes first");
} else {
    console.log("Yo, the navigator goes first definitely");
}


//BONUS 1

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a massa porta ipsum scelerisque efficitur. Mauris erat odio, egestas quis ullamcorper non, venenatis nec metus. Aliquam auctor, libero id rutrum vestibulum, lectus metus condimentum nibh, tincidunt suscipit sem elit sed est. Aliquam egestas mauris lectus. Nullam varius nulla eget tellus hendrerit, sit amet convallis augue blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pretium erat tempus velit blandit mollis. Praesent varius ex sit amet augue hendrerit ornare. Vivamus fringilla fermentum facilisis. Duis in egestas sem, ac blandit eros. Nullam id velit augue. Fusce consequat arcu non porttitor ultricies. Suspendisse non arcu non magna ornare congue. Vivamus in ligula at lorem aliquam tempus. Donec rutrum, justo sed venenatis egestas, felis tortor varius lacus, eu finibus ante sapien a urna. Etiam dui libero, porta non suscipit ac, venenatis non nisi. In commodo luctus consequat. Curabitur luctus diam et metus sodales, sit amet commodo ex tempor. Fusce et lobortis dui, ac tristique urna. Phasellus placerat sed orci a facilisis. Nam mollis, ligula eu iaculis hendrerit, ante elit tempus sapien, nec finibus metus metus at justo. Nam pharetra lectus ligula, sit amet tincidunt risus tempus vitae. Vivamus molestie nisl vitae nibh elementum, nec scelerisque ante commodo. Donec rhoncus metus in velit tincidunt, vel ullamcorper mi tempor. Vestibulum tristique tincidunt sapien, nec pretium neque venenatis dignissim. Nam tempor sapien et mauris molestie commodo. Proin quis interdum nibh. Cras semper nibh ipsum, nec porta elit porttitor sit amet. Fusce efficitur eros a mi finibus, aliquam fermentum mi viverra. Etiam ultrices justo libero. Maecenas aliquam ultrices quam ac sollicitudin.";

console.log(text.split(" ").length);

console.log(text.split("et").length);


