function xo(str) {
    var countX = 0
    var count0 = 0
    for (let i = 0; i < str.length; i++) {
        if(str[i] == "x"){
            countX += 1
        } else {
            count0 += 1
        }  
    }

    if (countX == count0){
        return true
    } else{
        return false
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true