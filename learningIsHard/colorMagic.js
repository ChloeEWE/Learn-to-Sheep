$(document).ready(function() {
    
   //quick edits
    
    //sets to random: can be manual from here
    Math.random();
 var variant = Math.random()*360;
    //removing 220 adds 3rd color
    var use = 220-variant;
    var darkendAcc = "hsla("+use+", 50%, 30%, 1 )";
    //sets comp: remove to get monochromatic
    var comp =  60+use;
    var headerColor = "hsla("+comp+", 50%, 60%, 1 )";
    //sets border exceptions
    var permaBorder = "body, nav li, nav ul, #centerSidebar li"
    
//next few lines set general border color
    var me = $.colors($("#title").css("border-bottom-color")).toString('hsla');
    var work = me.split('(').pop();
    var dog = work.split(',');
    var newH = dog[0]-(variant);
    //variable to se for most borders
    var generalBorder = "hsla("+newH+", "+dog[1]+"%, "+dog[2]+"%, "+dog[3];

    
    
    
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
    
    
        
//controls what happens when the mouse hovers over the buttons
    $(".button p").mouseenter(function()
    { 
        $(this).toggleClass("hovered"); 
        $(this).parent().css("border-color", "hsla("+use+", 80%, 30%, 1 ");
        $(".hovered").css("color", "white");
//this is when the mouse leaves            
        });
    $(".button p").mouseleave(function()
    { 
        $(this).toggleClass("hovered"); 
        $(this).css("color", "hsla("+use+", 80%, 30%, 1 ");
        
    $(this).parent().css("border-color", generalBorder);
            
        });

//simple coloring
    
    $("span, .button p, aside").css("color", darkendAcc);
    
        
$("*").not(permaBorder).css("border-color", generalBorder);
    
    $("#navbar, #centerSidebar").css("border-color", darkendAcc);
    
    
//this is the base colors for stuff, because they are done semi-separately?    the complimentay things. 
//complimentary elements
    
  
    $("h1, h4, h5").not("#centerSidebar h5").css("color", headerColor);
    
    $(".button p").css("border-color", "hsla("+comp+", 50%, 50%, 1 )");
  
    $(".button p, nav ul, #centerSidebar div").css("background-color", "hsla("+comp+", 70%, 80%, 1 )");
    
    $("a").not("nav a, #centerSidebar a").css("color", "hsla("+comp+", 80%, 50%, 1 )");
    
    $("#centerSidebar h5").css("color");
    
});