// serial by thats why it does not need to put serial number
// shoping chart
(function(){
 const cartInfo=document.getElementById('cart-info');
 const cart=document.getElementById('cart')

 cartInfo.addEventListener('click',function(){
     cart.classList.toggle('show-cart')
 })
})();

// add items to the cart

(function(){

const cartbtn  =document.querySelectorAll(".fa-shopping-cart")
cartbtn.forEach(function(btn){
    btn.addEventListener('click',function(event){
        // console.log(event.target)

        if(event.target.parentElement.classList.contains('store-item-icon')){
            let fullpath=event.target.parentElement.previousElementSibling.src
            let pos=fullpath.indexOf('img')+3;
            console.log(pos)
            let parsicalpath=fullpath.slice(pos)
            console.log(parsicalpath)

            const item={};
            item.img=`img-cart${parsicalpath}`
            let name=event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
            item.name=name;

            let price=event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
            let finalprice=price.slice(1).trim()
           item.price=finalprice
           console.log(item)

           const cartitem=document.createElement('div')
           cartitem.classList.add('cart-item','d-flex','justify-content-between','text-capitalize','my-3')
           
           cartitem.innerHTML=`<img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
           <div class="item-text">

             <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
             <span>$</span>
             <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
           </div>
           <a href="#" id='cart-item-remove' class="cart-item-remove">
             <i class="fas fa-trash"></i>
           </a>`

        //    select cart
        const cart=document.getElementById('cart');
        const total=document.querySelector('.cart-total-container')
        cart.insertBefore(cartitem,total);
        alert('item added to the cart')
        showtotal()
        }
    })
})

// show total
function showtotal(){
    const total=[];
    const items=document.querySelectorAll('.cart-item-price')
    items.forEach(function(item){
        total.push(parseFloat(item.textContent) )
    })
    console.log(total)
    const totalMoney=total.reduce(function(total,item){
        total +=item;
 return total
    },0)

    const finalMoney=totalMoney.toFixed(2)
    console.log(finalMoney)

    document.getElementById('cart-total').textContent=finalMoney
    document.querySelector('.item-total').textContent=finalMoney
    document.getElementById('item-count').textContent=total.length

}
})();