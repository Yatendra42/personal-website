$(document).ready(function(){

    
      $(".toggle").click(function() {
            
           $("header").toggleClass('openNav'); 
      });
    
       $('.blog-slide').owlCarousel({
          
          nav:true,
          dots:false,   
//          autoplay:true,
          loop:true,
           responsive:{
        0:{
            items:1
        },
        600:{
          items:2
        },
        1000:{
            items:3
        }
    }
      });
    
});