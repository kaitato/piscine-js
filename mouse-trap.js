let flag = true
export const createCircle = () => {
    document.addEventListener('click', (e) => {
        let elem = document.createElement('div')
        elem.className = 'circle'
        elem.style.left = e.clientX - 25 + 'px'
        elem.style.top = e.clientY - 25 + 'px'
        if (flag) {
            elem.style.background = 'white'
        } else {
            elem.style.background = 'var(--purple)'
        }
        document.body.appendChild(elem)
        flag = true
    },false)
}
export const moveCircle = () => {
    document.addEventListener('mousemove', (e) => {
        let elem = document.body.lastChild
        if (elem === null) return
        elem.style.left = e.clientX - 25 + 'px'
        elem.style.top = e.clientY - 25 + 'px'
    }, false)
}
export const setBox = () => {
    let elem = document.createElement('div')
    elem.className = 'box'
    document.body.appendChild(elem)
}