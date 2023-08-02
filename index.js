// Iteration 1: Names and Input
const hacker1 = "Roberto";
const hacker2 = "Johanna";

console.log(hacker1, hacker2);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The ${hacker1} has the longest name, it has ${hacker1.length} characters`);
  } else if(hacker1.length < hacker2.length){
      console.log(`The ${hacker2} has the longest name, it has ${hacker2.length} characters`);
  } else{
    console.log(`Both Ironhackers have equaly long names`);
  }

// Iteration 3: Loops
function modifyName(hacker){
    let newName = "";
    for(let i = 0;i < hacker.length;i++){
    newName += hacker[i].toUpperCase();
    newName += " ";
  }
    return newName;
  }
  
  console.log(modifyName(hacker2));
  
  function reverseName(hacker){
    let reveresedName = "";
    for(let i = hacker.length - 1;i >= 0;i--){
      reveresedName += hacker[i];
    }
    return reveresedName;
  }
  
  console.log(reverseName("Anthony"));

  if(hacker1.localeCompare(hacker2)){
    console.log("The driver's name goes first.");
  } else if(hacker2.localeCompare(hacker1)){
    conosole.log("Yo, the navigator goes first, definitely.");
  } else{
    console.log("What?! You both have the same name?");
  }


  //BONUS
  const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus non neque quis bibendum. Morbi at sagittis elit. Aliquam rutrum leo ut justo vestibulum, nec vestibulum lacus molestie. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean semper sapien vel massa ultricies, vitae malesuada ipsum finibus. Maecenas aliquam enim lectus, at semper sem gravida sed. Duis mollis magna ac gravida aliquam. Donec ornare tortor eget erat sodales, id tristique odio condimentum.

  Morbi hendrerit vitae leo vitae ultricies. Suspendisse id ultrices quam. Nam commodo lorem magna, at bibendum ipsum euismod quis. Phasellus ac eleifend ante. Nulla a dictum nibh. Aenean egestas nec ligula eget suscipit. In sed felis lobortis, hendrerit odio vitae, sagittis augue. Pellentesque rutrum, sapien non pharetra tempus, urna eros gravida tortor, sit amet dictum nulla metus vitae risus. Praesent quis egestas nunc. Sed sit amet ultricies nulla.
  
  Nullam eu sollicitudin est, in maximus lacus. Aliquam consequat felis sem, et blandit elit aliquam sit amet. Phasellus finibus leo ipsum, pulvinar hendrerit nibh maximus eget. Quisque suscipit tristique scelerisque. Ut ultricies sem justo, eu dictum ipsum molestie quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu semper nisi. Morbi a consectetur leo. Quisque convallis vitae ligula sed semper.`;
  
  
  function countEt(word){
    let count = 0;
    const etWord = "et";
    for(let i = 0;i < word.length;i++){
      const iter = word[i] + word[i + 1];
      if(iter === etWord){
        count++;
      }
    }
    return count;
  }
  
  console.log(countEt(longText));
  
  
  
  function findPalidrome(phraseToCheck){
  let secondPhrase = "";
  
  for(let i = 0; i < phraseToCheck.length;i++){
    if(phraseToCheck[i] !== " "){
      secondPhrase += phraseToCheck[i];
    }
  }
    let firstVersion = "";
    let secondVersion = "";
    for(let i = 0;i < secondPhrase.length;i++){
    firstVersion += secondPhrase[i];
  }
    for(let i = secondPhrase.length - 1;i >= 0;i--){
      secondVersion += secondPhrase[i];
    }
    if(firstVersion === secondVersion){
      return true;
    } else{
      return false;
    }
  }
  
  
  console.log(findPalidrome("step on no pets"));