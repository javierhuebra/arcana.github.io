"use strict"

let main=document.querySelector(".main");

let mazo=[];

for(let i=0;i<80;i++){ // con esta sentencia defino el objeto carta con sus tres atributos.
    mazo[i]={imagen:`img${i}`,
            nombre:`Carta ${i+1}`,
            aptitud:`descripción genérica`};
    console.log(mazo[i].imagen);
}

let fragmento = document.createDocumentFragment();
let contenedor=document.createElement("DIV");
let valorSeleccionado=null;
contenedor.classList.add("contenedor-cartas");
for(let i=0;i<80;i++){
    
    let div=document.createElement("DIV");
    let img=document.createElement("IMG");
    let nombreCarta=document.createElement("H3");
    let comentario=document.createElement("P");
    
    let opacador=document.createElement("DIV");
    let dorso=document.createElement("IMG");

    nombreCarta.innerHTML=`<i class="fa-solid fa-hand-sparkles"></i>`;
    comentario.innerHTML="Click para ver lo que esta carta tiene para decirte";
    img.src=`images/cartas/${mazo[i].imagen}.jpg`;
    dorso.src="images/cartas/back1.jpg";

    
    div.classList.add("flex-item",`carta-${i}`);
    img.classList.add("imagenes-cartas");
    dorso.classList.add("dorso-carta");
    opacador.classList.add("opacador-class");

    

    div.addEventListener("click",()=>{
        document.querySelector(".pantalla-negra").style.display="flex";
        document.querySelector(".img-carta-grande").src=`images/cartas/${mazo[i].imagen}.jpg`;
        document.getElementById("titulo_desc").innerHTML=`${mazo[i].nombre}`;
        document.getElementById("parrafo_carta").innerHTML=`${mazo[i].aptitud}`;
        
        valorSeleccionado=i;
    });
   
    
    
    div.appendChild(img);
    div.appendChild(dorso);
    opacador.appendChild(nombreCarta);
    opacador.appendChild(comentario);
    div.appendChild(opacador); 
    fragmento.appendChild(div);
};
    /* main.appendChild(fragmento);   */

document.querySelector(".uno-uno").addEventListener("click",()=>{
    contenedor.appendChild(fragmento);
    main.appendChild(contenedor);
    document.querySelector(".cuadro").style.display="none";
    document.querySelector(".flecha-atras").style.display="flex";
    contenedor.style.display="flex";
});

document.querySelector(".flecha-atras").addEventListener("click",()=>{
    document.querySelector(".cuadro").style.display="block";
    document.querySelector(".flecha-atras").style.display="none";
    contenedor.style.display="none";
});

document.querySelector(".equis").addEventListener("click",()=>{
    document.querySelector(".pantalla-negra").style.display="none";
});

document.querySelector(".derechita").addEventListener("click",()=>{
    valorSeleccionado++;
    if(valorSeleccionado==80){
        valorSeleccionado=0;
    };
    document.querySelector(".img-carta-grande").src=`images/cartas/${mazo[valorSeleccionado].imagen}.jpg`;
    document.getElementById("titulo_desc").innerHTML=`${mazo[valorSeleccionado].nombre}`;
    document.getElementById("parrafo_carta").innerHTML=`${mazo[valorSeleccionado].aptitud}`;
     
});
document.querySelector(".izquierdita").addEventListener("click",()=>{
    valorSeleccionado--;
    if(valorSeleccionado==-1){
        valorSeleccionado=79;
    };
    document.querySelector(".img-carta-grande").src=`images/cartas/${mazo[valorSeleccionado].imagen}.jpg`;
    document.getElementById("titulo_desc").innerHTML=`${mazo[valorSeleccionado].nombre}`;
    document.getElementById("parrafo_carta").innerHTML=`${mazo[valorSeleccionado].aptitud}`;
})
document.querySelector('.dos-dos').style.backgroundImage = `linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
), url(https://assets.iprofesional.com/cdn-cgi/image/w=880,f=webp/https://assets.iprofesional.com/assets/jpg/2021/01/510913.jpg)`;

window.onload=()=>{
    document.querySelector(".container-principal").style.opacity="1";
    document.querySelector(".main").style.opacity="1";
    document.querySelector(".div-carga").style.display="none";
    
};

