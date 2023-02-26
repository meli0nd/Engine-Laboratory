let mapOpen = document.querySelector('.open-map_text')
let checkbox = document.querySelector('.checkbox')
let popUpButton = document.querySelector('.pop-up_button')
let mobilepopUpButton = document.querySelector('.mobile-menu_call-us_container')
let map1 = document.querySelector('.yandex-map')
let map2 = document.querySelector('.yandex-map_container')
let mapCloser = document.querySelector('.yandex_pop-up_close')
let popUpCloser = document.querySelector('.pop-up_close')
let callUsPopUp = document.querySelector('.pop-up')
let callUsButton = document.querySelector('.call-us_container')
let callUsCloser = document.querySelector('.pop-up_close')
let popUpBg = document.querySelector('.pop-ups_bg')
let popUpAccept = document.querySelector('.pop-up_accept')
let popUpAcceptCloser = document.querySelector('.pop-up_accept_close')
let phoneInput = document.querySelector('#phone')
let popUpForm = document.querySelector('.pop-up_form')
let mobileMenu = document.querySelector('.mobile-menu')
let openMobileMenu = document.getElementById('mobile-menu_button')
let closeMobileMenu = document.querySelector('.mobile-menu_button-black')

console.log(openMobileMenu);

let phoneMask = IMask(
    document.getElementById('phone'), {
    mask: '+{7}(000)000-00-00'
});

openMobileMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'block'
    openMobileMenu.style.display = 'none'
    closeMobileMenu.style.display = 'block'
})

closeMobileMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'none'
    closeMobileMenu.style.display = 'none'
    openMobileMenu.style.display = 'block'
})

popUpAcceptCloser.addEventListener('click', () => {
    popUpAccept.style.display = 'none'
    callUsPopUp.style.display = 'none'
    popUpBg.style.display = 'none'
})

checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        popUpButton.style.opacity = '1'
        popUpButton.style.cursor = 'pointer'
    } else {
        popUpButton.style.opacity = '0.8'
        popUpButton.style.cursor = 'default'
    }
})

popUpButton.addEventListener('click', () => {
    if (phoneInput.value.length >= 16 && checkbox.checked) {
        popUpAccept.style.display = 'flex'
        popUpAccept.style.zIndex = '999'
        callUsPopUp.style.display = 'none'
    } else if (phoneInput.value.length < 16) {
        phoneInput.style.border = '2px solid red'
    }
})

mobilepopUpButton.addEventListener('click', () => {
    if (map2.style.display == 'block') {
        map2.style = 'display: none;'
    }
    callUsPopUp.style.display = 'block'
    callUsPopUp.style.display = ''
    popUpBg.style.display = 'block'
})

callUsButton.addEventListener('click', () => {
    if (map2.style.display == 'block') {
        map2.style = 'display: none;'
    }
    callUsPopUp.style.display = 'block'
    popUpBg.style.display = 'block'
})

callUsCloser.addEventListener('click', () => {
    callUsPopUp.style.display = 'none'
    popUpBg.style.display = 'none'
})

mapOpen.addEventListener('mouseenter', () => {
    if (map2.style.display == 'block') {
        map1.style = 'opacity: 0;'
    } else {
        map1.style = 'opacity: 1;'
    }
})
mapOpen.addEventListener('mouseleave', () => {
    map1.style = 'opacity: 0;'
})
mapOpen.addEventListener('click', () => {
    if (callUsPopUp.style.display == 'block') {
        callUsPopUp.style = 'display: none;'
    }
    map2.style = 'display: block;'
    popUpBg.style.display = 'block'
})
mapCloser.addEventListener('click', () => {
    map2.style = 'display: none;'
    popUpBg.style.display = 'none'
})
