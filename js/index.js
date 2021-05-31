// Iteration 1: Names and Input
let hacker1 = "Josue";
console.log("the driver's name is " + hacker1 + ".");
let hacker2 = "Andrew";
console.log("the navigator's name is " + hacker2 + ".");

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
  console.log("The driver has the longest name, it has " + hacker.length + "characters")}
else if (hacker2.length > hacker1.length){
  console.log("It seems that the navigator has the longest name, it has "+ hacker2.length + " characters. ")}
else{
  console.log("Wow, you both have equally long names, "+hacker1.length+"   characters!")  
}
let word = ""
for (i = 0; i < hacker1.length; i++){
  word += hacker1[i].toUpperCase() + " ";}

let word2 = ""
for (i = hacker2.length-1; i >-1; i--){
  word2 += hacker2[i];}

// Iteration 3
if (hacker1 < hacker2){
  console.log("The driver's name goes first")
}
else if (hacker2 < hacker1){
  console.log("Yo, the navigator goes first definitely.")
}
else{
  console.log("what! you both have the same name?")
}

//bonus 1
let paragraph3 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend venenatis enim. Donec in fringilla libero, et aliquam lorem. Curabitur porttitor dui nec nisl aliquam ornare. Phasellus magna metus, fermentum a dui quis, auctor suscipit risus. Cras dictum id augue non consectetur. Phasellus eleifend lacus sed dolor dapibus, ac congue nisl egestas. Nam gravida risus sed mi faucibus rhoncus sit amet ac augue. Sed ultrices libero risus, in tincidunt ex ultrices id. Phasellus lobortis vitae mauris sit amet malesuada. Maecenas pellentesque lorem est, vitae pulvinar erat varius eu.

Duis venenatis justo at dui imperdiet, sed condimentum mi imperdiet. Etiam vehicula nibh sed vestibulum tincidunt. Quisque consectetur velit quis mauris vehicula, eu blandit augue laoreet. Morbi maximus ex sed tristique facilisis. Duis scelerisque nibh enim, at sollicitudin leo pulvinar et. Nulla ultrices volutpat dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce varius ultricies sapien. Nulla mauris magna, condimentum in tempor eget, viverra sit amet massa. Etiam iaculis, massa in laoreet malesuada, lacus arcu condimentum metus, sit amet rutrum ipsum tellus at turpis. Proin vel mi at ipsum elementum laoreet. Maecenas aliquam lobortis lectus a porttitor. Vestibulum quis lacinia quam.

Donec dictum elit nisl, quis ultricies augue tincidunt venenatis. Donec blandit, dolor ornare venenatis aliquam, ligula augue tincidunt justo, posuere semper mi purus eu erat. Sed enim mauris, ultricies a nulla nec, congue vestibulum tellus. Proin efficitur porta arcu sit amet tristique. Donec vel ex quis turpis finibus sollicitudin id a lacus. Nam venenatis augue et dui bibendum, eget gravida velit maximus. Curabitur in elit vitae lectus molestie finibus vitae eu quam. Quisque sit amet maximus ante. Etiam id nisi augue. Etiam maximus turpis id gravida suscipit. Quisque vitae rhoncus nibh, eu interdum nisl. Maecenas tristique arcu at commodo interdum. Vestibulum auctor ipsum at sodales pretium.`


let count = 0;
let count2 = 0;
for (i = 0; i < paragraph3.length; i++){
  if (paragraph3.charAt(i) == " "){
    count += 1;
  }
  if (paragraph3.charAt(i-1) == " " && paragraph3.charAt(i) == "e" && paragraph3.charAt(i+1) == "t" && paragraph3.charAt(i+2) == " "){
    count2 ++;
  }
}
console.log(count);
console.log(count2);

let possiblePalindrome = "No 'x' in Nixon";
let result = ""
let result2 = ""

for (i = 0; i < possiblePalindrome.length; i++){
  if (possiblePalindrome.charAt(i) != " " && possiblePalindrome.charAt(i) != " " && possiblePalindrome.charAt(i) !="," && possiblePalindrome.charAt(i) != "'" && possiblePalindrome.charAt(i) != "!" && possiblePalindrome.charAt(i) != "?"){
    result += possiblePalindrome.charAt(i).toLowerCase();
  }
}
  console.log(result)

for (i = result.length-1; i >-1; i--){
  result2 += result[i];}
console.log(result2)

if (result == result2){
  console.log("yippie")
}


