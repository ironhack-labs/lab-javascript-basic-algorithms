// Iteration 1: Names and Input

let hacker1 = "Samantha"
console.log("The driver's name is " + hacker1);

let hacker2= "Christian"
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

  if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");

  }else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");

  } else{
    hacker1.length = hacker2.length;
      console.log("Wow, you both have equally long names," + hacker1.length + " characters!");
  }
  
  
// Iteration 3: Loops

hacker1.toUpperCase().split("").join(" ");
// 3.2
  
let i = hacker1.length;
let reverse = "";

while (i>= 0){
  reverse += hacker1.charAt(i);
  i--;
}
console.log(reverse);

// 3.3
if(hacker1.localeCompare(hacker2)== -1){
  console.log("The driver's name goes first.");
  } else if (hacker1.localeCompare(hacker2)== 1){
    console.log("Yo, the navigator goes first definitely.");
  }else{
    console.log("What?! You both have the same name?");
  }

// Bonus 1

let texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida, justo a elementum pulvinar, nisi felis elementum justo, eget volutpat diam erat tempus turpis. Integer sodales suscipit pellentesque. Vestibulum sit amet sapien in lectus pulvinar varius. Phasellus suscipit odio interdum, auctor orci tincidunt, elementum libero. In nunc nibh, accumsan in elementum in, viverra et arcu. Phasellus commodo egestas tellus, a laoreet enim viverra sit amet. Sed posuere ultrices lectus, a fringilla nulla pretium et. Aenean fermentum a nunc et ultricies. Praesent commodo metus odio, in accumsan nisi bibendum a. Morbi rhoncus ipsum et facilisis placerat. Proin eget nisi turpis. Duis pretium sed nisl nec sagittis.Vivamus lobortis auctor varius. Suspendisse molestie vehicula felis, non consequat sem. Morbi imperdiet lectus non condimentum vestibulum. Ut scelerisque eros a vestibulum aliquet. Nulla in quam faucibus, lacinia eros quis, dignissim est. Pellentesque eget erat nec lacus aliquet consectetur non et lacus. In cursus nec felis ac lobortis.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam blandit rhoncus purus. Integer at metus at lorem lobortis fermentum at id tortor. Aenean felis tellus, semper id aliquet nec, malesuada nec nunc. Praesent et sollicitudin nisl. Sed pharetra metus libero. Ut gravida nulla vitae quam euismod, at vulputate sem luctus. Curabitur laoreet enim erat, ac dapibus eros varius lobortis. Maecenas dolor arcu, interdum congue ultrices et, feugiat sit amet nisl. Duis commodo dui ut nibh sagittis, sit amet placerat enim scelerisque."
console.log(texto.split(' ').length);

console.log(texto.split(' et ').length)

// Bonus 2