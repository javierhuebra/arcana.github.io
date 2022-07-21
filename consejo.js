"use strict"
document.querySelector(".enviar-input").addEventListener("click",()=>{
    document.querySelector(".consejo-arbolito").classList.add("consejo-arbolito1");
    document.querySelector(".consejo-informativa").style.display="none";
    document.querySelector(".consejo-formulario").style.display="none";
    
    document.querySelector(".consejo-arbolito1").addEventListener("webkitAnimationEnd",()=>{
        document.querySelector(".consejo-arbolito1").style.display="none";
    });
    document.querySelector(".workspace-consejo").style.display="flex";
});

