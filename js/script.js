document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.nav-responsive');
    const navMenu = document.querySelector('#nav');

    // Mostrar u ocultar el menú al hacer clic en el botón
    menuButton.addEventListener('click', function(e) {
        e.preventDefault();
        navMenu.classList.toggle('open-menu');
    });

    // Cerrar el menú cuando se hace clic en un enlace del menú
    navMenu.querySelectorAll('ul li a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('open-menu');
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const showCvButton = document.getElementById("showCvButton");
    const closeCvButton = document.getElementById("closeCvButton");
    const cvOverlay = document.getElementById("cvOverlay");
    const cvImage = document.getElementById("cvImage");
    const zoomLens = document.createElement("div");
    zoomLens.classList.add("zoom-lens");
    document.querySelector(".cv-content").appendChild(zoomLens);

    // Mostrar el overlay del CV
    showCvButton.addEventListener("click", () => {
        cvOverlay.classList.add("active");
    });

    // Cerrar el overlay del CV
    closeCvButton.addEventListener("click", () => {
        cvOverlay.classList.remove("active");
        cvImage.style.transform = "scale(1)"; // Reinicia el zoom cuando se cierra
        zoomLens.style.display = "none"; // Oculta la lupa
    });

    // Efecto de zoom y lupa al mover el cursor sobre la imagen
    cvOverlay.addEventListener("mousemove", function (event) {
        const rect = cvImage.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Calcular la posición de la lupa
        const lensX = x - zoomLens.offsetWidth / 2;
        const lensY = y - zoomLens.offsetHeight / 2;

        // Restringir el movimiento dentro de los límites de la imagen
        if (lensX >= 0 && lensX <= rect.width - zoomLens.offsetWidth && lensY >= 0 && lensY <= rect.height - zoomLens.offsetHeight) {
            zoomLens.style.left = `${lensX}px`;
            zoomLens.style.top = `${lensY}px`;

            // Mostrar la lupa
            zoomLens.style.display = "block";

            // Ajustar el zoom
            const scaleX = (x / rect.width) * 100;
            const scaleY = (y / rect.height) * 100;
            cvImage.style.transformOrigin = `${scaleX}% ${scaleY}%`;
            cvImage.style.transform = "scale(1.5)"; // Zoom de 2x
        }
    });

    // Resetear el zoom y ocultar la lupa cuando se mueve fuera de la imagen
    cvOverlay.addEventListener("mouseleave", () => {
        cvImage.style.transform = "scale(1)";
        zoomLens.style.display = "none";
    });
});
