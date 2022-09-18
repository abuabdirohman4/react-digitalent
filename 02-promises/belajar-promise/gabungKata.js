const gabungKata = (kataYangInginDigabung) => {
    return new Promise(
        (resolve, reject) => {
            if (kataYangInginDigabung === null) {
                reject('Maaf, terjadi error !')
            }
            else {
                resolve(kataYangInginDigabung)
            }
        }
    )
}

const arrayKata = ['Hello', 'World', 'Coba', 'Gabung', 'Kata'];

// IIFE (Immediately Invoke Funxtion Expression)
(async () => {
    try {
        const hasil1 = await gabungKata(arrayKata[0])
        const hasilGabungan1 = await gabungKata(hasil1 + " " + arrayKata[1])
        const hasilGabungan2 = await gabungKata(hasilGabungan1 + " " + arrayKata[2])
        const hasilGabungan3 = await gabungKata(hasilGabungan2 + " " + arrayKata[3])
        const hasilGabungan4 = await gabungKata(hasilGabungan3 + " " + arrayKata[4])
        console.log(hasilGabungan4);
    } catch (error) {
        console.log(error)
    }
})()