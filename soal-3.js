const mtk = 100;
const bahasaIndonesia = 100;
const bahasaInggris = 100;
const ipa = 100;

if (
  typeof mtk === "number" &&
  mtk > 0 &&
  typeof bahasaIndonesia === "number" &&
  bahasaIndonesia > 0 &&
  typeof bahasaInggris === "number" &&
  bahasaInggris > 0 &&
  typeof ipa === "number" &&
  ipa > 0
) {
  const average = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

  if (average >= 90 && average <= 100) {
    console.log("A");
  } else if (average >= 80 && average <= 89) {
    console.log("B");
  } else if (average >= 70 && average <= 79) {
    console.log("C");
  } else if (average >= 60 && average <= 69) {
    console.log("D");
  } else if (average >= 0 && average <= 59) {
    console.log("E");
  }
} else {
  console.log("Mapel harus bertipe number dan harus lebih besar dari 0");
}
