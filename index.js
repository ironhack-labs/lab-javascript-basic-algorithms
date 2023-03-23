const Hacker1 = "Moriah";

const greeting = 'The drivers name is ${Hacker1}';

console.log(greeting);

const Hacker2 = "Christian";

const greeting2 ='The navigators name is ${Hacker2}';

console.log(greeting2);


    if (Hacker1.length >= Hacker2.length)
        {console.log("The driver has the longest name, it has XX characters.")}
    
    else if (Hacker2.length >= Hacker1.length)
        {console.log("It seems that the navigator has the longest name, it has XX characters.")}

    else if (Hacker2.length === Hacker1.length)
        {console.log('What?! You both have the same name?')}


const last = Hacker1.length - 1; 
 
for (let i = 0; i <= last; i++) {
  const char = Hacker1[i];
  console.log(char);
}


const index = Hacker2.length - 1; 
 
for (let i = index; i >= 0; i--) {
  const char = Hacker2[i];
  console.log(char);
}

hacker1.localeCompare(hacker2)


const compareValue = hacker1.localeCompare(hacker2)


if(compareValue < 0) {
    console.log("The drivers name goes first");
} else if (compareValue > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}




var longText = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget consectetur velit. Donec et accumsan tortor. In hac habitasse platea dictumst. Etiam tempus ut ipsum ut scelerisque. Sed sagittis tellus vel dolor pulvinar, sit amet gravida massa tincidunt. Morbi lobortis feugiat dui, nec egestas erat consequat in. Cras ut mi sapien. Nulla cursus sapien et justo hendrerit pulvinar. Praesent posuere, enim nec facilisis lacinia, felis dolor gravida erat, ut tincidunt nulla dolor a lectus. Nulla eget aliquet nisl, in volutpat purus. Maecenas id risus finibus, bibendum massa eu, pellentesque dui. Vestibulum nunc arcu, venenatis vitae egestas non, fermentum vitae nibh. Aliquam finibus, quam nec blandit accumsan, leo turpis imperdiet sapien, in cursus velit nulla et nulla. Suspendisse euismod, turpis at suscipit aliquet, metus elit luctus mauris, in porttitor orci nisl sed massa. Mauris non lectus id diam sollicitudin tincidunt. Quisque urna mi, egestas quis convallis eu, efficitur in odio. Vestibulum convallis lacus sit amet enim venenatis, ut efficitur nisl mollis. Cras vitae ipsum condimentum, ornare arcu vitae, porttitor lorem. Morbi quis fermentum sem. Aliquam vitae vestibulum libero. Aenean et metus ultrices, faucibus massa ac, suscipit tortor. Suspendisse potenti. Curabitur eu lorem tellus. Vivamus vel risus non lectus ultrices accumsan non in est. Aenean consectetur at sapien vitae porta. Etiam tristique neque purus, in malesuada nunc porttitor ac. Aliquam rutrum elit vitae sollicitudin euismod. Etiam vel turpis quis libero gravida pellentesque at eu est. Nunc sed maximus nulla. In sagittis diam augue, imperdiet interdum tortor mollis eget. Vivamus in nulla et nibh imperdiet lacinia. Proin fringilla faucibus auctor. Phasellus lacinia velit ac euismod consectetur. Proin ultricies quis leo sed elementum. "

let wordsCount = longText.split(" ").length

console.log (wordsCount)

let etCount = longText.split("et").length

console.log(etCount)
