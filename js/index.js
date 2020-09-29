// Iteration 1: Names and Input
const hacker1 = "Mar";
console.log(`The driver's name ${hacker1}`);
const hacker2 = "Adrià";
console.log(`The navigator's name ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops
for (let i = 0; i <= hacker1.length; i++) {
    console.log(hacker1.charAt(i).toUpperCase());
}

let result = ""
for (let i = hacker2.length; i >= 0; i--) {
result += hacker2.charAt(i)
}
console.log(result)

if (hacker1 < hacker2){
    console.log("The driver's name goes first.");
  } else if (hacker1 > hacker2) {
        console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }

  //Bonus 1
 const lorem ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl lacus, viverra sed lorem eu, pretium bibendum ex. Pellentesque eleifend tincidunt magna. Mauris elementum pulvinar neque, non interdum urna lobortis a. Morbi felis velit, accumsan vel ante at, eleifend ornare massa. Maecenas molestie ex a ornare tempor. Proin aliquam convallis purus ut consectetur. Vestibulum blandit massa scelerisque vestibulum laoreet. Integer eleifend ipsum ligula, id euismod ex accumsan at. Aliquam lorem neque, ullamcorper a orci ut, lobortis tempor dui. Vivamus hendrerit justo sed libero feugiat vehicula. Suspendisse vulputate purus vel tellus ornare maximus sit amet quis lacus. Quisque fermentum ligula non feugiat ullamcorper. Nulla tempor ligula vitae risus vehicula, et vulputate augue sollicitudin. Proin ac feugiat nisl. Etiam sit amet erat id libero ornare viverra. In risus mi, feugiat egestas blandit nec, pulvinar non magna. Vestibulum id placerat urna, et mollis metus. In volutpat sem suscipit odio viverra condimentum. Pellentesque sit amet risus vel mi pretium finibus a at nibh. Fusce at pellentesque quam. Vivamus pretium gravida justo, sit amet finibus leo pulvinar vel. Aliquam elit turpis, laoreet sed nisi et, pretium facilisis nibh. Proin cursus a neque sed condimentum. Morbi maximus ornare nisl id tristique. Etiam mattis, eros at sagittis pellentesque, diam ligula lobortis nulla, in dictum justo mi sed velit. Praesent a ante purus. Maecenas vitae varius elit, sit amet commodo neque. Sed sit amet velit commodo, finibus ipsum non, ultricies mi. Mauris tincidunt, urna nec ornare iaculis, massa ex consectetur urna, congue euismod sapien sapien vel ante. Mauris eget faucibus arcu. Nam venenatis magna eu elit egestas laoreet. Vivamus quis aliquam nunc. Duis efficitur ante et hendrerit elementum. Vestibulum convallis leo quis turpis sollicitudin commodo. Aliquam faucibus sem neque, ut venenatis massa posuere volutpat. Maecenas sed nibh ultricies, congue nulla sit amet, mollis nisl."


function WordCount(str) {
  return str.split(" ").length;
}
console.log(WordCount(`${lorem}`));
WordCount(lorem);

function EtCount(str) {
    return str.split(" et ").length-1 + str.split(" et,").length-1 + str.split(" et.").length-1 + + str.split("Et ").length-1;
  }
  console.log(EtCount(`${lorem}`));

  //Bonus 2
  const phraseToCheck = "race car";
  let phraseToCheckUpper = phraseToCheck.toUpperCase().split(" ").join("")
  console.log(phraseToCheckUpper)
  let resultUpper = ""
  for (let i = phraseToCheckUpper.length; i >= 0; i--) {
  resultUpper += phraseToCheckUpper.charAt(i).toUpperCase();
  }
  phraseToCheckUpper === resultUpper