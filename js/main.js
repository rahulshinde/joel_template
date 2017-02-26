Site = {};

$(document).ready( function(){
  // root size

  if ($(window).width() > $(window).height()){
    root_size = '10.5vh';
  }else{
    root_size = '10.5vw';
  }
  $('html').css({ 'font-size': root_size });
  $(window).resize(changeRootFontSize);
  $(window).resize(backgroundDetectSetup);

  $('.background_detect').mouseover(function(){
    $('h1').addClass('under');
  });

  $('.background_detect').mouseout(function(){
    $('h1').removeClass('under');
  });

  $('.background_detect').on('click', function(){
    nextSlide();
    backgroundDetectSetup();
  });

  $('.background_detect2').on('click', function(){
    $('h1').toggleClass('under');
  }); 

  randomImageLoad();

  setTimeout(function(){
    backgroundDetectSetup()
  }, 250);
})

changeRootFontSize = function() {
  if ($(window).width() > $(window).height()){
    root_size = '10.5vh';
  }else{
    root_size = '10.5vw';
  }
  $('html').css({ 'font-size': root_size });
}

randomImageLoad = function(){
  Site.logo = $('.background_img');
  Site.logo_length = $('.background_img').length;
  Site.logo_choice = Math.floor((Math.random() * Site.logo_length) + 0);

  var logo_show = Site.logo[Site.logo_choice];
  $(logo_show).addClass('show');

  setupSlideShow();
}

setupSlideShow = function(){
  Site.slide_position = Site.logo_choice;
}

nextSlide = function(){
  Site.slide_position = Site.slide_position + 1;
  if (Site.slide_position >= Site.logo_length){
    Site.slide_position = 0;
  }
  $('.background_img').removeClass('show');
  var logo_show = Site.logo[Site.slide_position];
  $(logo_show).addClass('show');
}

backgroundDetectSetup = function(){
  var background_width = $('.show img').width();
  $('.background_detect').css({ 'width': background_width });
}