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

gabungKata(arrayKata[0])
    .then(dataHasilResolve => {
        // Bungkus dalam Promise
        return new Promise((resolve, reject) => {
            gabungKata(dataHasilResolve + " " + arrayKata[1])
                .then(data => {
                    resolve(data)
                })
                 .catch((err) => {
                    reject(err)
                })
        })
    })
    // di sini kita akan menggunakan .then lagi
    .then((dataHasilResolve) => {
        return new Promise((resolve, reject) => {
            gabungKata(dataHasilResolve + " " + arrayKata[2])
                .then(data => {
                    resolve(data)
                })
                 .catch((err) => {
                    reject(err)
                })
        })
    })
    .then((dataHasilResolve) => {
        return new Promise((resolve, reject) => {
            gabungKata(dataHasilResolve + " " + arrayKata[3])
                .then(data => {
                    resolve(data)
                })
                 .catch((err) => {
                    reject(err)
                })
        })
    })
    .then((dataHasilKeseluruhan) => {
        console.log(dataHasilKeseluruhan)
    })
    .catch(errorReject => {
        console.log(errorReject);
    })