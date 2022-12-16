
let produc= document.getElementById("products")
 console.log(produc);

  
 let basket = [];
function show(allpdroducts = []) {
  
  // if (JSON.parse(localStorage.getItem("productselected")).length == 0) {
 
  //   produc.innerHTML="<img src='images/empty.png' width='300'>" ;
   
   
  
  //   console.log(x);
  // }
// else{
  let product =
    JSON.parse(localStorage.getItem("productselected")) || allpdroducts;

  let p = product.map((element) => {
    return `<div class="Cart-Items">
 <div class="image-box">
 <img src="${element.image}" width="50" />
 </div>
 <div class="about">
 <h1 class="title">${element.title}</h1>
 <h3 class="subtitle">${element.brand}</h3>
 
 
<div class="counter"></div>
 <div class="prices"></div>
 </div>
  <div class="counter">
    
 <button id="btn1" onclick="increase (${element.id}) " >+</button>
 <input class="count" id="${element.id}"style="width:30px;margin-left:5px; text-align:center" value="1">
 <button id="btn2" onclick="decreas (${element.id})">-</button>
 </div>
 <div class="prices">
 <div class="amount" id="amount">${element.price}</div>

 <div class="remove"onclick="deleteitem(${element.id})"><u>Remove</u></div>
 </div>

</div>
  
            `;
  });

  document.getElementById("products").innerHTML = p;
console.log(p)
}


// }

show();

function deleteitem(e) {


  let filter = JSON.parse(localStorage.getItem("productselected")).filter(
    (item) => item.id !== e
  );
  console.log(filter);

  localStorage.setItem("productselected", JSON.stringify(filter));
  show(filter);
}


function increase(id){
let search=basket.find(function(x){
  return x.id ==id

})

if (search == undefined){

    basket.push({
      id: id,
      item: 1,
    });
    // console.log(basket);
}
else{

   search.item += 1;
  // console.log(basket)
  // let totalprice =0;
  // console.log(search.item)
let firstvalue=parseInt(document.getElementById("amount").innerHTML);
  let totalprice=0;
let total= JSON.parse(localStorage.getItem("productselected")).map((element)=>{
// console.log(search.item)
  return search.item*firstvalue

// console.log(firstvalue)
// console.log(totalprice)
})
totalprice += parseInt(total.join());
document.getElementById("sub").innerHTML = totalprice;
 document.getElementById("sub").innerHTML=total;
}
update(id);


}

//  decrease
function decreas(id) {
   let search = basket.find(function (x) {
    return x.id == id;
  });

  if (search == undefined) {
    basket.push({
      id: id,
      item: 1,
    });
    // console.log(basket);
  } else {

    search.item += -1;

   let totalprice=0;
   let total=JSON.parse(localStorage.getItem("productselected")).map((element)=>{
 
  return search.item*parseInt(document.getElementById("amount").innerHTML)
 })
 totalprice += parseInt(total.join());
 document.getElementById("sub").innerHTML = totalprice;

  
  //  
    if(search.item ===0){
      search.item=1;

    document.getElementById("sub").innerHTML +=parseInt(document.getElementById("amount").innerHTML)

    }
   
  }
  update(id)

  }

function update(id){
  let search = basket.find(function (item) {
    return item.id === id;
  });
  
 
 document.getElementById(`${id}`).value =search.item  
  
  
}





// remove all in cart
document.getElementById("remove").addEventListener("click",function(){
localStorage.clear();
 document.getElementById("sub").style.display="none";
show()
})
// back to home
document.getElementById("back").addEventListener("click",function(){
  location="index.html"
})


