// Iteration 1: Names and Input
//

const hacker1 = "Matthew"
const hacker2 = "Joao"

console.log (`The driver's name is ${hacker1}`);
console.log (`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
  console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length)  {
  console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

// Iteration 3.1
let driver = '';

for (let i = 0; i <= hacker1.length; i++) {
    driver += hacker1[i].toUpperCase() + ' ';
    console.log(driver)
}

// Iteration 3.2

let navigator = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigator += hacker2[i];

    console.log(navigator)
}

// Iteration 3.3

if(hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.")
  }

  else if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
  }
  
  else {
    console.log("What?! You both have the same name?")
  }

  // Bonus1

  let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo at quam fringilla lacinia quis ullamcorper lacus. Vivamus vel dolor aliquet, sodales tortor nec, eleifend odio. Suspendisse volutpat risus ligula, sit amet pulvinar elit vulputate ac. Vestibulum porttitor ipsum vel fringilla dignissim. Pellentesque convallis mattis tellus. Phasellus condimentum tristique augue nec pulvinar. Donec posuere, augue non tempus dapibus, ipsum leo fermentum ex, non dictum magna sem nec lacus. Quisque at justo id quam malesuada sagittis. Curabitur in aliquet massa. Nunc at lorem quis elit dictum gravida. Donec vel ullamcorper tortor.

  Aliquam cursus augue at massa pulvinar semper. Vestibulum placerat tristique euismod. Proin non elementum arcu. Fusce cursus sodales ante, sit amet pulvinar erat fringilla vitae. Vestibulum nec nisi congue libero maximus mollis. Aliquam facilisis in ligula eget ornare. Praesent laoreet enim at purus commodo, ut porta mi porta. Duis efficitur justo ipsum, nec hendrerit metus condimentum nec. Quisque pulvinar lacinia arcu id dignissim. Sed quis accumsan nisl, sed dapibus ex. Aliquam dignissim dui id risus molestie dictum.
  
  In ultricies consequat velit, viverra tempus leo porttitor id. Integer sagittis vel tortor facilisis cursus. Nulla vitae magna enim. Integer non urna enim. Praesent eget ligula iaculis, accumsan felis quis, dapibus mauris. Ut finibus lectus ut tempor pellentesque. Sed eleifend enim id mi aliquam tristique. Cras maximus ullamcorper ex et rutrum. Suspendisse gravida semper suscipit. Cras ultricies odio vel diam sagittis viverra. In ultrices id lacus id dapibus.'


  function countWords(text) {
    const arr = text.split(' ');

    return arr.filter(word => word !== '')
  }

  console.log(countWords(text))
