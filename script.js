let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//animacion skills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add ("excel");
        habilidades[1].classList.add ("htmlcss");
        habilidades[2].classList.add ("prevencionderiesgos");
        habilidades[3].classList.add ("ia");
        habilidades[4].classList.add ("digitacion");
        habilidades[5].classList.add ("empatia");
        habilidades[6].classList.add ("creatividad");
        habilidades[7].classList.add ("compromiso");
        habilidades[8].classList.add ("responsabilidad");
        habilidades[9].classList.add ("trabajoenequipo");
    }
}

//scrolli de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

function validarFormulario(event) {
    event.preventDefault(); // Detiene el envío del formulario
    let esValido = true;

    // Validar campo Nombre
    const nombre = document.getElementById("nombre");
    const errorNombre = document.getElementById("error-nombre");
    if (nombre.value.trim() === "") {
        errorNombre.textContent = "El campo Nombre no debe estar vacío.";
        esValido = false;
    } else if (nombre.value.length > 50) {
        errorNombre.textContent = "El campo Nombre no puede superar los 50 caracteres.";
        esValido = false;
    } else {
        errorNombre.textContent = "";
    }

    // Validar campo Email
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("error-email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        errorEmail.textContent = "El campo Email no debe estar vacío.";
        esValido = false;
    } else if (!emailRegex.test(email.value)) {
        errorEmail.textContent = "Introduce un email válido (ejemplo: texto@texto.com).";
        esValido = false;
    } else {
        errorEmail.textContent = "";
    }

    // Validar campo Asunto
    const asunto = document.getElementById("asunto");
    const errorAsunto = document.getElementById("error-asunto");
    if (asunto.value.trim() === "") {
        errorAsunto.textContent = "El campo Asunto no debe estar vacío.";
        esValido = false;
    } else if (asunto.value.length > 50) {
        errorAsunto.textContent = "El campo Asunto no puede superar los 50 caracteres.";
        esValido = false;
    } else {
        errorAsunto.textContent = "";
    }

    // Validar campo Mensaje
    const mensaje = document.getElementById("mensaje");
    const errorMensaje = document.getElementById("error-mensaje");
    if (mensaje.value.trim() === "") {
        errorMensaje.textContent = "El campo Mensaje no debe estar vacío.";
        esValido = false;
    } else if (mensaje.value.length > 300) {
        errorMensaje.textContent = "El campo Mensaje no puede superar los 300 caracteres.";
        esValido = false;
    } else {
        errorMensaje.textContent = "";
    }

    // Si todos los campos son válidos, envía el formulario
    if (esValido) {
        event.target.submit();
    }
}