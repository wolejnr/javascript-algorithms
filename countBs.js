
function countChars(str, ch){
    count = 0;
    for(var i=0; i<str.length; i++){
        if(str.charAt(i) === ch.toUpperCase())
            count++;
    }
    return count;
}

function countBs(str, ch){
    count = 0;
    for(var i=0; i<str.length; i++){
        if(str.charAt(i) === 'b'.toUpperCase())
            count++;
    }
    return count;
}



console.log(countChars("BaLLeRina", 'r'));
console.log(countBs("Canada"));
console.log(countChars("CAnAdA", 'a'));
console.log(countBs("ReactJS"));

