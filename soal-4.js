const palindrome2 = (word) => {
  let result = "";

  if (word.length > 2) {
    for (let i = 0; i < word.length; i++) {
      result += word[word.length - (i + 1)];
    }
  } else {
    return "Letters must be more than 2 characters";
  }

  return word == result ? `${result} is Palindrome` : `Not palindrome`;
};

console.log(palindrome2("ada"));
