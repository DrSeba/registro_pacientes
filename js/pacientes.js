function deletePaciente(id) {
    let pacientes = JSON.parse(localStorage.getItem('pacientes'));
    let pacienteToDelete = pacientes.find((obj) => {
        return obj.idPaciente == id;
    })
    pacientes.splice(pacientes.indexOf(pacienteToDelete), 1);
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
    drawTable();
}

function editarPaciente(id) {
    window.location.href = "registro.html?id=" + id;
}

function drawTable() {
    let listaPacientes = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    let tableRow = "";
    $('#pacientes-table').empty();
    for (let paciente of listaPacientes) {
        tableRow += '<tr>'
        tableRow += '<td>' + paciente.nombre + '</td>' + '<td>' + paciente.apellido + '</td>' + '<td>' + paciente.du + '</td>' + '<td>' + paciente.obraSocial + '</td>' + '<td>' + paciente.fechaNacimiento + '</td>'
        tableRow += '<td><button onclick="deletePaciente(' + paciente.idPaciente + ')"><i class="fa-solid fa-trash"></i></button><button onclick="editarPaciente(' + paciente.idPaciente + ')"><i class="fa-solid fa-pen"></i></button></td>'
        tableRow += '</tr>'
    }

    $('#pacientes-table').append(tableRow);
}

drawTable();

$('#cancelar').on('click', (e) => {
    document.location.href = 'index.html'
});