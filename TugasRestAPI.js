const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
var app = express()
const { response } = require("express")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.listen(8000, () => {
    console.log("server run on port 8000")
})

//1
app.post("/cube",(req,res)=> {
    let s = Number(req.body.sisi)
    let luas = 6*s*s
    let volume = s**3
    let response = {
        bangun = "cube",
        sisi = s,
        luas = L,
        volume = V
    }
    res.json(response)
})


app.post("/block",(req,res)=> {
    let p = Number(req.body.panjang)
    let l = Number(req.body.lebar)
    let t = Number(req.body.tinggi)
    let luas = 2*(p*l + p*t + t*l)
    let volume = p*l*t
    let response = {
        bangun = "block",
        panjang = p,
        lebar = l,
        tinggi = t,
        luas = luas,
        volume = volume
    }
    res.json(response)
})


app.post("/cyl",(req,res)=> {
    let r = Number(req.body.jari)
    let t = Number(req.body.tinggi)
    let luas = 2*3.14*r*(r + t)
    let volume = 3.14*r*r*t
    let response = {
        bangun = "cyl",
        jari = r,
        tinggi = t,
        luas = luas,
        volume = volume
    }
    res.json(response)
})


app.post("/ball",(req,res)=> {
    let r = Number(req.body.jari)

    let luas = 4*3.14*r*r
    let volume = 4/3*3.14*r**3

    let response = {
        bangun:"ball",
        jari: r,
        luas: luas,
        volume:volume
    }
    res.json(response)
})

//2
app.get("/convert/:satuan/:suhu",(req,res)=> {
    let y = req.params.satuan
    let x = req.params.suhu
    let c, r, f, k, response

    if(y === "celcius"){
        let cn = Number(x)
        r = 4/5*cn
        f = 9/5*cn
        k = cn+273
        response = {
            celcius: x,
            result: {
                reamur: r,
                fahrenheit: f,
                kelvin: k
            }
        }

    }else if(y === "reamur"){
        let rn = Number(x)
        c = 5/4*rn
        f = 9/4*rn+32
        k = 5/4*rn+273
        response = {
            reamur: x,
            result: {
                celcius:c,
                fahrenheit: f,
                kelvin:k
            }
        }

    }else if(y == "kelvin"){
        let kn = Number(x)
        c = kn-273
        r = 4/5*(kn-273)
        f =  9/5*(kn-273)+32
        response = {
            kelvin: x,
            result: {
                celcius: c,
                reamur: r,
                fahrenheit:f
            }
        }

    }else if(y == "fahrenheit"){
        let fn = Number(x)
        c = 5/9*(fn-32)
        r = 4/9*(fn-32)
        k =  5/9*(fn-32)+273
        response = {
            fahrenheit:x,
            result: {
                celcius: c,
                reamur: r,
                kelvin:k
            }
        }

    }else {
        response = {
            pesan:"failed"
        }
    }
    res.json(response)
})

//3
app.post("/decimal",(req,res)=>{
    let des = Number(req.body.num)
    let bin = des.toString(2)
    let oct = des.toString(8)
    let hex = des.toString(16)  
    
    let hsl = {
        from : "decimal",
        nilai : des,
        biner : bin,
        octal : oct,
        hexadesimal : hex
    }
    res.json(hsl)
})
app.post("/biner",(req,res)=>{
    let bin = Number(req.body.num)
    let des = des.toString(10)
    let oct = des.toString(8)
    let hex = des.toString(16)  
    let hsl = {
        from : "biner",
        nilai : bin,
        desimal : des,
        octal : oct,
        hexadesimal : hex
    }
    res.json(hsl)
})
app.post("/octa",(req,res)=>{
    let oct = Number(req.body.num)
    let des = des.toString(10)
    let bin = des.toString(2)
    let hex = des.toString(16)  
    let hsl = {
        from : "octa",
        nilai : oct,
        desimal : des,
        biner : bin,
        hexadesimal : hex
    }
    res.json(hsl)
})
app.post("/hexa",(req,res)=>{
    let hex = Number(req.body.num)
    let des = des.toString(10)
    let bin = des.toString(2)
    let oct = des.toString(8)  
    let hsl = {
        from : "hexa",
        nilai : hex,
        desimal : des,
        biner : bin,
        octa : oct
    }
    res.json(hsl)
})

//4
app.post("/bmi",(req,res)=>{
    let t = Number(req.body.tinggi)
    let b = Number(req.body.berat)
    let bmi = b / (t ** 2)
    let hasil

    if      (bmi<18.5) {hasil = "Kekurangan BB"}
    else if (bmi<=29.9){hasil = "Ideal"}
    else if (bmi<=29.9){hasil = "Kelebihan BB"}
    else               {hasil = "Obesitas"} 

    let out = {
        tinggi : t,
        berat : b,
        bmi : bmi,
        status : hasil
    }

    res.json(out)
})
