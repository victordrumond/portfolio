$(document).ready(() => {
    
    // Elements with [lang="en"] are hidden on first load but user can change the page's language on click //
    $('[lang="en"]').hide();

    const changeLanguage = () => {

        $('[lang="pt"]').toggle();
        $('[lang="en"]').toggle();
    };

    $(".change-lang").on("click", changeLanguage);

    
    // Header appears when user clicks on the nav-toggle icon //
    const showMenu = () => {

        $("#nav-toggle").on("click", () => {
            $("#header").toggleClass("show-menu");
        });
    };

    showMenu();


    // Header disappears when user clicks on any nav link //
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


    // Project's title and links will appear/disappear on mouseover //
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


    // Initialize AOS.js so animations can work //
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