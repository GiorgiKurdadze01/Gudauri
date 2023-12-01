const adultEl = document.getElementById('$adultContent')
const kideEl = document.getElementById('$kidContent')
const studentEl = document.getElementById('$studentContent')
const listNameEl = document.getElementById('$listName')
const priceList = document.getElementById('$priceContent')

function closeList() {
    adultEl.style.display = 'flex'
    kideEl.style.display = 'flex'
    studentEl.style.display = 'flex'
    priceList.style.display = 'none'
    removeAllStyle()
    removeInnerFuncStyle()
}
function studentClick() {
    studentEl.classList.remove('studentStyleOn')
    studentEl.classList.remove('studentCurcle')
    studentEl.classList.add('clickedStudentCurcle')
    studentEl.style.display = 'none'
    adultEl.style.display = 'flex'
    kideEl.style.display = 'flex'
    priceList.style.display = 'flex'
    priceList.style.backgroundColor = 'rgb(111, 177, 230)'
    listNameEl.innerHTML = 'Student'
    adultEl.classList.remove('clickedAdultCurcle')
    kideEl.classList.remove('clickedKidCurcle')
    adultElStyle()
    kidElStyle()
    specialKidStyle()
}

function kidClick() {
    kideEl.classList.remove('kidCurcle')
    kideEl.classList.remove('kideElSpecialStyle')
    kideEl.classList.remove('kideElStyleOn')
    kideEl.classList.add('clickedKidCurcle')
    kideEl.style.display = 'none'
    adultEl.style.display = 'flex'
    studentEl.style.display = 'flex'
    priceList.style.display = 'flex'
    priceList.style.backgroundColor = 'rgb(71, 135, 184)'
    listNameEl.innerHTML = 'Kid'
    adultEl.classList.remove('clickedAdultCurcle')
    studentEl.classList.remove('clickedStudentCurcle')
    studentElStyle()
    adultElStyle()
}

function adultClick() {
    adultEl.classList.remove('adultCurcle')
    adultEl.classList.add('clickedAdultCurcle')
    adultEl.style.display = 'none';
    kideEl.style.display = 'flex'
    studentEl.style.display = 'flex'
    priceList.style.display = 'flex'
    priceList.style.backgroundColor = 'rgb(26, 96, 149)'
    listNameEl.innerHTML = 'Adult'
    kideEl.classList.remove('clickedKidCurcle')
    kideEl.classList.remove('kideElSpecialStyle')
    studentEl.classList.remove('clickedStudentCurcle')
    kidElStyle()
    studentElStyle()
}
// შლის დაჭერის მერე ფუნქციაში დამატებულ კლასებს
function removeInnerFuncStyle() {
    adultEl.classList.remove('clickedAdultCurcle')
    kideEl.classList.remove('clickedKidCurcle')
    studentEl.classList.remove('clickedStudentCurcle')
}

// შლის უბრალო ფუნქციაში საჭიროებისთვის შექმნილ კლასებს
function removeAllStyle() {
    adultEl.classList.remove('adultElStyleOn')
    adultEl.classList.add('adultCurcle')
    kideEl.classList.remove('kideElStyleOn')
    kideEl.classList.remove('kideElSpecialStyle')
    kideEl.classList.add('kidCurcle')
    studentEl.classList.remove('studentStyleOn')
    studentEl.classList.add('studentCurcle')
}

function specialKidStyle() {
    kideEl.classList.remove('kideElStyleOn')
    kideEl.classList.add('kideElSpecialStyle')

}

function adultElStyle() {
    adultEl.classList.remove('adultCurcle')
    adultEl.classList.add('adultElStyleOn')
}

function kidElStyle() {
    kideEl.classList.remove('kidCurcle')
    kideEl.classList.add('kideElStyleOn')
}

function studentElStyle() {
    studentEl.classList.remove('studentCurcle')
    studentEl.classList.add('studentStyleOn')

}


