function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    let i, isBool;
   
    for(i=arr.length-1; i--;){
        isBool = Boolean(arr[i]);
        if(isBool === false){
            arr.splice(i, 1);
        }
    }
    return arr;
  }
  
console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([1, null, NaN, 2, undefined]));

console.log(Boolean(9));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));