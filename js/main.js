window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000, 
    origin: 'bottom',
    distance: "400px"

}
);

sr.reveal('.slaider', {
    duration: 5000, 
    origin: 'bottom',
    distance: "400px"
}
);

sr.reveal('.centrar', {
    duration: 5000, 
    origin: 'right',
    distance: "400px"
}
);

sr.reveal('.arriba', {
    duration: 5000, 
    origin: 'left',
    distance: "400px"
}
);

sr.reveal('.somos', {
    duration: 6000, 
    origin: 'left',
    distance: "400px",
    delay: 1000
}
);


sr.reveal('.font', {
    duration: 7000, 
    origin: 'bottom',
    distance: "600px",
    delay: 1000

}
);


sr.reveal('.accordion', {
    duration: 5000, 
    origin: 'bottom',
    distance: "400px"
}
);

sr.reveal('.servicios', {
    duration: 5000, 
    origin: 'left',
    distance: "600px"
}
);

sr.reveal('.subir', {
    duration: 5000, 
    origin: 'bottom',
    distance: "600px"
}
);

sr.reveal('.soldaduras', {
    duration: 5000, 
    origin: 'top',
    distance: "300px"
}
);

sr.reveal('.carrusel', {
    duration: 3000, 
    origin: 'bottom',
    distance: "300px"
}
);

sr.reveal('.subir', {
    duration: 5000, 
    origin: 'bottom',
    distance: "600px"
}
);

sr.reveal('.subir', {
    duration: 5000, 
    origin: 'bottom',
    distance: "600px"
}
);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

