function akarPangkat2() {
  const prompt = require("prompt-sync")();
  var userInput = prompt("Masukkan bilangan genap yang akan di akar pangkat 2-kan:");

  if (userInput === null || userInput.trim() === '') {
    console.log("Anda belum memasukkan angka.");
    return akarPangkat2();
  } else {
    var x = parseInt(userInput);

    if (x < 0) {
      console.log("Tidak bisa input bilangan negatif");
      return akarPangkat2();
    } else if (x % 2 !== 0) {
      console.log("Tidak bisa input bilangan ganjil");
      return akarPangkat2();
    } else {
      return Math.sqrt(x); //function sqrt(x)
    }
  }
}

var hasil = akarPangkat2();
console.log(hasil);