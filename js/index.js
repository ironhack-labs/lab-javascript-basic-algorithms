// Iteration 1: Names and Input
var hacker1 = "Teresa";
console.log("The driver's name is",hacker1);
var hacker2 = "Pepita";
console.log("The navigator's name is",hacker2);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has", hacker1.length,"characters.");
    } else if (hacker1.length<hacker2.length){
    console.log("It seems that the navigator has the longest name, it has",hacker2.length, "characters.");
    } else {
    console.log("Wow, you both have equally long names,",hacker1.length,"characters!");
    }
    

// Iteration 3: Loops
//3.1
console.log(hacker1.toUpperCase().split("").join(" "))

//3.2
var aux = [];
for (let i=0; i<hacker2.length; i++) {
aux[i] = hacker2[hacker2.length-i-1];
}
console.log(aux.join(""))

//3.3
if (hacker1.localeCompare(hacker2) == -1) {
    console.log("The driver's name goes first.");
    } else if (hacker2.localeCompare(hacker1) == -1) {
    console.log("Yo, the navigator goes first definitely.");
    } else {
    console.log("What?! You both have the same name?")
    }


//Bonus 1
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex est, congue a pretium id, fermentum id justo. Duis consectetur tempor diam, nec ornare dolor commodo id. Pellentesque quis purus lacus. Donec rutrum mauris arcu, sed tincidunt dui dignissim nec. Duis hendrerit nibh vel purus consectetur, eu efficitur metus aliquet. Cras rutrum malesuada mauris sit amet tincidunt. Aliquam vestibulum dignissim eros, vitae aliquet quam condimentum non. Integer hendrerit, tortor et gravida tempor, erat nisi congue diam, sollicitudin efficitur lacus lacus eget dui. Donec vel ullamcorper mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur pellentesque varius elementum.\nQuisque ut magna sed turpis eleifend placerat. Integer tempus auctor turpis, sit amet feugiat odio volutpat ac. Donec vitae ipsum dui. Proin eu tortor eu justo finibus imperdiet. Integer porta turpis et lectus maximus gravida. Aliquam mollis ut nisi vel lacinia. Ut sodales lacus eu metus posuere, nec feugiat enim semper. Fusce ac magna in nulla cursus malesuada. Fusce fringilla ac justo at efficitur. Phasellus sollicitudin lorem non est vulputate laoreet.\nNunc ut ex pharetra velit elementum sodales. Morbi vehicula sit amet augue vitae lobortis. Nullam vestibulum rutrum cursus. Mauris non sapien lobortis, vestibulum massa et, semper orci. Etiam ac enim tellus. Cras nec odio nulla. Phasellus ultricies sollicitudin ligula eu posuere. Morbi cursus erat ac ultricies efficitur. Phasellus tempor imperdiet tincidunt. Phasellus condimentum ante nec quam fringilla mollis. Sed elementum mauris erat, nec imperdiet massa consectetur ut. Etiam blandit placerat nibh eu tincidunt. Donec elementum ante in nulla fringilla vulputate. Aenean vel nibh consequat, fringilla mauris dictum, venenatis massa. Quisque dignissim hendrerit imperdiet. Ut ultrices pulvinar nunc nec faucibus."

var loremWords = lorem.split(" ");
var counter = 0;
for (let i = 0; i<loremWords.length; i++){
if(loremWords[i] == "et") {
    counter++;
}
}
console.log("et appears",counter,"times")