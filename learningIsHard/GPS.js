$(document).ready(function() {
    
    var fromMain = window.location.pathname.split('learningIsHard/').pop();
    var getBack = "";
    var folders = fromMain.split('/'); 
        
    
    
    for (var i=(folders.length-1); i--;){
          getBack = getBack +"../" 
    }
   
    $("a[href]").each(function()
    {
        var fromMain = $(this).attr("href");
        var wait = fromMain.split('://').length;
        
        if(wait<2){
        $(this).attr("href", getBack + fromMain);
        }    
    });
    
    var thisPage = window.location.pathname.split('/').pop();
    $("[href$='"+thisPage+"']").removeAttr("href");
    
        $("a").not("[href]").children("li").addClass("justText");
        $("a").not("[href]").addClass("justText");
    
    
    
    
    
} );