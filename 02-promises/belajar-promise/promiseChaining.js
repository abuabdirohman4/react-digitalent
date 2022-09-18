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
    .then((dataHasilResolvePertama) => gabungKata(dataHasilResolvePertama + " " + arrayKata[1]))
    .then((dataHasilResolveKedua) => gabungKata(dataHasilResolveKedua + " " + arrayKata[2]))
    .then((data) => gabungKata(data + " " + arrayKata[3]))
    .then((data) => gabungKata(data + " " + arrayKata[4]))
    .then((dataHasilSemua) => console.log(dataHasilSemua))
    .catch((errorReject) => console.log(errorReject))