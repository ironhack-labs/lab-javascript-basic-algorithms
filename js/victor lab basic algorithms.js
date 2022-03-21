// Iteration 1: Names and Input
// 1.1 & 1.2
function hacker1(name) {
    return (`The driver's name is ${name}`);
    }
    console.log(hacker1("Marcela"))

// 1.3 & 1.4
    function hacker2(name){
    return(`The navigator's name is ${name}`);
    }
    console.log(hacker2("Matusalem"))
// Iteration 2: Conditionals
function hackerNames(hacker1,hacker2){
    if (hacker1.length > hacker2.length) {
      return `The driver has the longest name, it has ${hacker1.length} characters`;
    }
    else if (hacker1.length < hacker2.length) {
      return `It seems that the navigator has the longest name, it has ${hacker2.length} characters`;
    }
    else if (hacker1.length === hacker2.length) {
      return `Wow, you both have equally long names, ${hacker1.length} characters`;
    }
    }
    console.log(hackerNames("all","zeee"));

// Iteration 3: Loops
// 3.1
function hacker1(name){
        return name.toUpperCase().split("").join(" ");}
    console.log(hacker1("jean"));
// 3.2
    function hacker1(name){ 
        return name.split("").reverse().join("");}
      console.log(hacker1("jean"));
// 3.3
function hackerNames(hacker1,hacker2){
    if (hacker1 > hacker2) {
      return `The driver's name goes first.`;
    }
    else if (hacker1 < hacker2) {
      return `Yo, the navigator goes first definitely.`;
    }
    else if (hacker1 === hacker2) {
      return `What?! You both have the same name?`;
    }
    }
    console.log(hackerNames("pozedorodo","pozedorod"));
    