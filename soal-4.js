const palindrome2 = (word) => {
  if (word.length > 2) {
    let result = "";

    for (let i = 0; i < word.length; i++) {
      result += word[word.length - (i + 1)];
    }

    const cek =
      word == result ? `${result} adalah Palindrome` : `bukan palindrome`;
    console.log(cek);
  } else {
    console.log("Huruf harus lebih dari 2 karakter");
  }
};

palindrome2("add");
