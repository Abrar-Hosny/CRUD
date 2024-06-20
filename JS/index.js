//  Json => javascript object notation 
// array of objects 


// 1- create add every thing user write it 
// we want to take all the input of the user and put it in a json {array of objects }
// Add product to json [array of object]


// 1- get input elements

var productName  = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategorie = document.getElementById("productCategorie");
var productDescription = document.getElementById("productDescription");
var productImage=document.getElementById("productImage");
var displayProduct =document.getElementById("display");
var searchInput= document.getElementById("search");

var productList;


if(localStorage.getItem("products")==null){
    productList=[] ; 
}
else{
productList = JSON.parse(localStorage.getItem("products")) ; 
display();

}



function addProduct(){
var nameProduct = productName.value;
var priceProduct = productPrice.value;
var categorieProduct = productCategorie.value;
var descriptionProduct = productDescription.value;
//image

productList.push({
    code:nameProduct , 
    price : priceProduct , 
    description : descriptionProduct , 
    categorie : categorieProduct,
    image : `crudImages/${productImage.files[0].name}`
});
localStorage.setItem("products" , JSON.stringify(productList));
display() ; 
clearInputs();
console.log(productList);

}



function clearInputs(){
     productName.value = null ; 
       productPrice.value = null; 
       productCategorie.value = null; 
       productDescription.value = null;
       productImage.value=null; 
       
}

function display(){
var cartona="" ; 
for(var i = 0 ; i  < productList.length ; i++){
    cartona+=`  <div class="col-md-3">
        <div class="item border border-2 ">
          <img src="${productList[i].image}" width="100%">
          <p>Name : ${productList[i].code}</p>
          <p>Price : ${productList[i].price} </p>
          <p> categorie : ${productList[i].categorie}</p>
          <p>Description ${productList[i].description}</p>
       <button class="btn btn-outline-danger" onclick="deleteProduct(${i})">Delete</button>
        <button class="btn btn-dark">Edit</button>
          </div>
       
      </div>`;
}
displayProduct.innerHTML=cartona;

}


function deleteProduct(deletedIndex){
productList.splice(deletedIndex , 1) ; 
display(); 
//here we will do override on the list on the local strorage 
localStorage.setItem("products" , JSON.stringify(productList));

console.log(productList)

}


function search(){
var word = searchInput.value ; 
var cartonna="";
for(var j =0 ; j < productList.length ; j ++ ){
    if((productList[j].code).toLocaleLowerCase().includes(word.toLocaleLowerCase())){
      cartonna+=`<div class="col-md-3">
        <div class="item border border-2 ">
          <img src="images/aaa7fbe423cbd04dd9ec0d29e6c0dc44.jpg" width="100%">
          <p>Name : ${productList[j].code}</p>
          <p>Price : ${productList[j].price} </p>
          <p> categorie : ${productList[j].categorie}</p>
          <p>Description ${productList[j].description}</p>
       <button class="btn btn-outline-danger" onclick="deleteProduct(${j})">Delete</button>
        <button class="btn btn-dark">Edit</button>
          </div>
       
      </div>`;

    }
    

}

if(cartonna==""){
    displayProduct.innerHTML=`<h2>No Data </h2>`
}
else{
    displayProduct.innerHTML=cartonna;

}

}