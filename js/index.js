var imagenes = ['imagenes/NeoQLED.jpg', 'imagenes/BESPOKE.jpg' ],
    cont = 0;

function carrousel(contenedor){
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            vimg = contenedor.querySelector('img'),
            tgt = e.target;

            if(tgt == atras){
                if(cont > 0){
                    vimg.src = imagenes[cont - 1];
                    cont--;
                } else {
                    vimg.src = imagenes[imagenes.length - 1];
                    cont = imagenes.length - 1; 
                }
            }else if (tgt == adelante){
                if(cont < imagenes.length - 1){
                    vimg.src = imagenes[cont + 1];
                    cont ++;
                } else {
                    vimg.src = imagenes[0];
                    cont = 0;
                }
            }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor');

    carrousel(contenedor);
});