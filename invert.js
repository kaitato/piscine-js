const invert = (ob) => {
    let ret = {};
    for(let key in ob){
        if (ob.hasOwnProperty(k)) {
            ret[ob[key]] = key;
        }
    }
    return ret;
}