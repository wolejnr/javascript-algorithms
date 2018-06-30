function minimum(val1, val2){
    var min;
    if(val1 < val2){
        min = val1;
    }
    else{
        min = val2;
    }
    return min;
}

console.log(minimum(5,2));
console.log(minimum(2,5));
console.log(minimum(-5,2));
console.log(minimum(5,-2));