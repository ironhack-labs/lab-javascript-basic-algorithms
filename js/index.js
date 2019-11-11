// Iteration 1: Names and Input
let hacker1 = "Iván";
let hacker2 = "Alfredo";

console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has", hacker1.length, "characters.");
} else if (hacker2.length > hacker1.length) {
  console.log("It seems that the navigator has the longest name, it has", hacker2.length ,"characters.");
} else {
  console.log("Wow, you both have equally long names,", hacker1.length ,"characters!");
}

// Iteration 3: Loops
//3.1
hacker1 = "Iván";
hacker2 = "Alfredo";

hacker1 = hacker1.toUpperCase();
let newHacker1 = hacker1[0];
for (let i = 1; i < hacker1.length; i++) {
  newHacker1 += " " + hacker1[i];
};
console.log(newHacker1);

//Other solution for 3.1: Join
hacker1 = "Iván";
hacker2 = "Alfredo";

hacker1 = hacker1.toUpperCase();
let arrayHacker1 = Array.from(hacker1);
arrayHacker1 = arrayHacker1.join(" ");
console.log(arrayHacker1);

//3.2 
let hacker2Rev = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
 hacker2Rev += hacker2[i];
}
console.log(hacker2Rev)

//3.3
hacker1 = "Iván";
hacker2 = "Alfredo";

let contador;

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else {
  if (hacker1.length >= hacker2.length) {
  contador = hacker1.length;
  if (hacker1.length > hacker2.length) {
    hacker2 = hacker2 + " ";
  }
} else {
  contador = hacker2.length;
  hacker1 = hacker1 + " ";
}
  for (let i = 0; i < contador; i++) {
  
    if (hacker1[i] != hacker2[i]) {
      if (hacker1.charCodeAt(i) < hacker2.charCodeAt(i)) {
        console.log("The driver's name goes first.");
      } else {
        console.log("Yo, the navigator goes first definitely.");
      };
      break;
  }
}
}

//Bonus 1
let string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel quam leo. Fusce pellentesque finibus nunc in accumsan. Phasellus venenatis, elit ut fermentum ultricies, tellus enim aliquet arcu, id pellentesque justo orci ut nisi. Morbi commodo tortor et tellus vulputate volutpat. Morbi euismod orci purus, ac pellentesque elit vestibulum at. Nam eu urna nunc. Duis eu fringilla sapien. Quisque sed leo quis elit tincidunt ornare. Aenean felis nulla, dictum at nibh vitae, fringilla porttitor nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut non convallis lectus. Morbi placerat maximus porttitor. Nam pellentesque lectus vulputate suscipit aliquet. Donec in condimentum orci, a elementum nisl. Sed at libero ante. In tincidunt dui sem, et pellentesque quam commodo non.\nSuspendisse eget tempor quam, in consectetur arcu. Fusce imperdiet dignissim nunc. Suspendisse varius quis nisl congue consectetur. Nam sit amet nisl tempus, dignissim augue eget, hendrerit tortor. Etiam nec pharetra justo. Nulla rutrum laoreet augue a iaculis. Cras tristique velit quis laoreet blandit. Proin laoreet fringilla ante, a dapibus nibh vehicula id. Aliquam sodales justo at commodo commodo. Etiam suscipit faucibus imperdiet. Mauris tincidunt lorem eu felis vulputate, eget feugiat nibh rutrum. Nulla facilisi. Curabitur faucibus urna sit amet tincidunt porta. Nam nec risus sed tellus efficitur viverra nec quis enim. Aenean tempus, erat at faucibus dictum, dui tellus tempus ipsum, nec scelerisque orci dolor ut nisi. Aliquam ultrices, sapien vel porttitor ullamcorper, sapien libero laoreet ex, sit amet varius lectus est et mauris.\nNam rutrum arcu odio, ut aliquet odio volutpat eget. In hac habitasse platea dictumst. Duis feugiat lacinia ultricies. Mauris malesuada convallis augue quis tempor. Nullam nisl erat, euismod non sapien sed, vestibulum malesuada diam. Donec non porta purus. Mauris ut blandit dolor. Suspendisse potenti. Vivamus tincidunt ultricies ex, id gravida nunc gravida ut. Nulla facilisi."

let palabras = 0;
if (string != "" || string != " ") {
  palabras = 1;
    for (let i = 0; i < string.length; i++) {
    if (string[i] === " " || string[i] === "\n") {
      palabras++;
    }
  }
}

// Bonus 2 
let string = window.prompt("Escribe un texto");
string = string.toLowerCase();

let newString = "";
for (let i = string.length - 1; i >= 0; i--) {
  newString += string[i]
}

if (string === newString) {
  window.alert("It's a Palindrome!")
} else {
  window.alert("It's not a Palindrome...")
}


