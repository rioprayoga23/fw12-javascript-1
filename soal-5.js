const changeConsonant = (word) => {
  let result = "";

  if (typeof word == "string") {
    for (let i = 0; i < word.length; i++) {
      word[i] == "a" ? (result += "o") : (result += word[i]);
    }
  } else {
    return "Word Must Be String";
  }
  return result;
};

console.log(changeConsonant("Jakarta"));
console.log(changeConsonant(0));
