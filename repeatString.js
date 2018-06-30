function repeatStringNumTimes(str, num) {
    // repeat after me
    let new_str = "";
    if(num <= 0){
        return new_str;
    }
    else{
        for(let i=0; i<num; i++){
            new_str += str;
        }
        return new_str;
    }
  }
  
console.log(repeatStringNumTimes("abc", 3));