console.log("I'm ready!");

var hacker1 = "Adrian";
console.log(`The driver's name is ${hacker1}`);

var hacker2 = "Mary";
console.log(`The navigator's name is ${hacker2}`);

let array = [hacker1, hacker2];

if(hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
   } else {
      console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    }
  
  let spaceBetween= hacker1.split("").join(" ").toUpperCase();
  console.log(spaceBetween);

let reverseName = hacker2.split("").reverse().join("");
 console.log(reverseName);

array.sort();
console.log(array);


switch (hacker1.localeCompare(hacker2)) {
  case -1:
  console.log("The driver's name goes first.");
  break;
  case 0:
  console.log("What?! You both have the same name?");
  break;
  case 1:
  console.log("Yo, the navigator goes first definitely.");
}


let bonusUno = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros pretium, elementum urna quis, placerat sapien. Vivamus sodales nisi quis nisi venenatis, vitae suscipit mauris volutpat. Nulla quam tellus, vestibulum sit amet porta nec, pulvinar tristique ipsum. Nullam volutpat ornare bibendum. Sed malesuada vulputate elit, scelerisque laoreet erat cursus et. Sed efficitur, lorem sed lobortis feugiat, erat risus convallis nisl, ut porttitor mauris nisi sed leo. Etiam auctor interdum finibus. 

Praesent sit amet pellentesque libero. In neque est, convallis eu elit ac, placerat tincidunt tellus. Nullam mattis tincidunt velit quis porta. Sed accumsan viverra leo, id laoreet odio maximus non. Integer ligula turpis, condimentum in sollicitudin eget, venenatis id ante. Phasellus sit amet suscipit eros, id pharetra sapien. Sed sagittis quis ex vitae lacinia. Ut risus nunc, bibendum eget arcu id, maximus congue metus. Phasellus eget tempor ante, in faucibus quam. Nunc in lectus rutrum, dictum ipsum sed, gravida quam. Pellentesque commodo cursus erat, quis convallis ex interdum quis. 

Pellentesque quis ipsum sit amet tortor tempor volutpat vel a arcu. Nam commodo, magna in rhoncus malesuada, magna felis tempor tortor, eget ornare urna dolor quis dui. Integer ut aliquam mi. Phasellus quis dolor sodales, congue ex ac, mollis ante. Donec hendrerit augue et arcu condimentum consectetur vitae et ante. Sed tincidunt accumsan risus quis euismod. Aliquam varius fermentum luctus. Nullam ut lacus quam. Quisque odio magna, vulputate id interdum at, suscipit non felis.`;

console.log(bonusUno.split(" ").length); 


var count = 0;
var array2 = bonusUno.split(" ");
for (i=0; i< array2.length; i++) {
  if (array2[i] == "et") {
    count++;
  }
}
console.log(count);


let phraseToCheck = "Was it a car or a cat I saw?";
phraseToCheck = phraseToCheck.replace(/ |,|!/g ,"").toLowerCase().replace("?","");
let juntos = phraseToCheck.split("").reverse().join("");
 console.log(juntos);
 if(phraseToCheck===juntos){
   console.log("La palabra es palindroma")
 }else{
   console.log("la palabra no es palindroma")
 }
