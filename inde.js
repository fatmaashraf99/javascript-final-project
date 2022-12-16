// let userinfo = document.getElementById("userinfo");
// console.log(userinfo)
// let user=document.getElementById("user");
// console.log(user)
// let links = document.getElementById("links");
// console.log(links)
// let username=localStorage.getItem("username");
// console.log(username)
// let logout = document.getElementById("logout");
let smart = document.getElementById("samrt");
let laptop = document.getElementById("laptop");

// if (username) {
//   links.remove();
//   userinfo.style.display="flex";
//   user.innerHTML="welcome "+username;
//   user.style.color="white";
//   user.style.fontSize="25px";
//   logout.style.display="block"

// }
// logout.addEventListener("click",function(){
//     localStorage.clear()
//     location.href="register.html"
// })
// define 










//log out and user info -----------------------------


var login = window.localStorage.getItem('login');
var username_localstoarge = window.localStorage.getItem('username');


if(login=="true"){
document.getElementById("username").innerText = username_localstoarge;
document.getElementById("logout").innerText = "log out";
}



if(login=="false"){
    document.getElementById("username").innerText = "login";
document.getElementById("logout").innerText = "sign up";
}


function signup(){
    if (login=="true"){
        window.location.href("#");
    }
    if(login=="false"){
        window.location.href = "login.html";  
    }
}


function logout(){
    if (login=="true"){
        window.location.href = "index.html";  
        window.localStorage.setItem('login',"false");  
    }
    if(login=="false"){
        window.location.href = "signup.html";  
        
    }
}



//-----------

let allproducts =[
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    image: "images/2.jpg",
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    image: "images/3.jpg",
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    image: "images/4.jpg",
  },
  {
    id: 5,
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    image: "images/5.jpg",
  },
  {
    id: 6,
    title: "MacBook Pro",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    discountPercentage: 11.02,
    rating: 4.57,
    stock: 83,
    brand: "APPle",
    category: "laptops",
    image: "images/6.jpg",
  },
  {
    id: 7,
    title: "Samsung Galaxy Book",
    description:
      "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    discountPercentage: 4.15,
    rating: 4.25,
    stock: 50,
    brand: "Samsung",
    category: "laptops",
    image: "images/7.jpg",
  },
  {
    id: 8,
    title: "Microsoft Surface Laptop 4",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    discountPercentage: 10.23,
    rating: 4.43,
    stock: 68,
    brand: "Microsoft Surface",
    category: "laptops",
    image: "images/8.jpg",
  },
  {
    id: 9,
    title: "Infinix INBOOK",
    description:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    discountPercentage: 11.83,
    rating: 4.54,
    stock: 96,
    brand: "Infinix",
    category: "laptops",
    image: "images/9.jpg",
  },
  {
    id: 10,
    title: "HP Pavilion 15-DK1056WM",
    description:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "laptops",
    image: "images/10.jpg",
  },
  //list[8].id//10
  //list[8].title //hp pivilon
  
];

var x = document.querySelector(".product");
// show datd
function draw(list){
var z;

var  html="";
for(var i=0;i<list.length;i++){
  

if (list[i].stock >= 1) {
  z = "in stock";
} else {
  z = "out stock";
}

  html += `
   <div class="product-item">
                <div class="image">  <img src="${list[i].image}"></div>
                <h2>${list[i].title}</h2>
            
                <p>${list[i].description}</p>
                <h3 class="price">${list[i].price}$</h3>
            <h3 style="color:green">${z}</h3>


                <button class="btn" id="add" onclick="select(${list[i].id})">Add to cart</button>
                <i class="fa-regular fa-heart"></i>
            </div>`;
}   

x.innerHTML=html
return html;
}
// add data to local storage
var count=1;
function select(id) {
let products = localStorage.getItem("productselected")
  ? JSON.parse(localStorage.getItem("productselected"))
  : []; 
let chosenitem=allproducts.find(item=> item.id== id);
products=[...products,chosenitem];

document.getElementById("shopingccart").innerText = count++;
localStorage.setItem("productselected", JSON.stringify(products)) 

}
draw(allproducts)
// first item redirect

document.getElementById("add").addEventListener("click",function(){
 for(var i=0;i<allproducts.length;i++){
  if(localStorage.getItem("username")){
    alert("add to cart");
  }
  else{
    location="signup.html"
  }}
})



// serach
var input = document.getElementById("serech");


function search() {

 
let x=allproducts.filter(function(item){
  return item.title.toLocaleLowerCase().includes(input.value.toLocaleLowerCase().trim())
})
   
// 
draw(x);

  

}
// filter by catagoray
laptop.addEventListener("click",filterBycatagoray)
smart.addEventListener("click", filterBycatagoray1);


function filterBycatagoray() {
  var x = allproducts.filter(function (item) {
  console.log(this)
      return item.category.includes(laptop.innerHTML);

    });
  draw(x)
  return x;

}
function filterBycatagoray1() {
  var x = allproducts.filter(function (item) {
    return item.category.includes(smart.innerText);
  });
  draw(x);
  return x;
}
var low=document.getElementById("low")
console.log(low)
var high=document.getElementById("high")
low.addEventListener("click",lowtohigh)
high.addEventListener("click",hightolow)
 var z;
//sort by price
function lowtohigh(){

z=allproducts.sort(function(a,b){
  return a.price-b.price;
 })
 console.log(z);

draw(z)

}

function hightolow(){
var re=z.reverse();
draw(re)
}

//------------------------filter-----------------------------------
function filter() {

  var products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : []; 

  let inputprice = document.getElementById("range");
  let valueprice = document.getElementById("value");
  let output = valueprice.innerHTML = (inputprice.value)
  // var products = document.getElementById('products');
  x.innerHTML = ""

  products.forEach(product => {
    if(product.price <= inputprice.value){
    x.innerHTML = `
        <div class="product-item">
                <div class="image">  <img src="${product.image}"></div>
                <h2>${product.title}</h2>
            
                <p>${product.description}</p>
                <h3 class="price">${product.price}$</h3>
            <h3 style="color:green"></h3>


                <button class="btn" id="add" onclick="select(${product.id})">Add to cart</button>
                <i class="fa-regular fa-heart"></i>
            </div>`;

    } 
                    
  });
}