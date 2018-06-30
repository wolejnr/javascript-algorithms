function reverseArray(arr){
    var revArr = [];
    for(var i=arr.length-1; i>=0; i--){
        revArr.push(arr[i]);
    }
    return revArr;
}

function reverseArrayInPlace(arr){
    var temp;
    for(var i=arr.length-2; i>0; i--){
        temp = arr.shift();
        arr.push(temp);
    }
    return arr;
}