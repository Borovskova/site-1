
let slider = tns({
    container: '.slider',
    items: 3,
    gutter: 0,
    slideBy: 1,
    autoplay: true,
    nav: false,
    controlsContainer: '#controls',
    prevButton : '.previous' , 
    nextButton : '.next' , 
    controlsPosition: 'top',
    speed: 1000,
    autoplayTimeout: 3000,
    autoplayButtonOutput: false,
    center:true,
   
});

// function buttonNavbarMoveToCenter(){
//     let togglerBtn = document.querySelector('.navbar-toggler');
//     togglerBtn.addEventListener('click', function(){
//        let btnBuyNow = document.querySelector('.buy-now-1');
//        btnBuyNow.style.marginLeft = 'auto';
//        btnBuyNow.style.marginRight = 'auto';
//     })
// }
// buttonNavbarMoveToCenter();