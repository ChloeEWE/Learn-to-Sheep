$(document).ready(function() {
    
   
    Math.random();
 var variant = Math.random()*360;
    var use = 220-variant;
    var comp = 180+use;
    $("aside").css("color", "hsla("+use+", 80%, 30%, 1 ");
$("*").not("li").each(function()
            {  
    var me = $.colors($(this).css("background-color")).toString('hsla');
    var you = me.split('hsla').pop();  
    var work = me.split('(').pop();
    var dog = work.split(',');
    var newH = dog[0]-(variant);
    var final = "hsla("+newH+", "+dog[1]+"%, "+dog[2]+"%, "+dog[3];
    $(this).css("background-color", final);
});
    
    
    
    $("*").each(function()
            {  
    var me = $.colors($(this).css("border-bottom-color")).toString('hsla');
    
    var work = me.split('(').pop();
    var dog = work.split(',');
    var newH = dog[0]-(variant);
    var final = "hsla("+newH+", "+dog[1]+"%, "+dog[2]+"%, "+dog[3];
    $(this).css("border-color", final);
   
});
    
    
  $("span, .button p, aside").css("color", "hsla("+use+", 80%, 30%, 1 ");
           
     
        

    $(".button p").mouseenter(function()
    { 
        $(this).toggleClass("hovered"); 
        $(".hovered").parent().css("border-color", "hsla("+use+", 80%, 30%, 1 ");
        $(".hovered").css("color", "white");
            
        });
    
    $("h1").css("color", "hsla("+comp+", 80%, 50%, 1 )");
    $(".button p").css("border-color", "hsla("+comp+", 50%, 50%, 1 )");
    $(".button p").css("background-color", "hsla("+comp+", 70%, 80%, 1 )");
    
    
        
});