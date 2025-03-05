//Microinteracciones JSON
//https://lottiefiles.com/featured

/*conexion con HTML usando el id btn-login y cargando la funcion llamada login*/
document.getElementById("btn-login").addEventListener("click", login);


/*funcion que valida el login*/
function validation_alert(ptext) {
    swal.fire({
        /* icon: "error",*/
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#0063be",
        html: '<iframe src="https://lottie.host/embed/686fa015-3d68-4008-b0a2-4b9bacbdf5a9/62AJylBEcS.json"></iframe> <br><p>' + ptext + " </p>",
    });
}

//funcion login
function login() {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    //declaracion de los datos usuario y password respectivamente
    let username = "cenfo";
    let password = "123";
    //identificadores de los campos username y password
    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";
    //ciclo FOR que hace un recorrido con la clase llamada error que permite poner la franja roja del error
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            //este es el texto que llevar el parametro de la funcion validación_alert
            text = "Los campos requeridos NO pueden estar vacios.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    //validacion si los campos username y password son iguales
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({
                icon: "success",
                title: "Credenciales correctas",
                showConfirmButton: false,
                timer: 3000,
            }).then(() => {
                window.location.href = "landing.html", "blank";
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            //carga la funcion de arriba
            validation_alert(text);
        }
    }
}

//funcion para que valide los campos al presionar enter

document.getElementById("btn-login").addEventListener("click", login);
        document.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                login();
            }
        });