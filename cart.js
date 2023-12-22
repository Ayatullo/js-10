const ordersDiv = document.querySelector(".orders");

const orders = localStorage.getItem("orders");

if(orders.length > 0){

}else {
    ordersDiv.innerHTML = "<h1>Заказов пока нет</h1>"
}