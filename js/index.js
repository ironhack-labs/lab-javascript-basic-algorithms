// Iteration 1: Names and Input
var hacker1 = "Matt"
var hacker2 = "Mattew"
console.log(`The driver's name is ${hacker1}`);
console.log(`The driver's name is ${hacker2}`);
// Iteration 2: Conditionals
const hacker1Length = hacker1.length
const hacker2Length = hacker2.length
if (hacker1Length > hacker2Length){
    console.log(`The driver has the longest name, it has ${hacker1Length} characters.`)
}
else if( hacker2Length > hacker1Length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
}
// Iteration 3: Loops
let nameUppercase = hacker1.toUpperCase();
let saludation = nameUppercase.split('').join(' ');
console.log(saludation);
let nameBackwards = []
for (let index = hacker2.length -1; index >= 0 ; index--) {
    nameBackwards.push (hacker2[index]);
    
}
console.log(nameBackwards.join(''));
for (let index = 0; index < hacker2.length; index++) {
    if(hacker2[index] < hacker1[index]){
        console.log("The driver's name goes first.");
        break;
    }
    
    else if (hacker2[index] > hacker1[index]){
        console.log("Yo, the navigator goes first definitely.")
        break;
    }
    else if(hacker1 === hacker2){
        console.log("What?! You both have the same name?")
        break;
    }  
}
// Bonus
// Bonus 1
let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur eros in nunc ultricies venenatis ac sit amet ipsum. In posuere nisi eu arcu placerat interdum. Phasellus et eros molestie, dapibus libero non, pretium massa. In nec leo a lectus vulputate posuere vitae non nisi. Vivamus massa elit, sagittis at maximus at, consequat ut mi. Mauris congue orci vitae eros commodo, non hendrerit lorem venenatis. In pharetra luctus mauris, id efficitur erat rutrum at. Etiam mattis purus id mauris viverra tincidunt. Nulla pellentesque, tellus eget aliquam convallis, lectus magna tristique nisl, nec varius libero risus ut ipsum. Praesent a libero augue. Sed libero mauris, rhoncus non efficitur nec, scelerisque eu ante. Duis tempor lectus sagittis blandit aliquam.
Aliquam tincidunt id nulla eget laoreet. Suspendisse ut turpis convallis, pellentesque nisi ac, accumsan ex. Vivamus tempor accumsan lorem ut viverra. Phasellus nec risus sollicitudin, rutrum risus vel, rutrum justo. In et scelerisque risus. Etiam finibus neque non imperdiet rhoncus. Duis auctor elementum est et volutpat. In tortor tortor, cursus non sapien iaculis, bibendum malesuada metus. Nam auctor neque tincidunt, bibendum sapien non, suscipit erat. Donec vitae accumsan ligula. Nunc tempor diam sed lacinia luctus. Sed a interdum erat. Cras vel tincidunt ante. Nullam nec pretium dolor. Cras pretium nibh arcu, eu vehicula est sollicitudin et.
Duis mattis pulvinar metus. Vivamus varius et magna non elementum. Quisque consectetur ac nisl vel consectetur. Nulla et faucibus purus. Sed posuere leo eget enim volutpat malesuada. Sed molestie commodo diam nec convallis. Fusce mattis molestie urna, a tincidunt ex posuere ornare. Nullam a ornare tellus. Sed eget nibh ante. Integer diam metus, viverra vitae accumsan ac, dignissim id dolor. Maecenas metus neque, condimentum in leo tristique, placerat aliquet magna.
Aenean non finibus arcu. Suspendisse imperdiet, massa et lacinia maximus, dui lectus rhoncus metus, aliquam porta ex nisi nec nisi. In nec odio nec ligula posuere auctor. Ut sodales suscipit scelerisque. Etiam ante enim, sagittis at semper in, vehicula non odio. Aliquam pharetra, ex at luctus auctor, sapien purus tristique est, vel finibus enim arcu at ex. Quisque ultricies fringilla risus, eu bibendum dolor consectetur vel. Aliquam congue dignissim ex a vulputate.
Suspendisse nisl libero, feugiat nec enim nec, hendrerit posuere libero. Morbi vulputate arcu sem, at vulputate quam auctor eget. Sed congue felis urna, auctor rutrum massa dignissim ac. Praesent malesuada neque vel neque faucibus, ut egestas dui placerat. Pellentesque quis rhoncus arcu. Sed ultricies dapibus felis, vitae consectetur mauris euismod et. Cras dictum suscipit turpis, at vehicula enim ornare id. Nulla a semper arcu. Proin auctor, ex mollis semper porttitor, tellus nisl luctus odio, ut venenatis ex erat a nisi. Aenean ultricies semper imperdiet.`
let countingWords = paragraph.split(" ").length;
console.log(countingWords);
let eachWord = paragraph.split(" ");
let count=0;
for (let i = 0; i < eachWord.length ; i++) {
    if (eachWord[i] === "et" || eachWord[i] === "et." || eachWord[i] === "et,") {
        count += 1;
    }  
}
console.log (count);
// Bonus 2
