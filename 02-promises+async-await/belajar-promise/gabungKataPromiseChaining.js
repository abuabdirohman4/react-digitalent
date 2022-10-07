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
    .then((data) => gabungKata(data + " " + arrayKata[1]))
    .then((data) => gabungKata(data + " " + arrayKata[2]))
    .then((data) => gabungKata(data + " " + arrayKata[3]))
    .then((data) => gabungKata(data + " " + arrayKata[4]))
    .then((data) => console.log(data))
    .catch((errorReject) => console.log(errorReject))