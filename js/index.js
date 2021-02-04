console.log("I'm ready!");


// Iteration 1: Names and Input

let hacker1 = "Simo";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Matt";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if(
    hacker1.length > hacker2.length
  ){console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  
  }else if(
    hacker1.length < hacker2.length
  ){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  }else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
  }

// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {
    for (let j = i + 1; j < hacker1.length; j++) {
    for (let k = j + 1; k < hacker1.length; k++) {
    for (let l = k + 1; l < hacker1.length; l++) {  
    console.log(`${hacker1[i].toUpperCase()} ${hacker1[j].toUpperCase()} ${hacker1[k].toUpperCase()} ${hacker1[l].toUpperCase()}`);
        };
      };
    };
  };

// We know it's not THE answer but it is AN answer :)

//Iteration 3.2

for (let i = 0; i < hacker2.length; i++) {
    for (let j = i + 1; j < hacker2.length; j++) {
    for (let k = j + 1; k < hacker2.length; k++) {
    for (let l = k + 1; l < hacker2.length; l++) {  
    console.log(`${hacker2[l]}${hacker2[k]}${hacker2[j]}${hacker2[i]}`);
        };
      };
    };
  };


//Iteration 3.3

let names = [hacker1, hacker2];
let namesSort = names.sort();


if(namesSort[0]===hacker1){
  console.log("The driver's name goes first.")

}else if(namesSort[0]===hacker2){
  console.log("Yo, the navigator goes first definitely.")
}else if(hacker1===hacker2){
  console.log("What?! You both have the same name?")
}

// Bonus Time!

const typeOfString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt hendrerit ex, sit amet consequat mi vehicula sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam aliquet euismod iaculis. Nunc accumsan magna eget risus scelerisque dignissim. Mauris vehicula efficitur libero. Duis a convallis massa. Phasellus ut risus id tortor bibendum aliquet vitae ut ante. Maecenas et commodo augue.Ut rhoncus molestie justo cursus egestas. Nullam pulvinar arcu in diam mattis lobortis. Proin sit amet feugiat ligula, vel scelerisque tortor. Nunc non urna in massa malesuada consequat eu vel elit. Praesent id rutrum magna. Maecenas et augue eget libero fringilla vulputate. Maecenas at urna nibh. Integer ullamcorper semper vehicula.Phasellus luctus fermentum sapien nec aliquam. Etiam molestie tellus est, vel sagittis diam dictum eget. Donec eget arcu nec neque rhoncus lobortis. Sed vehicula ut est id vehicula. Vestibulum maximus, ligula a tempus accumsan, elit magna dignissim sem, nec cursus nisl odio ut dolor. Curabitur sit amet cursus tortor. Sed felis nulla, tempor sed convallis in, fringilla ut nibh. Sed sagittis lobortis diam et eleifend. Maecenas interdum eget mauris ut elementum. Integer pharetra urna erat, et dignissim lectus luctus et. Nam vitae turpis faucibus, egestas lectus sit amet, maximus nisl. Phasellus pellentesque commodo lectus. In quis porttitor metus. Vestibulum nec sodales libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit."

const words = typeOfString.split(' ');
const numberOfWords = words.length + 1;
console.log(`The number of words in the Lorem Ipsum paragraph is ${numberOfWords}`)

//Bonus 1 : Sub-onus 3

let count = (typeOfString.match(/et/g) || []).length;
console.log(`There are ${count} 'et' in the Lorem Ipsum paragraph `);