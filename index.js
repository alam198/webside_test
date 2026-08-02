console.log("hello ");
// projects section  side image 
document.querySelectorAll("[data-slider]").forEach((slider) => {

    const images = slider.querySelectorAll(".slider-image");
    const dots = slider.querySelectorAll(".slider-dot");

    const prevButton = slider.querySelector("[data-prev]");
    const nextButton = slider.querySelector("[data-next]");

    let currentIndex = 0;


    function showSlide(index) {

        // Loop
        if (index >= images.length) {
            currentIndex = 0;
        }

        if (index < 0) {
            currentIndex = images.length - 1;
        }


        // Images
        images.forEach((image, i) => {

            if (i === currentIndex) {

                image.classList.remove("opacity-0");
                image.classList.add("opacity-100");

            } else {

                image.classList.remove("opacity-100");
                image.classList.add("opacity-0");

            }

        });


        // Dots
        dots.forEach((dot, i) => {

            if (i === currentIndex) {

                dot.classList.remove(
                    "w-3",
                    "bg-white/40"
                );

                dot.classList.add(
                    "w-7",
                    "bg-white"
                );

            } else {

                dot.classList.remove(
                    "w-7",
                    "bg-white"
                );

                dot.classList.add(
                    "w-3",
                    "bg-white/40"
                );

            }

        });

    }


    // Previous
    prevButton.addEventListener("click", () => {

        currentIndex--;

        showSlide(currentIndex);

    });


    // Next
    nextButton.addEventListener("click", () => {

        currentIndex++;

        showSlide(currentIndex);

    });


    // Dots
    dots.forEach((dot) => {

        dot.addEventListener("click", () => {

            currentIndex = Number(dot.dataset.dot);

            showSlide(currentIndex);

        });

    });


    // Auto slide
    setInterval(() => {

        currentIndex++;

        showSlide(currentIndex);

    }, 5000);


    // Initial
    showSlide(currentIndex);

});


// ======================================================
// PRODUCTS SECTION
// Category Filter + Independent Product Image Sliders
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    // ==================================================
    // 1. PRODUCT CATEGORY FILTER
    // ==================================================

    const filterButtons = document.querySelectorAll(".product-filter");
    const productCards = document.querySelectorAll(".product-card");


    function filterProducts(selectedCategory) {

        productCards.forEach((product) => {

            const productCategory = product.dataset.category;

            // "All" shows every product
            if (
                selectedCategory === "all" ||
                productCategory === selectedCategory
            ) {
                product.classList.remove("hidden");
            } else {
                product.classList.add("hidden");
            }

        });

    }


    function setActiveFilter(activeButton) {

        filterButtons.forEach((button) => {

            // Remove active style
            button.classList.remove(
                "bg-[#76543B]",
                "text-white",
                "border-[#76543B]"
            );

            // Add inactive style
            button.classList.add(
                "text-[#706C66]",
                "border-[#D8D0C5]"
            );

        });


        // Remove inactive style from clicked button
        activeButton.classList.remove(
            "text-[#706C66]",
            "border-[#D8D0C5]"
        );


        // Add active style
        activeButton.classList.add(
            "bg-[#76543B]",
            "text-white",
            "border-[#76543B]"
        );

    }


    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const selectedCategory = button.dataset.filter;

            setActiveFilter(button);

            filterProducts(selectedCategory);

        });

    });



    // ==================================================
    // 2. PRODUCT IMAGE SLIDERS
    // ==================================================

    const productSliders =document.querySelectorAll("[data-product-slider]");


    productSliders.forEach((slider) => {

        const slides =
            slider.querySelectorAll(".product-slide");

        const dots =
            slider.querySelectorAll(".product-dot");

        const previousButton =
            slider.querySelector("[data-product-prev]");

        const nextButton =
            slider.querySelector("[data-product-next]");


        // Skip if product has no images
        if (slides.length === 0) {
            return;
        }


        let currentSlide = 0;


        // ==============================================
        // SHOW SLIDE
        // ==============================================

        function showSlide(index) {

            // Next from last → first
            if (index >= slides.length) {
                currentSlide = 0;
            }

            // Previous from first → last
            else if (index < 0) {
                currentSlide = slides.length - 1;
            }

            else {
                currentSlide = index;
            }


            // ------------------------------------------
            // Images
            // ------------------------------------------

            slides.forEach((slide, index) => {

                if (index === currentSlide) {

                    slide.classList.remove("opacity-0");
                    slide.classList.add("opacity-100");

                } else {

                    slide.classList.remove("opacity-100");
                    slide.classList.add("opacity-0");

                }

            });


            // ------------------------------------------
            // Slider Dots
            // ------------------------------------------

            dots.forEach((dot, index) => {

                if (index === currentSlide) {

                    dot.classList.remove(
                        "w-2",
                        "bg-white/50"
                    );

                    dot.classList.add(
                        "w-6",
                        "bg-white"
                    );

                } else {

                    dot.classList.remove(
                        "w-6",
                        "bg-white"
                    );

                    dot.classList.add(
                        "w-2",
                        "bg-white/50"
                    );

                }

            });

        }



        // ==============================================
        // PREVIOUS BUTTON
        // ==============================================

        if (previousButton) {

            previousButton.addEventListener("click", (event) => {

                event.preventDefault();
                event.stopPropagation();

                showSlide(currentSlide - 1);

            });

        }



        // ==============================================
        // NEXT BUTTON
        // ==============================================

        if (nextButton) {

            nextButton.addEventListener("click", (event) => {

                event.preventDefault();
                event.stopPropagation();

                showSlide(currentSlide + 1);

            });

        }



        // ==============================================
        // DOT CLICK
        // ==============================================

        dots.forEach((dot) => {

            dot.addEventListener("click", (event) => {

                event.preventDefault();
                event.stopPropagation();

                const slideIndex =
                    Number(dot.dataset.productDot);

                showSlide(slideIndex);

            });

        });



        // ==============================================
        // MOBILE SWIPE
        // ==============================================

        let touchStartX = 0;
        let touchEndX = 0;


        slider.addEventListener(
            "touchstart",
            (event) => {

                touchStartX =
                    event.changedTouches[0].screenX;

            },
            { passive: true }
        );


        slider.addEventListener(
            "touchend",
            (event) => {

                touchEndX =
                    event.changedTouches[0].screenX;


                const swipeDistance =
                    touchStartX - touchEndX;


                // Swipe left → next
                if (swipeDistance > 50) {

                    showSlide(currentSlide + 1);

                }


                // Swipe right → previous
                if (swipeDistance < -50) {

                    showSlide(currentSlide - 1);

                }

            },
            { passive: true }
        );



        // ==============================================
        // INITIAL SLIDE
        // ==============================================

        showSlide(0);

    });



    // ==================================================
    // 3. DEFAULT CATEGORY
    // ==================================================

    // Show ALL products when page first loads
    filterProducts("all");

});




