// Iteration 1: Names and Input

let hacker1= "Dario";
let hacker2= "Michael";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log('The driver has the longest name, it has ${hacker1.length} characters.')
    }
    
    else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
    }
    
    
    else if(hacker1.length = hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
    }
    
    
// Iteration 3: Loops

console.log(`${hacker1[0].toUpperCase()} ${hacker1[1].toUpperCase()} ${hacker1[2].toUpperCase()} ${hacker1[3].toUpperCase()} ${hacker1[4].toUpperCase()}`)
    
    console.log(`${hacker2[6]} ${hacker2[5]} ${hacker2[4]} ${hacker2[3]} ${hacker2[2]} ${hacker2[1]} ${hacker2[0]}`)
    


if(hacker1[0] < hacker2[0]){
console.log(`The driver's name goes first.`)
}
else if(hacker1[0] > hacker2[0]){
console.log(`Yo, the navigator goes first definitely.`)
}
else if(hacker1[0] == hacker2[0]){
console.log(`What?! You both have the same name?`)
}

//Bonus 

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan scelerisque lectus, eu efficitur mi sollicitudin in. Vestibulum ipsum libero, semper a enim vitae, luctus consectetur eros. In sit amet est malesuada, tristique arcu id, faucibus orci. Nam tellus purus, tristique et urna ut, volutpat rutrum sapien. Nunc tincidunt massa at arcu ultricies volutpat. In eget pretium velit. Praesent lacus nunc, tempor at neque et, pharetra gravida libero. Mauris quis odio sed nibh posuere efficitur eget et nulla. Cras quis suscipit felis. Sed interdum turpis libero, quis bibendum leo pellentesque nec. Suspendisse semper at nulla quis gravida. Vivamus a elementum dui, eget tristique est. Sed vitae urna sed ipsum vulputate fermentum ut vitae massa. Proin at lectus sedmetus viverra convallis. Nunc quis interdum orci, ut ornare nunc. Vestibulum id felis augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id porta ante. Donec quam dui, lobortis vitae pulvinar sit amet, blandit ut massa. Nunc sapien nibh, luctus nec dolor et, efficitur malesuada nisl. Fusce pulvinar urna ac elit faucibus, non rhoncus dolor gravida. Vivamus in varius justo, sit amet suscipit nunc. Ut dignissim facilisis urna a hendrerit. Fusce efficitur eget tortor vel vulputate. Donec eu scelerisque odio, id rutrum erat. Fusce semper elit a sem venenatis, vitae ultrices justo scelerisque. Suspendisse ac est sed massa venenatis consectetur. Donec aliquet accumsan venenatis. Phasellus quis cursus urna, ac gravida felis. Integer risus nulla, tincidunt in ullamcorper in, congue sit amet tellus."


let loremArray= lorem.split(" ")

console.log(loremArray.length)
let counter=0;
for(i=0; i<loremArray.length; i++){
  if(loremArray[i]=== "et")
  counter++
}
console.log(counter)