const fs = require('fs/promises')

// ini ceritanya suatu objek
const dataYangInginDitulis = {message : "halo dunia"}
// HARUS DIJADIKAN STRING !
const stringDataYangInginDitulis = JSON.stringify(dataYangInginDitulis)
// kita tulis kedalam suatu file dengan nama dummy.json
fs.writeFile("./dummy2.json", stringDataYangInginDitulis)
    // apabila dia selesai dan sukses
    .then((hasilSukses) => {
        console.log(hasilSukses)
    })
    .catch((err) => {
        console.log(err)
    })
fs.readFile("./dummy2.json", "utf-8")
    // resolved
    .then((suksesBaca) => {
        // console.log(suksesBaca); // STRING
        console.log(JSON.parse(suksesBaca))
    })
    // reject
    .catch((errorBaca) => {
        console.log(errorBaca)
    })

