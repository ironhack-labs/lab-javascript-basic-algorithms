// Iteration 1: Names and Input
const hacker1 = "Fabricio"
console.log(`The drivers name is ${hacker1}`);

const hacker2 = "Peters"
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}



// Iteration 3: Loops
//3.1
for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase() + ' ')
}


//3.2
function reverseString(str) {

    let reverse = "";

    for (let i = str.length-1; i >= 0; i--) {
        reverse += str[i]
       
    }
    return reverse
}


console.log(reverseString(hacker1))

//3.3
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
}
else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}


//Bonus1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in sollicitudin purus, vitae porta sem. Cras sit amet neque dictum, fringilla ante vel, vestibulum orci. Etiam risus sapien, posuere eu urna sed, dignissim rutrum lacus. Integer nibh velit, vehicula quis ex eget, gravida consectetur erat. Vivamus dapibus dui et ultricies gravida. Nullam aliquam quis libero ut blandit. Donec et lobortis erat.Nam tincidunt nec lectus vel vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut eros id sapien semper rutrum scelerisque nec urna. Phasellus vulputate pellentesque iaculis. Donec pharetra odio augue, a cursus eros vestibulum vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In porttitor nisi enim, ultrices placerat leo varius ut. Integer viverra diam turpis, vitae facilisis enim volutpat vitae. In accumsan metus at viverra consectetur. Nullam scelerisque a mi non porttitor. Sed ante dolor, aliquet at mattis vel, bibendum et quam. Donec tempus fermentum auctor. Phasellus sit amet magna dapibus, tristique turpis et, tempor lacus. Donec et sapien sit amet ex blandit feugiat dignissim vitae purus. In a lectus et metus dictum scelerisque id ut dui.Quisque viverra libero felis, quis auctor nisl consectetur quis. Sed a sapien justo. Ut nulla lorem, tempor eu nunc ac, varius vehicula ipsum. Nullam ultrices vestibulum augue, id dictum nisi tincidunt ut. Mauris sollicitudin, mauris nec volutpat pellentesque, lorem nulla tincidunt ipsum, pretium fermentum risus arcu eu neque. Donec vitae mi nec nibh tincidunt egestas. Nulla tincidunt nibh in scelerisque faucibus. Pellentesque venenatis purus suscipit lacus tempus, eget faucibus lacus bibendum. Proin volutpat sodales eros maximus lacinia."

let countWords = 0;

let words = longText.split(" ");

for (let i = 0; i < words.length; i++) {
    countWords++
};

console.log(countWords);



let etCount = 0;

for (let i = 0; i < words.length; i++) {
    if (words[i] === "et") {
      etCount++;
    };
  };

  console.log(etCount)




//Bonus2



function isPalindrome(str) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  console.log(isPalindrome("raceCar"))
















