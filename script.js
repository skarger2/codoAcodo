/******************Cargar mas elementos*****************/

let ElementosOcultos=document.getElementsByClassName('post-oculto');
let botonCarga=document.getElementById('botonCargaMas');

let cargarMas=()=>{
	let i=0;
	while(i<ElementosOcultos.length) {
		ElementosOcultos[i].classList.remove("post-oculto");
		i++;
	}
	if(!ElementosOcultos.length && i!=0){
		botonCarga.innerText = "Ir al blog!";
	}else if(i==0)
		botonCarga.setAttribute("href","https://aprendeecommercehoy.com/publicaciones/");
}

botonCarga.addEventListener("click",cargarMas);

/******************Verificación de Mail*****************/

let Email_regexp=/([a-z]|[0-9]|\.|\-|\_)+@[a-z]+\.[a-z]{2,3}/;


let CommentForm=document.getElementById('dejarComentario');
let NewsletterForm=document.getElementById('newsLetter');

let E_I_Com=document.getElementById('emailInputCom');
let E_I_New=document.getElementById('emailInputNew');
let Email_valor;

/******************Verificación de Nombre y Comentario*****************/

let Nombre;
let Comentario;

CommentForm.addEventListener("submit",(e)=>{
	e.preventDefault();
	Email_valor=E_I_Com.value;
	Nombre = document.getElementById('nameInput').value;
    Comentario = document.getElementById('commentArea').value;

	if(Email_regexp.test(Email_valor)){
		if(Nombre=='' || Comentario==''){
		    alert("Aún hay campos vacios");
		}
	    else{
	    	alert("¡Formulario enviado con éxito!");
	    }
	}else{
		alert("El email ingresado no válido");
	}
	
})
NewsletterForm.addEventListener("submit",(e)=>{
	e.preventDefault();
	Email_valor=E_I_New.value;

	if(Email_regexp.test(Email_valor))
		alert("¡Formulario enviado con éxito!");
	else
		alert("El email ingresado no válido");

})

/*----------------------------------------------------------------------*/

