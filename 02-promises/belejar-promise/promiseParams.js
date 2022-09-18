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

gabungKata('Hello')
    // kondisi ketika berhasilnya
    .then(
        // callback
        (dataHasilResolve) => {
            console.log(dataHasilResolve)
        }
    )
    .catch(
        // callback
        (pesanDitolak) => {
            console.log("err : ", pesanDitolak);
        }
    )