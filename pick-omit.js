const pick = (object, string) => {
    let keys = Object.keys(object);
    let filteredKeys = keys.filter(key => typeof string === "string" ? string === key : string.includes(key))
    let e = {}
    console.log("filteredkeys: ", filteredKeys)
    console.log("keys: ", keys)
    filteredKeys.forEach((filteredKey) => e[filteredKey] = object[filteredKey])
    return e
}

const omit = (object, string) => {
    let keys = Object.keys(object);
    let filteredKeys = keys.filter(key => typeof string === "string" ? !(string === key) : !(string.includes(key)))
    let e = {}
    console.log("filteredkeys: ", filteredKeys)
    console.log("keys: ", keys)
    filteredKeys.forEach((filteredKey) => e[filteredKey] = object[filteredKey])
    return e
}

