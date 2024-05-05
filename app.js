        // Code for hiding/showing navbar on scroll
        var lastScrollTop = 0;
        var navbar = document.getElementById("navbar");
        var delta = 5;
        var navbarHeight = navbar.offsetHeight;
        
        window.addEventListener("scroll", function() {
            var currentScroll = window.pageYOffset;
            if (Math.abs(lastScrollTop - currentScroll) <= delta) return;
            
            if (currentScroll > lastScrollTop && currentScroll > navbarHeight){
                // Scroll Down
                navbar.classList.add("hidden");
                navbar.classList.remove("visible");
            } else {
                // Scroll Up
                navbar.classList.remove("hidden");
                navbar.classList.add("visible");
                if (currentScroll <= lastScrollTop && currentScroll > navbarHeight) {
                navbar.style.backgroundColor = "white"; // Cambiar el fondo a blanco solo cuando se hace scroll hacia arriba y estamos en la parte superior de la página
            } else {
                navbar.style.backgroundColor = ""; // Restaurar el fondo predeterminado en otros casos
            }
            }
            lastScrollTop = currentScroll;
        });