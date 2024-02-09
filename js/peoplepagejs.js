/*****************************home page js**********************************/
$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop()>50)
});
$(window).scroll(function(){
    $('img').toggleClass('scrolled',$(this).scrollTop()>50)
});
/*****************************people page js**********************************/ 
function switchtoresumepage(){
    window.location.href= "people's-resume.html";
}