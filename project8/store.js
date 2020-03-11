if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
/*1*/var removecardbutton = document.getElementsByClassName('btn-danger')
       /*2*/ removeitem(removecardbutton)

    var quantityInput = document.getElementsByClassName('cart-quantity-input')
    for (i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i]
        input.addEventListener('change', qutitychange)
    }
    /*5*/var addtocartbuttons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addtocartbuttons.length; i++) {
        var button = addtocartbuttons[i]
        button.addEventListener('click', addToCartChild)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click',parchedclicked)
}
/*3*/function removeitem(removecardbutton){
    for (var i = 0; i < removecardbutton.length; i++) {
        var button = removecardbutton[i]
        button.addEventListener('click', (event) => {
            var buttonclicked = event.target
            buttonclicked.parentElement.parentElement.remove()
            updatecardtotal()
        })
    }
}

function qutitychange(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updatecardtotal()

}

/*6*/function addToCartChild(event) {
    var button = event.target
    var shopitem = button.parentElement.parentElement
    var title = shopitem.getElementsByClassName('shop-item-title')[0].innerText
    // console.log(titile)
    var price = shopitem.getElementsByClassName('shop-item-price')[0].innerText
    // console.log(price,titile)
    var imageSrc = shopitem.getElementsByClassName('shop-item-image')[0].src
    addItemToCartMethod(title, price, imageSrc)
    updatecardtotal()
}
/*7*/function addItemToCartMethod(title, price, imageSrc) {
    var cartrow = document.createElement('div')
    cartrow.classList.add('cart-row')

    // ? start. this use for stoping repiting same product
    var carItems = document.getElementsByClassName('cart-items')[0]
    var cartitemnames=carItems.getElementsByClassName('cart-item-title')

    for(var i=0;i<cartitemnames.length;i++){
        if(cartitemnames[i].innerText==title){
            alert('this item already added to the cart')
            return
        }
    }
    // ?end
    var cartrowcontent = `
    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                        <span class="cart-item-title">${title}</span>
                    </div>
                    <span class="cart-price cart-column">${price}</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" type="number" value="1">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>`
    cartrow.innerHTML = cartrowcontent
    carItems.append(cartrow)
    let remove=cartrow.getElementsByClassName('btn-danger')[0]
    remove.addEventListener('click',(event)=>{
        event.target.parentElement.parentElement.remove()
    })

 
}

function parchedclicked(){
    alert('thank you for parches')
    var cartItmes=document.getElementsByClassName('cart-items')[0]
    while(cartItmes.hasChildNodes()){
        cartItmes.removeChild(cartItmes.firstChild)
    }
    updatecardtotal()
}
// updating total ammount
/*4*/function updatecardtotal() {
    let cardcontainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cardcontainer.getElementsByClassName('cart-row')
    total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartrow = cartRows[i]
        var priceElement = cartrow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartrow.getElementsByClassName('cart-quantity-input')[0]
        // console.log(priceElement,quantityElement)
        var price = parseFloat(priceElement.innerText.replace('$', ""))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = `$` + total
}



