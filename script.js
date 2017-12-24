window.onload = function(){
	//Declaro una variable seleccionando el botón que quiero que muestre/oculte el menu desplegable.
var buttonMenu = document.getElementById('botonImagen')

//Selecciono el menu desplegable.
var menu = document.getElementById('menu')


//Con esto el menu se desplega 
	buttonMenu.onclick = function(){
	if(menu.className == 'hidden'){
		menu.className = 'show'
	} else{
		menu.className = 'hidden'
	}
}


}
