function truncateString(str, num) {
    // Clear out that junk in your trunk
    if(str.length == num){
        return str;
    }
    else{
        return str.substr(0,num) + "...";
    }
  }
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));