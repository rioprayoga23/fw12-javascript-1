const palindrome = (word) => {
  let isPalindrome = "";

  if (word.length > 2) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] == word[word.length - (i + 1)]) {
        isPalindrome += word[i];
      } else {
        return "not palindrome";
      }
    }
    return `${isPalindrome} is palindrome`;
  } else {
    return "Teks must be 2 word";
  }
};

console.log(palindrome("malam"));
