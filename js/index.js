// Iteration 1: Names and Input
let hacker1 = "Anne";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Sébastien";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  } else {
    console.log(`It seems that ${hacker2} has the longest name, it has ${hacker2.length} characters.`);
  }

// Iteration 3: Loops
let result = "";

for (let i = 0; i < hacker1.length; i++) {
  let ad = hacker1[i].toUpperCase()+" ";
  result = result + ad;
}
console.log(result);

let result2="";

for (let i=hacker1.length-1;i>=0;i--) {
  result2 = result2+ hacker1[i];
}
console.log(result2);

if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`${hacker1}'s name goes first.`);
  } else if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, ${hacker2} goes first definitely.`);
  } else {
    console.log(`What?! You both have the same name?`);
  }

  // Bonus 1:

  let paragAll = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare lorem at libero ullamcorper finibus. Mauris vehicula dapibus ipsum, et ultricies metus dapibus a. Proin viverra leo turpis, et iaculis arcu tristique pulvinar. Pellentesque id mauris risus. Maecenas non mattis arcu. Proin congue ultricies nisl a posuere. Mauris non interdum ex, quis porta ipsum. Phasellus finibus ipsum consequat posuere ultrices. Mauris metus nulla, sollicitudin eget laoreet vitae, auctor non diam. Nulla eleifend ligula sit amet justo bibendum, ac rhoncus dui viverra. Suspendisse porttitor euismod massa, nec molestie velit. Morbi suscipit venenatis urna finibus faucibus. Duis at pellentesque augue. Donec accumsan aliquet nunc, tempus facilisis ligula molestie tempor. Pellentesque vehicula nibh magna, eu viverra elit rhoncus et. Nunc vehicula hendrerit nisl varius aliquam. Donec faucibus eleifend libero quis volutpat. Integer ultricies enim ac lorem hendrerit, eget sodales eros pellentesque. Cras nec interdum eros. Sed eu ligula at quam condimentum accumsan sed ac quam. Aenean efficitur interdum rutrum. Suspendisse tellus lectus, vehicula eget viverra a, dignissim ut ante. Fusce volutpat, erat feugiat sollicitudin porttitor, leo nibh ultrices elit, id suscipit lacus ipsum non purus. Cras at tincidunt lacus. Nullam ut aliquet nibh. Nunc vel vestibulum erat, sed egestas dolor. Sed augue turpis, volutpat a mi in, faucibus fringilla tortor. Ut vel iaculis augue, posuere fermentum leo. Proin at massa sagittis enim auctor viverra et sed augue. Proin eu dui posuere, interdum lectus pretium, cursus ipsum. Quisque est purus, lacinia sit amet rhoncus at, sodales non lectus. Etiam et mollis urna. Sed viverra tristique consequat. Fusce est libero, ullamcorper sit amet magna ut, tincidunt faucibus neque. Nulla dapibus nisi eu diam faucibus ullamcorper. Praesent non massa lobortis, ornare massa tincidunt, mattis lorem. Curabitur dapibus risus id ex viverra, ut eleifend nibh hendrerit. Vestibulum consequat a elit et congue.";

  function wordCount(str) { 
    return str.split(" ").length;
  }
  
  wordCount(paragAll);

  function etCount(str) { 
    return str.split(" et ").length;
  }
  
  etCount(paragAll);

  // Bonus 2:

  let str = "aba";

if ((str.split("").reverse().join("")) === str) {
  console.log(str + " is a palindrome");
} else {
  console.log(str + " is not a palindrome");
}