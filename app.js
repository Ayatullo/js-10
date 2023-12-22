const pizza = [
    {
        id:1,
        image: "pizza-1.png",
        name: "Жюльен",
        infoText: `
    Цыпленок, моцарелла, смесь сыров, лук красный, 
    чеснок сухой, сливочный соус с грибами, соус альфредо
    Маленькая
    Средняя
    Большая`,
        price: 650
    },
    {
        id:2,
        image: "pizza-2.png",
        name: "Кебаб Пицца",
        infoText: `
    Донерное мясо из говядины, моцарелла, томаты, красный лук, соленые.
Маленькая
Средняя
Большая
Традиционное
Тонкое
`,
        price: 550
    },
    {
        id:3,
        image: "pizza-3.png",
        name: "Сырная",
        infoText: `
Моцарелла, смесь сыров чеддер и пармезан, соус альфредо
Маленькая
Средняя
Большая

`,
        price: 450

    }, {
        id:4,
        image: "pizza-4.png",
        name: "Додо Микс",
        infoText: `
Цыпленок, ветчина из цыпленка, моцарелла, смесь сыров чеддер и  брынзы, 
Маленькая
Средняя
Тонкое


`,
        price: 600

    }, {
        id:5,
        image: "pizza-5.png",
        name: "Ветчина и сыр",
        infoText: `
Ветчина из цыпленка, увеличенная порция моцареллы, соус альфредо
Маленькая
Средняя
Большая


`,
        price: 350

    },
    {
        id:6,
        image: "pizza-6.png",
        name: "Бургер Пицца",
        infoText: `
Бургер соус, томатный соус
Маленькая
Средняя
Большая
Традиционное
Тонкое



`,
        price: 500

    },

]






const div = document.querySelector(".products")
const cartSpan = document.querySelector(".cart-count")
let cart = []
const cartEl = document.querySelector(".cart")

cartEl.onclick = () => {
    window.location.href = "cart.html"
    localStorage.setItem('cart', JSON.stringify(cart))
}


pizza.forEach( (el) => {
    div.innerHTML += `
    <div class="card">
    <div>
       <img src="${el.image}" alt="image">
       <h5>${el.name}</h5>
       <p>${el.infoText}</p>
    </div>
    <div class="price">
            <p>${el.price} $</p>
            <button onclick="addToCart(${el.id})">+</button>
    </div>
    </div>`
} )

function addToCart(productId){
    alert("Товар добавлен в корзину" + productId)
    const pizzaOne = pizza.find(el => el.id === productId)
    // alert(JSON.stringify(pizzaOne))
    cart.push(pizzaOne)
    console.log(cart, '-----korzina')
    if(cart.length>0){
        cartSpan.style.display = "flex"
        cartSpan.innerHTML = cart.length
    }
}

const Kombo = [
    {
        id:1,
        image: "kombo-1.png",
        name: "2 пиццы и напиток",
        infoText: `
  Для уютных посиделок. 2 маленькие пиццы и напиток на выбор. Для компании из 2 - 4 человек. Цена комбо зависит от выбранных пицц и может быть увеличена`,
        price: 600
    },
    {
        id:2,
        image: "kombo-2.png",
        name: "3 пиццы  и напиток",
        infoText: `Великолепная десятка. 4 средних пицц на любой вкус. Для компании из 5- 10 человек. Цена комбо зависит от выбранных пицц`,
        price: 650
    },
    {
        id: 3,
        image: "kombo-3.png",
        name: "7 пицц",
        infoText: `7 - счастливое число, особенно если речь о 7 средних пиццах на компанию 15 - 20 человек. Цена комбо зависит от выбранных пицц и может быть увеличена`,
        price: 750
    }


]

const div2 = document.querySelector(".Kombo")
Kombo.forEach( (el) => {
    div2.innerHTML += `
    <div class="card_1"> 
    <div>
       <img class="images" src="${el.image}" alt="image">
       <h5>${el.name}</h5>
       <p>${el.infoText}</p>
       <div class="price-2">
            <p>${el.price} $</p>
            <button>+</button>
    </div>
    </div>`
})

const tasty = [
    {
        id:1,
        image: "desert-1.png",
        name: "Сорбет Бразильская " +
            "маракуйя и манго",
        infoText: `
  Сладкое солнце Бразилии. Яркий сорбет из маракуйи и манго. Название продукта фантазийное и не означает, что продукт содержит маракуйю из Бразилии`,
        price: 300
    },
    {
        id:2,
        image: "desert-2.png",
        name: "Сырники с малиновым вареньем",
        infoText: `Нежные сырники, приготовленные в печи, с малиновым вареньем`,
        price: 250
    },
    {
        id: 3,
        image: "desert-3.png",
        name: "Фондан",
        infoText: `Десерт с хрустящей корочкой и топлёной шоколадной начинкой`,
        price: 200
    }


]
const div3 = document.querySelector(".tasty")
tasty.forEach( (el) => {
    div3.innerHTML += `
    <div class="card_2"> 
    <div>
       <img class="images_1" src="${el.image}" alt="image">
       <h5>${el.name}</h5>
       <p>${el.infoText}</p>
       <div class="price-3">
            <p>${el.price} $</p>
            <button>+</button>
    </div>
    </div>`
})
const coffee = [
    {
        id:1,
        image: "coffee-1.png",
        name: "Кофе Капучино",
        infoText: `
  Король среди кофейных напитков — классический капучино. Для любителей сбалансированного кофейно-молочного вкуса`,
        price: 190
    },
    {
        id:2,
        image: "coffee-2.png",
        name: "Кофе Американо",
        infoText: `Пара глотков горячего Американо, и вы будете готовы покорять этот день`,
        price: 250
    },
    {
        id: 3,
        image: "coffee-3.png",
        name: "Кофе Латте",
        infoText: `Когда хочется нежную молочную пенку, на помощь приходит классический латте
`,
        price: 200
    }


]
const div4 = document.querySelector(".coffee")
coffee.forEach( (el) => {
    div4.innerHTML += `
    <div class="card_3"> 
    <div>
       <img class="images_1" src="${el.image}" alt="image">
       <h5>${el.name}</h5>
       <p>${el.infoText}</p>
       <div class="price-4">
            <p>${el.price} $</p>
            <button>+</button>
    </div>
    </div>`
})