$(window).scroll(function () {
  console.log($(window).scrollTop())
  if ($(window).scrollTop() > 63) {
    $('.navbar').addClass('navbar-fixed');
  }
  if ($(window).scrollTop() < 64) {
    $('.navbar').removeClass('navbar-fixed');
  }
});

 
      function initMap() { 
        var uluru = {lat: 28.623815, lng: 77.366113}; 
        var map = new google.maps.Map(document.getElementById('map'), { 
          zoom: 15, 
          center: uluru 
        }); 
        var marker = new google.maps.Marker({ 
          position: uluru, 
          map: map 
        }); 
      } 
                                                        



      $(document).ready(function(){
        $('.owl-one').owlCarousel({
            loop:true,
            autoplay:true,
            animateOut: 'fadeOut',
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
    
        $('.owl-two').owlCarousel({
            loop:true,
            autoplay:true,
            margin:10,
            nav:true,
            dot:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:6
                }
            }
        });
        
        $('.owl-three').owlCarousel({
          loop:true,
          autoplay:true,
          animateOut: 'fadeOut',
          margin:10,
          nav:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      });
    });


    $('a').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top -50
      }, );
      return false;
  });



  

function SwapDivsWithClick(div1,div2)
{
   d1 = document.getElementById(div1);
   d2 = document.getElementById(div2);
   if( d2.style.display == "none" )
   {
      d1.style.display = "none";
      d2.style.display = "block";
   }
   else
   {
      d1.style.display = "block";
      d2.style.display = "none";
   }
}




reset-psw