let menuVisible= false;
//Funció'nh que oculta o mujestra el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible= false;   
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible= true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList= "";
    menuVisible= false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills=document.getElementById("skills");
    var distancia_skills= window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills>=300){
        let habilidades= document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htlmcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("cmas");
        habilidades[5].classList.add("DJango");
        habilidades[6].classList.add("SQL");
        habilidades[7].classList.add("excel");
        habilidades[8].classList.add("ciberseguridad");
        habilidades[9].classList.add("comunicacion");
        habilidades[10].classList.add("equipo");
        habilidades[11].classList.add("creatividad");
        habilidades[12].classList.add("dedicacion");
        habilidades[13].classList.add("español");
        habilidades[14].classList.add("ingles");
    }
}
 //detecto el srolling pra aplicar la animacion de la barra de habilidades
 window.onscroll = function(){
    efectoHabilidades();
 }