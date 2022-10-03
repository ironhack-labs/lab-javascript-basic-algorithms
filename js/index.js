let hacker1 = "Juliana";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Raiza";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
 console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
}
 else if (hacker1.length < hacker2.length) { 
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
 }
 else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.lenght}, ${hacker2.lenght} characters!`);
 }

// Iteration 3: Loops

let driverUpper = "";
for(let i=0; i < hacker1.length; i++) {
    driverUpper += hacker1[i].toUpperCase() + " ";
}
console.log(driverUpper.trim());

let navigatorReverse = "";
for (let i = hacker2.length -1; i >= 0; i--) {
    navigatorReverse +=hacker2[i];
} 
console.log(navigatorReverse);

if (hacker1.localeCompare(hacker2) ==-1){
    console.log("The driver's name goes first.")}
else if (hacker2.localeCompare(hacker2) ==1){
    console.log("Yo, the navigator goes first definitely.")}
 else if (hacker2.localeCompare(hacker2) ==0){
     console.log("What?! You both have the same name?")}

  
  // Bonus 1

  let loren = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lectus nec mauris faucibus elementum quis nec libero. Morbi mollis leo orci, et tincidunt lectus dignissim at. In enim arcu, dapibus sed nunc vel, semper luctus nisl. Mauris condimentum interdum est. Phasellus et rutrum tellus. Vivamus molestie lectus ante, sed pretium ipsum faucibus vitae. Phasellus sagittis laoreet quam, non ultrices quam rutrum vitae.

  Nunc id augue erat. Mauris in dui sit amet turpis commodo vulputate vitae eu nisi. In dui nisl, fermentum vel volutpat vel, ultrices et nisi. Vestibulum eget orci neque. Aenean molestie quis tellus consequat sollicitudin. Etiam finibus nulla neque, ac molestie sem auctor non. Mauris mi enim, rutrum sed est vitae, pulvinar vehicula quam. Aliquam rutrum euismod nisi a tincidunt. Integer bibendum sem metus, at iaculis odio lacinia ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer arcu erat, lacinia eget vehicula sed, ullamcorper quis turpis.
  
  Quisque ipsum eros, ultricies quis augue in, pulvinar faucibus sapien. Duis id neque efficitur, consequat lorem ut, varius elit. Phasellus et metus in neque placerat vestibulum. Proin at odio eu eros interdum consectetur. Nullam vestibulum velit in finibus vehicula. Pellentesque volutpat varius odio nec malesuada. Nullam tempus ipsum ipsum, id cursus metus dictum sit amet. Etiam venenatis mauris a nisi porta volutpat. Vivamus id egestas dui, id bibendum nibh. Morbi sodales ac dui ac imperdiet. Praesent in pharetra libero.`;

  let words = 0;
  let count = 0;

  let splitLoren = loren.split(' ');

  for (let i=0; i < splitLoren.length; i++) {
    if(splitLoren[i].includes('\n')) {
        words++
      } else if(splitLoren[i] === "et" || splitLoren[i] === "et.") {
        count++;
      }
      words++;
     }
    
    console.log(words);
    console.log(count);