var productNameIn = document.getElementById('productName');
var productPriceIn = document.getElementById('productPrice');
var productCompanyIn = document.getElementById('productCompany');
var productDesIn = document.getElementById('productDes');
var addBtn = document.getElementById('addBtn');

var productContainer ;

if(localStorage.getItem('productContainer')==null){
    productContainer = [];
}
else{
    productContainer = JSON.parse(localStorage.getItem('productContainer'))
    displayData();
}

addBtn.onclick = function ()
{
    addProduct();
}

function addProduct()
{
    var product = 
    {
        name:productNameIn.value,
        price:productPriceIn.value,
        company:productCompanyIn.value,
        description:productDesIn.value
    }
    
    productContainer.push(product);

    localStorage.setItem("productContainer",JSON.stringify(productContainer))

    displayData();
    
    emptyData();
    
}

function displayData()
{
    var trs = '';

    for(let i=0; i<productContainer.length;i++){
        trs+= '<div class="col-md-3"><div class="product"><h3>'+ productContainer[i].name +'</h3><p>'+ productContainer[i].price +'</p><p class="text-danger">'+ productContainer[i].company +'</p><p class="text-info">'+ productContainer[i].description +'</p><button onclick = "deleteProduct('+ i +')" class="btn btn-danger">delete</button></div></div>';
    }
    document.getElementById('rowData').innerHTML = trs;

}

function emptyData()
{
    var inputs = document.getElementsByClassName('form-control')
    for(let i =0;i<inputs.length;i++)
        inputs[i].value= ''
}

function deleteProduct(id){
    productContainer.splice(id,1);
    localStorage.setItem("productContainer",JSON.stringify(productContainer))
    displayData();
}