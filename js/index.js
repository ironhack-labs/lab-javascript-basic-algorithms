// Iteration 1: Names and Input

let hacker1 = 'Akmal'

console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Shamil';

console.log(`The navigator's name is ${hacker2}`)

//Iteration 2: Conditionals


if(hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

//Iteration 3: Loops

let driver = '';

for(let i = 0; i < hacker1.length; i++) {
   driver += hacker1[i].toUpperCase() + ' ';
}

console.log(driver)

let navigator = '';

for(let i = hacker2.length - 1; i >= 0; i--) {
   navigator += hacker2[i];
}

console.log(navigator)

let name = ["Akmal", "Shamil"];
name.sort(function(a, b) {
    return a.localeCompare(b);
});
console.log(name); 


// Bonus Time!

// Bonus 1:

let loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dignissim ligula. Fusce porta urna placerat lorem pretium tristique. Duis ac felis ac orci facilisis tristique vitae sed lorem. Mauris semper massa sed risus fermentum, semper congue dolor blandit. Suspendisse rhoncus consectetur nunc, id porttitor quam tristique in. Sed tempus neque ut diam tincidunt, non aliquet tortor suscipit. Nulla rhoncus faucibus eleifend. Sed non sapien et velit cursus suscipit. Duis nisl enim, scelerisque quis magna nec, sollicitudin congue ipsum. Aliquam tempus massa vel odio vehicula sollicitudin. Morbi varius efficitur faucibus. Praesent nec lacus in odio dignissim suscipit eget eu tellus. Phasellus elementum id urna a vulputate. Cras bibendum a mi at maximus. Maecenas efficitur eros id erat accumsan lobortis. Phasellus eu efficitur quam, ut pretium leo.In hac habitasse platea dictumst. Aenean at maximus risus. Vivamus egestas magna ac feugiat mollis. Donec ullamcorper lorem at tincidunt condimentum. Suspendisse rhoncus arcu vitae est ullamcorper, eu commodo urna pretium. Suspendisse potenti. Vivamus aliquet lacinia lectus ut eleifend. Suspendisse ullamcorper tempor sagittis. Ut porta semper erat eget finibus. Donec dolor dolor, finibus ornare odio in, dictum congue risus. Curabitur nulla neque, congue a libero ut, euismod finibus turpis. Suspendisse faucibus, sapien a fringilla viverra, libero lorem ultricies dui, accumsan facilisis dolor justo at metus. Suspendisse ullamcorper sem erat, in commodo ligula semper vel. Donec non tempor turpis, sed aliquet libero. Nullam tristique lectus non dolor commodo, sed efficitur augue facilisis. Vestibulum risus libero, semper et molestie id, iaculis sed erat. Pellentesque justo leo, porta ut auctor at, tristique eget nisi. Maecenas lobortis sagittis arcu, eget faucibus velit egestas eu. Phasellus ornare augue turpis, at laoreet ligula pharetra ac. Maecenas lacinia semper mauris vel tincidunt. Praesent finibus mauris ex, ut condimentum mi vulputate nec. Aliquam id mauris ac nulla sollicitudin rhoncus. Nulla egestas orci id lacus facilisis, pellentesque elementum ipsum tincidunt. Nunc in lorem leo. Maecenas scelerisque, felis eu aliquam vulputate, sapien urna porta turpis, vitae fringilla ipsum massa ut augue. Vestibulum eget iaculis felis.'

console.log(loremText.length);

console.log(loremText.includes["et"])