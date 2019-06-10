let hacker1  = "will";
let hacker2 =prompt('What is your name?');



if (hacker1.length == hacker2.length){

    console.log("wow, you both got equally long names," +" "+ hacker1.length +" "+ "characters!!");
    
}
      else if(hacker2.length > hacker1.length){
        console.log("Yo, navigator got the longest name, it has" +" "+ hacker2.length +" "+ "characters");
    } 
    
    else if(hacker1.length > hacker2.length) {
        console.log("The Driver has the longest name, it has"+  hacker1.length +"characters");
    }


// console.log(hacker1.toUpperCase().split());

//loop

for(let i = 0; i < hacker2.length;i++){
    console.log(hacker2[i].toUpperCase());
}

for(let i = hacker2.length - 1; i >= 0; i--){
    console.log(hacker2[i]);
}



// let x = order.((x)=> x.localeCompare());

if (hacker1.localeCompare(hacker2)==0){
    console.log("You Guys got the same name");
}

if(hacker1.localeCompare(hacker2)==-1){
    console.log(hacker1+"'s name goes first");
}

if (hacker1.localeCompare(hacker2)==1){
    console.log("Yo, the navigator goes first definitely ")
}


let thisIsAString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium tempor blandit. Donec eu pretium ligula. Integer faucibus libero magna, nec rhoncus nunc aliquam a. Aliquam in placerat magna, et convallis risus. Ut id nibh nisl. Pellentesque consequat nunc luctus, vulputate quam eu, fermentum massa. Suspendisse ut eros ultrices, elementum tortor id, tempus libero";

let stringCount = thisIsAString;

for (let i = 0; i < stringCount.length; i++){
    
    let et = stringCount.charAt(i);

    if(et == "i"){
        let count = 0;
        
        count +=1;
    
        console.log(count);
   
}

}






