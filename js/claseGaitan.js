

//PROGRAMA PARA ASIGNAR UN NUMERO ID A CADA PACIENTE REGISTRADO, LA IDEA ES INCORPORARLE UNA BASE DE DATOS PARA ACCEDER A CADA PACIENTE MEDIANTE SU NUMERO ID

const listaPacientes = [];

function Paciente(nombre, apellido, du, obraSocial, fechaNacimiento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.du = du;
    this.obraSocial = obraSocial;
    this.fechaNacimiento = fechaNacimiento;
}

function esPacienteValido(paciente) {
    let esValido = true;

    if (!paciente.nombre) {
        esValido = false;
    }

    if (!paciente.apellido) {
        esValido = false;
    }
    if (!paciente.du) {
        esValido = false;
    }
    if (!paciente.obraSocial) {
        esValido = false;
    }

    if (!paciente.fechaNacimiento) {
        esValido = false;
    }

    return esValido;
}

function getDatosFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let du = document.getElementById("du").value;
    let obraSocial = document.getElementById("obrasocial").value;
    let fechaNacimiento = document.getElementById("fechanacimiento").value;

    return new Paciente(nombre, apellido, du, obraSocial, fechaNacimiento);
}

$('#click').on("click", (e) => {
    e.preventDefault();
    let paciente = getDatosFormulario();
    console.log(paciente);
        if (!esPacienteValido(paciente)) {
            alert("No pueden haber campos incompletos.");
        } else {
            let confirmacionGuardar = prompt("¿Queres guardar los cambios? Presione: S/N");
            if (confirmacionGuardar.toUpperCase() == "S") {
                let idPaciente = Math.round(Math.random() * 100000);
                alert('Se creo el paciente con exito con el id: ' + idPaciente);
                listaPacientes.push(paciente);
                localStorage.setItem("pacientes", JSON.stringify(listaPacientes));
                document.location.href = "index2.html";

            }

        };
    })
