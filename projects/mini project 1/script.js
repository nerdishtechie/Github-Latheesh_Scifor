document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy');
    const cartButtons = document.querySelectorAll('.cart');

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Thank you for your purchase!');
        });
    });

    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to cart!');
        });
    });
});
