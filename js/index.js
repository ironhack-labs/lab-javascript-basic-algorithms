// Iteration 1: Names and Input

let haker1 = "Isabel";
let haker2 = "heyling";

console.log(`"The driver's name is ${haker1}"`)
console.log(`"The navigator's name is ${haker2}"`)


// Iteration 2: Conditionals

if (haker1.length > haker2.length) {
    console.log(`the driver has the longest name, it has ${haker1.length} characters`)
}
else if (haker2.length > haker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${haker2.length} characters`)
}
else {
    console.log(`Wow, you both have equally long names, ${haker1} characters!`)
}



// Iteration 3: Loops

3.1

let name = ""

for (let i = 0; i < haker1.length; i++) {
    name += haker1[i] + ' ';

}
console.log(name.toUpperCase())

3.2

let name = ""

for (let i = haker2.length - 1; i >= 0; i--) {
    name += haker2[i] + ' ';

}
console.log(name)

3.3

if (haker1.localeCompare(haker2) < 0) {
    console.log("The driver's name goes first.")
}
else if (haker1.localeCompare(haker2) > 0) {
    console.log("Yo, the navigator goes first definitely.")
}
else {
    console.log("What?! You both have the same name?")
}


// Iteration 4: Bonus

let name = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus arcu eget nisi sodales, id tincidunt lorem efficitur. Suspendisse dapibus dui sapien, in hendrerit nunc aliquam eu. Proin ac libero laoreet, commodo dui vel, tristique purus. Vivamus ut lorem non lectus semper suscipit at cursus quam. Aenean consectetur, neque in feugiat imperdiet, enim metus convallis ante, sed placerat eros quam quis nisl. Mauris porta, mi non fringilla euismod, augue dui auctor turpis, sed hendrerit ligula sem eget dui. Curabitur dolor dui, ultricies non ex at, tincidunt lacinia tortor. Sed vel neque ullamcorper, maximus elit in, lobortis ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Aliquam mauris nulla, ultrices ac felis a, imperdiet molestie sapien. Donec libero velit, dapibus et orci sed, sagittis accumsan orci. Duis mattis, neque id ullamcorper porta, felis quam venenatis augue, eget dignissim purus mauris ac diam. Vivamus ac tempor turpis. Maecenas mattis odio id arcu auctor viverra. Pellentesque bibendum ultrices libero, eu ultricies odio lobortis a. Donec maximus erat velit, sed eleifend diam pellentesque in. Cras pellentesque magna quis ex ultricies laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque cursus neque eu nisl volutpat, vel scelerisque odio auctor. Suspendisse sed auctor quam. Nulla ut egestas sem. Nulla sit amet enim sapien. Proin consequat lobortis arcu, vel semper justo fermentum vel. Morbi a ipsum facilisis, convallis turpis vitae, hendrerit leo. Cras elementum ornare bibendum. Mauris dignissim lobortis semper. Nullam molestie sed tellus at pellentesque. Sed elit tortor, dignissim at leo dignissim, consequat mollis massa. Vivamus vulputate risus a viverra dapibus. Phasellus feugiat mauris at porta commodo. Etiam interdum eros sed interdum feugiat. Etiam sed tortor hendrerit, rutrum turpis ac, semper risus. In ultricies, ex at interdum blandit, urna urna accumsan enim, eget dictum orci neque et mauris"

let termino = "et";

let posicion = name.indexOf(termino);

if (posicion !== -1)
    console.log("La palabra está en la posición " + posicion);
else
    console.log("No encontré lo que estás buscando");
