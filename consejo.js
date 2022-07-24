"use strict"

//FUNCIONES///////////////////////////////////////////
function agrandar_cubo (sizeCubo){
    

    document.querySelector(".cubo").style.width=`${sizeCubo}px`;
    document.querySelector(".cubo").style.height=`${sizeCubo}px`;
    document.querySelector(".cubo").style.transformOrigin=`${sizeCubo/2}px ${sizeCubo/2}px ${sizeCubo/2}px`;

    document.querySelector(".cara1").style.transform=`translateZ(${sizeCubo}px)`;
    document.querySelector(".cara2").style.transform=`rotateY(90deg) translateZ(${sizeCubo/2}px) translateX(${-sizeCubo/2}px)`
    document.querySelector(".cara3").style.transform=`rotateY(90deg) translateZ(${-sizeCubo/2}px) translateX(${-sizeCubo/2}px)`
    document.querySelector(".cara4").style.transform=`rotateX(90deg) translateZ(${sizeCubo/2}px) translateY(${sizeCubo/2}px)`
    document.querySelector(".cara5").style.transform=`rotateX(90deg) translateZ(${-sizeCubo/2}px) translateY(${sizeCubo/2}px)`
    /* document.querySelector(".cara6").style.transform=`rotateY(90deg) translateZ(${sizeCubo/2}px) translateX(${sizeCubo/2}px)` */
}
///////////////////////////////////////////////////////

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
let arrCartas=[];
let cartaPura=[];
for(let i=0;i<33;i++){
    let cartaMesa=document.createElement("IMG");
    

    cartaMesa.classList.add("imagen-cartas-consejo");
    cartaMesa.src="images/cartas/back1.jpg";
    cartaMesa.style.left=`${movEnX}%`;

    fragmentoConsejo.appendChild(cartaMesa);
    
    movEnX=movEnX+2;

    cartaMesa.addEventListener("click",()=>{
        
        if(indice<=6){
            let valorRandom= parseInt(Math.random()*79);
            arrCartas[indice-1]=valorRandom;//test 1

            console.log(arrCartas);
            console.log(valorRandom);
            cartaMesa.src=`images/cartas/img${valorRandom}.jpg`;
            cartaMesa.style.transition=`2s`;
            cartaMesa.style.left=`40%`;
            cartaMesa.style.bottom=`100%`;

            cartaMesa.style.opacity="0";

            
            
            if(indice==6){
                
                
                document.querySelector(".cartas-mesa").classList.add("cartas-mesa-2");
                document.querySelector(".workspace-consejo").style.opacity="0";
                document.querySelector(".cartas-mesa-2").addEventListener("animationend",()=>{
                    document.querySelector(".cartas-mesa-2").style.display="none";
                    document.querySelector(".workspace-consejo").style.opacity="1";
                    for(let i=0;i<6;i++){
                        document.querySelector(`.cc${i+1}`).src=`./images/cartas/img${arrCartas[i]}.jpg`
                    };
                    
                    agrandar_cubo(400);
                    document.querySelectorAll(".cartas-cubo").forEach((carta)=>{
                        carta.style.width="40%";
                        carta.style.height="65%";
                        carta.style.transition="0.5s"
                        carta.style.boxShadow="0px 0px 15px black";
                        

                    });
                    

                });
                
                
            };    
            
            
            document.querySelector(`.cc${indice}`).style.opacity=1;
            indice++;
            document.querySelector(".titulo-cant-cartas").innerHTML=`Carta N° ${indice}`;
            
           
        };

        
        
       
    });

}
/* document.querySelector(".cubo").addEventListener("animationend",() => {
    console.log("Se termino la animacion jeje");
}); */

document.querySelector(".cartas-mesa").appendChild(fragmentoConsejo);
document.documentElement.style.setproperty('--widith-var','250px');