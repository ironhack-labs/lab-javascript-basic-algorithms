// Iteration 1: Names and Input

const hacker1 = "John";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Jack";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }
  else if(hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
       }

// Iteration 3: Loops

let output = "";
for(let i=0; i<hacker1.length; i++) {
  if(i === 0) {
   output += hacker1[i].toUpperCase();  
  } else {
  output += ' ' + hacker1[i].toUpperCase(); 
}
}

console.log(output);

output = "";
for(let j= Number(hacker1.length -1); j >= 0; j--) {
  
    output += hacker1[j];  
}

console.log(output);

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);
  } else if (hacker1 > hacker2) {
    console.log(`Yo, the navigator goes first definitely`);
  } else {
    console.log(`What?! You both have the same name?`)
    }

    //BONUS 1

    const txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eu odio ullamcorper, a tincidunt elit finibus. Phasellus convallis molestie est, a iaculis risus vulputate quis. Nam maximus nibh a arcu tincidunt, eget efficitur diam mollis. Cras varius sem id massa varius, non ultricies libero iaculis. Nulla auctor ligula eu dui pretium tincidunt. Nam nec sapien ut dui pharetra accumsan. In ullamcorper hendrerit suscipit. Integer mattis vestibulum metus sit amet accumsan. Nulla nec fringilla libero. Suspendisse auctor in est sed aliquet. Suspendisse a nisi nec est aliquet aliquet.Proin a ligula porttitor ipsum scelerisque ornare ac sed turpis. Nulla ac ipsum augue. Vestibulum tortor leo, rutrum non erat et, tristique porttitor sem. Aliquam elementum ipsum orci, eget tempor nisl commodo ut. Morbi lobortis enim quam, ac mollis neque pharetra et. Suspendisse vitae turpis a neque ultrices dignissim sed a massa. Nam est lectus, viverra eu lacinia id, mollis sed orci. Duis sit amet pulvinar enim, et condimentum tortor. Fusce sit amet pretium sem. Duis scelerisque ornare arcu, in suscipit ante malesuada eu. Ut fringilla interdum iaculis. Sed lorem sem, efficitur non tempor sit amet, sodales non quam. Aenean lobortis, dolor eget condimentum semper, lectus odio viverra elit, non volutpat est diam pellentesque enim. Maecenas luctus justo tortor, ac dapibus neque venenatis in. Aliquam euismod gravida justo, sed varius leo accumsan eu. Duis scelerisque ullamcorper nisl, et mattis leo sagittis et. Duis et odio feugiat, semper massa in, mattis tellus. Sed molestie est nisi, eu vehicula sapien vehicula id. Nulla tempus suscipit urna et dignissim. Suspendisse fermentum orci nunc, congue scelerisque nibh consequat in. Fusce consequat facilisis dignissim. In hac habitasse platea dictumst."


let text = txt;
text = text.split(".").join("");
text = text.split(",").join("");
text = text.split(" ");
console.log(text.length);

