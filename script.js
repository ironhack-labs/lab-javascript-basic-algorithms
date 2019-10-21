// Variables
let hacker1 = `Julian`;
let hacker2 = `Adam`;

// Functions
function driverMessage() {
  console.log(`The driver's name is ` + hacker1);
}

function navMessage() {
  console.log(`The navigator's name is ` + hacker2);
}

function longestName() {
  let driverNameLen = hacker1.length;
  let navNameLen = hacker2.length;

  if (driverNameLen > navNameLen) {
    console.log(
      `The Driver has the longest name, it has ${driverNameLen} characters`,
    );
  } else if (navNameLen > driverNameLen) {
    console.log(
      `Yo, navigator got the longest name, it has ${navNameLen} characters`,
    );
  } else {
    console.log(
      `Wow, you both got equally long names, ${driverNameLen} characters!`,
    );
  }
}

function yellName(name) {
  let capsName = ``;
  for (let i = 0; i < name.length; i++) {
    capsName += `${name[i].toUpperCase()}`;
    if (i + 1 === name.length) {
      console.log(capsName);
    }
    capsName += ` `;
  }
}

function revName(name) {
  let reversed = ``;
  for (let eman = name.length; eman > 0; eman--) {
    reversed += name[eman - 1];
  }
  console.log(reversed);
}

function whoIsFirst() {
  let first = ``;
  let longest = ``;
  let shortestIs = ``;
  let driverFirst = `The driver's name goes first.`;
  let navFirst = `Yo, the navigator goes first definitely.`;
  let same = `What?! You both got the same name?`;

  if (hacker1.length > hacker2.length) {
    longest = hacker1.length;
    shortestIs = hacker2;
  } else {
    longest = hacker2.length;
    shortestIs = hacker1;
  }

  for (let i = 0; i < longest; i++) {
    if (hacker1[i] < hacker2[i]) {
      console.log(driverFirst);
      break;
    } else if (hacker1[i] > hacker2[i]) {
      console.log(navFirst);
      break;
    }

    if (
      hacker1[i] === hacker2[i] &&
      hacker1[i + 1] === '\0' &&
      hacker2[i + 1] === '\0'
    ) {
      console.log(same);
      break;
    } else if (shortestIs === hacker1) {
      console.log(driverFirst);
      break;
    } else if (shortestIs === hacker2) {
      console.log(navFirst);
      break;
    }
  }
}
