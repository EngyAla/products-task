var allProducts = document.querySelectorAll(".contaier .contant .discription")
var allProducts3 = document.querySelectorAll(".contaier .contant .discription3")
var btnON = document.querySelectorAll(".contaier .contant .btn1")
var emptyDiv = document.querySelector(".sidebar .emptydiv")
var totalPrice = document.querySelector(".tatal #total_price")
var allPrice = 0
var count = document.querySelector("#count")
var allcount = 0
btnON.forEach(function(button, index) {
    button.onclick = function() {
        console.log('Button clicked: ', index);
        emptyDiv.innerHTML += '<p>' + allProducts[index].textContent+ " : " + allProducts3[index].textContent + '</p>';
        allPrice += +(allProducts3[index].getAttribute("price"))
        totalPrice.innerHTML = "$" +(allPrice) 
        allcount += (+1)
        count.innerHTML = +(allcount)
    };
});

