console.log("I´m Ready!");

// Name and Input

let hacker1 = "alejandra";

console.log("The driver's name is " + hacker1);

let hacker2 = prompt("What´s your name?");

console.log("The navigator's name is " + hacker2);

// Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The Driver has the longest name, it has " + hacker1.length + " characters"
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "Yo, navigator got the longest name, it has " +
      hacker2.length +
      " characters"
  );
} else if (hacker1.length == hacker2.length) {
  console.log(
    "wow, you both got equally long names, " + hacker1.length + " characters!!"
  );
}

// Loops

let driverName = "";
for (i = 0; i < hacker1.length; i++) {
  driverName += hacker1[i].toUpperCase() + " ";
}
console.log(driverName);

let navigatorNameReverse = "";

for (let j = hacker2.length - 1; j >= 0; j--) {
  navigatorNameReverse += hacker2[j];
}
console.log(navigatorNameReverse);

if (hacker1 > hacker2) {
  console.log("The driver's name goes first");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely");
} else if (hacker1 === hacker2) {
  console.log("What?! You both got the same name!");
}

//Bonus Time!

//Palindrome

let inputStr = prompt("Write a palindrome ");
let space = " ";

inputStr = inputStr
  .toLocaleLowerCase()
  .split(space)
  .join("");
console.log(inputStr);

let inputStrReverse = inputStr
  .split("")
  .reverse()
  .join("");
console.log(inputStrReverse);

if (inputStr === inputStrReverse) {
  console.log("Great! You wrote a palindrome!");
} else {
  console.log("Try again");
}

// lorem ipsum generator

let lorem =
  "Lorem ipsum dolor sit amet,\
 consectetur adipiscing elit.Nulla tempus\
 enim nec diam efficitur, vel pretium erat\
 cursus.Pellentesque vel odio sed velit \
 tempus pharetra.Pellentesque non diam et\
 ex tempor lacinia.Proin augue nisi, rutrum \
 ac porttitor nec, convallis id massa.Proin \
 at ante ac felis tincidunt volutpat eu non \
 enim.Aenean commodo ante lorem, nec ornare \
 est sollicitudin ut.Donec posuere facilisis \
 nibh.Sed fermentum eu est non efficitur.In \
 sed dui fermentum, tincidunt metus et, \
 imperdiet lectus.Etiam ut dapibus ligula.\
 Nam pellentesque pellentesque ante eu porttitor.\
 Cras consequat sed elit sit amet ullamcorper.\
 Cras mattis lorem in dui dignissim, eu mattis \
 lacus dignissim.Quisque id lobortis ante.\
 Sed condimentum vestibulum elit.Duis sollicitudin \
 libero a turpis luctus, sed dapibus tortor tempus. \
 Sed ut cursus sapien.Fusce at tincidunt augue.\
 In nec ligula est.Vestibulum mi augue, accumsan \
 eget scelerisque eget, bibendum at metus.\
 Sed consectetur enim eu viverra commodo.\
 Proin sagittis neque nec vehicula eleifend.\
 Nulla eget malesuada lorem, eu auctor massa.\
 Vivamus et turpis sed odio egestas tincidunt \
 rhoncus vel velit.Mauris facilisis, nibh vel \
 porttitor facilisis, nibh nibh rhoncus lectus, \
 ut vehicula ante mauris in dui.Ut at erat sagittis, \
 dapibus mauris sit amet, scelerisque nibh.Sed orci arcu, \
 varius sed ornare tempus, vehicula nec nulla.\
 Aenean magna tellus, vestibulum sit amet sapien \
 eget, suscipit blandit eros.Duis ut felis urna.\
 Aliquam erat volutpat.Etiam eleifend finibus \
 libero nec elementum.Pellentesque finibus dolor \
 nunc, sit amet rhoncus ligula tempor et. \
 Duis ultricies nisl nec ante porttitor, at\
 lobortis diam viverra.Ut ut lacus mi.Nam \
 maximus, augue condimentum aliquet malesuada, \
 nisi lacus mollis orci, sed eleifend ex t\
 urpis in quam.Nulla ultricies turpis turpis, \
 a aliquam justo sagittis nec.Orci varius \
 natoque penatibus et magnis dis parturient \
 montes, nascetur ridiculus mus.Suspendisse \
 suscipit tempor vehicula.Donec euismod velit \
 tortor, id tempor tellus congue ac.Nullam \
 nec semper felis.Duis volutpat vehicula dui, \
 id ullamcorper mi facilisis ut";

console.log(" The number of words in the string is: " + lorem.length);

console.log(lorem.indexOf("et"));
