// di sini kita akan menggunakan state dan effect
import React, { useEffect, useState } from "react";
// supaya bisa menangkap parameter, gunakan useParams
import { useParams } from "react-router-dom";

import { getAnimal } from "../data/animal.js";

function AnimalDetailPage() {
  const [animal, setAnimal] = useState({});

  // tangkap params di sini (bentuknya adalah object);
  let params = useParams();
  // Karena sekarang kita ingin mengambil data pada saat component
  // ini dibuat, maka kita akan menggunakan useEffect
  useEffect(
    () => {
      // Ingat, pada route kita deskripsikan `:animalId`
      // sehingga kita tangkap di sini dengan `params.animalId`
      const chosenAnimal = getAnimal(params.animalId);
      setAnimal(chosenAnimal);
      
    },
    []
    // ingat karena dependency listnya tidak tergantung manapun
    // kita gunakan kosong
  );

  return (
    <>
      {/* Apabila animalnya ada, kita akan ambil name dan imageUrl-nya */}
      {/* Perhatikan ada lambang "?" yang menandakan optional */}
      {/* Hanya akan dibaca apabila animal tidak undefined */}
      <div>Nama Binatang: {animal?.name}</div>
      <img src={animal?.imageUrl} />
    </>
  );
}

export default AnimalDetailPage;
