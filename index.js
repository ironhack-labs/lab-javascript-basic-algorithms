// Iteration 1: Names and Input

const hacker1 = "ahmed"
const hacker2 = "maedhbh"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`

)
// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if (hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
}



// Iteration 3: Loops

//3.1

let result ='';

for (let i = 0 ; i<hacker1.length; i++){
    const hacker1Letter = hacker1[i].toUpperCase()
    result += hacker1Letter+" "
}

console.log(result);

//3.2

let resultReverse ='';

for (let i = 0 ; i<hacker1.length; i++){
    const hacker1Letter = hacker1[hacker1.length - i - 1].toUpperCase()
    resultReverse += hacker1Letter+" "
}

console.log(resultReverse);

//3.3 comparaison of strings

if(hacker1.localeCompare(hacker2)){
    console.log(`The driver's name goes first.`)
}else if (hacker2.localeCompare(hacker1)){
    console.log(`Yo, the navigator goes first, definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}


console.log(hacker1 > hacker2) // --> false
console.log(hacker1 < hacker2) // --> true


// Bonus Time!
// 

longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae leo eget metus sodales tincidunt id quis ligula. Vivamus tempor mauris eros, quis sollicitudin elit dignissim eleifend. Mauris quis commodo purus. Aenean ultricies ante mauris, ac lobortis nisl congue nec. Morbi dui dui, congue ac bibendum a, varius non magna. Morbi sed semper tortor. In facilisis congue nulla, viverra auctor sem luctus sed. Praesent ullamcorper dolor eu arcu tempus aliquam. Suspendisse cursus efficitur nunc. Aenean vel arcu ac ipsum sagittis pellentesque. Pellentesque porta tortor quis risus pretium ornare. Proin rutrum congue eros eu efficitur.

Pellentesque sodales elit id arcu condimentum, rhoncus euismod nisi ultrices. Nam suscipit tempus nunc vitae feugiat. Sed porta, sem in sollicitudin aliquam, dui nisi accumsan nisl, vel ornare erat lorem ut arcu. Etiam id diam est. Suspendisse nec tristique odio, sed cursus nisi. Ut rhoncus elit ac orci sagittis malesuada. Curabitur sit amet rutrum mauris. Nulla sagittis bibendum mi sed egestas. Donec ac purus cursus, dignissim nunc vitae, cursus tellus. Aliquam ac lectus venenatis lorem suscipit egestas. Suspendisse turpis risus, imperdiet at nunc a, feugiat accumsan nulla. In faucibus ante tempor ante maximus imperdiet.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut dui leo, blandit vel erat ac, ultrices condimentum arcu. Maecenas non maximus odio. Ut metus nisl, venenatis a purus nec, auctor pulvinar est. Duis lacus mauris, suscipit ac sem eget, hendrerit blandit est. Aliquam lorem tellus, vestibulum et condimentum ac, posuere nec ligula. Pellentesque cursus dapibus est et venenatis. Curabitur porta bibendum placerat. Aliquam pellentesque neque vehicula enim placerat, et ultrices libero bibendum. Nulla commodo, nunc tincidunt finibus lobortis, turpis leo lacinia lacus, a laoreet odio risus eget tortor. Aenean velit orci, auctor in purus eget, mattis egestas nibh. Aliquam rutrum feugiat odio, ac faucibus est gravida eget. Phasellus eget lectus vitae dui imperdiet placerat. Donec volutpat arcu non tincidunt sagittis.`

paragraph1 =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae leo eget metus sodales tincidunt id quis ligula. Vivamus tempor mauris eros, quis sollicitudin elit dignissim eleifend. Mauris quis commodo purus. Aenean ultricies ante mauris, ac lobortis nisl congue nec. Morbi dui dui, congue ac bibendum a, varius non magna. Morbi sed semper tortor. In facilisis congue nulla, viverra auctor sem luctus sed. Praesent ullamcorper dolor eu arcu tempus aliquam. Suspendisse cursus efficitur nunc. Aenean vel arcu ac ipsum sagittis pellentesque. Pellentesque porta tortor quis risus pretium ornare. Proin rutrum congue eros eu efficitur.`
paragraph2 =`Pellentesque sodales elit id arcu condimentum, rhoncus euismod nisi ultrices. Nam suscipit tempus nunc vitae feugiat. Sed porta, sem in sollicitudin aliquam, dui nisi accumsan nisl, vel ornare erat lorem ut arcu. Etiam id diam est. Suspendisse nec tristique odio, sed cursus nisi. Ut rhoncus elit ac orci sagittis malesuada. Curabitur sit amet rutrum mauris. Nulla sagittis bibendum mi sed egestas. Donec ac purus cursus, dignissim nunc vitae, cursus tellus. Aliquam ac lectus venenatis lorem suscipit egestas. Suspendisse turpis risus, imperdiet at nunc a, feugiat accumsan nulla. In faucibus ante tempor ante maximus imperdiet.`
paragraph3 =`Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut dui leo, blandit vel erat ac, ultrices condimentum arcu. Maecenas non maximus odio. Ut metus nisl, venenatis a purus nec, auctor pulvinar est. Duis lacus mauris, suscipit ac sem eget, hendrerit blandit est. Aliquam lorem tellus, vestibulum et condimentum ac, posuere nec ligula. Pellentesque cursus dapibus est et venenatis. Curabitur porta bibendum placerat. Aliquam pellentesque neque vehicula enim placerat, et ultrices libero bibendum. Nulla commodo, nunc tincidunt finibus lobortis, turpis leo lacinia lacus, a laoreet odio risus eget tortor. Aenean velit orci, auctor in purus eget, mattis egestas nibh. Aliquam rutrum feugiat odio, ac faucibus est gravida eget. Phasellus eget lectus vitae dui imperdiet placerat. Donec volutpat arcu non tincidunt sagittis.`



function spaceErase(str){
    let indexNoSpace = 0
    for (let i =0 ; i<str.length ; i++){
        if(str.slice(i,i+1) != " "){
            indexNoSpace = i ;
        }
    }
    return str.slice(indexNoSpace)
}

// this function doesn't work because we were succesfull to count the words unless the text starts with spaces.
// we wanted to create spaceErase use spaceErase(str) instead of str
// now it works using trim() !!!!!

function countWords(str) {
  let count = 0;

  for (let i = 0; i < str.trim().length; i++) {
    if (str.trim().slice(i, i + 1) === ' ' && str.trim().slice(i + 1, i + 2) != ' ') {
      count += 1;
    }
  }
  return count + 1;
}


const nb = countWords(paragraph1) + countWords(paragraph2) + countWords(paragraph3)
console.log("after splitting into 3 paragraphs : " + nb); // 310
console.log("direct count of words in the long text : " + countWords(longText)); // 308
// maybe 2 additional caracters backslash n.

example = "word1 word2 word3" 
example2 = "    word1 word2 3 4 5 6"

console.log(countWords(example));
console.log(countWords(example2));


//this function works unless the word is in the begining or at the end.

function countStringWords(str,pattern) {
    
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str.slice(i, i + 2+ pattern.length) === ` ${pattern} `) {
        count += 1;
      }
    }
    return count;
  }
  
  shortText0 = "fjkshdfk et true et true true f"
  shortText1 = "fjkshdfk et true et true true f et"
  shortText2 = "et fjkshdfk et true et true true f"

  console.log(countStringWords(shortText0,"et"))
  console.log(countStringWords(shortText1,"et"))
  console.log(countStringWords(shortText2,"et"))

  console.log(countStringWords(longText,"et"))


  // Bonus 2
