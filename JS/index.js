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
var productImage=document.getElementById("productImage")
var displayProduct =document.getElementById("display");
// test every step
// console.log(productName,productPrice,productCategorie,productDescription,productImage);

// cartoon
var productList =[];

function addProduct(){
    productList.push({productname:productName.value , 
        productprice:productPrice.value, 
        productcategorie:productCategorie.value , 
        productdescription:productDescription.value,
        productimage:productPrice.value
            });
console.log(productList)
clearInputs();

}

// the function only one task 
// 2- clear inputs
function clearInputs(){
    display();

    productName.value =null;
    productPrice.value =null;
    productCategorie.value =null;
    productDescription.value =null;
productImage.value=null; 
}


// 3- display


function display(){
    for(var i = 0 ; i<productList.length;i++){

displayProduct.innerHTML=`
<div class="card" style="width: 18rem;">
  <img src="${productList[i].productimage}" class="card-img-top" alt="productimage">
  <div class="card-body">
    <h5 class="card-title">Nameproduct ${productList[i].productname}</h5>
    <p class="card-text">Price ${productList[i].productprice}</p>
    <p class="card-text">Categorie ${productList[i].productcategorie}</p>
    <p class="card-text">Description ${productList[i].productdescription}</p>
   
  </div>

 
</div>

`

    }

}


