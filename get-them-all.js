const getArchitects = () => {
    let arr = []
    let arr1 = [Array.from(document.getElementsByTagName('a'))]
    let arr2 = [Array.from(document.getElementsByTagName('span'))]
    arr.push(arr1, arr2)
    return arr
}