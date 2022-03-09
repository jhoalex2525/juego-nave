document.addEventListener("DOMContentLoaded",function(){
    const cuadrosTablero = document.querySelectorAll(".tablero div");
    const resultadoAliens = document.querySelector(".conteo");
    let cuadros = 15;
    let posicionNave = 202;
    let posicionAliens = 0;
    let aliensMuertos = [];
    let resultado = 0;
    let direccion = 1;
    let alienID;

    // posicion inicial de aliens en el tablero
    let aliens = [
        0,1,2,3,4,5,6,7,8,9,
        15,16,17,18,19,20,21,22,23,24,
        30,31,32,33,34,35,36,37,38,39,
    ]

    // colocar los aliens en el tablero
    // aliens.forEach(alien => cuadrosTablero[posicionAliens + alien].classList.add("aliens"));

    // otra forma para poner los aliens
    function ubicarAliens(){
        for(let index = 0; index < aliens.length; index++){
            cuadrosTablero[aliens[index]].classList.add("aliens")
        }
    }

    ubicarAliens();

    // función para quitar aliens del tablero
    function quitarAliens(){
        for(let index = 0; index < aliens.length; index++){
            cuadrosTablero[aliens[index]].classList.remove("aliens")
        }
    }    
    
    // colocar la nave en posicion inicial
    cuadrosTablero[posicionNave].classList.add("nave");     

    // para mover la nave a los lados
    function moverNave(e){
        
        // quitar la nave del tablero
        cuadrosTablero[posicionNave].classList.remove("nave");     

        // mover nave dependiendo de la tecla oprimida
        switch(e.key){
            case 'ArrowLeft':
                if(posicionNave%cuadros !== 0){
                    posicionNave -= 1;
                }
            break;
            case 'ArrowRight':
                if(posicionNave%cuadros < cuadros - 1){
                    posicionNave += 1;
                }
            break;
        }

        // colocar la nave en nueva posición
        cuadrosTablero[posicionNave].classList.add("nave");  
    }   
    document.addEventListener("keydown", moverNave); 
});