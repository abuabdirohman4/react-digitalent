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
    .then((dataHasilResolvePertama) => {
        return gabungKata(dataHasilResolvePertama + " " + arrayKata[1])
    })
    .then((dataHasilResolveKedua) => {
        return gabungKata(dataHasilResolveKedua + " " + arrayKata[2])
    })
    .then((dataHasilResolveKetiga) => {
        console.log(dataHasilResolveKetiga)
    })
    .catch((errorReject) => {
        console.log(errorReject)
    })