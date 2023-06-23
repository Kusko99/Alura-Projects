function tocaSom (seleteorAudio){
    const elemento = document.querySelector(seleteorAudio);
    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }else{
        // alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');



for(let contador = 0 ; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`
    // console.log(idAudio)

    tecla.onclick = function (){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento){
        if(evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

    // console.log(contador);
}