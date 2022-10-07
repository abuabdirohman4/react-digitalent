const janjiPertamaku = new Promise (
    // terima funsi yang menerima 2 parameter - resolve, reject
    (resolve, reject) => {
        // di sini kita buat kondisi suksesnya aja (tanpa ada gagal)

        setTimeout(() => {
            resolve("Hore janji saya berhasil setelah menunggu 250s")
        }, 250)
    }
)

// kita panggil deh promisenya
janjiPertamaku
    // kondisi ketika berhasil
    .then(
        // kita menerima suatu funsi yang di dalamnya menerima data
        (data) => {
            console.log(data)
        }
    )
    // karena di atas funsingya tidak ada logic untuk rejecny, maka kita tidak perlu
    // menggunakan catschny untuk menrima kondisi ketika janjinya gagal