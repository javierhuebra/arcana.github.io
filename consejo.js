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

let fragmentoConsejo=document.createDocumentFragment();
let movEnX=6;
let indice=1;

for(let i=0;i<33;i++){
    let cartaMesa=document.createElement("IMG");
    

    cartaMesa.classList.add("imagen-cartas-consejo");
    cartaMesa.src="images/cartas/back1.jpg"
    cartaMesa.style.left=`${movEnX}%`;

    fragmentoConsejo.appendChild(cartaMesa);
    
    movEnX=movEnX+2;

    cartaMesa.addEventListener("click",()=>{
        
        if(indice<6){
            let valorRandom= parseInt(Math.random()*79);
            console.log(valorRandom);
            cartaMesa.src=`images/cartas/img${valorRandom}.jpg`;
            cartaMesa.style.transition=`2s`;
            cartaMesa.style.left=`40%`;
            cartaMesa.style.bottom=`100%`;

            cartaMesa.style.opacity="0";
            
            document.querySelector(`.cc${indice}`).style.opacity=1;
            indice++;
            document.querySelector(".titulo-cant-cartas").innerHTML=`Carta N° ${indice}`;
            
           
        };
        
       
    });
}

document.querySelector(".cartas-mesa").appendChild(fragmentoConsejo);
