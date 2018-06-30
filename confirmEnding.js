function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    let len_target = target.length;
    let len_str = str.length;
    return str.substr(len_str-len_target)==target;
  }
  
 console.log(confirmEnding("Connor", "n"));