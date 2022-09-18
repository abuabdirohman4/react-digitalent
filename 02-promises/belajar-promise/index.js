const phoneticAlphabet = ["Alpha", "Bravo", "Delta"];

// TODO: Kode untuk menambahkan item Charlie pada index ke-2
// phoneticAlphabet.push('Charlie');
// phoneticAlphabet.unshift('Charlie');
phoneticAlphabet.splice(2, 1, 'Charlie');
// phoneticAlphabet.splice(2, 0, 'Charlie');
console.log(phoneticAlphabet);

const artistsAndSongs = {
    "Keyakizaka46": ["Silent Majority"],
    "Blackpink": ["How You Like That", "Ice Cream"],
    "JKT48": ["Rapsodi", "Heavy Rotation"],
    "Twice": ["What is Love?"],
}

artistsAndSongs["Babymetal"] = ["Gimme chocolate"];
delete artistsAndSongs["Keyakizaka46"];
artistsAndSongs["Blackpink"].push("Rose - Gone");

console.log(artistsAndSongs);