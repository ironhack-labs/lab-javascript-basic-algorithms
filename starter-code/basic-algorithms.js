var hacker1 = "Léa";

var hacker2 = "Elin";


console.log("The driver's name is " + hacker1 + ".");
console.log("The navigator's name is " + hacker2 + ".");

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has" + hacker1.length + "characters.");
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator has the longest name, it has" + " " + hacker2.length + " " + "characters.");
} else {
  console.log("Wow, you both got equally long names, " + hacker1.length + "characters.");
}
// end of name and input and conditionals

for (let char in hacker1) {
  console.log(hacker1[char].toUpperCase() + " ");
}

console.log(hacker2.split("").reverse().join(""));


var comp = hacker1.localeCompare(hacker2)

console.log(comp);

if (comp < 0) {
  console.log("The navigator name goes first !");
} else if (comp > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You got both have the same name ?");
}

// end of loops


function checkPalindrome(nom) {
  var n = nom.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)| |/g, "");
  console.log(n);
  var nn = n.toLowerCase();
  if (nn == nn.split("").reverse().join("")) {
    console.log("It's a palindrome !");
  } else {
    console.log("Try again, it's not a palindrome !")
  }
}

console.log(checkPalindrome("Was it a car or a cat I saw?"));

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit ante, congue et maximus nec, viverra quis justo. Nam tristique auctor faucibus. Morbi varius luctus rhoncus. Morbi eget quam id arcu tempor rutrum vel ac ipsum. Praesent dolor tellus, aliquam ut nulla at, sollicitudin facilisis ex. Vivamus libero est, varius sed lectus vitae, tempus congue leo. Cras et enim dolor. Duis ullamcorper, nibh nec pretium luctus, eros nisl vestibulum metus, a luctus sapien orci quis sapien. Sed elementum, sem a accumsan ullamcorper, dui arcu dignissim nunc, eget fermentum dolor est et lorem. Sed felis urna, pretium vitae metus sed, porttitor congue quam. Aenean egestas lectus congue placerat interdum. Duis pretium augue laoreet tempor porttitor. Donec suscipit commodo lorem in venenatis. Proin vehicula mollis neque in aliquam. Fusce lacinia erat non iaculis sollicitudin. Suspendisse potenti. Curabitur consectetur, nibh vitae placerat convallis, lectus augue convallis diam, a egestas felis nisi nec magna. Fusce viverra pretium augue, at sollicitudin arcu convallis ut. Mauris dapibus eros gravida odio efficitur, a facilisis ante feugiat. Donec sit amet lectus quis mi viverra tempus. Nunc malesuada rutrum quam vel gravida. Nunc lobortis neque sed orci luctus ultricies. Cras placerat lorem et nunc dapibus luctus. Pellentesque porttitor blandit ullamcorper. Praesent tempus quis lectus vel auctor. Aenean in semper lacus, in imperdiet velit. Morbi massa dui, eleifend vel massa at, mollis tristique nunc. In non arcu vitae mi dignissim imperdiet. Ut fermentum massa nulla, sit amet suscipit leo ultricies ut. In a auctor ipsum, quis semper justo. Nam mi lectus, sodales at felis nec, vestibulum auctor velit. Curabitur lacus enim, lobortis eget semper a, molestie eget enim. Phasellus posuere nulla eget volutpat sollicitudin. Proin ut dui in elit porta fermentum gravida id massa. Donec nec ante vitae ante viverra tristique. Integer lobortis turpis id metus pretium imperdiet. Nunc quis ante non sem vulputate congue. Mauris laoreet cursus tortor non congue. Donec vitae turpis ipsum. In accumsan blandit eleifend. In lectus massa, ultricies a metus vitae, iaculis finibus orci. Suspendisse dignissim, magna in mollis viverra, felis leo consectetur libero, sed gravida urna odio ac nisl. Suspendisse potenti."

console.log(text);

var listeMots = text.split(" ");
console.log(listeMots);

console.log(listeMots.length);

function countWord(list, mot) {
  var count = 0;
  for (i = 0; i < list.length; i++) {

    if (list[i] == mot) {
      count += 1;
      console.log("Match!")
    }
  }
  console.log(count)
}

countWord(listeMots, 'et');

// end of "Bonus Time!""