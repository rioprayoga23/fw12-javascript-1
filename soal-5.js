const konsonan = (word) => {
  let result = "";

  if (typeof word == "string") {
    for (let i = 0; i < word.length; i++) {
      word[i] == "a" ? (result += "o") : (result += word[i]);
    }
  } else {
    console.log("teks harus bertipe string");
  }
  console.log(result);
};

konsonan("jakarta");
konsonan(0);
