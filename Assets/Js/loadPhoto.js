let text = document.getElementById('js-rentalShopNameRan')
let photo = document.getElementById('js-rentalShopImgRan')
function loadPhoto() {
    let data = JSON.parse(localStorage.getItem("data"))
    text.textContent = data.text
    photo.setAttribute('src', data.src)
    console.log(data)
}

loadPhoto()