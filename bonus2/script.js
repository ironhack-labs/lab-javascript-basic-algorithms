function checkPalindrome() {
    let phrase = document.getElementById("phrase").value;
    let cleanPhrase = "";

    for (let i = 0; i < phrase.length; i++) {
        let char = phrase[i].toLowerCase();
        if (char >= "a" && char <= "z") {
            cleanPhrase += char;
        }
    }

    let isPalindrome = true;
    for (let i = 0; i < cleanPhrase.length / 2; i++) {
        if (cleanPhrase[i] !== cleanPhrase[cleanPhrase.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        document.getElementById("result").innerText = " It is a palindrome"
    } else {
        document.getElementById("result").innerText = " it is not a palindrome"
    }
}