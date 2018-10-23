// Names and Input
const hacker1 = "jesco"
console.log("the Driver's name is " + hacker1);

const hacker2 = prompt("whats your name");
console.log("the navigator's name is " + hacker2);


//Conditionals
let longerhacker = "same";
let lexicalfirst = "same"

function lengthCompare(){
if(hacker1.length > hacker2.length){
    longerhacker = hacker1
    console.log("the Driver (" +hacker1+ ") has the longer name, it has "+hacker1.length+" characters." )
}else if(hacker1.length < hacker2.length){
    longerhacker = hacker2
    console.log("you, the navigator (" +hacker2+ ") have the longer name, it has "+hacker1.length+" characters.")
}else{
    console.log("wow you both got equally long names, "+hacker1.length+" characters")
    longerhacker = hacker2
}
};

lengthCompare()

//basic algorithms


console.log(hacker1.toUpperCase().split("").join(" "))

console.log(hacker1.split("").reverse().join(""))

//reverse the old fashioned way
/* 
let nameReversed = []
for(i=0; i<hacker1.length; i++){
nameReversed.unshift(hacker1[i])
}
console.log(nameReversed.join(""))
*/


function sortAlphabetically(){
    let i = 0
    while(i<longerhacker.length){
        if(hacker1[i]<hacker2[i]){
            lexicalfirst = hacker1
            console.log("The driver's name (" +lexicalfirst+ ") goes first" )
            return hacker1
        }else if(hacker1[i]>hacker2[i]){
            lexicalfirst = hacker2
            console.log("Yo, the navigator (" +lexicalfirst+ ") goes first definitely" )
            return hacker2
        }else{
            i++
        }

      
        
    }
    if(longerhacker == "same"){
        console.log("What?! You both got the same name?")
    }else{
        console.log(longerhacker + " has a longer name so he goes last, even though the letters are the same.")
    }
    return lexicalfirst
console.log(lexicalfirst)
}

sortAlphabetically()






function palindromeChecker(){
let string = document.querySelector("#pali").value;
let alphabet = "abcdefghijklmnopqrstuvwxyz"

console.log(string)

 let stringsSplit = string.toLowerCase().split("")

 let clearedString = stringsSplit.filter(letter => alphabet.split("").includes(letter));

let reversedString = stringsSplit.filter(letter => alphabet.split("").includes(letter)).reverse();


 if(reversedString.join("") == clearedString.join("")){
   console.log("'"+ string+ "'"+ " is a palindrome")
 }else{
   console.log(string + " is not a palindrome, sorry")
 }
}

//loremIpsum

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut lorem convallis, malesuada orci eu, pharetra elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis risus eget odio rhoncus iaculis. Vivamus ultrices, ligula suscipit tincidunt interdum, risus odio accumsan felis, ut imperdiet dui enim in mauris. Donec mollis sollicitudin venenatis. Praesent faucibus, risus nec faucibus sagittis, enim velit blandit massa, at fermentum tortor quam nec nisl. Donec commodo egestas ante non auctor. Donec ultricies risus non fringilla congue. Fusce vulputate mi eget ultrices faucibus. Praesent risus est, dignissim in ornare et, luctus eu dui. Vivamus ullamcorper faucibus nibh, sed pulvinar orci convallis sit amet. Pellentesque sit amet suscipit mi. Praesent rhoncus neque sit amet massa scelerisque rhoncus suscipit id nisi. Nullam faucibus felis nibh, non varius odio venenatis vitae. Pellentesque iaculis dolor sed pellentesque eleifend. Mauris venenatis, justo ut porttitor pretium, odio ex dapibus ex, at sodales dui felis sit amet libero.  Aenean vitae magna arcu. Aliquam vel magna faucibus, sagittis lectus quis, interdum nisl. Donec laoreet mattis nibh ac convallis. Nullam faucibus sem eu justo pulvinar lobortis. Aenean efficitur leo vitae porta bibendum. Integer nec purus erat. Pellentesque fermentum gravida elementum. Ut orci metus, pretium eu nisl sit amet, consectetur sollicitudin ante. Maecenas a nisi massa. Mauris tristique dui orci, et consectetur augue semper nec. Pellentesque fringilla placerat elit sed dictum. Pellentesque lacus quam, fringilla eget porta in, fermentum in leo. Nulla erat diam, elementum nec quam nec, ultricies varius ligula. Sed faucibus tincidunt sapien, in hendrerit nisl. Nulla bibendum neque id nisi accumsan maximus. Vivamus venenatis nunc id purus dictum convallis. Morbi eu sagittis ipsum, vitae lacinia eros. Etiam et orci id libero varius efficitur. Nulla diam odio, egestas ut mi ut, laoreet euismod justo. Morbi vitae efficitur mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum tincidunt eget massa sed venenatis."

let loremByWord = lorem.split(" ")
let counter = 0;

function etChecker(){


for(let i = 0; i<loremByWord.length; i++){
    if(loremByWord[i] == "et"){
        counter+=1
    }
}
console.log(counter + " ets are in the text")
}

etChecker()
console.log(loremByWord.length+ " words are in the text")


function bubbleSort(){
    const arr = ["aaron", "cody", "bob", "cliff", "felicia", "anna"]; 
    let storage;
    
    for(let j = 0; j<arr.length; j++){
      for(let i = 0; i<arr.length; i++){
      if(arr[i]>arr[i+1]){
        storage = arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=storage;
      }
      }
    }
    console.log(arr);
}
