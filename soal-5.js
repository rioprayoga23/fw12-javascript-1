const changeConsonant = (word) => {
  let result = "";

  if (typeof word == "string") {
    for (let i = 0; i < word.length; i++) {
      word[i] == "a" ? (result += "o") : (result += word[i]);
    }
  } else {
    return "teks harus bertipe string";
  }
  return result;
};

console.log(changeConsonant("jakarta"));
console.log(changeConsonant(0));
