var nama = 'Nina'
var peran = 'Ksatria'

if (nama && peran === '') {
    console.log("Hallo "+nama+", Pilih peranmu untuk memulai game")
} else if (nama && peran === 'Ksatria') {
    console.log("Selamat datang di Dunia Proxytia, "+nama)
    console.log("Halo "+peran+" "+nama+ ", Kamu dapat menyerang dengan senjatamu!")
} else if (nama && peran === 'Tabib'){
    console.log("Selamat datang di Dunia Proxytia, "+nama)
    console.log("Halo "+peran+" "+nama+ ", Kamu akan membantu temanmu yang terluka.")
} else if (nama && peran === 'Penyihir'){
    console.log("Selamat datang di Dunia Proxytia, "+nama)
    console.log("Halo "+peran+" "+nama+ ", ciptakan keajaiban yang membantu kemenanganmu!")
} else { 
    console.log("Nama Harus diisi!")
}