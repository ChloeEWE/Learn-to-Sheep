$(document).ready(function() { 
 
    fixNavAndAbout();
    
$(window).resize(function() {
    fixNavAndAbout();
});
    
 //makes about and nav equal
function fixNavAndAbout (){      
    var aboutHeight = $("#about").css("height");
    var aboutHeightNum = parseInt(aboutHeight, 10);
    
    
    var navHeight = $("#navbar").css("height");
    var navHeightNum = parseInt(navHeight, 10);
    
    
    
    
    console.log(aboutHeight, aboutHeightNum, navHeight, navHeightNum);
    
    
    

    if(aboutHeightNum > navHeightNum) {
    var difference = aboutHeightNum-navHeightNum;
    var navMargin = difference/2;
    var navsMargin = navMargin+"px";
        $("#navbar").css("height", aboutHeight);
        $("#about").css("height", aboutHeight);
        $("#navbar nav").css("padding-top", navsMargin);
        
    }
    
    if(aboutHeightNum < navHeightNum) {
        $("#about").css("height", navHeight);
        $("#navbar").css("height", navHeight);
    }
}    
    
    });