$(function(){
    $('.banner').mouseenter(function(){
    const boxHeight = $(this).outerHeight()
    const boxWidth = $(this).outerWidth()
    let elementX = $(this).offset().left
    let elementY =$(this).offset().top
    //console.log(boxHeight,boxWidth,elementX,elementY)
    $('.banner').mousemove(function(e){
       let X = e.pageX - elementX
       let Y = e.pageY - elementY
       let offsetX,offsetY
       offsetX = X - boxWidth/2
       offsetY =  boxHeight/2 - Y
      $(this).css({
         "-webkit-transform": "rotateY(" + offsetX / 20 + "deg) " + "rotateX(" + offsetY / 20 + "deg)"
      })
    })
  })
    $(this).mouseleave(function(){
         $('.banner').css({
         "-webkit-transform": "rotateY(0deg) " + "rotateX(0deg)"
      })
    })
  })