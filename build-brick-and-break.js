export const build = (x) => {
    let i = 1
    let m = 2
    let a = setInterval(function(){
        let elem = document.createElement('div')
        elem.id = 'brick-'+i
        document.body.appendChild(elem)
        if (i==m) {
            document.getElementById(elem.id).setAttribute('data-foundation', "true");
            m += 3
        } else if (i == x) {
            clearInterval(a)
        }
        i++
    },100)
}

export const repair = (...arr) => {
    for (let i = 0 ; i < arr.length ; i++) {
        let elem = document.getElementById(arr[i])
        let n = repairs[i].replace('brick-','')
        if (n % 3 === 2) {
            elem.setAttribute('data-repaired', "in progress")
            elem.innerHTML = n
        } else {
            elem.setAttribute('data-repaired', "true")
            elem.innerHTML = n
        }
    }
}

export const destroy = () => {
    let elements = document.querySelectorAll('div[id^="brick"]')
    elements[elements.length-1].remove()
}