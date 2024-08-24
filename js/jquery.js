$(function() {
    var $menuButton = $('.nav-responsive'),
        $navMenu = $('#nav');

    // Mostrar u ocultar el menú al hacer clic en el botón
    $menuButton.on('click', function (e) {
        e.preventDefault();
        $navMenu.toggleClass('open-menu');
    });

    // Cerrar el menú cuando se hace clic en un enlace del menú
    $('#nav ul li a').on('click', function () {
        $navMenu.removeClass('open-menu');
    });
});


