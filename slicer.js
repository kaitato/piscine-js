const slice = (arg,start,end) => {
    let res = []

    if (end === undefined) {
        end = arg.length
    } else if (end < 0) {
        end = arg.length + end
    }

    if (start < 0) {
        start = arg.length + start
    } 

    let i = start
    while (i < end) {
        res.push(arg[i])
        i++
    }
    
    return typeof arg === 'string' ? res.join('') : res 
}