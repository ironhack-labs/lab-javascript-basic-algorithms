// Iteration 1: Names and Input
const hacker1 = 'Fred'
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "faith"
console.log(`navigate's is faith ${hacker2}`)

// Iteration 2: Condition

        if (hacker1 === hacker2) {
            console.log("The driver and the user have the same name.");
        } else if (hacker1.length > hacker2.length) {
            console.log("The driver's name is longer than the user's name.");
        } else if (hacker1.length < hacker2.length) {
            console.log("The user's name is longer than the driver's name.");
        } else {
            console.log("The driver and the user have names of the same length, but they are different.");
        }


// Iteration 3: Loops

  let driverName = "JOHN";
  let navigatorName = "john";
  
  let driverChars = "";
  for (let i = 0; i < driverName.length; i++) {
    driverChars += driverName[i];
    if (i < driverName.length - 1) {
      driverChars += " ";
    }
  }
  console.log(driverChars);
  
  //
  let reversedNavigatorName = "";
  for (let i = navigatorName.length - 1; i >= 0; i--) {
    reversedNavigatorName += navigatorName[i];
  }
  console.log(reversedNavigatorName);
  
  //
  if (driverName < navigatorName) {
    console.log(
      `${driverName} comes before ${navigatorName} in lexicographic order.`
    );
  } else {
    console.log(
      `${navigatorName} comes before ${driverName} in lexicographic order.`
    );
  }
  


    

