// Names and Input
var hacker1 = "Daring Dharma";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("username: ");
console.log("The navigator's name is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

// we'll store result
var result = "";

for (var i = 0; i < hacker1.length; i++) {
  result += hacker1[i].toUpperCase() + " ";
}

console.log(result);

var result2 = "";

for (var j = hacker2.length - 1; j >= 0; j--) {
  result2 += hacker2[j];
}

console.log(result2);



//lexicographic order
if(hacker1 < hacker2){
  console.log("The driver's name goes first.");
}
else if (hacker2 < hacker1){
  console.log("Yo, the navigator goes first definetly.");
}
else {
  console.log("What?! You both got the same name?");
}

var newString = prompt('New string please: ');


// is palindrome?
console.log(newString === newString.split('').reverse().join(''));


// Lorem ipsum generator

var para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam ante nec placerat vehicula. Nulla risus dolor, efficitur viverra mattis nec, tincidunt ut lacus. Vivamus non fermentum odio, quis placerat lorem. Phasellus egestas lacus quis arcu hendrerit, quis porta libero ullamcorper. Nullam ullamcorper molestie enim ac pellentesque. Donec nec nibh ut dui aliquam vulputate sed non ipsum. Quisque tristique libero eu enim lobortis convallis. Phasellus sed felis arcu. Aenean et urna porta, fermentum metus ac, laoreet leo. Suspendisse nec scelerisque arcu, ut fringilla tellus. Curabitur ut libero aliquet ipsum sodales ornare. Sed a mi vitae sapien viverra molestie. Suspendisse elit diam, consectetur eu leo sed, maximus eleifend lectus. \n Mauris pretium risus ut pellentesque mollis. Donec blandit sit amet eros nec venenatis. Nunc quis sem eu est faucibus volutpat non vitae nisl. Vivamus vehicula, tellus id gravida vulputate, sapien nunc finibus dui, cursus eleifend odio diam ac lacus. Sed ut sollicitudin enim. Quisque luctus tristique malesuada. Vestibulum egestas felis non nulla pulvinar consequat. Nunc euismod eget ipsum vitae porta. Vivamus faucibus pharetra justo ac elementum. Vivamus pellentesque congue quam eu suscipit. Mauris pretium nunc eget urna dictum imperdiet. Phasellus vulputate viverra nisl, nec dictum nisl tristique vel. Fusce dapibus maximus ultrices. Quisque vel velit eu lorem pellentesque tempus. Nunc rutrum, eros id dictum consequat, mi urna efficitur nisl, non finibus est enim nec metus.\n Proin eget est a risus elementum sollicitudin. Vivamus accumsan libero id dapibus lacinia. Duis tristique hendrerit orci, vel suscipit diam blandit a. Nullam et lorem ornare, feugiat lorem et, egestas tellus. Nulla facilisi. Fusce felis odio, efficitur vel ipsum a, tempus vestibulum nulla. Etiam ultrices, nulla quis tempus tempor, augue quam tempor neque, sed sodales lorem ante sit amet felis." ;

// count of words
console.log(para.split(' ').length);

// count of et
console.log(para.match(/et/g).length);
