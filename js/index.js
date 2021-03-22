// Iteration 1: Names and Input
let hacker1 = 'Javi';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Carlos';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has he longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
hacker1 = hacker1.toUpperCase();
let acum = '';
for(i = 0; i < hacker1.length; i++){
    acum += (`${hacker1[i]} `);
};
console.log(acum)

let acum2 = ''
for(var i = hacker2.length - 1; i >= 0; i--){
    acum2 += hacker2[i];
};
console.log(acum2);

if(hacker1 > hacker2){
    console.log("The driver's name goes first.")
} else if(hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

// Bonus

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta malesuada ipsum, sodales vehicula risus consectetur in. Nulla turpis metus, luctus et scelerisque vel, ultrices rhoncus nisi. Nam imperdiet iaculis sapien, eu rhoncus nisl faucibus sit amet. Donec odio neque, consectetur sit amet nulla at, lobortis mollis sem. Ut vitae commodo elit. Phasellus eu euismod turpis. Nunc maximus sapien sapien, faucibus ultricies massa maximus sit amet. Fusce fermentum lorem dolor, at tincidunt enim feugiat eu. Ut at quam nibh. Proin venenatis ex consequat enim egestas lobortis. Vivamus porta convallis odio at sagittis. Ut aliquam, felis vel malesuada finibus, mauris tortor pretium enim, eu fermentum ligula diam porttitor leo. Etiam nec urna vel lorem egestas lobortis a non nisl. Fusce tempus, massa sit amet vulputate cursus, orci ligula egestas neque, id convallis justo ex sed libero. Nunc aliquet eget lacus a viverra. Proin lacus tortor, imperdiet eget sapien scelerisque, venenatis consequat arcu. Nam sem leo, vehicula a bibendum vel, tincidunt fermentum eros. Pellentesque lectus diam, tristique a mattis sed, viverra id neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas dignissim nisl in lorem finibus, eu condimentum massa gravida. Aliquam at tempor odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce efficitur mattis tortor, ut ultrices leo cursus in."

console.log(lorem.substring(0, Infinity).length)

let cuenta = '';
posicion = lorem.indexOf("et");
while (posicion != -1){
    cuenta++;
    posicion = lorem.indexOf("et", posicion+1);
    console.log(cuenta);
}

// Bonus 2

let phraseToCheck = 'Amor, Roma';

let l = phraseToCheck.length;

for (let i=0; i < l/2; i++){
    if (phraseToCheck.indexOf(i) !== phraseToCheck.indexOf(l - 1 - i)) {
        console.log(false);
    } else {
        console.log(true)
    }
};
