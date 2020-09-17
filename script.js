jQuery(document).ready(function() {


  var btn = $('#button');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });
   $(".menu-outline").click(function (e) {
    e.preventDefault();
    $('a.nav').toggleClass('show');
 });

 if ( $(window).width() < 768) {
   $('a.vertical').click(function(e){
     e.preventDefault();
     $('a.vertical').toggleClass('show');
   })
 };

 $('.about').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#about').offset().top }, 1000);
  e.preventDefault();
});
  $('.program').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#program').offset().top }, 1000);
  e.preventDefault();
});
   $('.galleryy').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#galleryy').offset().top }, 1000);
  e.preventDefault();
});
    $('.reply').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#reply').offset().top }, 1000);
  e.preventDefault();
});

  $('.model-btn').click(function (e) {
    e.preventDefault();
    var destinationPopup = $(this).attr("href");
    $(destinationPopup).addClass('show');
    $(destinationPopup + '.popup__close').click(function () {
      $(destinationPopup).removeClass('show');
    });
    $(destinationPopup + '.popup__overlay').click(function () {
      $(destinationPopup).removeClass('show');
    });
});

  $(".faq-link").click(function (e) {
   e.preventDefault();
   $('.answer').toggleClass('show');
  });


var $speed = 500;
var $class = 'opened';
var $class_open = '.faq-answer';

  $('.faq-question').on('click', function() {
       $ul = $(this).closest('ul');
       $answer = $(this).closest('li').find($class_open);

       if( !$(this).closest('li').hasClass($class) ) {

         $ul.find('li').each(function() {
           if( $(this).hasClass($class) )
             $(this).removeClass($class).find($class_open).slideUp($speed);
         });
       }

       $answer
         .slideToggle($speed)
         .closest('li')
         .toggleClass($class);
     });

  
});
  $('.multiple-items').slick({
        dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
      autoplaySpeed: 8000,
      centerMode: true,
    adaptiveHeight: true,

          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                
                slidesToShow: 1,
                slidesToScroll: 1
                
              }
            }
          ]
      });