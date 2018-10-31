// Names and Input
// let hacker1 = prompt("what's your name?")
//   console.log(`the drivers name is ${hacker1}`)
// let hacker2 = prompt("what's your name?")
//   console.log(`the navigators name is ${hacker2}`)

// //Conditionals
// if (hacker1.length > hacker2.length){
//   console.log(`driver has the longest name, it has ${hacker1.length} characters`)
// }
// else if (hacker2.length > hacker1.length){
//   console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
// }
// else if (hacker1.length === hacker2.length)
//     console.log(`wow you both got equally long names, ${hacker1.length} characters`)

// for (i = 0; i < hacker1.length; i++) {
//   console.log(hacker1.toUpperCase());
//   console.log(hacker1.split());
// }

// function reverseString(hacker2) {
//     return hacker2.split("").reverse().join("");
// }

let park = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, odio vel dolorem maiores pariatur eos, blanditiis ipsa ad numquam, autem suscipit voluptatum. Soluta nam unde excepturi et omnis ullam fugiat?
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, cumque praesentium. Ipsam velit inventore, tempora fugiat quas placeat enim incidunt necessitatibus similique repudiandae libero assumenda atque illo rem quae fugit?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi maxime numquam possimus nostrum! Id eveniet suscipit sequi quibusdam omnis consectetur hic quia exercitationem saepe maiores delectus, eos autem culpa porro!`

function WordCount(park) {
 return park.split(" ").length;
}
  console.log(WordCount(park));

  // function WordCount(str) {
  //   return park.split("et")
  // }
  //   console.log(WordCount(park));

  let count = (park.match(/in/g) || []).length;
  console.log(count);


// // Lorem ipsum generator
