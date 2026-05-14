

const strArr = ["hello", "world", "hi", "javascript"];

function findLongestWord(words) {
    let longestWord = "";
    for (let i=0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord(strArr));
console.log(findLongestWord(["Ragnar", "Joshua", "Sophie "]));