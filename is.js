is.num = (number) => typeof number === 'number';
is.nan = (a) => {
    if (typeof a !== 'object' && Number.isNaN(a)) return true
};
is.str = (string) => typeof string === 'string';
is.bool = (bool) => typeof bool === 'boolean';
is.undef = (undef) => typeof undef === 'undefined';
is.def = (def) => {
    if (typeof def !== 'undefined') {
        return true
    } else {
        return false
    }
};
is.arr = (arr) => Array.isArray(arr);
is.obj = (obj) => typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
is.fun = (func) => typeof func === 'function';
is.truthy = (truthy) => !!truthy === true ? true : false;
is.falsy = (falsy) => !!falsy === false ? true : false;
