const paragrafos = document.querySelector('.paragrafo')
const ps = document.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body)
const backgroundColorBody = estiloBody.backgroundColor
const color = 'white'

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody
    p.style.color = color
}