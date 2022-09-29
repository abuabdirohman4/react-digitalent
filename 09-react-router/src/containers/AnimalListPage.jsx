import React, { useState, useEffect } from "react";
// Import useSearchParams
import { useSearchParams } from "react-router-dom";

import { getAnimals } from "../data/animal.js";

function AnimalListPage() {
  const [animals, setAnimals] = useState([]);

  // di sini kita menggunakan useSearchParams
  // useSearchParams mirip dengan state
  // menerima 1 parameter (array) dengan 2 indeks:
  // indeks 0 = value
  // indeks 1 = setValue nya

  // di sini kita tidak menggunakan setter-nya
  let [queryStrings, setQueryStrings] = useSearchParams();

  useEffect(() => {
    let fetchedAnimals = getAnimals();

    // queryString bisa memiliki fungsi get
    // Ada fungsi apa saja?

    // bisa dicoba baca di
    //   https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams

    // Warning: Bacaan berat !

    if (queryStrings.get("filter") === "asc") {
      // Sort by price asc
      fetchedAnimals = fetchedAnimals.sort((a, b) => a.price - b.price);
    } else if (queryStrings.get("filter") === "desc") {
      // Sort by price desc
      fetchedAnimals = fetchedAnimals.sort((a, b) => b.price - a.price);
    }

    setAnimals(fetchedAnimals);
  }, []);

  return (
    <>
      <main>
        <div>Filter secara: {queryStrings.get("filter")}</div>
      </main>
      <div>Listing Binatang: </div>
      <div>
        <ul>
          {animals.map((animal) => (
            <li key={animal.animalId}>{animal.animalId} - {animal.price}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AnimalListPage;
