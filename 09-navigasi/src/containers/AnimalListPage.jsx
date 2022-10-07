import React, { useState, useEffect } from "react";
// Import Link dan Outlet di sini
import { Link, Outlet, useSearchParams } from "react-router-dom";

import { getAnimals } from "../data/animal.js";

function AnimalListPage() {
  const [animals, setAnimals] = useState([]);

  let [queryStrings, setQueryStrings] = useSearchParams();

  useEffect(() => {
    let fetchedAnimals = getAnimals();

    if (queryStrings.get("filter") === "asc") {
      fetchedAnimals = fetchedAnimals.sort((a, b) => a.price - b.price);
    } else if (queryStrings.get("filter") === "desc") {
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
            <li key={animal.animalId}>
              <Link to={`/animals/${animal.animalId}`}>
                {animal.animalId} - {animal.price}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {/* Jangan lupa gunakan outlet di sini (anggap seperti slot yang bisa dimasukkan apa saja) */}
        <Outlet />
      </div>
    </>
  );
}

export default AnimalListPage;
