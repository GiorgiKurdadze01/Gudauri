function getSrcAndName(e) {
    let imageSrc = e.querySelector('img').src;
    let textEl = e.querySelector('span').textContent;
    let data = {
        src: e.querySelector('img').src,
        text: e.querySelector('span').textContent
    }
    localStorage.setItem("data", JSON.stringify(data))
    window.location.href = "openRental.html"
}

let divs = document.querySelectorAll('.rentalCard');
divs.forEach(function (div) {
    div.addEventListener('click', () => getSrcAndName(div));
});