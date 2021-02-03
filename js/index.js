console.log("I'm ready");

// Iteration 1: Names and Input

let hacker1 = "Antoine";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Augustin";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
 console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
 console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
   console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops

function upper(name) {
     let progress="";
  for (let i=0; i<name.length; i++) {
    name[i];
    if (i!=name.length-1) {
      progress=progress+name[i]+" ";
    } else {
      progress += name[i];
      }
    //  progress += name[i];
    // if (i !== name.length-1) progress +=  " ";
  }
console.log(progress.toUpperCase())
}
upper(hacker1)


function reverse(name) {
    var progress="";
  for (let i=name.length-1; i>=0; i--) {
    name[i];
    progress=progress+name[i];
  }
console.log(progress)
}
reverse(hacker1)


function lexico(name1, name2) {
    if(name1 === name2) {
        console.log(`What?! You both have the same name?`);
    }
    if (name1 < name2) {
      console.log(`The driver's name goes first.`) ;
    }
    else {
      console.log(`Yo, the navigator goes first definitely.`)
      }
}
lexico(hacker1,hacker2)

// Bonus 1

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis mi, egestas non sollicitudin in, rhoncus non dolor. Aliquam sit amet ullamcorper erat, non pulvinar eros. Vivamus interdum efficitur libero eget interdum. Vivamus nunc risus, hendrerit at eros convallis, rhoncus molestie magna. Integer volutpat tincidunt elit, sed sagittis ipsum vestibulum in. Cras quis ex pulvinar mauris molestie fringilla. Duis non condimentum lectus. Duis ultrices velit non metus finibus vestibulum. Morbi et lectus egestas enim dapibus scelerisque. Sed enim quam, laoreet quis mollis viverra, condimentum eu lacus. Phasellus mattis at dolor a vestibulum. Curabitur elit dui, varius a metus quis, faucibus mattis lectus. Cras non venenatis ex, ac aliquet leo. Praesent sed blandit velit. Maecenas euismod erat tellus, id ultricies risus eleifend nec. Sed mollis venenatis augue vel rhoncus. Nam lacinia quam vel nulla volutpat dignissim sed quis diam. Sed rutrum pharetra venenatis. Donec vitae risus laoreet, vehicula quam et, eleifend elit. Maecenas fermentum mi et mauris dapibus, sit amet eleifend leo mattis. Nulla sodales lorem in ante hendrerit, vel hendrerit lectus dignissim. Nunc at auctor erat. Pellentesque ullamcorper neque quis velit semper vulputate. Cras sit amet congue tortor, pretium suscipit ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Curabitur vitae orci condimentum, dictum sem nec, facilisis urna. Sed convallis orci in tincidunt aliquam. Aenean tempor accumsan sem et fermentum. Nulla finibus egestas elit nec consequat."

function wordCounter(text) {
  let count = 1; //Pour anticiper le fait qu'il n'y a pas d'espace après le dernier mot
  for (let i=0;i<text.length;i++) {
    if(text.charAt(i) === " ") {
      count+=1;
    }
  }
  console.log(`The number of words is ${count}`)
}
wordCounter(lorem);

function occ(text,word) { // text est la chaine dans laquelle chercher le mot word
  console.log(`There are ${text.split(word).length-1} occurences of the word ${word.toUpperCase()} in the following ${text.toUpperCase()}`)
}
occ(lorem,"et")


// Bonus 2

