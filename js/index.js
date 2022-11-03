function eventHandlers() {
    $("#pacientes").on("click", (e) => {
        e.preventDefault();
        document.location.href = "pacientes.html";
    })
    $("#agendaDiaria").on("click", (e) => {
        e.preventDefault();
        document.location.href = "index2.html";
    })
    $("#facturar").on("click", (e) => {
        e.preventDefault();
        document.location.href = "index3.html";
    })
    $("#registrarPaciente").on("click", (e) => {
        e.preventDefault();
        document.location.href = "registro.html";
    })
}

eventHandlers();