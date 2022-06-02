// Iteration 1: Names and Input
const hacker1 = "Carlitos";
console.log(`the driver name is ${hacker1}`);
const hacker2 = "Pepe";
console.log(`the navigator name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`the driver has the longest name, it has ${hacker1.length} characters.`)

}else if(hacker1.length<hacker2.length){
    console.log(`it seems that the navegator has the longest name it has ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length}`)
}

// Iteration 3: LoopsPalinrome){

let message = "";
for(let  i = 0; i<hacker1.length;i++){
    message += hacker1[i].toUpperCase();
    message += " ";

}
console.log(message);

let message2 = "";

for(let i = hacker2.length-1;i >= 0;i--){
    message2 += hacker2[i];
}
console.log(message2);

if(hacker1 > hacker2){
    console.log("The driver's name goes first.")
} else if (hacker1 < hacker2){
    console.log("Yo, the navigator goes first definitely.")
}else{
    console.log("What ? !You both have the same name ?")
}
let words = 0;
//Bonus !!
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus nisl, imperdiet non ligula at, luctus pellentesque augue. Nullam feugiat faucibus purus et elementum. Sed pellentesque sem eleifend, gravida mauris sit amet, posuere justo. Curabitur non imperdiet mauris, ut iaculis neque. Suspendisse id dictum felis. Vestibulum ut commodo est, a egestas lorem. Sed sit amet justo ac lacus sollicitudin suscipit sit amet sit amet magna. Nunc non ligula varius, luctus neque ac, lacinia ligula.
Etiam at eleifend lacus, non interdum risus. Donec volutpat, erat nec fringilla lobortis, dolor neque fermentum ante, ac efficitur diam nibh non metus. Donec nisi velit, sagittis vel tellus sit amet, efficitur vestibulum sem. Suspendisse potenti. Morbi eget metus vitae nisl tempor consectetur nec at quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus porttitor eget elit sed rutrum. Nunc semper malesuada nibh ac feugiat. Duis pellentesque vehicula magna vel mattis. Quisque ornare leo sem, eu varius odio aliquam id. Nunc ac mollis purus. Aliquam erat volutpat. Vivamus vitae aliquet arcu. Sed imperdiet malesuada mi, in accumsan sapien pretium aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
Vivamus eget urna et odio condimentum facilisis vel quis odio. Quisque mollis efficitur egestas. Nam volutpat mauris justo, eu ullamcorper massa ultrices eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus vitae suscipit mi. Vivamus tempus augue in justo interdum fringilla. Proin at ultricies enim. Maecenas et convallis justo, ac accumsan massa. Duis fermentum enim non ex placerat fermentum. `

for(let i = 0; i<lorem.length;i++){
    if(lorem[i]==" "){
        words++;
    }
}
console.log(words);

let Net = 0;
for (let i = 0; i < lorem.length; i++) {
    if (lorem.substring(i,i+4) == " et ") {
        Net++;
    }
}

console.log(Net);

//Bonus2

const phraseToCheck = "Was, it a car, or a cat I saw?";

let newPhrase = "";
for(let i = 0; i< phraseToCheck.length; i++){
    if (!(phraseToCheck[i] == ',' || phraseToCheck[i] == " " || phraseToCheck[i] == "?" || phraseToCheck[i] == "'")){
        newPhrase += phraseToCheck[i].toLowerCase();
    }
}
console.log(newPhrase)

let isPalinrome = true;

for (let i = 0, j = newPhrase.length - 1; i<newPhrase.length/2;i++,j--){
    if(newPhrase[i] !== newPhrase[j] ){
        isPalinrome=false;
        break;
    }
}

if(isPalinrome){
    console.log("Es palindromo")
}else{
    console.log("No es palindromo")
}