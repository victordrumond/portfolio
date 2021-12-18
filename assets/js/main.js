// This function changes the visibility of elements based on the [lang] attribute //
const changeLanguage = () => {
    $('[lang="pt"]').toggle();
    $('[lang="en"]').toggle();
};


// This function shows the menu //
const showMenu = () => {
    $("#header").toggleClass("show-menu");
};


// This function hides the menu //
const hideMenu = () => {
    $("#header").removeClass("show-menu");
};


// This function changes the colors of some elements //
const setColors = (firstColor, secondColor) => {
    $(".nav-toggle").css("color", firstColor);
    $(".header").css("background-color", firstColor);
    $(".profile-name").css("color", secondColor);
    $(".profile-occupation").css("color", secondColor);
    $(".social-link").css("background-color", secondColor);
    $(".social-link").css("color", firstColor);
    $(".social-link").css("border-color", secondColor);
    $(".change-lang").css("color", secondColor);
    $(".nav-link").css("color", secondColor);
};


// When document is ready //
$(document).ready(() => {
    
    // Elements with [lang="en"] are hidden on first load
    $('[lang="en"]').hide();

    // But user can change page's language on click 
    $(".change-lang").on("click", changeLanguage);

    // TypeIt.js will fill the Home section - English version
    new TypeIt("#typed-content-en", {
        speed: 30,
        lifeLike: true,
        waitUntilVisible: false,
    })
        .type("Hello!", {delay: 800})
        .type(" Welcome to my portfolio.")
        .type("<br>", {delay: 1000})
        .type("Here you will find my front end projects and also some info about me.<br>", {delay: 800})
        .type("<br>", {delay: 500})
        .pause(200)
        .type("The idea of building this portfolio came from a project of freeCodeCamp's Responsive Web Design Certification.")
        .type("<br>", {delay: 800})
        .type("At the time, I created a simple responsive portfolio using <span>HTML</span> and <span>CSS</span> only.", {delat: 1200})
        .type("<br>", {delay: 800})
        .type("This time I also used <span>JavaScript</span> and Bootstrap", {delay: 500})
        .delete(13, {delay: 500})
        .type(" (with <span>jQuery</span>)", {delay: 200})
        .type(" and <span>Bootstrap</span>, and also the following JS libraries:<br>", {delay: 800})
        .type("<br>", {delay: 800})
        .pause(200)
        .type("- <a href='https://typeitjs.com' target='_blank'>TypeIt</a>", {delay: 500})
        .type(", to create this typing effect;<br>", {delay: 800})
        .type("- <a href='https://michalsnik.github.io/aos/' target='_blank'>AOS</a>", {delay: 500})
        .type(", to animate elements on scroll;<br>", {delay: 800})
        .type("- <a href='https://micku7zu.github.io/vanilla-tilt.js/' target='_blank'>Vanilla-tilt.js</a>", {delay: 500})
        .type(", for a smooth 3D tilt effect;<br>", {delay: 800})
        .type("- <a href='https://isotope.metafizzy.co' target='_blank'>Isotope</a>", {delay: 500})
        .type(", to filter and sort layouts;<br>", {delay: 800})
        .type("<br>", {delay: 800})
        .pause(200)
        .type("The portfolio ended up being a great exercise to practice the technologies and libraries mentioned above, ", {delay: 500})
        .type("while I kept studying Front End.<br>", {delay: 500})
        .type("<br>", {delay: 500})
        .pause(200)
        .type("Thanks for accessing", {delay: 500})
        .type(" and I hope you enjoy the result. ")
        .go()
    ;

    // TypeIt.js will fill the Home section - Portuguese version
    new TypeIt("#typed-content-pt", {
        speed: 30,
        lifeLike: true,
        waitUntilVisible: false
    })
        .type("Olá!", {delay: 800})
        .type(" Seja bem-vindo ao meu portfólio.")
        .type("<br>", {delay: 1000})
        .type("Aqui você encontrará os meus projetos de Front End e algumas informações sobre mim.<br>", {delay: 800})
        .type("<br>", {delay: 500})
        .pause(200)
        .type("A ideia do portfólio surgiu de um projeto do curso de Web Design Responsivo do freeCodeCamp.")
        .type("<br>", {delay: 800})
        .type("Na época, criei um portfólio responsivo simples utilizando apenas <span>HTML</span> e <span>CSS</span>.", {delat: 1200})
        .type("<br>", {delay: 800})
        .type("Dessa vez, também utilizei <span>JavaScript</span> e Bootstrap", {delay: 500})
        .delete(12, {delay: 500})
        .type(" (com <span>jQuery</span>)", {delay: 200})
        .type(" e <span>Bootstrap</span>, além das seguintes bibliotecas:<br>", {delay: 800})
        .type("<br>", {delay: 800})
        .pause(200)
        .type("- <a href='https://typeitjs.com' target='_blank'>TypeIt</a>", {delay: 500})
        .type(", para criar esse efeito de digitação;<br>", {delay: 800})
        .type("- <a href='https://michalsnik.github.io/aos/' target='_blank'>AOS</a>", {delay: 500})
        .type(", para animação de elementos na rolagem da página;<br>", {delay: 800})
        .type("- <a href='https://micku7zu.github.io/vanilla-tilt.js/' target='_blank'>Vanilla-tilt.js</a>", {delay: 500})
        .type(", para efeitos de inclinação 3D;<br>", {delay: 800})
        .type("- <a href='https://isotope.metafizzy.co' target='_blank'>Isotope</a>", {delay: 500})
        .type(", para filtragem e animação de layouts;<br>", {delay: 800})
        .type("<br>", {delay: 800})
        .pause(200)
        .type("O portfólio acabou sendo um grande exercício para aplicar as tecnologias e bibliotecas citadas acima, ", {delay: 500})
        .type("à medida que eu estudava Front End.<br>", {delay: 500})
        .type("<br>", {delay: 500})
        .pause(200)
        .type("Obrigado pelo seu acesso", {delay: 500})
        .type(" e espero que goste do resultado. ")
        .go()
    ;

    // Some elements change colors on scroll (if screen width is less than 1200px)
    if (screen.width < 1200) {

        const white = "#F5F5F5";
        const black = "#1F1F1F";
        setColors(white, black);
        document.documentElement.style.setProperty("--pseudo-element-color", black);

        $(window).on("scroll", function() {

            if (this.scrollY > about.offsetTop - 50) {
                setColors(black, white);
                document.documentElement.style.setProperty("--pseudo-element-color", white);
            } else {
                setColors(white, black);
                document.documentElement.style.setProperty("--pseudo-element-color", black);
            };
        });
    };

    // Header appears when user clicks on the nav-toggle icon (if screen width is less than 1200px)
    $("#nav-toggle").on("click", showMenu);

    // Header disappears when user selects a nav link or clicks on any element outside header (if screen width is less than 1200px)
    $(".nav-link").on("click", hideMenu);
    $("main:not(#nav-toggle)").on("click", hideMenu);

    // The active menu link will always be marked with a dot on the nav menu
    $(window).on("scroll", function() {

        const scrollY = $(window).scrollTop();
        $("section").each(function() {

            const sectionHeight = $(this).outerHeight();
            const sectionTop = $(this).offset().top - 50;
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                $(".nav-item a[href*=" + $(this).attr("id") + "]").addClass("active-link");
            }else {
                $(".nav-item a[href*=" + $(this).attr("id") + "]").removeClass("active-link");
            };
        });
    });

    // Adding Vanilla-tilt.js effects (if screen width is 992px or bigger)
    if (screen.width > 991) {
        VanillaTilt.init(document.querySelectorAll(".skills-card"), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.35
        });
    };

    // Project's links will appear on mouseover
    $(".project-item").on("mouseover", function() {
        $(this).find(".project-links").addClass("show-links");
        $(this).find(".project-img").addClass("hide-img");
    });

    // And disappear on mouseout
    $(".project-item").on("mouseout", function() {
        $(this).find(".project-links").removeClass("show-links");
        $(this).find(".project-img").removeClass("hide-img");
    });

    // Isotope.js will make the grid of projects and filter selectors work properly
    $(window).on("load", function() {
        
        var portfolioIsotope = $(".projects-grid").isotope({
            itemSelector: ".project-item",
            layoutMode: "fitRows"
        });
        
        $("#portfolio-filters li").on("click", function() {
            $("#portfolio-filters li").removeClass("active-filter");
            $(this).addClass("active-filter");
            
            portfolioIsotope.isotope({
                filter: $(this).data("filter")
            });
        });
    });

    // AOS.js must be initialized so animations can work
    AOS.init({
        disable: function() {
            var maxWidth = 1200;
            return window.innerWidth < maxWidth;
        }
    });
});