// Iteration 1: Names and Input

const hacker1 = "Jeroen";
console.log(`The driver's name is ${hacker1}.`)

const hacker2 = "Aybike";
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

const driverLength = hacker1.length;
const naviLength = hacker2.length;
console.log(driverLength)
console.log(naviLength)

if ( driverLength > naviLength) {
    console.log(`The driver has the longest name,it has 6 charachters.`)
}
else if ( driverLength < naviLength) {
    console.log(`It seems that the navigator has the longest name, it has 6 characters.`)
}
else{
    console.log(`Wow, you both have equally long names, 6 characters.`)
}

// Iteration 3: Loops

let driver = "";
for ( let i = 0; i < driverLength; i++) {
    driver +=`${hacker1[i].toUpperCase()} `
}
console.log(driver)

let navi = "";
for (let i = naviLength - 1; i >= 0; i--) {
    navi += hacker2[i]
}
console.log(navi)


if ("A" < "J") {
    console.log("The driver's name goes first.");
} else if ("A" > "J") {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

//bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a aliquet lorem. Cras imperdiet sollicitudin nibh a vulputate. Praesent ultricies turpis vitae tortor vehicula, id semper lorem aliquam. Curabitur eget massa pulvinar, laoreet purus sed, volutpat neque. Nunc eu nulla vitae ipsum aliquam placerat. Integer volutpat pharetra bibendum. In hac habitasse platea dictumst. Nunc pretium enim sit amet diam commodo vulputate. Nulla facilisi. Nam in elit quis erat molestie dictum. Fusce dapibus massa a posuere blandit. Etiam dictum felis ex, sit amet ullamcorper dui sodales in. Curabitur auctor euismod urna in tempor. Mauris non massa sit amet felis efficitur aliquam nec ac justo. Praesent pulvinar nisl eu pharetra semper. Nulla sed pretium nibh, ut cursus ligula. Nam nec urna sit amet nunc aliquam pharetra. Maecenas ullamcorper arcu et suscipit blandit. Suspendisse urna velit, aliquam nec sem vitae, ullamcorper efficitur massa. Ut dui purus, pharetra tempus dui quis, facilisis mollis massa. Cras vitae luctus ex. Sed sed dolor sed orci fringilla sagittis ac quis odio. Phasellus eu gravida orci, eu posuere justo.Aenean ornare, neque nec elementum condimentum, neque sem accumsan erat, ut sagittis dui nisi id mauris. Suspendisse laoreet nisl vel ipsum fermentum gravida. Maecenas lacinia diam id dui congue elementum vitae et tortor. Quisque felis est, fringilla sit amet nisl eu, euismod dictum erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eleifend faucibus lorem. Donec et fermentum lacus, vel sodales ligula. Quisque egestas, ligula eget rhoncus lacinia, neque libero bibendum elit, in laoreet sapien tortor at ex."

let wordsAmount = longText.split(' ');

console.log(wordsAmount)

let countEt = 0;

for (let i = 0; i < wordsAmount.length; i++) {

    if (wordsAmount[i] === 'et') {
        countEt++
    }
}

console.log(countEt);