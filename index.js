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
