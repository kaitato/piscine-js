const invert = (ob) =>{
    let ret = {};
    for(let key in ob){
      ret[ob[key]] = key;
    }
    return ret;
  }