$(document).ready(function() { 

    $(".left").children().addClass("left");
    $(".right").children().addClass("right");
    
    fixSize();
    
    $(window).resize(function() {
        fixSize();
    });
    
    function fixSize(){
    var full = $("#fake").css("width");
    var fullNum = parseInt(full, 10);
    
    var sideNav = $("#centerSidebar").css("width");
    var sideNavNum = parseInt(sideNav, 10);
    
    var lessonSize = $("#summariesSection").css("width");
    var lessonSizeNum = parseInt(lessonSize, 10);
    
    var marSize = $("#centerSidebar").css("margin-left");
    var marSizeNum = parseInt(marSize, 10);
    var marsAndBorsNum = 4*marSizeNum;
    
    var changeInWidth = fullNum-sideNavNum-lessonSizeNum-marsAndBorsNum;
    
    
    var finalWidth = lessonSizeNum+changeInWidth+"px";
    
    $("#summariesSection").css("width", finalWidth);
    
    console.log(finalWidth);
    }
    
    
});

