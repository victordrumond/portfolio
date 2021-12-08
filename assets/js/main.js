$(document).ready(() => {
    
    // Elements with [lang="en"] are hidden on first load but user can change page's language on click //
    $('[lang="en"]').hide();

    const changeLanguage = () => {

        $('[lang="pt"]').toggle();
        $('[lang="en"]').toggle();
    };

    $(".change-lang").on("click", changeLanguage);


    // TypeIt.js will fill the Home section //
    new TypeIt("#typed-content-en", {
        speed: 40,
    })
    .type("Welcome to my portfolio.")
    .type("<br>", {delay: 1500})
    .type("Here you will find my front end projects ", {delay: 500})
    .type("and will also get to know a little about me.<br>", {delay: 1000})
    .type("<br>", {delay: 1000})
    .pause(500)
    .type("The idea of building this portfolio came from a project from freeCodeCamp's Responsive Web Design Certification.")
    .type("<br>", {delay: 1000})
    .type("At the time, I created a simple responsive portfolio using <span>HTML</span> and <span>CSS</span> only.", {delat: 1500})
    .type("<br>", {delay: 1000})
    .type("This time I also used <span>JavaScript</span> and Bootstrap", {delay: 500})
    .delete(13, {delay: 500})
    .type(" (with <span>jQuery</span>)", {delay: 500})
    .type(" and <span>Bootstrap</span>, and also some amazing JS libraries:<br>", {delay: 1000})
    .type("<br>", {delay: 1000})
    .pause(500)
    .type("- <a href='https://typeitjs.com' target='_blank'>TypeIt</a>", {delay: 500})
    .type(", to create this typing effect;<br>", {delay: 1500})
    .type("- <a href='https://michalsnik.github.io/aos/' target='_blank'>AOS</a>", {delay: 500})
    .type(", to animate elements on scroll;<br>", {delay: 1500})
    .type("- <a href='https://micku7zu.github.io/vanilla-tilt.js/' target='_blank'>Vanilla-tilt.js</a>", {delay: 500})
    .type(", for smooth 3D tilt effect;<br>", {delay: 1500})
    .type("- <a href='https://isotope.metafizzy.co' target='_blank'>Isotope</a>", {delay: 500})
    .type(", to filter and sort layouts;<br>", {delay: 1500})
    .type("<br>", {delay: 1000})
    .pause(500)
    .type("The portfolio kept improving as I learned more about front end development", {delay: 1000})
    .type(" and it ended up being a great exercise to apply all the technologies and libraries mentioned above.<br>", {delay: 1000})
    .type("<br>", {delay: 1000})
    .pause(500)
    .type("Thanks for accessing", {delay: 500})
    .type(" and I hope you enjoy the final result. ")
    .go()
    ;

    new TypeIt("#typed-content-pt", {
        speed: 40,
    })
        .type("Seja bem-vindo ao meu portfólio.")
        .type("<br>", {delay: 1500})
        .type("Aqui você encontrará os meus projetos de Front End ", {delay: 500})
        .type("e poderá conhecer um pouco sobre mim.<br>", {delay: 1000})
        .type("<br>", {delay: 1000})
        .pause(500)
        .type("A ideia do portfólio surgiu de um projeto do curso de Web Design Responsivo do freeCodeCamp.")
        .type("<br>", {delay: 1000})
        .type("Na época, criei um portfólio responsivo simples utilizando apenas <span>HTML</span> e <span>CSS</span>.", {delat: 1500})
        .type("<br>", {delay: 1000})
        .type("Desta vez, também utilizei <span>JavaScript</span> e Bootstrap", {delay: 500})
        .delete(12, {delay: 500})
        .type(" (com <span>jQuery</span>)", {delay: 500})
        .type(" e <span>Bootstrap</span>, além de algumas bibliotecas incríveis:<br>", {delay: 1000})
        .type("<br>", {delay: 1000})
        .pause(500)
        .type("- <a href='https://typeitjs.com' target='_blank'>TypeIt</a>", {delay: 500})
        .type(", para criar este efeito de digitação;<br>", {delay: 1500})
        .type("- <a href='https://michalsnik.github.io/aos/' target='_blank'>AOS</a>", {delay: 500})
        .type(", para animação de elementos na rolagem da página;<br>", {delay: 1500})
        .type("- <a href='https://micku7zu.github.io/vanilla-tilt.js/' target='_blank'>Vanilla-tilt.js</a>", {delay: 500})
        .type(", para efeitos de inclinação 3D;<br>", {delay: 1500})
        .type("- <a href='https://isotope.metafizzy.co' target='_blank'>Isotope</a>", {delay: 500})
        .type(", para filtragem e animação de layouts;<br>", {delay: 1500})
        .type("<br>", {delay: 1000})
        .pause(500)
        .type("O portfólio foi tomando forma à medida que eu avançava nos estudos de Front End", {delay: 1000})
        .type(" e acabou sendo um grande exercício para aplicar as tecnologias e bibliotecas citadas acima.<br>", {delay: 1000})
        .type("<br>", {delay: 1000})
        .pause(500)
        .type("Obrigado pelo seu acesso", {delay: 500})
        .type(" e espero que goste do resultado final. ")
        .go()
    ;

    
    // Header appears when user clicks on the nav-toggle icon (screen width less than 1200px) //
    const showMenu = () => {

        $("#nav-toggle").on("click", () => {
            $("#header").toggleClass("show-menu");
        });
    };

    showMenu();


    // Header disappears when user clicks on any nav link (screen width less than 1200px) //
    const hideMenu = () => {

        $(".nav-link").on("click", () => {
            $("#header").removeClass("show-menu");
        });
    };

    hideMenu();


    // The active menu link will always be marked with a dot on the nav menu //
    const activeSection = () => {
        
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
    };

    $(window).on("scroll", activeSection);


    // Project's links will appear/disappear on mouseover //
    const showProjectLinks = () => {

        $(".project-item").on("mouseover", function() {
            $(this).find(".project-links").addClass("show-links");
            $(this).find(".project-img").addClass("hide-img");
        });

        $(".project-item").on("mouseout", function() {
            $(this).find(".project-links").removeClass("show-links");
            $(this).find(".project-img").removeClass("hide-img");
        });
    };

    showProjectLinks();

    
    // Isotope will make the grid of projects and filter selectors work together //
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
            aosInit();
        });
    });


    // AOS.js must be initialized so animations can work //
    const aosInit = () => {
        AOS.init({
            disable: function() {
                var maxWidth = 1200;
                return window.innerWidth < maxWidth;
            }
        });
    };

    aosInit();
});