const hacker1 = 'Matthew';
const hacker2 = 'Dave';

console.log (`The drivers name is ${hacker1} and the navigators name is ${hacker2}.`)  //iteration 1

if (hacker1.length > hacker2.length) {
  console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log (`It seems the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} // iteration 2

let nameSpaced = ""
for (let i=0; i<hacker1.length; i++) {
    nameSpaced += `${hacker1[i]} `  ;
}
console.log(nameSpaced)

let nameReverse = ""
for (let i=hacker2.length-1; i>=0; i--) {
    nameReverse += `${hacker2[i]}`
}
console.log(nameReverse)

let allHackers = `${hacker1} ${hacker2}`
if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, the navigator goes first definately.`)
} else if (hacker1.localeCompare(hacker2) === -1) {
    console.log (`The drivers name goes first`)
} else {console.log(`What?! You both have the same name`) // iteration 3
}

const latin = `Vestibulum non augue non neque vestibulum fringilla eu a arcu. Integer sed tincidunt turpis. Duis interdum ante eu quam rutrum tristique. Integer risus lacus, cursus ac est auctor, scelerisque tempus mauris. In consectetur eu diam sed dictum. Nullam id turpis efficitur, egestas justo sed, finibus metus. Aenean eget faucibus augue. Aliquam erat volutpat. Aliquam sodales mi vel nibh hendrerit rhoncus. Sed consequat facilisis ex sed facilisis. Donec tincidunt lectus dui, id dictum nulla gravida eu. Curabitur rutrum lectus quam, at consectetur orci porttitor a. Nam rhoncus velit ac lacus porttitor, at euismod odio eleifend. Morbi ante orci, convallis dictum dignissim quis, placerat quis justo. Phasellus vulputate feugiat efficitur. Morbi eleifend quis nulla et sodales. Maecenas porta dapibus odio ut accumsan. Curabitur at tellus enim. Cras tincidunt, quam a porta lobortis, turpis metus rutrum leo, id blandit odio turpis sed dui. Curabitur maximus mattis`

function wordCount(str) {
    return str.split(" ").length;
}
console.log(wordCount(latin) +1);

function etCount(str) {
    return str.split(" et ").length;
}

    function etStopCount(str) {
        return str.split(" et.").length;
}
function etCounter() {
return etCount(latin) + etStopCount(latin)
}
console.log(etCounter())   // Bonus 1

