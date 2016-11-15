$(document).ready(function() {
  $(window).resize(function(){
    if($(window).width() > 580){
  $(window).scroll(function () {
      
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 60) {
      $('#main-nav').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 30) {
      $('#main-nav').removeClass('navbar-fixed');
    }
  });}
});
  var  handler = 1;

  $('.handle').on('click',function(){
    console.log('showing');
    if(handler==1){
      handler=0;
       $('#main-nav').animate({
      height: '300px',
     
    }); $('#main-nav').animate({
      
      overflow: 'visible'
    });}
       else{
        handler=1;
        console.log('sss');
        $('#main-nav').animate({
          height: '0'
        });
     }
    }

  );
});