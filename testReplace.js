function palindrome(str) {
    /*function replacer(match, p1, p2, offset, string){
      if (p1) return 
    }*/
    var newString = str.replace(/([^\w])*|('\s')/g, "");
    newString = newString.toLowerCase();
    var array = newString.split('');
    array.reverse();
    var reversedString = array.join('');
    if(newString === reversedString){
        return true;
    }
    else{
        return false;
    }
    //return newString;
    //return true;
  }
  
  
  
  console.log(palindrome("eye"));
  console.log(palindrome("_eye"));
  console.log(palindrome("race car"));
  console.log(palindrome("not a palindrome"));
  console.log(palindrome("A man, a plan, a canal. Panama"));
  console.log(palindrome("never odd or even"));
  console.log(palindrome("nope"));
  console.log(palindrome("almostomla"));
  console.log(palindrome("My age is 0, 0 si ega ym."));
  console.log(palindrome("1 eye for of 1 eye."));
  console.log(palindrome("0_0 (: /-\ :) 0-0"));
  console.log(palindrome("five|\_/|four"));
