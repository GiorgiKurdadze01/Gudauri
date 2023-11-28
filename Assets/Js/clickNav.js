const mainDivEl = document.querySelector('.clickedNav');
const regionEl = document.querySelector('.Region');
const comeAndStayEl = document.querySelector('.comeAndStay')
const skiBoardEl = document.querySelector('.skiBoard');
const localLifeEL = document.querySelector('.localLifeServices')
const closeEl = document.querySelector('.js-close');
const closeDivEl = document.querySelector('.close-icon');
const navTextColorEl = document.querySelector('.nav-bar-for-all')

function openRegion() {
    mainDivEl.style.display = 'block'
    regionEl.style.display = 'block'
    closeDivEl.style.display = 'block'
    regionEl.classList.add('openRegion')
    navTextColorEl.style.color = 'white';
    closeAllNav();
}

function openComeAndStay() {
    mainDivEl.style.display = 'block'
    comeAndStayEl.style.display = 'block'
    closeDivEl.style.display = 'block'
    comeAndStayEl.classList.add('openComeAndStay')
    navTextColorEl.style.color = 'white';
    closeAllNav();
}

function openskiBoard() {
    mainDivEl.style.display = 'block'
    skiBoardEl.style.display = 'flex'
    closeDivEl.style.display = 'inline'
    skiBoardEl.classList.add('openSkiBoard')
    navTextColorEl.style.color = 'white';
    closeAllNav();
}

function openlocalLife() {
    mainDivEl.style.display = 'block'
    localLifeEL.style.display = 'flex'
    closeDivEl.style.display = 'inline'
    localLifeEL.classList.add('openLocalLife')
    navTextColorEl.style.color = 'white';
    closeAllNav();
}

function closeNav() {
    mainDivEl.style.display = 'none'
    navTextColorEl.style.color = 'blue';
}

function closeAllNav() {
    if (regionEl.classList.contains('openRegion')) {
        comeAndStayEl.style.display = 'none'
        skiBoardEl.style.display = 'none'
        localLifeEL.style.display = 'none'
        regionEl.classList.remove('openRegion')
    } else if (comeAndStayEl.classList.contains('openComeAndStay')) {
        regionEl.style.display = 'none'
        skiBoardEl.style.display = 'none'
        localLifeEL.style.display = 'none'
        comeAndStayEl.classList.remove('openComeAndStay')
    } else if (skiBoardEl.classList.contains('openSkiBoard')) {
        regionEl.style.display = 'none'
        comeAndStayEl.style.display = 'none'
        localLifeEL.style.display = 'none'
        skiBoardEl.classList.remove('openSkiBoard')
    } else if (localLifeEL.classList.contains('openLocalLife')) {
        regionEl.style.display = 'none'
        comeAndStayEl.style.display = 'none'
        skiBoardEl.style.display = 'none'
        localLifeEL.classList.remove('openLocalLife')
    }
}