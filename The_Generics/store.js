// create an array of items with the class 'btn-danger'
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
//iterate over the array and assign every item of the array to the 'button' variable 
for( var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    //check for 'click' event and run function if True
    button.addEventListener('click', function(event){
        //removes 'cart-row' after button is clicked
        var buttonClicked = event.target //<-- the button we clicked on
        buttonClicked.parentElement.parentElement.remove()
    } )
}
