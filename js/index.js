//Iteration 1: Names and Input
let hacker1 = 'bbbbb'
console.log(`The driver's name is `+hacker1+`.`)
let hacker2 = 'bbbbb'
console.log(`The navigator's name is `+hacker2+`.`)

//Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has `+hacker1.length+` characters.`)
}else if (hacker1.length == hacker2.length){
    console.log(`Wow, you both have equally long names, `+hacker1.length+` characters.`)
}else {
    console.log(`It seems that the navigator has the longest name, it has `+hacker2.length+` characters.`)
}

//Iteration 3: Loops
hacker1InCapitals = hacker1.toUpperCase()
console.log(hacker1InCapitals)
const result = hacker1InCapitals.split('').join(' ')
console.log(result)

hacker2InReverse = hacker2
function reverseString(str){
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join(""); 
    return joinArray;
}
console.log(reverseString(hacker2InReverse))


comepareLetter = hacker1.localeCompare(hacker2);
console.log(comepareLetter);

if(comepareLetter == 1){
    console.log(`Yo, the navigator goes first definitely.`)
}else if(comepareLetter == -1){
    console.log(`The driver's name goes first.`)
}else{
    console.log(`What?! You both have the same name?`)
}

//Bonus
var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget risus massa. Quisque nec orci massa. Nam finibus consequat odio in faucibus. Donec dapibus purus ac molestie varius. Nam nec tincidunt quam. Curabitur hendrerit enim vel venenatis maximus. Suspendisse non est et odio molestie aliquam quis eu lacus. Sed maximus lobortis ex vel ultricies. Ut dapibus, purus quis sodales laoreet, lorem risus ultricies arcu, in convallis nisi lacus in nisl. Quisque dolor nisl, commodo id aliquet id, venenatis ac augue. Curabitur a leo et lectus posuere mollis. Fusce sed dui ex. Morbi at turpis vel augue volutpat sodales vitae non eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean dignissim eu justo nec rhoncus. Donec molestie felis vel tellus aliquam accumsan. Ut vitae nisi iaculis, efficitur justo nec, fringilla orci. Curabitur id erat at dolor dignissim porttitor. Cras at molestie risus. Proin id vehicula neque, eu malesuada justo. Ut fringilla risus nec quam pharetra, vel tincidunt elit pharetra. Duis dapibus sem non rhoncus fermentum. Aenean ac maximus nulla. Fusce euismod nisi a venenatis maximus. Cras bibendum placerat nibh vel scelerisque. Pellentesque at diam eget nibh fermentum volutpat ac sed ipsum. Maecenas pellentesque tortor sit amet lacus auctor, eget gravida neque bibendum. Sed eu nunc in erat imperdiet faucibus sed sed mi. Praesent elit nisi, cursus eu nulla quis, ultrices sodales odio. Mauris tincidunt in eros quis tempus. Etiam enim sem, cursus a fermentum a, mattis eget tortor. Nullam vitae scelerisque nunc. Duis aliquet risus id mauris vestibulum egestas. Etiam faucibus tincidunt dui, at dictum ex sollicitudin vitae.'

console.log(text.length); 



function countWords(text){
    const arr = text.split('');
    return arr.filter(word => word !== '').length;
}

console.log(countWords('et')); 


var phraseToCheck = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget risus massa. Quisque nec orci massa. Nam finibus consequat odio in faucibus. Donec dapibus purus ac molestie varius. Nam nec tincidunt quam. Curabitur hendrerit enim vel venenatis maximus. Suspendisse non est et odio molestie aliquam quis eu lacus. Sed maximus lobortis ex vel ultricies. Ut dapibus, purus quis sodales laoreet, lorem risus ultricies arcu, in convallis nisi lacus in nisl. Quisque dolor nisl, commodo id aliquet id, venenatis ac augue. Curabitur a leo et lectus posuere mollis. Fusce sed dui ex. Morbi at turpis vel augue volutpat sodales vitae non eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean dignissim eu justo nec rhoncus. Donec molestie felis vel tellus aliquam accumsan. Ut vitae nisi iaculis, efficitur justo nec, fringilla orci. Curabitur id erat at dolor dignissim porttitor. Cras at molestie risus. Proin id vehicula neque, eu malesuada justo. Ut fringilla risus nec quam pharetra, vel tincidunt elit pharetra. Duis dapibus sem non rhoncus fermentum. Aenean ac maximus nulla. Fusce euismod nisi a venenatis maximus. Cras bibendum placerat nibh vel scelerisque. Pellentesque at diam eget nibh fermentum volutpat ac sed ipsum. Maecenas pellentesque tortor sit amet lacus auctor, eget gravida neque bibendum. Sed eu nunc in erat imperdiet faucibus sed sed mi. Praesent elit nisi, cursus eu nulla quis, ultrices sodales odio. Mauris tincidunt in eros quis tempus. Etiam enim sem, cursus a fermentum a, mattis eget tortor. Nullam vitae scelerisque nunc. Duis aliquet risus id mauris vestibulum egestas. Etiam faucibus tincidunt dui, at dictum ex sollicitudin vitae.'
A = phraseToCheck.search(/A man, a plan, a canal, Panama!/i);
if(i = -1){
    console.log(`A man, a plan, a canal, Panama! Doesnt exist.`)
}else{
    console.log(`A man, a plan, a canal, Panama! Does exist.`)
}

B = phraseToCheck.search(/Amor, Roma/i);
if(i = -1){
    console.log(`Amor, Roma Doesnt exist.`)
}else{
    console.log(`Amor, Roma Does exist.`)
}

C = phraseToCheck.search(/stack cats/i);
if(i = -1){
    console.log(`stack cats Doesnt exist.`)
}else{
    console.log(`stack cats Does exist.`)
}


