function largestOfFour(arr) {
    var newArr = [];
    var i, j;
    
    for(i=0; i<arr.length; i++){
        max = arr[i][0];
        for(j=0; j<arr[i].length; j++){
            if(arr[i][j] > max){
                max = arr[i][j];
            }
        }
        newArr.push(max);        
    }
    return newArr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);