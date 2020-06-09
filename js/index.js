// // Iteration 1: Names and Input

// console.log('This is me doing a lab!!!')

// // 1.1
// // let hacker1 = 'Lorel'
// // let hacker1 = "Lorel"
// let hacker1 = `Lorel`

// // 1.2
// // console.log('The drivers name is ' + hacker1) // string concatenation
// console.log(`The driver's name is ${hacker1}`) // string interpolation

// // 1.3
// let hacker2 = 'Luis'

// // 1.4
// console.log(`The navigator's name ${hacker2}`)

// // Iteration 2: Conditionals
// if (hacker1.length > hacker2.length){
//     console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
// } else if (hacker2.length > hacker1.length){
//     console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
// } else if (hacker2.length === hacker1.length){
//     console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
// }

// // if(1 == '1') // true
// // if(1 === '1') // false

// // Iteration 3: Loops

// // 3.1
// let hacker3 = '';
// let loops = ''
// // i++ is the same as i = i + 1 or i += 1
// for(let i=0; i<hacker1.length; i++) { // L1: i=0 L2: i=1 L3: i=2 L4: i=3 L5: i=4
//     // console.log(`Loop ${i+1} i = ${i} current char: ${hacker1[i]}`)
//     // loops += `Loop ${i+1} i = ${i} current char: ${hacker1[i]} `
//     // console.log(hacker1[i].toLocaleUpperCase() + ' ')
//     // hacker3 += hacker1[i].toLocaleUpperCase() + ' '
//     hacker3 = hacker3 + hacker1[i].toLocaleUpperCase() + ' '
//     // console.log(hacker3)
// }
// // console.log(hacker3)
// console.log(loops)

// // David's solution 3.1
// // var name = `${hacker1.split('').join(' ')}`;
// // var uppercased = name.toUpperCase();
// //   console.log(uppercased);

// // 3.2
// let hacker5 = '';
// // i-- same as i = i - 1 or i -= i
// for(let i=hacker2.length-1; i>=0; i--){ // hacker2[3]
//     hacker5 += hacker2[i]
//     // hacker5 = hacker5 + hacker2[i]
// }
// console.log(hacker5)

// // 3.3

// // Solution 1
// console.log(hacker1, hacker2)

// for(let i=0; (i<hacker1.length && i<hacker2.length); i++) {
//     if(hacker1 === hacker2){
//         console.log(`What?! You both have the same name?`)
//         break; // exit the loop
//     } else if(hacker1[i] < hacker2[i]){
//         console.log(`The driver's name goes first.`);
//         break;
//     } else if(hacker2[i] < hacker1[i]) {
//         console.log(`Yo, the navigator goes first definitely.`);
//         break;
//     }
// }

// // Solution 2
// // console.log('-=-=-=-=-=-')
// // console.log('b'.localeCompare('b'))
// hacker1 = 'ariel'
// hacker2 = 'ariel'

// // if localeCompare returns 1 than hacker2 goes after hacker1
// // if localeCompaer return -1 than hacker1 goes after hacker2
// // if they are the same then localeCompares return 0
// let sum = hacker1.toUpperCase().localeCompare(hacker2.toLocaleUpperCase())

// console.log(sum)

// if(sum < 0) {
//     console.log(`The hacker1 name goes first.`);
// } else if(sum > 0) {
//     console.log(`Yo, the hacker2 goes first definitely.`);
// } else if(sum === 0) {
//     console.log(`What?! You both have the same name?`)
// }

// // Bonus 1
// let paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor ac turpis et elementum. Cras euismod vitae ante a efficitur. Donec ultrices gravida nunc, a suscipit mi bibendum vel. Nullam non justo ac mauris mattis interdum. Phasellus eros mi, rutrum vitae convallis sit amet, feugiat sit amet diam. Morbi non tristique diam. Nullam condimentum gravida viverra. Nunc egestas mauris non quam molestie, in posuere nunc varius. Vestibulum vehicula ac ipsum quis luctus. Vivamus vulputate metus at nunc feugiat, vitae tempus ligula tristique. Curabitur sit amet augue eu metus dictum dignissim. Donec ullamcorper mattis massa et imperdiet. Curabitur ut orci sed nunc egestas consequat. Fusce pretium interdum eros, eu vulputate ipsum tempor eu. Donec ligula justo, iaculis consequat nulla sed, hendrerit commodo elit. Ut laoreet lectus at justo pharetra, sed hendrerit erat molestie.

// Praesent fringilla, ligula ac blandit ultrices, quam ex semper tortor, a fermentum augue lectus nec nisl. Quisque tempor, diam id luctus pharetra, ante lacus auctor urna, eget fringilla nulla libero at odio. In ullamcorper, dolor vel facilisis aliquam, eros lectus sagittis leo, quis bibendum ipsum neque sed sapien. Nulla imperdiet magna diam, vel blandit est ornare non. Duis non sem scelerisque, ullamcorper libero nec, imperdiet justo. In non lobortis lacus. Quisque vitae condimentum velit, rutrum feugiat tellus. Donec id lacus ex. Curabitur eget odio mattis, eleifend est quis, pharetra velit. Aliquam nec turpis vitae nunc dapibus ultricies consectetur vel risus.

// Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent rhoncus enim magna, a luctus dolor gravida ac. Integer aliquet sit amet velit in tristique. Integer euismod elementum elit at scelerisque. Praesent rutrum nunc id ex sodales, ut pharetra arcu elementum. Etiam elementum est massa, eget tempor urna facilisis eu. Quisque at augue a nunc viverra semper. Sed posuere ipsum pharetra, consectetur eros vitae, sodales neque. Morbi ex ligula, gravida vel ullamcorper id, vulputate quis nisl. Donec non lacinia arcu, quis euismod velit. Proin laoreet in magna quis consectetur. Pellentesque dolor ex, vestibulum sit amet leo non, sollicitudin consequat elit. Donec a justo in massa convallis accumsan porta et ligula. Vivamus viverra dignissim quam ac aliquet. Donec in volutpat ex.`

// const wordCounter = paragraphs => {
// 	console.log(paragraphs.split(' ').length)
// }

// wordCounter(paragraphs)

// let str = "hello hi hola"
// console.log(str.split(' '))

// const etCounter = paragraphs =>{
//     let counter = 0
//     // for(let i=0; i<paragraphs.split(' ').length; i++){
//     //     if(paragraphs.split(' ')[i] === 'et'){
//     //         counter += 1
//     //         // counter++
//     //         // counter = counter + 1
//     //     }
//     // }
// 	for (let word of paragraphs.split(' ')){
// 		if (word =='et'){
// 			counter +=1
// 		}
// 	}
// 	console.log(counter)
// }

// // let str = 'Hi $ 1245 how are you???'
// // str = 'tihowareyou'
// // str.split('') = ['t', 'i', 'h']
// // str.join('') = 'tihowareyou'
// // let str2 = 
// // Bonus 2
// function palindrome(str) {
//     let str1 = str.toLowerCase().replace(/[\W_]/g, '');
//     let str2 = str1.split('').reverse().join('');
//     if (str1 === str2) console.log('The variable is a Palindrome');
//     else console.log("The variable is not a Palindrome");
// }

// let string1 = 'put it up'

// palindrome(string1)

