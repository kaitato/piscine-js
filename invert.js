const invert(ob){
    var ret = {};
    for(var key in ob){
      ret[ob[key]] = key;
    }
    return ret;
  }