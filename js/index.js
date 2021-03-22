//Iteration 1: Names and Input


var hacker1 = "Pedro";
console.log(hacker1) ;


console.log(`The driver's name is ${hacker1}`);

var hacker2 = "Luis";
console.log(hacker2) ;

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

var hacker1L = (hacker1.length)
var hacker2L = (hacker2.length)

console.log(hacker1L)
console.log(hacker2L)


if(hacker1L > hacker2L) {

console.log(`The driver has the longest name, it has ${hacker1L} characters`);
}


console.log(hacker1L)


// Iteration 3: Loops


for (const value of hacker1) {
  console.log(value);
}
console.log(hacker1.toUpperCase().split(""));


for (const value of hacker2) {
  console.log(value);
}
console.log(hacker2.split("").reverse());



users = [hacker1, hacker2];
users.sort(function (a, b) {
  if (a > b) {
    console.log("The driver's name goes first")
    }
else{
console.log("Yo, the navigator goes first definitely")
    }
}
)
console.log(users);


// Bonus 1:


let string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus ligula eget ante facilisis tincidunt a in lectus. Vestibulum mattis ultricies enim, eu posuere nulla blandit vel. Curabitur id ullamcorper justo. Morbi varius eros a dolor consequat tempor. Curabitur ac molestie lacus. Praesent euismod, elit nec ullamcorper finibus, nisl dolor consequat justo, sit amet vulputate lorem arcu nec ante. Maecenas lacinia turpis quis diam sodales, lobortis iaculis metus rutrum. Vivamus urna augue, mattis nec congue sit amet, aliquam et turpis. Morbi accumsan nunc lacus, eu lobortis quam porta ut. Ut imperdiet lacus eu lacus auctor, sed dictum lacus ullamcorper. Vestibulum fermentum dapibus enim vel ornare. Sed rutrum condimentum porta. Duis non nulla odio. Fusce non tellus vitae dui fermentum pulvinar vitae eu mi. Nam viverra luctus felis vitae dignissim. Aenean et felis nec ex scelerisque malesuada. Integer lobortis placerat nibh ac consequat. Aenean rhoncus rutrum vulputate. Curabitur ligula lorem, placerat eu viverra id, euismod eu ante. Aliquam vehicula consequat blandit. Mauris vulputate est sed ultrices gravida. Morbi sagittis augue in tincidunt suscipit. Suspendisse mollis enim libero, ac fermentum sem mollis vitae. Cras arcu risus, dignissim nec massa a, dignissim vulputate nulla. Mauris blandit facilisis lorem, vel pellentesque felis placerat in. Vivamus ornare felis ac eros imperdiet sollicitudin. Vestibulum congue tortor eget sapien accumsan laoreet at nec est. Duis lorem eros, condimentum at dolor et, cursus eleifend diam. Integer ac lorem elementum, tincidunt velit quis, tristique neque. Maecenas non elementum leo. Praesent finibus, orci at pulvinar efficitur, lacus leo elementum tellus, eu lacinia magna lorem nec diam. Fusce pulvinar lorem sit amet odio auctor tincidunt. Curabitur commodo vestibulum velit. Aliquam erat volutpat. Duis non libero eget nulla tempor rutrum. Etiam non tempor mauris, sed ultrices nunc.'

console.log(string.split(" ").length);



console.log(string.split("et").length );

//Bonus 2:

var phraseToCheck 