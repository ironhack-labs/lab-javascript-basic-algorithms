// Iteration 1: Names and Input
const hacker1="Mario";
console.log("The driver's name is", hacker1)

const hacker2="Mario";
console.log("The navigator's name is", hacker2)



// Iteration 2: Conditionals

let drivernum = hacker1.length;
let navigatornum = hacker2.length;

if(drivernum <navigatornum){
    console.log(`It seems that the navigator has the longest name, it has ${navigatornum} characters`)
}else if (drivernum >navigatornum){
    console.log(`The driver has the longest name, it has ${drivernum} characters.`)
}else if(drivernum == navigatornum){
console.log(`Wow, you both have equally long names, ${drivernum} characters!`)
}


// Iteration 3: Loops
let mayus = hacker1.toUpperCase()
console.log(mayus)
let textocortado = mayus.split('')
console.log(textocortado);
let jointextocortado = textocortado.join(' ')
console.log(jointextocortado)

let navigaotorcortado = hacker2.split('')
console.log(navigaotorcortado)


let revnavigaotorcortado = navigaotorcortado.reverse();
console.log(revnavigaotorcortado)

let joinnavigator= revnavigaotorcortado.join('')
console.log(joinnavigator)


console.log(hacker1[0])
let firsthacker1 = hacker1[0]
let firsthacker2 = hacker2[0]

if (hacker1<hacker2){
    console.log("The driver's name goes first.")
}else if (hacker1>hacker2){
    console.log("Yo, the navigator goes first definitely.");
}else if (hacker1 == hacker2) {
    console.log("What?! You both have the same name?")
}

//BONUSSSS


//BONUS 1
let texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et aliquet velit, quis mattis odio. Aenean facilisis rhoncus est sit amet aliquam. Integer pellentesque ac velit in laoreet. Etiam ut quam turpis. Integer a nisl ante. Cras risus tortor, vehicula a quam non, maximus rhoncus risus. Fusce at tempus ipsum. Donec lectus justo, dictum ac viverra sit amet, tincidunt id eros.Morbi ac auctor augue. Nullam elementum bibendum nisi, in varius odio pulvinar quis. Pellentesque rutrum convallis sapien, sit amet pharetra nunc sagittis at. Quisque congue egestas vehicula. Vivamus pulvinar leo eu dolor dictum sodales. Praesent egestas pretium tellus id dapibus. Pellentesque enim elit, varius sed rutrum a, pharetra venenatis neque. Duis vitae consequat neque, vel vehicula ex. Praesent quis pellentesque tortor. Etiam dignissim vel ligula et laoreet. In egestas ante a nibh lobortis, id pretium tellus ullamcorper. Vivamus vitae fringilla mi, varius iaculis nisl. Nam aliquam dui nec mauris aliquet, et rutrum leo fermentum. Nam diam tellus, finibus quis arcu quis, cursus hendrerit nisl. Pellentesque at nisi sit amet nisi luctus accumsan.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vehicula sed eros ac euismod. Pellentesque facilisis metus vitae mi dignissim tristique. Duis faucibus lorem ut felis ultrices, quis varius massa congue. Suspendisse posuere ullamcorper leo in condimentum. Pellentesque a sem eget risus suscipit dignissim ac sit amet nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at tristique risus. Sed non turpis sagittis dui posuere convallis nec ut metus. Pellentesque elementum nibh quis nisl finibus sodales. Proin sit amet est a ipsum iaculis maximus. Nullam eget pellentesque mi. Nunc quis risus diam. Nunc nibh turpis, efficitur eget arcu eget, sagittis porttitor leo. Donec varius felis nisi, vitae ultrices velit pretium eu. Vivamus tincidunt, nulla sed vulputate vulputate, ligula tortor bibendum elit, non ullamcorper libero enim eu eros";

let textonuevo = texto.split(' ')
let conteo = textonuevo.length
console.log(conteo);


    let count = 0;
    for (let i = 0; i < textonuevo.length; i++) {
      const char1 = textonuevo[i];
      if (char1 == "et" ) {
        count++;
      };
    };
    console.log(count)



//BONUS 2
let phraseToCheck = "stack cats"
let sp = " "
let n = phraseToCheck.replace(sp,'')
console.log(n)

let textCheck = phraseToCheck.split('')
console.log(textCheck);
let revTextCheck = textCheck.reverse()
console.log(revTextCheck);
let jointextCheck = revTextCheck.join('')
console.log(jointextCheck)
let n2 = jointextCheck.replace(sp,'')


if (n === n2){
    console.log("Es un palindromo");
}else{
    console.log("No es un palindromo")
}