document.addEventListener("DOMContentLoaded", function() {
    var enlacesMenu = document.querySelectorAll("nav a");
    enlacesMenu.forEach(function(enlace) {
        enlace.addEventListener("click", function(evento) {
            evento.preventDefault(); 
            var destino = this.getAttribute("href").substring(1);
            window.location.href = destino + ".html";
        });
    });
});
