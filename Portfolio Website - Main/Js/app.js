// We are using j query here

// When our page will get loaded we have do what ever is written inside the function

$(document).ready(function(){

    // we have selcted the slider class
    $('.slider').slick({
        // We dont want arrows ---> Previous and next buttons
        arrows:false,

        // We want dots
        dots:true,

        // we have appended dots on the div with class slider-dots
        appendDots:'.slider-dots',

        // We have given class name to the dots as dosts
        dotsClass:'dots',

    });

    // Creating a variable with let keyword
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobilenav = document.querySelector('.mobile-nav');

    
    hamberger.addEventListener('click', function(){

        // With the property classList we can select any class
        // To select the class we have to write .add() property
        // Within the brackets write the name of that class which we want to add to the .mobile

        mobilenav.classList.add('open');
        // For adding transition only when hamberger class is clicked 
        mobilenav.classList.add('transition');
    });

    times.addEventListener('click', function(){

        // Remove property will simply remove that class
        mobilenav.classList.remove('open');
        // For adding transition only when times class is clicked 
        mobilenav.classList.add('transition');
    });

    let list = document.querySelector(".lists");
    list.addEventListener('click', function(){
        // Remove property will simply remove that class
        mobilenav.classList.remove('open');
        // For adding transition only when times class is clicked 
        mobilenav.classList.add('transition');
    })

   
});


