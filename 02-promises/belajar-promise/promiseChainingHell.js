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

const arrayKata = ['Hello', 'World', 'Coba', 'Gabung', 'Kata']

// kita mulai bikin chaining promisenya
// INI ADALALH CONTOH YANG TIDAK BAIK (PROMISE HELL !!)
// [1] Promise
gabungKata(arrayKata[0])
    .then(dataHasilResolve => {
        // Lalu di sini kita akan mencoba untuk manggil promise lagi
        // [2] Promise
        gabungKata(`${dataHasilResolve} ${arrayKata[1]}`)
            .then((dataHasilResolve) => {
                // [3] Promise
                gabungKata(`${dataHasilResolve} ${arrayKata[2]}`)
                    .then(dataHasilResolve => {
                        console.log(dataHasilResolve)
                    })
                    .catch((errorReject => {
                        console.log(errorReject);
                    }))
            })
            .catch((errorReject) => {
            console.log(errorReject)
        })
    })
    .catch((errorReject) => {
        console.log(errorReject)
    })