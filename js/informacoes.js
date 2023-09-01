var menu1 = $("#menu1");
var menu2 = $("#menu2");
var menu3 = $("#menu3");
var menu4 = $("#menu4");

var plan1 = $("#planinhaInfo1");
var plan2 = $("#planinhaInfo2");
var plan3 = $("#planinhaInfo3");
var plan4 = $("#planinhaInfo4");


menu1.on('click', function(){
    plan1.slideToggle(600);
    plan2.slideUp(200);
    plan3.slideUp(200);
    plan4.slideUp(200);  
});
menu2.on('click', function(){
    plan2.slideToggle(600);
    plan1.slideUp(200);
    plan3.slideUp(200);
    plan4.slideUp(200);  
});
menu3.on('click', function(){
    plan3.slideToggle(600);
    plan1.slideUp(200);
    plan2.slideUp(200);
    plan4.slideUp(200);  
});
menu4.on('click', function(){
    plan4.slideToggle(600);
    plan1.slideUp(200);  
    plan2.slideUp(200);
    plan3.slideUp(200);
});

