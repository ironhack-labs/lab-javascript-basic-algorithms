//Iteration 1
let hacker1 = "Anita";
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Gonzalito";
console.log(`The navigator's name is ${hacker2}`)

//Iteration2 
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters `);
} else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters `);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length}  characters`)
}

//Iteration 3
//3.1 
//console.log(hacker1.toUpperCase());
let hackerName = "";
for (let i = 0; i < hacker1.length; i++) {

    (hackerName += hacker1[i] + " ");

}
console.log(hackerName.toUpperCase());

// 3.2
let hackerName1 = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
    (hackerName1 += hacker1[i] + " ");
}
console.log(hackerName1);

// 3.3
let hacker1Lower = hacker1.toLocaleLowerCase();

let hacker2Lower = hacker2.toLocaleLowerCase();

if (hacker1Lower < hacker2Lower) {
    console.log("The driver's name goes first");

} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely")
} else {
    console.log("What? You both have the same name?");
}

//Bonus 1
let paragraph = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla leo ligula, cursus et elementum non, lobortis a quam.Quisque fermentum, dui vitae pulvinar hendrerit, elit elit pellentesque est, in convallis dolor dolor nec orci.Etiam magna sem, finibus non auctor et, volutpat tempus leo.Aliquam porttitor molestie leo eget molestie.Quisque nec iaculis urna.Mauris ac bibendum arcu.Cras sed magna quis ante dapibus faucibus.Praesent aliquam convallis felis at commodo.Nam id pellentesque nisl, et convallis ex.Nullam sollicitudin mi ut nunc ultricies, quis commodo lacus blandit.Nam imperdiet eros eu tincidunt ultrices.Nunc elementum massa eget ullamcorper rutrum.Nulla dapibus turpis urna, eget dignissim enim mattis nec.Vivamus in condimentum mi.Duis dignissim quam ligula, nec tincidunt lectus feugiat in.Nullam congue enim mattis, iaculis magna vitae, porttitor tellus.Cras venenatis vehicula erat eu lacinia.Quisque eu porttitor ante.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vestibulum imperdiet aliquet justo, vel scelerisque est feugiat in.Sed nisl neque, maximus et enim quis, tincidunt posuere turpis.Donec sit amet rhoncus massa.Nullam ut ornare sapien.Duis ornare eros vel elit iaculis vehicula.Nulla quis ullamcorper neque, quis ultricies massa.Etiam porta sed ex non sagittis.Sed faucibus tempus quam, nec euismod mauris fringilla eu.Ut et viverra magna.Etiam ligula mauris, porta eu tempor ac, blandit vitae arcuwhite_check_mark");

let numberOfWords = "";
for (let i = 0; i < paragraph.length; i++) {
    let space = " ";
    if (paragraph[i] === space) {
        numberOfWords++;
    }
}
console.log(numberOfWords + 1);














