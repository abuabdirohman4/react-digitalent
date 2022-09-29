// Mari kita asumsikan ini adalah dari luar
let animals = [
  {
    animalId: "A-001",
    name: "Chihuahua",
    imageUrl: "https://placedog.net/240/200",
    price: 15000,
  },
  {
    animalId: "K-001",
    name: "Persia",
    imageUrl: "https://placekitten.com/240/200",
    price: 10000,
  },
  {
    animalId: "A-002",
    name: "Munchkin",
    imageUrl: "https://via.placeholder.com/240x200",
    price: 20000,
  },
];

// Kita siapkan juga fungsi untuk mengambil / memberikan data tersebut
// Perhatikan di sini tidak menggunakan default karena kita mau export banyak

// Asumsikan ini fungsi GET
export function getAnimals() {
  return animals;
}

// Asumsikan ini fungsi GET /id
export function getAnimal(animalId) {
  return animals.find((animal) => animal.animalId === animalId);
}

// Asumsikan ini fungsi DELETE /id
export function deleteAnimal(animalId) {
  // Kita kembalikan yang id nya tidak ditemukan
  animals = animals.filter((animal) => animal.animalId !== animalId);
}
