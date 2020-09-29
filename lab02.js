
let hacker1 = "Ona"
console.log("The driver’s name is " + hacker1)
let hacker2 = "Mathilde"
console.log("The navigator’s name is " + hacker2);
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if(hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else{console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)}
/*
console.log(hacker1.toUpperCase().split(‘’).join(' ’)); // “o n a” */
let hacker1modify = "";
for(let i = 0; i < hacker1.length; i++){
hacker1modify = hacker1modify + hacker1[i] + " ";
}
console.log(hacker1modify.toUpperCase());
let hacker2modify = "";
for(let i = hacker2.length-1; i >= 0; i--){
hacker2modify = hacker2modify + hacker2[i];
}
console.log(hacker2modify);
/*
for(let i = 0; i < hacker1.length; i++){
  for(let j = 0; j < hacker2.length; j++){
     switch(hacker1[i]){
       case hacker1[i] > hacker2[j]:
       console.log(`The driver’s name goes firts`);
       break;
       case hacker1[i] < hacker2[j]:
       console.log(`Yo, the navigator goes first definitely`);
       case hacker1[i] === hacker2[j]:
       continue;
}
}
}*/
/*
if(hacker1 === hacker2){
  console.log(`What?! You both have the same name`);
}
else {
    for(let i = 0; i < hacker1.length; i++){
        if(hacker1[i] < hacker2[i]){
          console.log(`The driver’s name goes firts`);
          console.log(hacker1);
          break;
        }
        else if(hacker1[i] > hacker2[i]){
          console.log(`Yo, the navigator goes first definitely`);
          break;
        }
    }
}*/
/*
console.log(“cris”.localeCompare(“cristina”))*/
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in tellus eu elit cursus sagittis quis vitae quam. Praesent sed auctor turpis. Mauris eget lectus tortor. Maecenas sit amet metus non neque imperdiet aliquet. Curabitur eget orci lacus. Vestibulum consequat, orci sit amet lacinia consectetur, massa magna bibendum dolor, ut molestie eros enim in velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex diam, vulputate quis feugiat id, porttitor ac nisi. In tristique ligula nec pharetra tempus.\n Aenean sodales id nisl vitae commodo. Suspendisse malesuada aliquam dignissim. In efficitur neque non bibendum condimentum. Curabitur gravida pharetra ultricies. Sed id nisi augue. Vestibulum pellentesque odio quis dolor molestie, sit amet scelerisque massa pretium. Duis magna eros, hendrerit sit amet elementum at, consectetur quis lectus. Cras vitae ipsum id nisi convallis finibus. Nullam porta aliquam dolor, ac malesuada ex semper nec.\n Fusce ut quam et magna consectetur scelerisque at sollicitudin augue. Nullam bibendum lorem et ante rutrum, at mollis est interdum. Sed ac blandit elit, non pharetra lorem. Suspendisse quis pulvinar ex, vitae commodo nisl. Duis posuere ac diam vel feugiat. Nullam lacinia vel justo eu venenatis. Aenean a turpis vehicula, consectetur lorem non, rhoncus erat. Proin justo felis, pharetra vitae vulputate non, elementum id nibh. Mauris molestie ultrices nibh, id consectetur leo iaculis nec. Praesent vestibulum ac lacus in consectetur. Vivamus enim libero, pretium quis est eget, euismod finibus risus. Suspendisse potenti. Sed ut luctus turpis, non rutrum nisl. Praesent efficitur, justo eget convallis sagittis, elit risus interdum velit, vitae vestibulum neque tellus sit amet eros. Quisque scelerisque lobortis quam quis varius. Donec mollis pulvinar lacus, eu venenatis ligula ultricies sed."

let counterWord = 1
for (let i = 0; i < lorem.length; i++){
    if(lorem[i] === " ") {
        counterWord ++
    } 
}

console.log(`There are ${counterWord} words in this variable`)


let position = lorem.indexOf(" et ")
let counterEt = 0
  if(position === -1) {
  console.log("There is no et")
  }
  else {counterEt++
  console.log(counterEt)
  }


console.log()


