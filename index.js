// Iteration 1: Names and Input
let hacker1 = prompt("Driver´s Name:");

console.log(`The driver's name is ${hacker1}.`);

let hacker2 = prompt("Navigator's Name:");

console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length  )
{
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);  
}
else if (hacker1.length == hacker2.length) {
 console.log(` Wow, you both have equally long names, ${hacker1.length} characters!`);
}
else if (hacker2.length > hacker1.length){
  console.log(` It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}


// Iteration 3: Loops
let nameDriver ="";
for (let i = 0; i < hacker1.length ; i++)
  {
    nameDriver += `${hacker1[i]} `;
  }
  console.log(`${ nameDriver.toUpperCase()}`);

let nameNav ="";
for (let i = hacker2.length; 0 < i; i--)
  {
  nameNav += `${hacker2[i-1]}`;
  }
  console.log(`${nameNav}`);


switch(hacker1.localeCompare(hacker2))
  {
    case -1 : console.log("The driver's name goes first.");break;
    case  0 : console.log("What?! You both have the same name?"); break;
    case  1 : console.log("Yo, the navigator goes first definitely.");break;
    default :console.log("Error");break;
      
  }

  //Bonus 1
  let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim nibh sem, vitae malesuada magna suscipit sit amet. Praesent eu velit urna. Maecenas nunc ex, imperdiet id vestibulum quis, varius vehicula lectus. Mauris maximus condimentum massa vel iaculis. Vivamus eget dictum metus. Curabitur ultrices vestibulum gravida. Quisque mollis leo sed erat porttitor, vitae varius quam commodo. Ut pretium lorem tristique dui aliquam sagittis. Donec quam velit, viverra aliquam elit vitae, pretium ultricies ipsum. goncalo goncalo

Sed malesuada quam ac consectetur aliquam. Fusce et elit malesuada, dapibus nibh eu, auctor mauris. Nullam gravida sodales cursus. Vestibulum mauris ante, consequat at leo in, posuere pharetra lectus. Sed ac diam arcu. Curabitur efficitur libero eget luctus pellentesque. Proin pharetra, sapien nec bibendum efficitur, neque nisi imperdiet erat, ut ornare justo tortor ac odio. Suspendisse potenti. Quisque mi ligula, fringilla a justo in, sagittis imperdiet nulla. Etiam rutrum sem vel sem congue, at vehicula nisi ornare. Nullam auctor orci non dui ultricies vestibulum. Curabitur ac enim eget felis eleifend consequat.

Mauris ac gravida nibh. Vestibulum ut commodo nisl, quis laoreet dui. Ut at lorem placerat, ultrices tortor eget, finibus dui. Mauris pretium, lacus rutrum consequat mattis, justo diam efficitur lectus, ac consectetur neque urna vitae nibh. Quisque sit  amet enim erat. Sed tempor posuere imperdiet. Donec tortor mi, porta eu porta a, ultricies at turpis. Quisque sed molestie lacus. Duis convallis ex ac sem rutrum, eu euismod purus maximus.`;

console.log(longText.split(" ").length);

let search = prompt("Search a word:");
console.log(longText.split(search).length -1);


