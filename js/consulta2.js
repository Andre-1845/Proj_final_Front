var card1 = $("#card1");
var card2 = $("#card2");
var card3 = $("#card3");
var card4 = $("#card4");
var card5 = $("#card5");

var menu1 = $("#menu1");
var menu2 = $("#menu2");
var menu3 = $("#menu3");
var menu4 = $("#menu4");

var plan1 = $("#planinhaInfo1");
var plan2 = $("#planinhaInfo2");
var plan3 = $("#planinhaInfo3");
var plan4 = $("#planinhaInfo4");


var paginaTitulo = $("#pagTitulo").text();
var teste = "ROLHA";



card3.on('click', function(){
    
   var tituloModif = "consultas";
   window.alert(tituloModif);
   return;
});

var tituloTeste = $("#pagTitulo").text("R");

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






