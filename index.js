

var tablinks=$(".tab-links");
var tabcontent=$(".tab-contents");
function opentab(tabname){
    for(var i=0;i<document.querySelectorAll(".tab-links").length;i++){
        
        
            document.querySelectorAll(".tab-links")[i].classList.remove("after-link");
    
            
       
        
            document.querySelectorAll(".tab-contents")[i].classList.remove("active-tab");
            
            event.currentTarget.classList.add("after-link");
           document.getElementById(tabname).classList.add("active-tab")

            
           
            
            
        
    }
    
}