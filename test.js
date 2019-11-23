// Pertambahan 1 Output Ganjil & Genap
for (let i = 0; i < 100; i++) {
    if((i%2)===0){
        console.log("GENAP")
    } else {
        console.log("GANJIL")
    }
}

//Pertambahan 2 Output Kelipatan 3
for (let i = 1; i <100; i+=2) {
    if ((i % 3) === 0) {
        console.log(i+ " KELIPATAN 3")
    } else {
        console.log("")
    }
}

//Pertambahan 5 Output Kelipatan 6
for (let i = 1; i <100; i+=5) {
    if ((i % 6) === 0){
        console.log(i+" KELIPATAN 6")
    } else {
        console.log("")
    }
}
//Pertambahan 10 Kelipatan 10
for (let i = 1; i <100; i+=9) {
    if ((i % 10) === 0){
        console.log(i+" KELIPATAN 10")
    } else {
        console.log("")
    }
}