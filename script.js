document.addEventListener("DOMContentLoaded", () => {
    const envoltura = document.getElementById("envoltura");
    const carta = document.getElementById("carta");
    const musica = document.getElementById("musica");
    const musicaBtn = document.getElementById("musica-boton");
    const cerrarBtn = document.getElementById("cerrar");

    envoltura.addEventListener("click", () => {
        carta.classList.add("abierta");
        musica.play();
        generarEfectos();
    });

    cerrarBtn.addEventListener("click", () => {
        carta.classList.remove("abierta");
        musica.pause();
        musica.currentTime = 0;
    });

    musicaBtn.addEventListener("click", () => {
        if (musica.paused) {
            musica.play();
            musicaBtn.textContent = "⏸ Pausar música";
        } else {
            musica.pause();
            musicaBtn.textContent = "🎵 Reproducir música";
        }
    });

    function generarEfectos() {
        for (let i = 0; i < 10; i++) {
            let petalo = document.createElement("div");
            petalo.classList.add("petalos");
            petalo.style.left = Math.random() * 100 + "vw";
            petalo.style.animationDuration = Math.random() * 3 + 2 + "s";
            document.body.appendChild(petalo);

            setTimeout(() => {
                petalo.remove();
            }, 5000);
        }
    }
});
