function chunk(arr, num) {
    let res = []
    for (let a = 0; a < arr.length; a++) {
        let temp = []
        for (let b = 0; b < num; b++) {
            if (arr[a] === undefined) {
                continue;
            }
           temp.push(arr[a])
           a++
        }
        res.push(temp)
        a--
    }
    return res
}