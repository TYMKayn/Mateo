let fechaInicio = null;

// Cuando eligen fecha → guardar y mostrar la página
document.getElementById("btnEmpezar").addEventListener("click", () => {
    let valor = document.getElementById("fechaElegida").value;
    if (!valor) return alert("Elige un día especial 💞");

    document.getElementById('continuarBtn').addEventListener('click', () => {
    const fechaElegida = document.getElementById('fecha').value;
    if (fechaElegida) {
        fechaInicio = new Date(fechaElegida).getTime();
        document.querySelector('.inicio').style.display = 'none';
        document.querySelector('main').style.display = 'block';
        iniciarContador();
    }
});


    fechaInicio = new Date(valor + "T00:00:00");
    document.getElementById("pantallaFecha").style.display = "none";
    iniciarContador();
});

// Contador dinámico
function iniciarContador() {
    setInterval(() => {
        if (!fechaInicio) return;
        const ahora = new Date();
        const diff = ahora - fechaInicio;

        const dias = Math.floor(diff / (1000*60*60*24));
        const horas = Math.floor((diff / (1000*60*60)) % 24);
        const min = Math.floor((diff / (1000*60)) % 60);
        const seg = Math.floor((diff / 1000) % 60);

        document.getElementById("dias").textContent =
            `${dias} días juntos 💞`;
        document.getElementById("hms").textContent =
            `${horas}h ${min}m ${seg}s`;

        document.getElementById("tituloPrincipal").textContent =
            "Juntos desde: " + fechaInicio.toLocaleDateString("es-CO");
    }, 1000);
}
window.addEventListener('scroll', () => {
    document.querySelectorAll('.recuerdo').forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) el.classList.add('visible');
    });
});

