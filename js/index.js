
let hacker1 = "Miguel";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Roi";
console.log(`The navigator's name is ${hacker2}`);
//iteration 2
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}else{
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

//iteration 3.1
var hackerSplit = hacker1.split("");

 var hackerJoin = hackerSplit.join(" ");


var hackerMayus = hackerJoin.toUpperCase();
console.log(hackerMayus);
//option 2
console.log(hacker1.split("").join(" ").toUpperCase());

//iteration 3.2
console.log(hacker1.split("").reverse().join(""));

//iteration3.3

let h = hacker1.localeCompare(hacker2);
console.log(h);
function lexic(h){
  if (h === 0 ){
    console.log("What?! You both have the same name?");
  }else if(h === -1){
    console.log("The driver's name goes first.")
  }else{
    console.log(" Yo, the navigator goes first definitely.")
  }
}

lexic(h);

//bonus 1.1

let parrafs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum fermentum faucibus. Duis eget dictum lorem. Sed a quam a ex porttitor mollis et nec ipsum. Vestibulum eget convallis dui. Curabitur mollis accumsan arcu in dignissim. Fusce lobortis nibh id odio vehicula egestas. Integer sed elit eget nisi gravida lacinia luctus nec ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin efficitur erat condimentum lacus congue sodales. Phasellus eleifend neque interdum, sagittis lectus nec, ornare nisi. Pellentesque lacinia diam et orci consequat accumsan. Nunc vel tristique sapien. Integer vitae luctus elit. Morbi malesuada lacus vitae ipsum malesuada egestas. Donec rutrum dignissim tellus, id aliquam nulla. Quisque a volutpat lorem. In vitae mauris id risus dignissim vestibulum nec elementum metus. Praesent vulputate quam ligula, vitae mattis lacus fermentum interdum. Suspendisse et leo et lorem congue vestibulum a eget ipsum. Quisque eleifend sed lacus eget sodales. Aenean eget libero pulvinar, semper elit vitae, semper risus. Aliquam sed lectus et elit tempor viverra eu id sem. Vivamus vitae nunc arcu. Aenean in nibh sem. Nullam scelerisque aliquam congue. Sed suscipit dui malesuada leo fringilla elementum. In vel purus pharetra, lobortis ex vitae, commodo dui. Phasellus sit amet euismod purus, vitae malesuada felis. Quisque vitae ornare massa, eu semper magna. Duis vel tincidunt nisi. Nulla efficitur neque vitae tortor dictum pellentesque. Fusce placerat elit libero, sit amet pharetra lectus efficitur a. Etiam eu arcu ligula. Suspendisse scelerisque lacinia nunc nec dignissim. Aenean enim nulla, laoreet eu tortor et, tempor fringilla erat."
//bonus 1.2
splitOfWords = parrafs.split(" ");
numOfWords = splitOfWords.length;

console.log(numOfWords);
//bonus 1.3
etCount = 0;
etNumber = parrafs.indexOf("et");
while (etNumber != -1){
  etCount++;
  etNumber = parrafs.indexOf("et", etNumber+1);
}

console.log(etCount)

//bonus 2

let phraseToCheck = ["Amor, Roma"];

function palind(phraseToCheck){
  var re = /[^A-Za-z0-9]/g;
  var leng = phraseToCheck.length;
  for (let i=0; i<leng/2; i++){
    if (phraseToCheck[i] !== phraseToCheck[leng - 1 - i]){
      return false;
    }
  }
  return true
}

console.log(palind(phraseToCheck))

