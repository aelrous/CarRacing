$(document).ready(function() {

	//creamos un array con las imágenes de los coches:
	let cochesArray=["img/car1.png","img/car2.png","img/car3.png","img/car4.png","img/car5.png","img/car6.png","img/car7.png","img/car8.png","img/car9.png"];

//cuando el valor del desplegable cambia:	
$("select#desplegable").change(function() {
	let nplayer = $(this).children("option:selected").val();
	let participantes= parseInt(nplayer);//parseamos el valor del desplegable en un integer
	let mostarCoche="";
	//loop for para que implante en el html las imagenes de los vehiculos
	for (let i = 0; i < participantes; i++) {
		mostarCoche+="<img src='"+cochesArray[i]+"' alt='"+[i+1]+"' id=coche"+[i+1]+"><br>";	
	}
	carretera.innerHTML=mostarCoche;

	$("#arrancar").show();//mostramos el boton arrancar
	$("#reiniciar").hide();//escondemos el boton reiniciar
});	

//cuando pulsamos sobre el boton arrancar:
$("#arrancar").click(function() {
	//valores aleatorios para el desplazamiento de los coches con animate
	let participantes = $("#desplegable").val();//variable cuyo valor es el introducido en el desplegable
	for(let i=1;i<=participantes;i++){
		let vel = Math.random()*10000+1;//funcion para que la velocidad sea aleatoria
		$("#coche"+i).animate({"margin-left":"92%"},(vel),function(){//animacion para que el coche se mueva hacia la dcha de a una velocidad aleatoria
			let coche = document.getElementById("#coche"+i);
			$("ol").append("<li>" + ("Coche "+i) + "</li>");//muestra lista ordenada de los que van llegando a la meta	
		})
	}

	$("#arrancar").hide();//escondemos boton arrancar
	$("#reiniciar").show();//mostramos boton reiniciar
});

//Cuando pulsamos sobre el boton reiniciar:
$("#reiniciar").click(function(){
	$("img").animate({"margin-left":"0px"},2000);//y dan marcha atras hasta el principio(0px)
	$("#reiniciar").hide();//escondemos el boton reiniciar
	$("#arrancar").show();//aparece el boton arrancar


});
















});





