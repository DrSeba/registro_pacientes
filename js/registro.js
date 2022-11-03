let esEdicion = false;

class Paciente {
    constructor(nombre, apellido, du, obraSocial, fechaNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.du = du;
        this.obraSocial = obraSocial;
        this.fechaNacimiento = fechaNacimiento;
    }
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

$('#cancelar').on('click', (e) => {
    document.location.href = 'index.html'
});

function getDatosFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let du = document.getElementById("du").value;
    let obraSocial = document.getElementById("obrasocial").value;
    let fechaNacimiento = document.getElementById("fechanacimiento").value;

    return new Paciente(nombre, apellido, du, obraSocial, fechaNacimiento);
}

$('#guardar').on("click", (e) => {
    e.preventDefault();
    let paciente = getDatosFormulario();
    if (!esPacienteValido(paciente)) {
        $('#show-error').modal();
    } else {
        let pacientes = JSON.parse(localStorage.getItem('pacientes')) ?? [];
        if (esEdicion) {
            const params = new URLSearchParams(window.location.search);
            let pacienteToEdit = pacientes.find((paciente) => { return paciente.idPaciente == params.get('id') });
            paciente.idPaciente = pacienteToEdit.idPaciente;
            pacientes[pacientes.indexOf(pacienteToEdit)] = paciente;               
        } else {
            paciente.idPaciente = Math.round(Math.random() * 100000);    
            pacientes.push(paciente);
        }

        localStorage.setItem('pacientes', JSON.stringify(pacientes));
        
        if (esEdicion) {
            document.location.href = "pacientes.html";
        } else {
            document.location.href = "index.html";
        }
    };
})

function cargarFormulario(id) {
    let pacientes = JSON.parse(localStorage.getItem('pacientes'));
    let pacienteToEdit = pacientes.find((paciente) => { return paciente.idPaciente == id });
    document.getElementById("nombre").value = pacienteToEdit.nombre;
    document.getElementById("apellido").value = pacienteToEdit.apellido;
    document.getElementById("du").value = pacienteToEdit.du;
    document.getElementById("obrasocial").value = pacienteToEdit.obraSocial;
    document.getElementById("fechanacimiento").value = pacienteToEdit.fechaNacimiento;
}

$('#nombre').on('focus', function(src) {
    src.currentTarget.setAttribute('required', true);
})

$('#apellido').on('focus', function(src) {
    src.currentTarget.setAttribute('required', true);
})

$('#du').on('focus', function(src) {
    src.currentTarget.setAttribute('required', true);
})

$('#fechanacimiento').on('focus', function(src) {
    src.currentTarget.setAttribute('required', true);
})

$(document).ready(function() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('id')) {
        cargarFormulario(params.get('id'));
        esEdicion = true;
    } 
});


