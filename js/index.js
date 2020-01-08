// === TEST
console.log("I'm ready !");

// === ITERATION 1 : NAMES AND INPUT
// === 1.1
const hacker1 = "Mehmet";

// === 1.2
console.log(`The driver's name is ${hacker1}`);

// === 1.3
const hacker2 = "Nina";

// === 1.4
console.log(`The navigator's name is ${hacker2}`);

// === ITERATION 2 : CONDITIONALS
function compareNames(driver, navigator){
  if (driver.length > navigator.length){
    console.log(`The driver has the longest name, it has ${driver.length} characters.`)
  } else if (navigator.length > driver.length){
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.`)
  } else{
    console.log(`Wow, you both have equally long names, ${driver.length} characters!`)
  }
}

compareNames(hacker1, hacker2)

// === ITERATION 3 : LOOPS
// === 3.1
function spellUppercase(driver){
  let spellLog="";
  for (let i=0; i < driver.length; i++){
    spellLog+=`${driver[i]} `
  }
  console.log(spellLog.toUpperCase());
}

spellUppercase(hacker1);

// === 3.2
function spellBackwards(navigator){
  let spellLog="";
  for (let i=navigator.length-1; i>=0; i--){
    spellLog+=`${navigator[i]}`
  }
  console.log(spellLog);
}

spellBackwards(hacker2);

// === 3.3
function order(driver, navigator){
  for(i=0; i<driver.length; i++){
    if(driver===navigator){
      console.log("What?! You both have the same name?");
      break
    } else if(driver[i].localeCompare(navigator[i])<0){
      console.log("The driver's name goes first.");
      break
    } else if (driver[i].localeCompare(navigator[i])>0){
      console.log("Yo, the navigator goes first definitely.");
      break
    }
  }
}

order(hacker1, hacker2);

// === BONUS TIME !
// === BONUS 1
// === 1.1
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi leo, facilisis sed lectus quis, varius laoreet nunc. Vestibulum ultricies consectetur tempus. Maecenas et turpis ex. Mauris imperdiet pharetra malesuada. Etiam finibus, diam rhoncus pharetra iaculis, nisl leo tincidunt tortor, ac semper dolor nibh quis nulla. Sed leo magna, condimentum eu risus luctus, mollis condimentum tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In eu lectus placerat, commodo leo vulputate, gravida libero. Cras auctor dolor placerat neque fermentum, vel consequat sapien luctus. Mauris hendrerit porttitor sollicitudin. Vestibulum ut euismod velit. Nam dictum consequat cursus. Nam et aliquam mi, quis tincidunt ex. In posuere neque sit amet ligula vehicula sagittis. Sed laoreet imperdiet nisl, vel finibus nibh elementum rhoncus. Integer pharetra volutpat ipsum. Morbi lobortis dapibus pretium. Cras pharetra fermentum nulla vel pellentesque. Phasellus imperdiet non diam at placerat. Cras fringilla urna vel orci fermentum, sed molestie urna fermentum. Fusce id leo magna. Proin vel nisi eu leo semper pulvinar vitae quis mauris. Nunc venenatis semper nulla, non placerat erat lacinia gravida. Quisque sed molestie nunc. Sed venenatis ante at quam tristique commodo. Nam eu mauris consectetur, fringilla est vel, lacinia urna. Nunc congue est nec diam hendrerit, bibendum vestibulum quam condimentum. Nunc volutpat urna in mi semper, nec consectetur nulla tempus."

// === 1.2
const loremArray = lorem.split(" ");

console.log(`There are ${loremArray.length} words in these paragraphs.`);

// === 1.3
function countWord(word, array){
  let totalCount=0;
  for (let i=0; i<array.length; i++){
    let u=array[i].toLowerCase();
    if(u===word){
      totalCount+=1
    }
  }
  console.log(`The word "${word}" appears ${totalCount} times.`)
}

countWord("et", loremArray);

// === BONUS 2
const sentenceToCheck = "Esope reste ici et se repose";

function palindrome(string){
  let sentence = string.toLowerCase();
  let sentenceCompact = sentence.split(" ").join("");
  let sentenceReverse = "";
  for (i=0; i<sentenceCompact.length; i++){
    sentenceReverse += `${sentenceCompact[i]}`
  }
  if (sentenceCompact===sentenceReverse){
    console.log(`"${string}" is a palindrome !`)
  } else console.log ("Sorry... Not this time.")
}

palindrome(sentenceToCheck);