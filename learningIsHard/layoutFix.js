$(document).ready(function() {
    
    //fixes sizings
    
    fixSize();
    
    //makes button height = to width
{
    var buttonWidth = $("#CButton").width();
 
    $(".button").css("height", buttonWidth);
}
    
    //makes about and nav equal
    
    var aboutHeight = $("#about").css("height");
    var aboutHeightNum = parseInt(aboutHeight, 10);
    var navHeight = $("#navbar").css("height");
    var navHeightNum = parseInt(navHeight, 10);
    var difference = aboutHeightNum-navHeightNum;
    var navMargin = difference/2;
    var navsMargin = navMargin+"px";
    console.log(aboutHeight, navHeight, navsMargin);
    
    
    
    if(aboutHeightNum > navHeightNum) {
        $("#navbar").css("height", aboutHeight);
        $("#navbar nav").css("padding-top", navsMargin);
    }
    
    if(aboutHeightNum < navHeightNum) {
        $("#about").css("height", navHeight);
    }
    
    
    
    //makes nav bigger to size when browser moves
$(window).resize(function() {
  fixSize();
});
    
function fixSize(){    
    
var fullTop = $("body").css("width");
    var fullTopNum = parseInt(fullTop, 10);
    
    var navW = $("#navbar").css("width");
    var navWNum = parseInt(navW, 10);
    
    var aboutSize = $("#about").css("width");
    var aboutSizeNum = parseInt(aboutSize, 10);
    
    var marTopSize = $("#navbar").css("margin-left");
    var marTopSizeNum = parseInt(marTopSize, 10);
    var marsTopNum = 9*marTopSizeNum;
    
    var changeInTopWidth = fullTopNum-navWNum-aboutSizeNum-marsTopNum-1;
    
    
    var finalTopWidth = navWNum+changeInTopWidth+"px";
    
    $("#navbar").css("width", finalTopWidth);
   
    console.log(finalTopWidth, navW, marsTopNum);
}

});

