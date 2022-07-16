import { gossips } from "./gossip-grid.data.js";

export const grid = () => {
    let divRange = document.createElement('div');
    divRange.className = 'ranges'
    let width = document.createElement('input')
    width.className = 'range'
    width.id = 'width'
    width.type = 'range'
    width.min = '200'
    width.max = '800'
    width.value = ''
    width.addEventListener('input', () => {
        let gos = document.querySelectorAll('.gossip')
        gos.forEach((g) => {
            g.style.width = width.value + 'px'
        })
    })
    let fontSize = document.createElement('input')
    fontSize.className = 'range'
    fontSize.id = 'fontSize'
    fontSize.type = 'range'
    fontSize.min = '20'
    fontSize.max = '40'
    fontSize.value = ''
    fontSize.addEventListener('input', () =>{
        let gos = document.querySelectorAll('.gossip')
        gos.forEach((g) => {
            g.style.fontSize = fontSize.value + 'px'
        })
    })
    let background = document.createElement('input')
    background.className = 'range';
    background.id = 'background';
    background.type = 'range';
    background.min = '20';
    background.max = '75';
    background.value = '';
    background.addEventListener('input', () => {
        let gos = document.querySelectorAll('.gossip')
        gos.forEach((g) => {
            g.style.background = ' hsl(280, 50%,' + background.value + '%)';
        })
    })
    divRange.append(width)
    divRange.append(fontSize)
    divRange.append(background)
    document.body.appendChild(divRange)
    let gosForm = document.createElement('form')
    gosForm.className = 'gossip'
    document.body.appendChild(gosForm)
    let textArea = document.createElement('textarea')
    textArea.setAttribute("placeholder", "Got any gossip to share?")
    gosForm.appendChild(textArea)
    let button = document.createElement('button')
    button.innerHTML = "Share gossip!"
    gosForm.appendChild(button)
    button.addEventListener('click', (e) => {
        let textVal = textArea.value
        let addGossip = document.createElement('div')
        addGossip.className = "gossip"
        addGossip.textContent = textVal
        document.body.insertBefore(addGossip, document.querySelectorAll('.gossip')[1])
        textArea.value = ''
        e.preventDefault()
    })
    gossips.forEach((goss) => {
        let gossip = document.createElement('div')
        gossip.className = 'gossip'
        gossip.innerHTML = goss
        document.body.appendChild(gossip)
    })
};
