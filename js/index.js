// Iteration 1: Names and Input
console.log("I'm ready!");

const hacker1 = "Harry"
console.log(hacker1);

let hacker2= "Jon"
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

const longerName = function (name1, name2) {
    if (name1.length > name2.length) {
      console.log("The driver has the longest name, it has " + name1.length + " characters.");
    } else if (name1.length < name2.length) {
      console.log("It seems that the navigator has the longest name, it has " + name2.length + " characters.");
    } else {
      console.log('Wow, you both have equally long names, " + name1.length + " characters!');
    }
  }
  
  longerName(hacker1, hacker2)
  hacker2= "Jonathan"
  longerName(hacker1, hacker2)

// Iteration 3: Loops

const newHacker1= hacker1.split("").join(" ");
console.log(newHacker1.toUpperCase());

// Bonus 1

const parragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat a ligula non blandit. Nullam ut nibh sit amet lorem dictum malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed commodo velit turpis, sed vestibulum ex vestibulum ac. Fusce interdum pretium elit a condimentum. Suspendisse sed ornare nunc. Fusce sit amet congue mi, eu molestie erat. Fusce elit nunc, congue id efficitur ac, scelerisque et tellus. Donec ante risus, laoreet quis justo sed, pulvinar blandit dui. Nulla eu orci convallis dolor auctor efficitur quis sit amet nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ut volutpat nulla, sit amet mattis diam. Maecenas porttitor rutrum sapien vel venenatis. Cras semper elit eget turpis blandit sagittis. Nulla cursus nibh sapien, eu aliquam nisi vulputate id. Proin neque turpis, tempor sit amet urna quis, egestas tincidunt nulla. Aliquam arcu erat, vehicula ut magna et, egestas dapibus massa. Fusce quis blandit risus, ut faucibus tellus. Fusce quis dui ac orci convallis gravida ac in urna. Fusce gravida arcu quam, sit amet vulputate odio sollicitudin nec. Duis auctor nec orci vitae faucibus. Phasellus vel sagittis mi, vel ultrices lacus. Quisque ut sodales elit, in sagittis purus. Sed laoreet, velit et dapibus lacinia, nulla nulla porta justo, eu pulvinar orci dui nec eros. Sed lobortis viverra sapien, sit amet mattis odio pellentesque in. Mauris lobortis velit venenatis, aliquam justo nec, pharetra enim. Vestibulum sed tincidunt ipsum, at sodales arcu. Morbi malesuada placerat elementum. Phasellus semper tortor sollicitudin sem dictum, nec aliquam massa egestas."

let wordCount = parragraphs.split(" ").length
console.log(wordCount);


let etCount = parragraphs.split(" et ").length;
console.log(etCount);


