const traducciones = {
    en: {
        inicio: "Home",
        sobre_mi: "About me",
        proyectos: "Projects",
        contacto: "Contact",
        cv: "Download my CV",
        cv_file: "CV_AlejandroSP_ENG.pdf",
        bienvenida: "Wellcome to my portfolio",
        texto_bienvenida: "Here you can see the projects I have done or on which I am working.",
        texto_sobre_mi: "I am a programmer who focuses on giving a pleasant user experience and brings new ideas to improve the usability that programming includes.",
        tech: "Technologies",
        rick_morty_api: "Rick & Morty API project",
        rick_morty_api_texto: "A small project made with React and NodeJS making calls to the Rick & Morty API, where you can see the characters by their different species.",
        pokeAPI: "PokeAPI project",
        pokeAPI_texto: "This is a project I did to start learning angular and typescript, with calls to the PokeAPI.",
        ver_github: "View on GitHub",
        ver_web: "View Web",
        proximamente: "Coming soon",
        proyectFinDaw: "End-of-course project",
        proyectFinDaw_texto: "This project was carried out together with a classmate to present at the end of the higher degree in Web Application Development.",
        placeholder_nombre: "Name",
        placeholder_correo: "Email",
        placeholder_mensaje: "Message",
        enviar: "Send"
    },
    es: {
        inicio: "Inicio",
        sobre_mi: "Sobre mi",
        proyectos: "Proyectos",
        contacto: "Contacto",
        cv: "Descarga mi CV",
        cv_file: "CV_AlejandroSP_ESP.pdf",
        bienvenida: "Bienvenido a mi portfolio",
        texto_bienvenida: "Aquí podrás ver los proyectos que he realizado o en los que estoy trabajando.",
        texto_sobre_mi: "Soy un programador que se centra en dar una agradable experiencia al usuario y aporta nuevas ideas para mejorar la usabilidad que comprende la programación.",
        tech: "Tecnologías",
        rick_morty_api: "Proyecto Rick & Morty API",
        rick_morty_api_texto: "Un pequeño proyecto hecho con React y NodeJS haciendo llamadas a la API de Rick & Morty, dónde puedes ver los personajes por sus diferentes especies.",
        pokeAPI: "Proyecto PokeAPI",
        pokeAPI_texto: "Este es un proyecto que hice para empezar a aprender angular y typescript, con llamadas a la PokeAPI.",
        ver_github: "Ver en GitHub",
        ver_web: "Ver Web",
        proximamente: "Próximamente disponible",
        proyectFinDaw: "Proyecto fin de curso",
        proyectFinDaw_texto: "Este proyecto fue realizado junto a un compañero de clase para presentar a final del grado superior de Desarrollo de aplicaciones web.",
        placeholder_nombre:"Nombre",
        placeholder_correo: "Email",
        placeholder_mensaje: "Mensaje",
        enviar: "Enviar"
    }
};

function cambiarIdioma(lang) {
    const elements = document.querySelectorAll('[data-translate]');

    // 
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (traducciones[lang] && traducciones[lang][key]) {
            element.textContent = traducciones[lang][key];
        }
    });

    // apartado para descargar el cv en los 2 idiomas
    const linkCv = document.querySelector('a[data-translate="cv"]');
    if (linkCv && traducciones[lang] && traducciones[lang]['cv_file']) {
        const pdf = traducciones[lang]['cv_file'];
        linkCv.setAttribute('href', `./cv/${pdf}`);
        linkCv.setAttribute('download', pdf);
    }

    // apartado para cambiar el idioma de los placeholders del formulario
    document.querySelectorAll('[data-translate-placeholder]').forEach(input => {
        const key = input.getAttribute('data-translate-placeholder');
        if (traducciones[lang] && traducciones[lang][key]) {
            input.setAttribute('placeholder', traducciones[lang][key]);
        }
    });

    document.querySelectorAll('.traduccion span').forEach(icon => {
        icon.classList.remove('active');
        if (icon.getAttribute('onclick').includes(`'${lang}'`)) {
            icon.classList.add('active');
        }
    });

}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'es';
    cambiarIdioma(savedLang);
});