const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
var app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())


app.get("/test",(req,res)=> {
    //membuat objek yang akan berisi berisi data response
    let response = {
        message: "end point 1",
        method: req.method,
        code:res.statusCode
    }

    //memberikan response dengan format JSON
    res.json(response)
})

//menjalankan server
app.listen(8000, () => {
    console.log("server run on port 8000")
})




//end-point "/profile/nama/umur"
app.get("/profile/:name/:age",(req,res) => {
    //Ini method dinamis yang dapat diganti nilainya saat req

    let name = req.params.name //mengambil nilai name
    let age = req.params.age //mengambil nilai age

    //response berisi data sesuai nilai parameter
    let response = {
        nama: name,
        umur: age
    }

    //mengirim response pada server
    res.json(response)
})




//end-point "/bujur_sangkar" method POST
app.post("/bujur_sangkar", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)

    let luas = panjang * lebar
    let keliling = 2 *(panjang + lebar)

    let response = {
        panjang : panjang,
        lebar : lebar,
        luas : luas,
        keliling : keliling
    }

    res.json(response)
})
