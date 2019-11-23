// Exercise-6
// No.1

var loop = 0
console.log("LOOPING PERTAMA");
while (loop < 20) {
    loop += 2
    console.log(loop + " - I Love Coding ")
}

console.log("LOOPING KEDUA");
while (loop > 0){
    console.log(loop + " - I will become a fullstack developer")
    loop -=2
    
}

// No.2
console.log("Loopng Pertama")
for(let j = 1; j <= 20;j++){
    console.log(j+ "- I love Coding")
}
console.log("Looping Kedua")
for (let i = 20; i > 0; i--)
{
      console.log(i + " - I will become a fulstack developer")
}

// No.3
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