window.onload = function(){
	document.getElementById("boton").addEventListener("click", agregar);
}

function agregar(){
	//creamos nuestros nodos elementos
	var tareas = document.getElementById("tarea").value;
	document.getElementById("tarea").value="";

	var cont = document.getElementById("contenedor"); 

	var nuevasTareas=document.createElement('div');
	var textoNuevaTarea = document.createTextNode(tareas);
	var elementoContenedor = document.createElement('span');

	//asignamos padres a nodos creados 
	elementoContenedor.appendChild(textoNuevaTarea);
	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);

	//creamos checkbox e iconos, les damos atributo y clases
	var chck = document.createElement('input');
	chck.type= 'checkbox';
	chck.setAttribute("class", "check");
	var basura = document.createElement("span");
	basura.classList.add("fa","fa-trash-o");
	var cora = document.createElement("span");
	cora.classList.add("fa", "fa-heart");

	//asignamos padres a los nodos creados 
	nuevasTareas.appendChild(chck);
	nuevasTareas.appendChild(basura);
	nuevasTareas.appendChild(cora);

	// agregamos un evento al hacer clic para que 
	//elimine o agregue la clase "tachada" elementoContenedor

	chck.addEventListener("click", function(){
		elementoContenedor.classList.toggle("tachado");
	})

	// removemos el icono basurero al hacerle click sobre él 
	basura.addEventListener("click", function(){
		cont.removeChild(nuevasTareas);
	})

	// creamos funcion click para el corazon y le asignamos 
	//la clase red de css
	cora.addEventListener("click", function(){
		cora.classList.toggle("red");
	})
	if (tareas==null || tareas.length==0){
		alert("debe ingresar tarea");
		return false;
	}
}







