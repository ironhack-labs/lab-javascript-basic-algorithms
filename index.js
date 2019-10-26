// Iteration 1
let hacker1= "Jerlissa";
console.log(`The driver's name is ${hacker1}`);
let hacker2= "Stanley";
console.log(`The navigator's name is ${hacker2}`)

//Interation 2
if(hacker1.length > hacker2.length){
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters `);
} else if (hacker2.length > hacker1.length){
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length===hacker2.length){
  console.log(`Wow, you both got equally long names, ${hacker1.length} characters`)
}

//Iteration 3
//Print driver's name in all caps and spaces in between each letter
console.log(hacker1.toUpperCase().split("").join(" "));

//print navigator's name in reverse
console.log(hacker1.split("").reverse().join(""));

//Print in lexicographic order
console.log(hacker1.localeCompare(hacker2))
console.log(hacker2.localeCompare(hacker1))

let driver = hacker1.localeCompare(hacker2)
let navigator = hacker2.localeCompare(hacker1)

if (driver > navigator){
  console.log(`The driver's name goes first.`);
} else if (navigator > driver) {
  console.log(`Yo, the navigator goes first definitely.`);
} else console.log(`What?! You both got the same name?`);
/* navigator is larger because lexicographic number is a posutive number. 
Return Values: It returns a positive number if the reference string is lexicographically greater than the compare string and negative number if the reference string is lexicographically smaller than the compare string and zero (0) if the compare and reference strings are equivalent.*/

let paragraphText = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
+
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
+
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

console.log(paragraphText)
console.log(paragraphText.length)



console.log((paragraphText.match(/et/g) || []).length);