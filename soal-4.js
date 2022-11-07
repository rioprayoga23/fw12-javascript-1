//! cara pertama
const palindrome = (word) => {
  let isPalindrome = "";

  if (word.length > 2) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] == word[word.length - (i + 1)]) {
        isPalindrome += word[i];
      } else {
        return "Not Palindrome";
      }
    }
    return `${isPalindrome} is palindrome`;
  } else {
    return "Letters must be more than 2 characters";
  }
};

//! cara kedua
const palindrome2 = (word) => {
  let isPalindrome = "";

  if (word.length > 2) {
    for (let i = 0; i < word.length; i++) {
      isPalindrome += word[word.length - (i + 1)];
    }
  } else {
    return "Letters must be more than 2 characters";
  }

  const result =
    word == isPalindrome ? `${isPalindrome} is Palindrome` : `Not palindrome`;

  return result;
};

console.log(palindrome("malam"));
console.log(palindrome2("katak"));
