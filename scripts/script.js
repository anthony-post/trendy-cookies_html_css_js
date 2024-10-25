document.getElementById("main-action-button").onclick = function () {
    document.getElementById("products").scrollIntoView({behavior: "smooth"})
}

const links = document.querySelectorAll(".menu-item > a")
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"})
    }
}

const buttons = document.querySelectorAll(".products-item .button")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"})
    }
}

const prices = document.getElementsByClassName("products-item-price")
document.getElementById("change-currency").onclick = function (e) {
    const currentCurrency = e.target.innerText

    let newCurrency = "$"
    let coefficient = 1
    
    if (currentCurrency === "$") {
        newCurrency = "₽"
        coefficient = 90
    } else if (currentCurrency === "₽") {
        newCurrency = "BYN"
        coefficient = 3
    } else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }

    e.target.innerText = newCurrency

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency
    }
}

const product = document.getElementById("product")
const fio = document.getElementById("fio")
const phone = document.getElementById("phone")
document.getElementById("order-action").onclick = function (e) {
    e.preventDefault()
    const inputs = [product, fio, phone]
    let hasError = false

    inputs.forEach(item => {
        if (!item.value) {
            item.style.borderColor = "red"
            hasError = true
        } else {
            item.style.borderColor = ""
        }
    })

    if (!hasError) {
        inputs.forEach(item => {
            item.value = ""
        })
        alert("Спасибо за заказ! Мы скоро свяжемся с Вами!")
    }
}

// product input listener
product.addEventListener("input", function (e) {
    e.preventDefault()
    if (!e.target.value) {
        product.style.borderColor = "red"
        hasError = true
    } else {
        product.style.borderColor = ""
    }
})

