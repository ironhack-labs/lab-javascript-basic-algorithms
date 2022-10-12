// Iteration 1: Names and Input
//
let hacker1 = "Amelie";
console.log(`"The driver's name is ${hacker1}"`);

let hacker2 = "Chamseddine";
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let capitalHacker1 = "";
for (i = 0; i < hacker1.length; i++) {
  capitalHacker1 += hacker1[i].toUpperCase() + " ";
}
console.log(`"${capitalHacker1}"`);

let reverseHacker2 = "";
for (i = hacker2.length - 1; i >= 0; i--) {
  reverseHacker2 += hacker2[i];
}
console.log(`"${reverseHacker2}"`);

/*for (i = 0; i < hacker2[i].length; i++) {
  for (j = 0; j < hacker1[j].length; j++) {
    if (hacker1[j] < hacker2[i]) {
      console.log("The driver's name goes first");
    } else if (hacker1[j] > hacker2[i]) {
      console.log("Yo, the navigator goes first definitely");
    } else {
      console.log("What?! You both have the same name?");
    }
  }
}*/

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else {
  for (i = 0; i < hacker2.length; i++) {
    if (hacker1[i] < hacker2[i]) {
      console.log("The driver's name goes first");
      break;
    } else {
      console.log("Yo, the navigator goes first definitely");
      break;
    }
  }
}

// Bonus 1

let randomParagraphs =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus lobortis cursus. Cras a augue nec libero tristique ornare. Nunc porttitor odio id sapien rhoncus lobortis. Ut id gravida justo. Nunc elementum venenatis est aliquam porttitor. Aenean ultricies eu sem nec viverra. Proin molestie eu quam sit amet finibus. Phasellus sem est, euismod in hendrerit nec, iaculis at orci. Sed lorem sapien, venenatis eget maximus in, ullamcorper eget tellus. Sed ut placerat odio. Suspendisse at nunc vitae justo mattis congue vitae nec magna. Nunc hendrerit ut lacus eu gravida. Vestibulum sed lacus id purus volutpat scelerisque sed nec massa. Nam hendrerit diam nec scelerisque congue. Aenean scelerisque justo vitae posuere ultrices. Nulla facilisi. Praesent sodales, eros in dapibus viverra, libero orci tincidunt turpis, ut tincidunt risus massa a sem. Vestibulum pretium turpis vitae erat congue mattis. Nulla id lobortis nisi. Curabitur eu vestibulum diam, eu mollis tortor. Aenean sed elit dapibus, luctus elit id, dapibus sapien. Aenean et sapien vel lorem tristique scelerisque a in neque. Nullam vestibulum libero neque. Integer scelerisque orci odio, at malesuada ex dictum at. Ut porta metus ac nisi egestas, sit amet cursus risus interdum. Pellentesque vel lorem at purus commodo pharetra sed a magna. Sed quis dui ligula. Integer ut quam a felis luctus placerat at a lectus. Morbi dapibus congue dolor. Aenean finibus at libero ut semper.";
console.log(randomParagraphs.split(" ").length);

console.log(randomParagraphs.match(/et/g).length);
