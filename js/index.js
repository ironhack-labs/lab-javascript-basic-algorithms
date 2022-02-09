const hacker1 = "Chris";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Jose";
console.log(`The navigator's name is ${hacker2}.`);



if (hacker1.length > hacker2.length) {
  console.log(`The driver has a longer name, it has ${hacker1.length} characters`)
  }  else if (hacker2.length > hacker1.length) {
    console.log(`The navigator's name is longer, it has ${hacker2.length} characters`)
  }  else if (hacker2.length === hacker1.length) {
    console.log(`Hey both names have ${hacker2.length} characters`)
  }  else{
    console.log('Dude something is not working properly')
  };
 
let string = ""
let space = " "
    for (let i=0; i<hacker1.length; i++){
     string += hacker1[i].toUpperCase() + space
      }
  console.log (string)

    for (let i=hacker2.length-1; i>=0; i--){
      string +=hacker2[i]
    }
  console.log(string)


  let driver = hacker1.toLowerCase()
  let navigator = hacker2.toLowerCase()

  if (driver.localeCompare(navigator) > 0){
    console.log(`The driver's name goes first.`)
  } else if (driver.localeCompare(navigator) < 0){
    console.log(`Yo, the navigator goes first definitely.`)
  } else if (driver.localeCompare(navigator) === 0) {
    console.log(`What?! You both have the same name?`)
  } else {
    console.log('something went wrong apparently')
  };







//This part was made with Chris

// if(hacker1.length > hacker2.length) {
//   console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
// } else if (hacker1.length < hacker2.length) {
//   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
// } else {
//   console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
// }

// let string =""
// let text;
// for (let i=0; i<hacker1.length; i++){
// text = hacker1[i].toUpperCase() + ' ';
//   string += text;
// }
// console.log(string)

// for (let i=hacker2.length-1; i>=0; i--){
//   text = hacker2[i]
//   string += text
// }
// console.log (string)
         

// let hacker1Lower = hacker1.toLowerCase()
// let hacker2Lower = hacker2.toLowerCase()
// // const order = hacker1.toLowerCase()
// //                      .localeCompare(hacker2.toLowerCase)
// const exp = hacker1Lower.localeCompare(hacker2Lower)
// switch (exp){
// case -1:
//     console.log(`The driver's name goes first.`)
//     break;
//   case 1:
//    console.log(`Yo, the navigator goes first definitely.`)
//     break;
//   case 0:
//     console.log('What?! You both have the same name?')
// };