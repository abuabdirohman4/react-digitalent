const fs = require('fs/promises')

// fs.readFile("./dummy2.json", "utf-8")
//     .then((suksesBaca) => console.log(JSON.parse(suksesBaca)))
//     .catch((errorBaca) => console.log(errorBaca))

// Async Await
// fungsi utama HARUS MENGGUNAKAN "async"
const main = async () => {
    try {
        const suksesBaca = await fs.readFile('./dummy.json', 'utf-8')
        const suksesBaca2 = await fs.readFile('./dummy2.json', 'utf-8')

        console.log(JSON.parse(suksesBaca), JSON.parse(suksesBaca2))
    } catch (errorBaca) {
        console.log(errorBaca);
    }
}

main()