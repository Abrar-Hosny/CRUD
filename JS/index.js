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

function clearInputs(){
    productName.value =null;
    productPrice.value =null;
    productCategorie.value =null;
    productDescription.value =null;
productImage.value=null; 
}


