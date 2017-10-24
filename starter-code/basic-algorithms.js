// Names and Input
var hacker1 = "Carlos";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What is the navigator's name?", "");
console.log("The navigator's name is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

// Loops
var capitalized = "";
for (var i = 0; i < hacker1.length; i++) {
    capitalized += hacker1[i].toUpperCase();
    if (i < hacker1.length - 1) {
        capitalized += " ";
    }
    
}
console.log(capitalized);

var reversed = "";
for (var i = hacker2.length - 1; i >= 0; i--) {
    reversed += hacker2[i];
}
console.log(reversed);

var first = "";
var minSize = Math.min(hacker1.length, hacker2.length);
for (var i = 0; i < minSize; i++) {
    if (hacker1[i] < hacker2[i]) {
        first = hacker1;
        break;
    } else if (hacker1[i] > hacker2[i]) {
        first = hacker2;
        break;
    } else if (i == minSize - 1) {
        first = false;
    }
}

switch (first) {
    case hacker1:
        console.log("The driver's name goes first");
        break;
    case hacker2:
        console.log("Yo, the navigator goes first definitely");
        break;
    default:
        console.log("What?! You both got the same name?");
}

// Bonus
var word = prompt("Enter a message for palindrome evaluation!", "");
word = word.replace(/[\s,.!¡¿?:;']/g, '').toLowerCase();
console.log(word);
isPalindrome = true;
var i = 0;
while (isPalindrome && i < Math.floor(word.length / 2)) {
    isPalindrome = word[i] === word[word.length - i - 1];
    i++;
}
if (isPalindrome) {
    console.log("Palindrome!");
} else {
    console.log("nope :(");
}

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum ipsum nibh, tincidunt non consectetur quis, elementum sed nisl.Suspendisse aliquet nibh sed tellus gravida luctus.Nam in elementum nisl.Maecenas posuere mauris eget urna blandit tempor.Integer aliquam eros eu est scelerisque, nec vehicula ipsum dictum.Nunc id ante in risus molestie pellentesque.Sed quis egestas nisl.Fusce mattis lobortis eros, non placerat erat feugiat et.Cras dignissim dolor libero, ut placerat sapien auctor ac. Maecenas vel augue purus.Etiam posuere ultricies turpis eget commodo.Sed vulputate auctor eros, in dignissim nisl.Maecenas scelerisque, metus id auctor ornare, lorem nisl egestas nibh, sed porttitor elit mi sed sem.Mauris quis porttitor enim, et lobortis nisl.Nullam ac semper nunc.Ut accumsan facilisis neque mollis sollicitudin.Pellentesque sollicitudin augue non vulputate laoreet.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vivamus quis fermentum dolor.Fusce quis pulvinar neque. Nulla quis pulvinar metus, a tristique ligula.Maecenas elementum at eros vel dignissim.Fusce a est augue.Donec tempor accumsan ipsum a pulvinar.Cras pharetra, quam ac euismod ultrices, urna nibh bibendum sapien, a mattis ex metus et magna.Integer sed commodo justo.Donec at tellus tempor, suscipit enim a, placerat tellus.Quisque sed nibh imperdiet, hendrerit turpis ac, fermentum sapien.Quisque luctus mi at lorem placerat eleifend.Nam fringilla sed sapien eget tincidunt.Sed rhoncus tortor non viverra dignissim.Morbi interdum massa eu nulla fermentum scelerisque.Quisque sit amet lorem elementum neque commodo sagittis.Aliquam vel faucibus eros.";
console.log("Words: " + text.split(' ').length);
console.log("Et matchs: " + (text.match(/et/g) || []).length);
