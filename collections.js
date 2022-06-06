const arrToSet = (potatoarmy) => new Set(potatoarmy);
const arrToStr = (infa) => infa.join('');
const setToArr = (estlop) => Array.from(estlop);
const setToStr = (ndon) => Array.from(ndon).join('');
const strToArr = (pog) => Array.from(pog);
const strToSet = (a) => new Set(a);
const mapToObj = (lol) => Object.fromEntries(lol);
const objToArr = (valo) => Object.values(valo);
const objToMap = (aram) => new Map(Object.entries(aram));
const arrToObj = (food) => Object.fromEntries(Object.entries(food));
const strToObj = (b) => arrToObj(b.split(''));
const superTypeOf = (hello) => hello instanceof Set ?
    'Set' :
    hello instanceof Map ?
        'Map' :
        hello instanceof Array ?
            'Array' :
            hello === null ?
                'null' :
                hello !== undefined ?
                    (typeof(hello)).toUpperCase()[0] + ((typeof(hello)).substring(1)).toLowerCase() :
                    'undefined'