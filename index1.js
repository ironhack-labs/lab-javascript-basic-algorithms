const theTotal = 19;

function sumAllNumbers(num1, num2, num3) {
    const theTotal = num1 + num2 + num3;
    console.log("the total is ....", theTotal);
}

const subtractAllNumbers = (x, y, z) => {
    const theTotal = x - y - z;
    console.log("numbers subtracted equal ...", theTotal);
};

sumAllNumbers(5, 12, 33);
subtractAllNumbers(100, 30, 22);

const ourArr = [2, 3, 44, 87, 100];
ourArr.pop();
ourArr.shift();
ourArr.push("hello");
ourArr.unshift("World");
ourArr.splice(2, 2, "this is new", "this is also new"); 

const ourStr = "ragnar is sleeping";
console.log(ourStr.split(" ").join(" ")); 

const numArr = [3, 7, 12];
const numArr2 = [99, 77, 12];

function addNums(pizza) {
    let total = 0;
    for (let i = 0; i < pizza.length; i++) {
        total += pizza[i];
    }
    return total;
}

console.log(addNums(numArr2));

const averageNums = (pizza) => {
    let total = addNums(pizza);
    return total / pizza.length;
};

console.log(averageNums(numArr));

const arrOfNums = [3, 7, 12, 99, 77, 12];

function findBiggestNum(pizza) {
    let biggest = pizza[0];     
    for (let i = 1; i < pizza.length; i++) {
        if (pizza[i] > biggest) {
            biggest = pizza[i];
        }
    }
    return biggest;
}

console.log(findBiggestNum(arrOfNums));

const strArr = ["Ragnar", "Joshua", "Sophie"];
const nums = [3, 7, 12];

nums.forEach(function (currentNumber, _index, _wholeArray) {
    console.log(currentNumber);
});

const duplicatesArr = ['hello', 'world', 'hello', 'javascript'];

function removeDuplicateNames(array) {
    const uniqueArray = [];
    array.forEach((aWord) => {
        if (uniqueArray.includes(aWord) === false) {
            uniqueArray.push(aWord);
        }
    });
    return uniqueArray;
}

console.log(removeDuplicateNames(duplicatesArr));   

function findLongestWord(words) {
    if (words.length === 0) return null;
    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord(strArr));
