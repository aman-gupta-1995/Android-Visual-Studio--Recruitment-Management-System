/* login and logout js */ 
$('input[type="submit"]').click(function(){     
  $('.login').addClass('test')        
  setTimeout(function(){           
    $('.login').addClass('testtwo')                 
  },300);                  
  setTimeout(function(){     
    $(".authent").show().animate({right:-320},{easing : 'easeOutQuint' ,duration: 600, queue: false });
    $(".authent").animate({opacity: 1},{duration: 200, queue: false }).addClass('visible');
  },500);
  setTimeout(function(){
    $(".authent").show().animate({right:90},{easing : 'easeOutQuint' ,duration: 600, queue: false });
    $(".authent").animate({opacity: 0},{duration: 200, queue: false }).addClass('visible');
    $('.login').removeClass('testtwo')
  },2500);
  setTimeout(function(){
    $('.login').removeClass('test')
    $('.login div').fadeOut(123);
  },2800);
  setTimeout(function(){
    $('.success').fadeIn();
  },3200);
});

$('input[type="text"],input[type="password"]').focus(function(){
  $(this).prev().animate({'opacity':'1'},200)
});
$('input[type="text"],input[type="password"]').blur(function(){
  $(this).prev().animate({'opacity':'.5'},200)
}); 

$('input[type="text"],input[type="password"]').keyup(function(){
  if(!$(this).val() == ''){ 
    $(this).next().animate({'opacity':'0','right' : '20'},200)

  } else {
    $(this).next().animate({'opacity':'1','right' : '20'},200)
  }
});

var open = 0;
$('.tab').click(function(){
  $(this).fadeOut(200,function(){
    $(this).parent().animate({'left':'0'})
  });
});
/* /////  login and logout js //// */
$(document).ready(function(){
  $(window).scroll(function () {
         if ($(this).scrollTop() > 1080) {
             $('#back-to-top').fadeIn();
         } else {
             $('#back-to-top').fadeOut();
         }
     });
     // scroll body to 0px on click
     $('#back-to-top').click(function () {
         $('#back-to-top').tooltip('hide');
         $('body,html').animate({
             scrollTop: 0
         }, 800);
         return false;
     });
      
     $('#back-to-top').tooltip('show');

});
