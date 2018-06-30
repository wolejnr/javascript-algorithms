function isEven(num){
    if(num === 0 || num === 1){
        return true;
    }
    else {
        return num % 2 === 0;
    }

}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-12));