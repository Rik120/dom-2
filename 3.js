let button_1 = document.querySelector('.button-1')

let button_2 = document.querySelector('.button-2')

let button_3 = document.querySelector('.button-3')

let button_4 = document.querySelector('.button-4')

let button_5 = document.querySelector('.button-5')

let img = document.querySelector('.main-photo--')

let text = document.querySelector('#main-p')

button_1.onclick = () => {
    text.innerHTML = 'Color - green'
    img.setAttribute('src', './img/green.jpg')
}

button_2.onclick = () => {
    
    img.setAttribute('src', './img/white.jpg')
}

button_3.onclick = () => {
    
    img.setAttribute('src', './img/pink.jpg')
}

button_4.onclick = () => {
   
    img.setAttribute('src', './img/grey.jpg')
}

button_5.onclick = () => {
   
    img.setAttribute('src', './img/blue.jpg')
}


window.addEventListener("scroll", e => {

    let navbar = document.getElementById("navbar").classList

    let active_class = "navbar_scrolled"

    if (pageYOffset > 250) navbar.add(active_class)
    else navbar.remove(active_class)

    console.log(pageYOffset);
})

button_1.onmouseenter = () => {

    text.innerHTML = 'Color -  Alpine Green'

}
button_2.onmouseenter = () => {
    text.innerHTML = 'Color - Silver'

}
button_3.onmouseenter = () => {
    text.innerHTML = 'Color - Gold'

}
button_4.onmouseenter = () => {
    text.innerHTML = 'Color - Graphite'
}
button_5.onmouseenter = () => {
    text.innerHTML = 'Color - Sierra Blue'

}

let btn = document.querySelector("#btnq")

let modal = document.querySelector(".modal")

let modal_bg = document.querySelector(".modal_bg")

btn.onclick = () => {
    
    modal.style.display = "block"

    modal_bg.style.display = "block"

    
    setTimeout(() => {
        modal.style.opacity = "1"
    
        modal_bg.style.opacity = "1"
    
        modal.style.transform = "translate(-50%, -50%) scale(1)"

    }, 200)
}

let xxx = document.querySelector("#XXX")

xxx.onclick = () => {
    modal.style.display = "none"

    modal_bg.style.display = "none"
}