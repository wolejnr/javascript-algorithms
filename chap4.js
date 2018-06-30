// Program to demonstrate knowledge of Chapter 4 of Eloquent JavaScript
function range(start, end, step){
    var arr = [];
    
        if(arguments.length > 2 && start<end){
            for(var i=start; i<=end; i+=step){
                arr.push(i);
            }
        }
        else if(arguments.length > 2 && start>end){
            for(var i=start; i>=end; i+=step){
                arr.push(i);
            }
        }
        else{
            for(var i=start; i<=end; i++){
                arr.push(i);
            }
        }
    return arr;
}

function sum(arr){
    let total=0;
    for(var i=0; i<arr.length; i++){
        total += arr[i];
    }
    return total;
}