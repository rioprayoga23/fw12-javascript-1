const palindrome2 = (word) => {
  let result = ""; //ada

  if (word.length > 2) {
    for (let i = 0; i < word.length; i++) {
      result += word[word.length - (i + 1)];
    }
  } else {
    return "Huruf harus lebih dari 2 karakter";
  }

  const cek =
    word == result ? `${result} adalah Palindrome` : `bukan palindrome`;
  console.log(cek);
};

palindrome2("ada");
