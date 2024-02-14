// Iteration 1: Names and Input
const hacker1 = "Jorge";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Chrome";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`)
}

// Iteration 3: Loops

for(let i= 0; i < hacker1.length ; i++){
    console.log(hacker1[i].toUpperCase() + " ");
}

for(let i= hacker1.length; i >= 0 ; i--){
    console.log(hacker1[i]);
}

if(hacker1[0] > hacker2[0]){
    console.log("The driver's name goes first.")
}else if(hacker1[0] > hacker2[0]){
    console.log("Yo, the navigator goes first, definitely.")
}else {
    console.log("What?! You both have the same name?")
}



// Bonus

// bonus 1 

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis turpis ut nulla placerat pharetra. Nullam vestibulum massa quis est faucibus, id lobortis lorem posuere. Nullam leo purus, convallis id ornare in, varius ut nisl. Nunc luctus nibh quis leo laoreet, ut dictum neque tristique. Maecenas ut blandit nunc, quis lacinia quam. Nunc sagittis vulputate enim non porttitor. Sed vel elit eget lacus iaculis faucibus id sit amet leo. Nulla auctor aliquet tortor, bibendum suscipit turpis dapibus ac. Mauris eu est ac diam sollicitudin rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque feugiat metus eu velit condimentum molestie eget eget erat. Nullam fermentum turpis auctor, efficitur mauris vitae, euismod mi. Sed pulvinar, mi molestie dictum bibendum, nunc diam egestas dui, in accumsan sem libero eget neque. Maecenas ultricies suscipit justo, sed pretium lectus pharetra id. Sed suscipit, metus a gravida rutrum, eros erat sollicitudin risus, at blandit odio erat eu nisl. Aenean orci lectus, scelerisque sed turpis vel, consectetur cursus ipsum. Curabitur eget iaculis est, quis aliquam nisl. Nullam tempus felis quis massa porta tempus. Sed ultricies consequat leo, at accumsan ligula hendrerit et. Nullam egestas et magna vel cursus. Aenean non placerat purus. Aenean suscipit magna nec mauris mollis accumsan. Suspendisse potenti. Suspendisse in magna vehicula, blandit leo eget, condimentum purus. Nulla semper turpis non risus laoreet, quis gravida mi posuere. Integer in sodales nisi. Ut feugiat urna sodales nisl scelerisque varius. Donec vehicula nibh sapien, vel hendrerit nisi fermentum sed. Vivamus quis arcu erat. In interdum justo egestas interdum congue. Aliquam erat volutpat. In hac habitasse platea dictumst. In auctor rhoncus dapibus. Morbi vehicula ipsum quam, a euismod tortor finibus et. Mauris vel ultricies massa, eget vestibulum nunc. Maecenas tristique risus odio, id auctor dui semper sit amet.";

const words = longText.split(' ');

console.log(words.length)

const etNumber = longText.split('et');

console.log(etNumber.length)


// bonus 2

const phraseToCheck  = "A man, a plan, a canal, Panama!";


for (let i= 0; i < phraseToCheck.length / 2; i++) {
    
    if(phraseToCheck[i] !== phraseToCheck[phraseToCheck.length -1 - i] ){
        console.log("try a new word")
    }else{
        console.log("it's a palindrom")
    }
}
