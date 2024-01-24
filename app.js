let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados = [];
let numeroMax=10;
let nroOportunidades=3;


function asignarTextoElemento(elemento,texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}

function verificarIntento(){
    // Tanto el querySelector y el getElementById retornan el OBJETO,
    // pero si queremos el valor debemos poner .value
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    
    
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        
        if(intentos<nroOportunidades){
            //Aca el usuario no acerto
            if(numeroDeUsuario>numeroSecreto){
                asignarTextoElemento('p',`El número secreto es menor que ${numeroDeUsuario}`);
            }else{
                asignarTextoElemento('p',`El número secreto es mayor que ${numeroDeUsuario}`);
            }
            intentos++;
            limpiarCaja();
        }else{
            asignarTextoElemento('p',`Te quedaste sin intentos`);
            document.getElementById('reiniciar').removeAttribute('disabled');

        }
        
    }
    
}



function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMax) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMax){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }
    else{
        //Si el numeroGenerado esta incluido en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
            
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indique un numero del 1 al ${numeroMax}. 
                                Solo tienes ${nroOportunidades} ${nroOportunidades ===1 ? 'oportunidad' : 'oportunidades'}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja();
    // Indicar mensaje de inicio
    // Generar un nuevo numero aleatorio
    // Reiniciar el numero de intentos
    condicionesIniciales();
    // Deshabilitar el btn de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);

    
}

condicionesIniciales();



