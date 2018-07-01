function findElement(arr, func) {
    //let num = 0;
    function func(arr){
      for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0) {
          return arr[i];
          //break;
        }
        else {
          return undefined;
        }
      }
    };
}

console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));