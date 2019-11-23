function konversiMenit(menit) {
    perjam = menit/60
  var jam = Math.floor(perjam);

  var min = menit - (60*jam);
    if (min<10){
        min = "0"+min
    }
return (jam+":"+min)
    
  }
  
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00


