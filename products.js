// ======================================================
// PRODUCT DATA
// ======================================================

const products = [

    {
        id: "walnut-comfort-sofa",
        name: "Walnut Comfort Sofa",
        category: "sofa",
        categoryLabel: "Sofas",
        price: 45000,

        description:
            "A refined three-seater sofa with premium upholstery and handcrafted walnut detailing.",

        images: [
            "./images/sofa1-1.jpeg",
            "./images/sofa1-2.jpeg",
            "./images/sofa1-3.jpeg"
        ]
    },


    {
        id: "modern-linen-sofa",
        name: "Modern Linen Sofa",
        category: "sofa",
        categoryLabel: "Sofas",
        price: 52000,

        description:
            "A contemporary sofa with soft linen upholstery and generous cushioning.",

        images: [
            "./images/sofa2-1.jpeg",
            "./images/sofa2-2.jpeg",
            "./images/sofa2-3.jpeg"
        ]
    },


    {
        id: "oak-lounge-chair",
        name: "Oak Lounge Chair",
        category: "chair",
        categoryLabel: "Chairs",
        price: 18500,

        description:
            "A handcrafted oak lounge chair designed for comfortable everyday living.",

        images: [
            "./images/chair1-1.jpeg",
            "./images/chair1-2.jpeg",
            "./images/chair1-3.jpeg"
        ]
    },


    {
        id: "solid-wood-dining-table",
        name: "Solid Wood Dining Table",
        category: "table",
        categoryLabel: "Tables",
        price: 32000,

        description:
            "A substantial solid wood dining table with natural character and clean lines.",

        images: [
            "./images/table1-1.jpeg",
            "./images/table1-2.jpeg",
            "./images/table1-3.jpeg"
        ]
    },


    {
        id: "modern-wooden-bed",
        name: "Modern Wooden Bed",
        category: "bed",
        categoryLabel: "Beds",
        price: 38500,

        description:
            "A modern solid wood bed crafted for durability and understated elegance.",

        images: [
            "./images/bed1-1.jpeg",
            "./images/bed1-2.jpeg",
            "./images/bed1-3.jpeg"
        ]
    },


    {
        id: "complete-living-space",
        name: "Complete Living Space",
        category: "living-area",
        categoryLabel: "Living Area",
        price: 125000,

        description:
            "A coordinated living room collection combining seating, tables and storage.",

        images: [
            "./images/living1-1.jpeg",
            "./images/living1-2.jpeg",
            "./images/living1-3.jpeg"
        ]
    }

];



// ======================================================
// ELEMENTS
// ======================================================

const searchInput =
    document.getElementById("product-search");

const clearSearch =
    document.getElementById("clear-search");

const categoryFilters =
    document.getElementById("category-filters");

const productSections =
    document.getElementById("product-sections");

const noResults =
    document.getElementById("no-results");

const resultTitle =
    document.getElementById("result-title");

const resultCount =
    document.getElementById("result-count");

const resetButton =
    document.getElementById("reset-products");



// ======================================================
// CURRENT CATEGORY
// ======================================================

let currentCategory = "all";



// ======================================================
// GET CATEGORIES AUTOMATICALLY
// ======================================================
//
// When you add a new category to a product:
//
// category: "bookshelf"
// categoryLabel: "Bookshelves"
//
// it automatically appears here.
//

function getCategories() {

    const categories = [];

    products.forEach(product => {

        if (!categories.includes(product.category)) {

            categories.push(product.category);

        }

    });

    return categories;

}



// ======================================================
// CATEGORY BUTTONS
// ======================================================

function renderCategoryButtons() {

    const categories =
        getCategories();

    categoryFilters.innerHTML = "";


    // ALL BUTTON

    const allButton =
        createCategoryButton(
            "all",
            "All Products"
        );

    categoryFilters.appendChild(allButton);


    // CATEGORY BUTTONS

    categories.forEach(category => {

        const product =
            products.find(
                item => item.category === category
            );

        const button =
            createCategoryButton(
                category,
                product.categoryLabel
            );

        categoryFilters.appendChild(button);

    });

}



function createCategoryButton(
    category,
    label
) {

    const button =
        document.createElement("button");


    button.type = "button";

    button.dataset.category = category;

    button.className = `
        category-button
        flex-shrink-0
        px-6 py-3
        rounded-full
        border
        border-[#D8D0C5]
        bg-white
        text-[#706C66]
        text-sm
        font-semibold
        transition-all
        duration-300
    `;


    button.textContent = label;


    if (category === currentCategory) {

        setActiveCategory(button);

    }


    button.addEventListener(
        "click",
        () => {

            currentCategory = category;

            document
                .querySelectorAll(".category-button")
                .forEach(btn => {

                    setInactiveCategory(btn);

                });


            setActiveCategory(button);

            renderProducts();

        }
    );


    return button;

}



// ======================================================
// CATEGORY BUTTON STYLE
// ======================================================

function setActiveCategory(button) {

    button.classList.remove(
        "bg-white",
        "text-[#706C66]",
        "border-[#D8D0C5]"
    );


    button.classList.add(
        "bg-[#76543B]",
        "text-white",
        "border-[#76543B]"
    );

}



function setInactiveCategory(button) {

    button.classList.remove(
        "bg-[#76543B]",
        "text-white",
        "border-[#76543B]"
    );


    button.classList.add(
        "bg-white",
        "text-[#706C66]",
        "border-[#D8D0C5]"
    );

}



// ======================================================
// SEARCH
// ======================================================

function getSearchResults() {

    const search =
        searchInput.value
            .trim()
            .toLowerCase();


    return products.filter(product => {

        const matchesCategory =
            currentCategory === "all" ||
            product.category === currentCategory;


        const searchableText = [

            product.name,

            product.categoryLabel,

            product.category,

            product.description

        ]
            .join(" ")
            .toLowerCase();


        const matchesSearch =
            search === "" ||
            searchableText.includes(search);


        return (
            matchesCategory &&
            matchesSearch
        );

    });

}



// ======================================================
// RENDER PRODUCTS
// ======================================================

function renderProducts() {

    const filteredProducts =
        getSearchResults();


    productSections.innerHTML = "";


    // RESULT COUNT

    resultCount.textContent =
        `${filteredProducts.length} product${filteredProducts.length === 1 ? "" : "s"}`;


    // SEARCH CLEAR BUTTON

    if (searchInput.value.trim() !== "") {

        clearSearch.classList.remove("hidden");

    } else {

        clearSearch.classList.add("hidden");

    }


    // NO RESULTS

    if (filteredProducts.length === 0) {

        productSections.classList.add("hidden");

        noResults.classList.remove("hidden");

        resultTitle.textContent =
            "No Results";

        return;

    }


    productSections.classList.remove("hidden");

    noResults.classList.add("hidden");


    resultTitle.textContent =
        currentCategory === "all"
            ? "All Products"
            : getCategoryLabel(currentCategory);


    // ==================================================
    // SEARCH ACTIVE
    // ==================================================
    //
    // When searching, show matching products together.
    //

    if (searchInput.value.trim() !== "") {

        renderProductGroup(
            "Search Results",
            filteredProducts
        );

        return;

    }


    // ==================================================
    // ALL CATEGORIES
    // ==================================================

    if (currentCategory === "all") {

        const categories =
            getCategories();


        categories.forEach(category => {

            const categoryProducts =
                filteredProducts.filter(
                    product =>
                        product.category === category
                );


            if (categoryProducts.length > 0) {

                const product =
                    categoryProducts[0];


                renderProductGroup(
                    product.categoryLabel,
                    categoryProducts
                );

            }

        });

        return;

    }


    // ==================================================
    // SINGLE CATEGORY
    // ==================================================

    renderProductGroup(
        getCategoryLabel(currentCategory),
        filteredProducts
    );

}



// ======================================================
// CATEGORY LABEL
// ======================================================

function getCategoryLabel(category) {

    const product =
        products.find(
            item => item.category === category
        );


    return product
        ? product.categoryLabel
        : category;

}



// ======================================================
// PRODUCT GROUP
// ======================================================

function renderProductGroup(
    title,
    groupProducts
) {

    const section =
        document.createElement("section");


    section.innerHTML = `

        <div class="flex items-end
                    justify-between
                    gap-5 mb-7">

            <div>

                <p class="text-xs
                          uppercase
                          tracking-[0.2em]
                          font-bold
                          text-[#76543B]">

                    Collection

                </p>

                <h2 class="text-2xl sm:text-3xl
                           font-semibold
                           mt-2">

                    ${title}

                </h2>

            </div>

            <span class="text-sm
                         text-[#8B857E]">

                ${groupProducts.length}
                ${groupProducts.length === 1 ? "item" : "items"}

            </span>

        </div>


        <div class="grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4
                    gap-6">

            ${groupProducts
                .map(product => createProductCard(product))
                .join("")}

        </div>

    `;


    productSections.appendChild(section);

}



// ======================================================
// PRODUCT CARD
// ======================================================

function createProductCard(product) {

    return `

        <article class="product-card group">

            <a
                href="./product.html?id=${product.id}"
                class="block">


                <!-- IMAGE -->
                <div
                    class="relative
                           aspect-[4/5]
                           rounded-2xl
                           overflow-hidden
                           bg-[#EDE7DE]">

                    <img
                        src="${product.images[0]}"
                        alt="${product.name}"
                        loading="lazy"
                        class="w-full h-full
                               object-cover
                               group-hover:scale-105
                               transition-transform
                               duration-700"
                    >


                    <!-- Hover overlay -->
                    <div
                        class="absolute inset-0
                               bg-gradient-to-t
                               from-black/30
                               to-transparent
                               opacity-0
                               group-hover:opacity-100
                               transition-opacity
                               duration-300">
                    </div>


                    <!-- View -->
                    <span
                        class="absolute
                               bottom-4
                               left-1/2
                               -translate-x-1/2
                               bg-white
                               text-[#292826]
                               px-5 py-2.5
                               rounded-full
                               text-sm
                               font-semibold
                               opacity-0
                               translate-y-3
                               group-hover:opacity-100
                               group-hover:translate-y-0
                               transition-all
                               duration-300
                               whitespace-nowrap">

                        View Product →

                    </span>

                </div>



                <!-- DETAILS -->
                <div class="pt-5">

                    <p
                        class="text-xs
                               uppercase
                               tracking-[0.16em]
                               text-[#9A9288]">

                        ${product.categoryLabel}

                    </p>


                    <div
                        class="flex
                               justify-between
                               items-start
                               gap-3 mt-2">

                        <h3
                            class="font-semibold
                                   text-lg
                                   text-[#292826]">

                            ${product.name}

                        </h3>


                        <p
                            class="font-semibold
                                   text-[#76543B]
                                   whitespace-nowrap">

                            ${formatPrice(product.price)}

                        </p>

                    </div>


                    <p
                        class="text-sm
                               text-[#8B857E]
                               leading-relaxed
                               mt-2
                               line-clamp-2">

                        ${product.description}

                    </p>

                </div>

            </a>

        </article>

    `;

}



// ======================================================
// PRICE
// ======================================================

function formatPrice(price) {

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }
    ).format(price);

}



// ======================================================
// SEARCH EVENTS
// ======================================================

searchInput.addEventListener(
    "input",
    () => {

        renderProducts();

    }
);



// ======================================================
// CLEAR SEARCH
// ======================================================

clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        renderProducts();

        searchInput.focus();

    }
);



// ======================================================
// RESET
// ======================================================

resetButton.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        currentCategory = "all";


        document
            .querySelectorAll(".category-button")
            .forEach(button => {

                if (
                    button.dataset.category === "all"
                ) {

                    setActiveCategory(button);

                } else {

                    setInactiveCategory(button);

                }

            });


        renderProducts();

    }
);



// ======================================================
// INITIALIZE
// ======================================================

renderCategoryButtons();

renderProducts();