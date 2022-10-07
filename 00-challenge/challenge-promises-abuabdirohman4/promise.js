const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const theaterIXX = await promiseTheaterIXX()
    const theaterVGC = await promiseTheaterVGC()
    const theater = [...theaterIXX, ...theaterVGC]
    let jumlahEmosi = 0

    for (hasilSetelahMenonton of theater) if (hasilSetelahMenonton.hasil == emosi) jumlahEmosi++
    
    return jumlahEmosi
  } catch (error) {
    return error;
  }
};

module.exports = {
  promiseOutput,
};
