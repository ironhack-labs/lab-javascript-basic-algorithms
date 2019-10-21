console.log("Hello from JS");
const hacker1 = "Daphne";
const hacker2 = "Mike";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

if(hacker1.length > hacker2.length){
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both got equally long names, ${hacker1.length} characters!`);
}
else{
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);

}

let name = " ";
for(let i=0; i<=hacker1.length-1; i++){

name += hacker1[i] + " "; 
}

  console.log(name.toUpperCase());

let reverseName = " ";
for(let i=hacker2.length-1; i>=0; i--){

reverseName += hacker2[i]; 
}

console.log(reverseName);

if (hacker1.localeCompare(hacker2) <0){
console.log("The driver's name goes first.") 
}
else if (hacker1.localeCompare(hacker2) ===0){
  console.log( "What?! You both got the same name?");
}
else{
  console.log("Yo, the navigator goes first definitely.");
}

let paragraph ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget mollis nunc. Cras tincidunt, tortor eu venenatis pulvinar, elit risus blandit tortor, eget finibus arcu nibh a ante. Vivamus iaculis aliquam velit. Suspendisse varius ultricies tortor, sed finibus quam pulvinar nec. Sed ultricies mauris nec sagittis condimentum. Donec dui lectus, hendrerit a imperdiet non, commodo a nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor tincidunt nibh eget mattis. Fusce vitae malesuada eros, ut dignissim turpis. Suspendisse ut placerat augue. Proin pharetra magna vel lectus malesuada, sed malesuada justo ultrices. Aenean quis enim a velit aliquam pulvinar sed ac arcu. Pellentesque varius lobortis nunc, ac aliquet sem sodales commodo. Curabitur lobortis nisl nunc. Suspendisse congue, dui sed placerat placerat, elit sapien sollicitudin tortor, laoreet hendrerit nunc justo quis lectus. Nunc in tempor erat. Duis accumsan maximus ante, sed porta diam maximus quis. Aliquam quis posuere sem. Praesent vel ornare sapien, ut blandit tellus. Cras sed nibh nec ipsum pulvinar efficitur at ac ex. Maecenas volutpat dui nec lectus tincidunt, sed sollicitudin nibh fermentum. Quisque nec lacus sit amet est rutrum suscipit vitae quis felis. Suspendisse vulputate feugiat sapien quis blandit. Duis blandit imperdiet dolor, nec ornare tellus iaculis in. Phasellus dapibus sed purus eget euismod. Sed vitae maximus tellus, et tincidunt urna. In sed eros eu elit interdum aliquet eu eu lorem. Sed ultrices vestibulum elit in vestibulum. Curabitur iaculis auctor nisl id tincidunt. Sed id odio luctus dolor consequat sollicitudin ut at lectus. Nullam eu leo turpis. Etiam euismod quis justo vitae rhoncus. Mauris vitae nisl pharetra, volutpat eros non, malesuada diam. Aliquam ornare, massa sit amet interdum sodales, augue elit condimentum leo, sit amet suscipit nisl erat nec enim. Fusce eget pellentesque purus, ut efficitur diam. Donec quis vestibulum ex. Aenean consectetur felis ut erat viverra, in consequat dolor tincidunt. Quisque vel sapien in ipsum placerat ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In mattis tempus malesuada. Maecenas sapien justo, interdum id lobortis laoreet, feugiat vitae ipsum. Aliquam nec lectus laoreet, ultricies libero ac, convallis urna. Mauris iaculis magna elementum turpis sollicitudin facilisis. Morbi sit amet scelerisque nisi.";

let test = "Daphne test";

function WordCount(str) { 
  return str.split(" ").length;
}

console.log(WordCount(paragraph));
