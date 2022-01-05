let people = ["Greg", "Mary", "Devon", "James"];

//1:
console.log(`For Loop:`);
for (i = 0; i < people.length; i++){
    console.log(people[i]);
};

console.log(`forEach Loop:`);
people.forEach(function(names){
    console.log(names);
});

//2:
people.shift();

//3:
people.pop();

//4:
people.unshift("Matt");

// 5:
people.push("Christian");

//6:
// forEach does not work:
// https://masteringjs.io/tutorials/fundamentals/foreach-break

// people.forEach(function(names){
//     console.log(names);
//     if (names === "Mary")
//     {
//         break;
//     }
// });

for (i = 0; i < people.length; i++){
    console.log(people[i]);
    if (people[i] === "Mary"){
        break;
    }

};

//7: not Mary and Matt --> Not done
let people2 =["Greg", "Mary", "Devon", "James", "Matt", "Christian"];
let sliceStart = 0;
let sliceEnd = 0;

let maryIndex = people2.indexOf("Mary")
let mattIndex = people2.indexOf("Matt")
let copyPeople = people2.slice(0, maryIndex - 1)

console.log(`${copyPeople}`);

//array.slice(start, end)

//8:

let indexOfMary = people.indexOf("Mary");
console.log(indexOfMary);

//9:
let indexOfFoo = people.indexOf("Foo");
console.log(indexOfFoo);