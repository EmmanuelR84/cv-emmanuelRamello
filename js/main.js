const maps = document.querySelector('#maps');
const whatsapp = document.querySelector('#whatsapp');
const mail = document.querySelector('#mail');
const github = document.querySelector('#github');
const linkedin = document.querySelector('#linkedin');
const web = document.querySelector('#web');

const mapImg = document.querySelector('.map-inactive');
const whatsappImg = document.querySelector('.whatsapp-inactive');
const mailImg = document.querySelector('.mail-inactive');
const githubImg = document.querySelector('.github-inactive');
const linkedinImg = document.querySelector('.linkedin-inactive');
const webImg = document.querySelector('.web-inactive');

maps.onmouseover = () => {
    mapImg.classList.remove('map-inactive');
}
maps.onmouseout = () => {
    mapImg.classList.add('map-inactive');
}

whatsapp.onmouseover = () => {
    whatsappImg.classList.remove('whatsapp-inactive');
}
whatsapp.onmouseout = () => {
    whatsappImg.classList.add('whatsapp-inactive');
}

mail.onmouseover = () => {
    mailImg.classList.remove('mail-inactive');
}
mail.onmouseout = () => {
    mailImg.classList.add('mail-inactive');
}

github.onmouseover = () => {
    githubImg.classList.remove('github-inactive');
}
github.onmouseout = () => {
    githubImg.classList.add('github-inactive');
}

linkedin.onmouseover = () => {
    linkedinImg.classList.remove('linkedin-inactive');
}
linkedin.onmouseout = () => {
    linkedinImg.classList.add('linkedin-inactive');
}

web.onmouseover = () => {
    webImg.classList.remove('web-inactive');
}
web.onmouseout = () => {
    webImg.classList.add('web-inactive');
}