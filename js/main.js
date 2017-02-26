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

  $('.background_detect2').click(function(){
    $('h1').toggleClass('under');
  });

  randomImageLoad();
  backgroundDetectSetup();
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
  var logo = $('.background_img');
  var logo_length = $('.background_img').length;
  var logo_choice = Math.floor((Math.random() * logo_length) + 0);

  var logo_show = logo[logo_choice];
  $(logo_show).addClass('show');
}

backgroundDetectSetup = function(){
  var background_width = $('.show img').width();
  $('.background_detect').css({ 'width': background_width });
}