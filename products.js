const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

let frutas = document.getElementsByClassName('fruits')
let drinks = document.getElementsByClassName('drinks')
let higiene = document.getElementsByClassName('hygiene')

let productMain = document.createElement('main')

let listHigieneId = document.getElementById("higieneNova")
let listBebidasID = document.getElementById("bebidasNova")
let listFrutasID = document.getElementById("frutasNova")

  function createCards(elements) {
    
  for(let i = 0; i < elements.length; i++) { 
    let productCard = document.createElement('li')
    let productImg = document.createElement('img')
    let productMain = document.createElement('main')
    let prodcutTitle = document.createElement('h1')
    let productCategory = document.createElement('h5')
    let productPriceStrong = document.createElement('strong')

    productCard.classList.add("product")
    productImg.classList.add("product-img")
    productMain.classList.add("product-main")
    prodcutTitle.classList.add("product-title")
    productCategory.classList.add("product-category")
    productPriceStrong.classList.add('product-price')

    if(elements[i].image == undefined){
      productImg.src = "./img/products/no-img.svg"
    } else {
      productImg.src = elements[i].image
    }
    productImg.alt = elements[i].imageDescription

    prodcutTitle.innerText = elements[i].title
    productCategory.innerText = elements[i].category
    productPriceStrong.innerText = elements[i].price
    
    
    console.log(elements[i].category)
    if(elements[i].category == "Higiene"){
    listHigieneId.appendChild(productCard)
    productCard.append(productImg, productMain)
    productMain.append(prodcutTitle, productCategory, productPriceStrong)
    } else if(elements[i].category == "Bebidas"){
    listBebidasID.appendChild(productCard)
    productCard.append(productImg, productMain)
    productMain.append(prodcutTitle, productCategory, productPriceStrong)
    } else if(elements[i].category == "Frutas"){
      listFrutasID.appendChild(productCard)
      productCard.append(productImg, productMain)
      productMain.append(prodcutTitle, productCategory, productPriceStrong)
    }

  }

}
createCards(products)