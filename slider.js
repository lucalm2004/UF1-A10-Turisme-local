var linea1 = document.getElementById('linea1');
var linea2 = document.getElementById('linea2');
var linea3 = document.getElementById('linea3');
var linea4 = document.getElementById('linea4');
var slider = document.getElementById('slider');
var activa = document.getElementById('activa');

linea1.onclick = function(){
    slider.style.transform = 'translateX(0%)';
    activa.style.top = '0px';
}

linea2.onclick = function(){
    slider.style.transform = 'translateX(-25%)';
    activa.style.top = '60px';

}

linea3.onclick = function(){
    slider.style.transform = 'translateX(-50%)';
    activa.style.top = '140px';

}

linea4.onclick = function(){
    slider.style.transform = 'translateX(-75%)';
    activa.style.top = '220px';

}