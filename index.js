console.log("I'm ready!");

let hacker1 = "Adam";
console.log(`"The drivers name is ${hacker1}`);

let hacker2 = "Gustavo";
console.log(`"The navigators name is ${hacker2}`);

let hacker3 = "Delvis";

if ((hacker1.length) > (hacker2.length)){
  console.log(`"The driver has the longest name it has" ${hacker1.length}`);
} else if ((hacker1.length) < (hacker2.length)){
console.log(`The navigator has the longest name it has ${hacker2.length}` + " characters");

} else {
  console.log("Wow you both have equally long names!")
}

hacker1.split('').join(' ').toUpperCase(); 

reverse(hacker1);

function reverse(str) {
return str.split("").reverse().join("");
}

if (hacker1.localeCompare(hacker2) === -1) console.log("The driver's name goes first");
else if (hacker1.localeCompare(hacker2) === 1) console.log("Yo, the navigator goes first definitely.")
else console.log("What?! You both got the same name?")


let bonusstring = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere quam sed ornare mattis. Pellentesque maximus eros semper aliquet rhoncus. Ut ac molestie enim. Suspendisse dictum, mi non mattis aliquet, urna ipsum auctor metus, vehicula finibus quam turpis sit amet lacus. Vivamus lacinia tortor odio, at scelerisque sapien scelerisque at. Nunc id elit a eros elementum commodo porttitor ut enim. Praesent at ultrices orci. Integer sagittis odio at libero interdum, sit amet pellentesque turpis scelerisque.

Suspendisse vitae ante quis nunc ullamcorper faucibus. Quisque sed purus sollicitudin arcu congue aliquam. Pellentesque sollicitudin sapien non nibh vehicula, ac faucibus orci lacinia. Mauris risus arcu, efficitur ut lacus eget, accumsan facilisis ligula. Vivamus nec porttitor lorem. Integer semper nisi non elit commodo, non sollicitudin dolor volutpat. Vivamus mollis ex eu facilisis feugiat. Nulla facilisi. Nam sapien ipsum, ultrices id sodales ac, porta ac lectus. Nulla et nulla iaculis, efficitur diam ac, eleifend libero.

Mauris mattis ligula euismod, rutrum ipsum eget, mattis nulla. Praesent nec augue eget libero eleifend mattis. Suspendisse faucibus arcu ut ligula tempor volutpat. Pellentesque nec molestie turpis. Donec mollis ex in magna ultrices, et placerat mi auctor. Praesent eu arcu vel ipsum pharetra euismod. Donec augue est, blandit sed pharetra sed, laoreet nec augue. Sed ultricies, ante in tempor ultrices, neque felis convallis erat, eget convallis orci elit in sem. Nulla blandit augue eros, quis egestas elit commodo interdum. Donec imperdiet imperdiet lectus, ac scelerisque odio semper eget. Donec vulputate tellus nec tincidunt pharetra. Aliquam accumsan tincidunt mi, in tristique velit egestas id. Nullam in magna urna. Maecenas tincidunt quam non lorem rhoncus vulputate.`

console.log(bonusstring.split(' '))

let newbonus = bonusstring.split(' ')
console.log(newbonus.length)

let foundEt = 0;
for (let i = 0; i < newbonus.length; i++){
  if (newbonus[i].includes("et"))
  foundEt += 1;
}

console.log(foundEt)

let extraSpecialBonus = prompt("Feed me palindrome")

/*
for (let i = 0; i < hacker1.length; i++){
  
  letter = hacker1[i];
  letter += " ";
  console.log(letter);

  if (hacker1.length < (hacker1.length - 1)
  break
}
*/