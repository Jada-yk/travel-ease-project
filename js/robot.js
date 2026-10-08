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
       AIRPLANE PARALLAX
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


    /* =====================================
       TRAVEL EASE ROBOT
    ===================================== */

    const botButton =
        document.getElementById("botButton");

    const botPopup =
        document.getElementById("botPopup");

    const botClose =
        document.getElementById("botClose");

    const questionsPage =
        document.getElementById("questionsPage");

    const answerPage =
        document.getElementById("answerPage");

    const backButton =
        document.getElementById("backButton");

    const questionButtons =
        document.querySelectorAll(".question-btn");

    const answerQuestion =
        document.getElementById("answerQuestion");

    const answerText =
        document.getElementById("answerText");


    /* OPEN ROBOT */

    if (botButton && botPopup) {

        botButton.addEventListener("click", () => {

            botPopup.classList.add("active");

        });

    }


    /* CLOSE ROBOT */

    if (botClose && botPopup) {

        botClose.addEventListener("click", () => {

            botPopup.classList.remove("active");

        });

    }


    /* CLOSE WHEN CLICKING BACKDROP */

    if (botPopup) {

        botPopup.addEventListener("click", (event) => {

            if (event.target === botPopup) {

                botPopup.classList.remove("active");

            }

        });

    }


    /* QUESTION BUTTONS */

    questionButtons.forEach(button => {

        button.addEventListener("click", () => {

            const question =
                button.dataset.question;

            const answer =
                button.dataset.answer;


            if (answerQuestion) {

                answerQuestion.textContent =
                    question;

            }


            if (answerText) {

                answerText.textContent =
                    answer;

            }


            if (questionsPage) {

                questionsPage.style.display =
                    "none";

            }


            if (answerPage) {

                answerPage.style.display =
                    "block";

            }

        });

    });


    /* BACK BUTTON */

    if (backButton) {

        backButton.addEventListener("click", () => {

            if (answerPage) {

                answerPage.style.display =
                    "none";

            }


            if (questionsPage) {

                questionsPage.style.display =
                    "block";

            }

        });

    }

});