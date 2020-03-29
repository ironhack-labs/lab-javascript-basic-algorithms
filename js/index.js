/* Iteration 1 - Names and Inputs ----------------------------------------
    1.1 Create a variable called "driver" with the driver's name.
    1.2 Print in the console "The driver's name is XXXX"
    1.3 Create a variable called "navigator" with the navigator's name.
    1.4 Print in the console "The navigator's name is YYYY"
*/
let driver = "alberto";
let navigator1 = "chus";
let navigator2 = "claudi";


/* Iteration 2: Conditionals ---------------------------------------------
    2.1. Depending on which name is longer, print:
    - Driver has the longest name, it has XX characters. or
    - Navigator has the longest name, it has XX characters. or
    - Wow, you both have equally long names, XX characters!.
*/

group = [driver, navigator1, navigator2];
maxLen= Math.max (driver.length, navigator1.length, navigator2.length);

let maxAr = [];
let pos = [];


for (let i = 0; i < group.length; i++){
    if (group[i].length === maxLen){
        maxAr.push(group[i]);
        pos.push(i);
    }
}

//Solo funciona para 3 personas

if (maxAr.length === 1){
    if (pos[0] === 0){
        console.log (`Driver has the longest name, it has ${maxLen} characters.`);
    }else if (pos[0] === 1){
        console.log (`Navigator 1 has the longest name, it has ${maxLen} characters.`);
    } else if (pos[0] === 2){
        console.log (`Navigator 2 has the longest name, it has ${maxLen} characters.`);
    }
} else if (maxAr.length === 2){
    if (pos[0] === 0 && pos[1] === 1 ){
        console.log (`Wow, both Driver & Navigator1 have equally long names, ${maxLen} characters!.`);
    }else if (pos[0] === 0 && pos[1] === 2 ){
        console.log (`Wow, both Driver & Navigator2 have equally long names, ${maxLen} characters!.`);
    }else {
        console.log (`Wow, both Navigator1 & Navigator2 have equally long names, ${maxLen} characters!.`);
    }
} else {
    console.log (`Wow, you three have equally long names, ${maxLen} characters!.`);
}

/* Iteration 3: Loops ----------------------------------------------------
    3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
    3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
*/
let capName = "";
let reverseName = "";

for (let i = 0; i < driver.length; i++) {
  capName = capName.concat(`${driver.charAt(i).toUpperCase()} `);
}
console.log(capName);

for (let i = navigator1.length - 1; i >= 0; i--) {
    if(i === 0){
        reverseName = reverseName.concat(navigator1.charAt(i).toUpperCase());
    }else{
        reverseName = reverseName.concat(navigator1.charAt(i));
    }
}
console.log(reverseName);