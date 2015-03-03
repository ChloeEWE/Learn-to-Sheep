$(function() {
    $("#switcher img").toggleClass("isButton");
    $("#switcher a").not("[href]").children("img").toggleClass("isButton");
    
$("#switcher img").not(".isButton").addClass("isNotButton");
                                                    $("#next.isButton").parent().addClass("nextLink");       
$("#back.isButton").parent("a").addClass("backLink");                                      
                                                    
    
});
    