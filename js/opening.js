document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       NAVBAR SCROLL EFFECT
    ===================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (navbar) {

            if (window.scrollY > 50) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        }

    });



    /* =====================================
       SMOOTH SCROLL BUTTONS
    ===================================== */

    const learnMoreButton =
        document.querySelector(".learn-more-btn");

    const getStartedButton =
        document.querySelector(".get-started-btn");


    if (learnMoreButton) {

        learnMoreButton.addEventListener("click", () => {

            const destinations =
                document.querySelector("#destinations");

            if (destinations) {

                destinations.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }


    if (getStartedButton) {

        getStartedButton.addEventListener("click", () => {

            const destinations =
                document.querySelector("#destinations");

            if (destinations) {

                destinations.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }



    /* =====================================
       HOME LINK
    ===================================== */

    const homeLink =
        document.querySelector(".home-link");


    if (homeLink) {

        homeLink.addEventListener("click", (event) => {

            event.preventDefault();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }



    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const sections = document.querySelectorAll(
        ".display-section, .reviews-section, .about-us, .team-section, .footer"
    );


    sections.forEach(section => {

        section.classList.add("scroll-reveal");

    });


    const observer = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    sections.forEach(section => {

        observer.observe(section);

    });



    /* =====================================
       DESTINATION DRAG SCROLL
    ===================================== */

    const destinationSlider =
        document.querySelector(".display");


    if (destinationSlider) {

        let isDown = false;

        let startX;

        let scrollLeft;


        destinationSlider.addEventListener(
            "mousedown",
            (event) => {

                isDown = true;

                startX =
                    event.pageX -
                    destinationSlider.offsetLeft;

                scrollLeft =
                    destinationSlider.scrollLeft;

            }
        );


        destinationSlider.addEventListener(
            "mouseleave",
            () => {

                isDown = false;

            }
        );


        destinationSlider.addEventListener(
            "mouseup",
            () => {

                isDown = false;

            }
        );


        destinationSlider.addEventListener(
            "mousemove",
            (event) => {

                if (!isDown) return;

                event.preventDefault();


                const x =
                    event.pageX -
                    destinationSlider.offsetLeft;


                const walk =
                    (x - startX) * 1.5;


                destinationSlider.scrollLeft =
                    scrollLeft - walk;

            }
        );

    }



    /* =====================================
       SCROLL PARALLAX FOR AIRPLANE
    ===================================== */

    const airplane =
        document.querySelector(".airplane-img");


    if (airplane) {

        window.addEventListener("scroll", () => {

            const scrollPosition =
                window.scrollY;


            if (scrollPosition < 600) {

                airplane.style.transform =
                    `translateY(${scrollPosition * 0.08}px)`;

            }

        });

    }



    /* =====================================
       TOUCH FRIENDLY TEAM / REVIEWS
    ===================================== */

    const movingTracks =
        document.querySelectorAll(
            ".reviews-track, .team-track"
        );


    movingTracks.forEach(track => {

        track.addEventListener(
            "touchstart",
            () => {

                track.style.animationPlayState =
                    "paused";

            },
            {
                passive: true
            }
        );


        track.addEventListener(
            "touchend",
            () => {

                setTimeout(() => {

                    track.style.animationPlayState =
                        "running";

                }, 1500);

            },
            {
                passive: true
            }
        );

    });

});