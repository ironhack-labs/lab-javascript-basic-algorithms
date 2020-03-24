
let hacker1 = 'Eduardo';
let hacker2 = 'Emmanuel Donovan';
console.log (`The driver's name is  ${hacker1}`);
console.log (`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

console.log(hacker1.toUpperCase().split('').join(' '))

console.log(hacker2.split('').reverse().join(' '))

let namArr = [hacker1, hacker2]
namArr.sort()

if (hacker1 === hacker2){console.log(`What?! You both have the same name?`)
}
else if (namArr[0] === hacker2 ){console.log(`Yo, the navigator goes first definitely.`)
}
else if (namArr[0] === hacker1 ){console.log(`The driver's name goes first.`)
} 


let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit pharetra mi eget congue. Vestibulum tristique quis dui id molestie. Nam tincidunt tempus justo. Sed ut velit non est vehicula scelerisque. Vivamus a euismod metus. Praesent maximus dolor non odio lobortis, id volutpat erat consectetur. Vivamus vehicula sodales nisi vitae elementum. Aenean venenatis dui a posuere lobortis. Nulla at tellus imperdiet leo facilisis viverra. Mauris in ante dapibus, porttitor arcu id, venenatis odio. Aenean suscipit augue nec ornare gravida.
Duis tempus vitae turpis non pretium. Phasellus semper ex velit. Nulla lobortis, sem semper fringilla hendrerit, ipsum augue accumsan lacus, sit amet bibendum sapien dui vitae justo. Duis suscipit nibh non leo lobortis, sit amet rhoncus massa bibendum. Ut leo libero, tincidunt sed volutpat eget, finibus vel tellus. Etiam suscipit justo turpis, sed facilisis lacus accumsan ut. In velit risus, eleifend ut risus quis, luctus congue lectus.
Sed fermentum ipsum ac augue tristique, non viverra lorem volutpat. Quisque est est, malesuada et nisl eu, fringilla sodales dolor. Phasellus sagittis lobortis augue, at porttitor neque molestie in. Vivamus maximus porta dui ut ornare. Duis suscipit dolor justo, ac rhoncus metus varius scelerisque. Curabitur elit magna, elementum vel magna quis, fringilla sodales felis. Ut aliquam eleifend rhoncus. Duis ornare sodales vehicula. Duis congue augue eget tellus maximus, vel finibus dolor hendrerit. In ligula dui, vehicula ut quam a, rhoncus blandit quam. Morbi at mollis mauris. Etiam id est felis. Fusce in libero sit amet lacus eleifend aliquam. Curabitur sit amet nibh in neque hendrerit rhoncus vitae vitae velit. Duis ut erat ac neque porta fermentum.`

let contar = 0
for (let i = 0; i < loremIpsum.length; i++) {
	if ((loremIpsum[i].toLowerCase() === "e") && (loremIpsum[i + 1] === "t")) {contar = contar += 1;}
}
console.log(contar)

let phraseToCheck = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit pharetra mi eget congue. Vestibulum tristique quis dui id molestie. Nam tincidunt tempus justo. Sed ut velit non est vehicula scelerisque. Vivamus a euismod metus. Praesent maximus dolor non odio lobortis, id volutpat erat consectetur.`

console.log(phraseToCheck.split('').reverse().join(''))
