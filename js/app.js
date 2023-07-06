
var products = [
    {
        "name" : "Limau",
        "price" : "RM 13.45"
    },
    {
        "name" : "Epal",
        "price" : "RM 23.45"
    },
    {
        "name" : "Manggis",
        "price" : "RM 133.45"
    },
    {
        "name" : "Nangka",
        "price" : "RM 83.45"
    },
    {
        "name" : "Nanas",
        "price" : "RM 13.40"
    },
    {
        "name" : "Tembikai",
        "price" : "RM 67.39"
    },
    {
        "name" : "Jambu Batu",
        "price" : "RM 89.45"
    },
    {
        "name" : "Strawberi",
        "price" : "RM 33.45"
    },
    
];


document.addEventListener("DOMContentLoaded", () => {
    
    var tpl = document.getElementById("product-tpl").innerHTML;
    var newcontent = '';

    for(var i = products.length - 1; i >= 0 ; i--) {

        newcontent = tpl.replace(/{{nama buah}}/, products[ i ].name);
        newcontent = newcontent.replace(/{{harga buah}}/, products[ i ].price);

        document.getElementById("product-list").innerHTML = document.getElementById("product-list").innerHTML
            + newcontent

        console.log( products[ i ].name );
    }


});
