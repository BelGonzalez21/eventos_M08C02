window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover',function(){
        titulo.style.color = "red";
    });

    titulo.addEventListener('mouseleave',function(){
        titulo.style.color = "black";
    });

    let estadoSecreto = 0;

   let inputTitle = document.querySelector('#titulo')
   inputTitle.addEventListener('keyup',function(e){
        switch (estadoSecreto) {
            case 0:
                e.key == "s" ? estadoSecreto++ : (estadoSecreto = 0) ;
                break;
            case 1:
                e.key == "e" ? estadoSecreto++ : (estadoSecreto = 0) ;
                break;
            case 2:
                e.key == "c" ? estadoSecreto++ : (estadoSecreto = 0) ;
                break;
            case 3:
                e.key == "r" ? estadoSecreto++ : (estadoSecreto = 0) ;
                break;
            case 4:
                e.key == "e" ? estadoSecreto++ : (estadoSecreto = 0) ;
                break;
            case 5:
                e.key == "t" ? estadoSecreto++ : (estadoSecreto = 0) ;
                break;
            case 6:
                e.key == "o" ? alert('SECRETO MÁGICO') : (estadoSecreto = 0) ;
                break;
            default:
                estadoSecreto = 0;
                break;
        }
    console.log(e.key,estadoSecreto);
   })
    
}