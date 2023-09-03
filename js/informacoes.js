var menu1 = $("#menu1");
var menu2 = $("#menu2");
var menu3 = $("#menu3");
var menu4 = $("#menu4");

var plan1 = $("#info1");
var plan2 = $("#info2");
var plan3 = $("#info3");
var plan4 = $("#info4");

menu1.on('focus', function(){
    menu1.style.color("black");
});

menu1.on('click', function(){
    plan1.slideDown(600);
    plan2.slideUp(200);
    plan3.slideUp(200);
    plan4.slideUp(200);  
});
menu2.on('click', function(){
    plan2.slideDown(600);
    plan1.slideUp(200);
    plan3.slideUp(200);
    plan4.slideUp(200);  
});
menu3.on('click', function(){
    plan3.slideDown(600);
    plan1.slideUp(200);
    plan2.slideUp(200);
    plan4.slideUp(200);  
});
menu4.on('click', function(){
    plan4.slideDown(600);
    plan1.slideUp(200);  
    plan2.slideUp(200);
    plan3.slideUp(200);
});

