// ======================================================
// PRODUCT DATA
// Later this can come from your API / database
// ======================================================

const products = [
  {
    id: "walnut-comfort-sofa",
    name: "Walnut Comfort Sofa",
    category: "sofa",
    categoryLabel: "Sofa Collection",
    price: 45000,
    description:
      "A refined three-seater sofa combining premium upholstery with a handcrafted walnut frame for everyday comfort.",
    longDescription:
      "Designed to balance comfort and timeless style, the Walnut Comfort Sofa features generous cushioning, carefully selected upholstery and a strong handcrafted wooden structure. Its clean proportions make it suitable for both modern and classic interiors.",
    material: "Solid Walnut Wood",
    dimensions: "84 × 36 × 32 in",
    finish: "Natural Walnut",
    delivery: "7 - 14 Days",
    images: [
      "./images/sofa/sofa8.png",
      "./images/sofa/sofa8_2.png",
      "./images/sofa/sofa8_3.png",
    ],

    colors: [
      {
        name: "Walnut Brown",
        value: "#76543B",
      },
      {
        name: "Warm Beige",
        value: "#C8B7A6",
      },
      {
        name: "Charcoal",
        value: "#454545",
      },
    ],

    features: [
      "Solid wood construction",
      "Premium upholstery",
      "High-density cushioning",
      "Hand-finished detailing",
    ],
  },

  {
    id: "modern-linen-sofa",

    name: "Modern Linen Sofa",

    category: "sofa",

    categoryLabel: "Sofa Collection",

    price: 52000,

    description:
      "A contemporary sofa with soft linen upholstery and generous cushioning designed for relaxed modern living.",

    longDescription:
      "The Modern Linen Sofa combines clean lines, comfortable proportions and soft-touch fabric to create a versatile centrepiece for contemporary living rooms.",

    material: "Hardwood & Linen",

    dimensions: "88 × 38 × 33 in",

    finish: "Natural",

    delivery: "10 - 15 Days",

    images: [
      "./images/sofa/sofa4.jpeg",
      "./images/sofa/sofa4_2.png",
      "./images/sofa/sofa4_4.jpeg",
    ],

    colors: [
      {
        name: "Natural Beige",
        value: "#D3C3B4",
      },
      {
        name: "Olive",
        value: "#73705A",
      },
    ],

    features: [
      "Premium linen fabric",
      "Hardwood frame",
      "Comfort cushioning",
      "Modern profile",
    ],
  },

  {
    id: "oak-lounge-chair",

    name: "Oak Lounge Chair",

    category: "chair",

    categoryLabel: "Chair Collection",

    price: 18500,

    description:
      "A handcrafted lounge chair built from solid oak with a comfortable upholstered seat.",

    longDescription:
      "Designed for reading corners, bedrooms and living spaces, this lounge chair combines traditional woodworking with a minimal modern silhouette.",

    material: "Solid Oak",

    dimensions: "29 × 31 × 32 in",

    finish: "Natural Oak",

    delivery: "7 - 10 Days",

    images: [
      "./images/chair/chair1.jpeg",
      "./images/chair/chair1_2.jpeg",
      "./images/chair/chair1_3.png",
    ],

    colors: [
      {
        name: "Natural Oak",
        value: "#B18A61",
      },
      {
        name: "Dark Walnut",
        value: "#60432F",
      },
    ],

    features: [
      "Solid oak frame",
      "Ergonomic design",
      "Premium cushion",
      "Handcrafted finish",
    ],
  },

  {
    id: "normal_chair",

    name: "Solid Wood Dining Table",

    category: "table",

    categoryLabel: "Table Collection",

    price: 32000,

    description:
      "A substantial solid wood dining table with clean lines and natural character.",

    longDescription:
      "Made for everyday dining and special gatherings, this table celebrates the natural grain and strength of carefully selected solid wood.",

    material: "Solid Wood",

    dimensions: "72 × 36 × 30 in",

    finish: "Matte Natural",

    delivery: "10 - 18 Days",

    images: [
      "./images/chair/chair4.jpeg",
      "./images/chair/chair4_2.png",
      "./images/chair/chair4_3.jpeg",
    ],

    colors: [
      {
        name: "Natural",
        value: "#A77B50",
      },
      {
        name: "Dark Brown",
        value: "#563B2C",
      },
    ],

    features: [
      "Solid wood top",
      "Strong construction",
      "Natural grain",
      "Premium finish",
    ],
  },

  {
    id: "modern-solid-wood-dining-table",

    name: "Modern Solid Wood Dining Table",

    category: "tabel",

    categoryLabel: "Table Collection",

    price: 38500,

    description:
      "A modern solid wood dining table designed with clean lines, natural warmth and lasting durability.",

    longDescription:
      "Crafted with a strong wooden structure and a smooth natural finish, this dining table brings a warm, contemporary look to your dining space while providing comfortable seating for family and guests.",

    material: "Solid Wood",

    dimensions: "6 Seater",

    finish: "Natural Walnut",

    delivery: "12 - 20 Days",

    images: [
      "./images/tabel/tabel3.png",
      "./images/tabel/tabel3_1.jpeg",
      "./images/tabel/tabel3_2.png",
    ],

    colors: [
      {
        name: "Walnut",
        value: "#76543B",
      },
      {
        name: "Natural Wood",
        value: "#A77B50",
      },
    ],

    features: [
      "Solid wood construction",
      "Comfortable 6-seater design",
      "Premium smooth finish",
      "Strong and durable frame",
      "Modern dining design",
    ],
  },

  {
    id: "classic-marble-top-dining-table",

    name: "Classic Marble Top Dining Table",

    category: "tabel",

    categoryLabel: "Table Collection",

    price: 42500,

    description:
      "A sophisticated marble top dining table combining elegant stone detailing with a strong wooden frame.",

    longDescription:
      "Designed for modern dining spaces, this table features a premium marble-effect top supported by a beautifully finished wooden base. Its classic design adds a refined and luxurious touch to the dining area.",

    material: "Marble Top & Solid Wood",

    dimensions: "6 Seater",

    finish: "Polished Marble",

    delivery: "12 - 20 Days",

    images: [
      "./images/tabel/tabel1.jpeg",
      "./images/tabel/tabel1_1.png",
      "./images/tabel/tabel1_2.png",
    ],

    colors: [
      {
        name: "White Marble",
        value: "#E8E4DC",
      },
      {
        name: "Brown Wood",
        value: "#6B4226",
      },
    ],

    features: [
      "Premium marble top",
      "Solid wooden frame",
      "Comfortable 6-seater design",
      "Elegant polished finish",
      "Strong and durable construction",
    ],
  },

  {
    id: "luxury-upholstered-panel-bed",

    name: "Luxury Upholstered Panel Bed",

    category: "bed",

    categoryLabel: "Bed Collection",

    price: 42500,

    description:
        "A premium upholstered bed featuring a tall panelled headboard and matching cushioned base for a sophisticated bedroom look.",

    longDescription:
        "Designed to create a luxurious focal point in the bedroom, this bed combines a soft upholstered headboard with a structured base and elegant vertical panel detailing. Its comfortable design and refined appearance make it ideal for modern bedrooms.",

    material: "Engineered Wood & Premium Upholstery",

    dimensions: "King Size",

    finish: "Premium Fabric Upholstery",

    delivery: "12 - 20 Days",

    images: [
        "./images/bed/bed1.jpeg",
        "./images/bed/bed1_1.png",
        "./images/bed/bed1_2.png"
    ],

    colors: [
        {
            name: "Navy Blue",
            value: "#283653"
        },
        {
            name: "Charcoal",
            value: "#3D3D3D"
        },
        {
            name: "Beige",
            value: "#C9BBAA"
        }
    ],

    features: [
        "Tall upholstered headboard",
        "Vertical panel detailing",
        "Premium fabric finish",
        "Strong and durable frame",
        "Comfortable king-size design"
    ]

},

{
    id: "modern-wooden-upholstered-bed",

    name: "Modern Wooden Upholstered Bed",

    category: "bed",

    categoryLabel: "Bed Collection",

    price: 36500,

    description:
        "A contemporary bed combining a clean wooden frame with a soft upholstered headboard for a warm and modern bedroom.",

    longDescription:
        "This modern bed features a minimalist wooden structure paired with a softly upholstered headboard. The combination of natural wood tones and comfortable fabric creates a clean, elegant and relaxing bedroom environment.",

    material: "Engineered Wood & Fabric Upholstery",

    dimensions: "Queen Size",

    finish: "Wood & Fabric Finish",

    delivery: "12 - 20 Days",

    images: [
        "./images/bed/bed2.jpeg",
        "./images/bed/bed2_1.png",
        "./images/bed/bed2_2.png"
    ],

    colors: [
        {
            name: "Natural Wood",
            value: "#8B6747"
        },
        {
            name: "Walnut",
            value: "#76543B"
        },
        {
            name: "Grey",
            value: "#6B6B6B"
        }
    ],

    features: [
        "Modern wooden frame",
        "Soft upholstered headboard",
        "Minimalist design",
        "Durable construction",
        "Comfortable queen-size design"
    ]

},

// living area 
{
    id: "modern-tv-unit",

    name: "Modern TV Unit",

    category: "living-area",

    categoryLabel: "Living Area Collection",

    price: 32500,

    description:
        "A modern wall-mounted TV unit combining clean lines, practical storage and elegant display shelving.",

    longDescription:
        "Designed for contemporary living spaces, this TV unit combines a structured wooden frame with open display shelves and concealed storage. The balanced design provides space for entertainment equipment while keeping the living area clean and organized.",

    material: "Engineered Wood",

    dimensions: "Custom Size",

    finish: "Walnut & Matte Finish",

    delivery: "12 - 20 Days",

    images: [
        "./images/living-area/living3.jpeg",
        "./images/living-area/living3_1.png",
        "./images/living-area/living3_2.png"
    ],

    colors: [
        {
            name: "Dark Walnut",
            value: "#3B3029"
        },
        {
            name: "Natural Wood",
            value: "#8B6747"
        },
        {
            name: "White",
            value: "#F5F3EE"
        }
    ],

    features: [
        "Modern TV wall design",
        "Open display shelving",
        "Concealed storage",
        "Premium wood finish",
        "Custom size available"
    ]

},

{
    id: "luxury-wooden-tv-wall",

    name: "Luxury Wooden TV Wall",

    category: "living-area",

    categoryLabel: "Living Area Collection",

    price: 48500,

    description:
        "A statement TV wall featuring rich wooden panels, display shelves and integrated storage for a sophisticated living room.",

    longDescription:
        "This premium TV wall design combines warm wooden panels with decorative shelving and integrated storage. The layered design creates a strong focal point while providing practical space for décor, entertainment accessories and everyday storage.",

    material: "Engineered Wood & Decorative Panels",

    dimensions: "Custom Size",

    finish: "Natural Walnut Gloss",

    delivery: "15 - 25 Days",

    images: [
        "./images/living-area/living1.jpeg",
        "./images/living-area/living1_1.png",
        "./images/living-area/living1_2.png"
    ],

    colors: [
        {
            name: "Natural Walnut",
            value: "#8A5635"
        },
        {
            name: "Dark Walnut",
            value: "#4A3024"
        },
        {
            name: "White",
            value: "#F5F3EE"
        }
    ],

    features: [
        "Full-height TV wall",
        "Decorative display shelves",
        "Integrated storage",
        "Premium wooden finish",
        "Custom design and dimensions"
    ]

},

];

// ======================================================
// GET PRODUCT FROM URL
// product.html?id=walnut-comfort-sofa
// ======================================================

const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

let product = products.find((item) => item.id === productId);

// If no ID → first product
if (!product) {
  product = products[0];
}

// ======================================================
// STATE
// ======================================================

let currentImage = 0;

let quantity = 1;

let selectedColor = product.colors.length > 0 ? product.colors[0].name : "";

// ======================================================
// FORMAT PRICE
// ======================================================

function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

// ======================================================
// RENDER PRODUCT
// ======================================================

function renderProduct() {
  document.title = `${product.name} | Furniture`;

  document.getElementById("breadcrumb-name").textContent = product.name;

  document.getElementById("product-category").textContent =
    product.categoryLabel;

  document.getElementById("product-name").textContent = product.name;

  document.getElementById("product-price").textContent = formatPrice(
    product.price,
  );

  document.getElementById("product-description").textContent =
    product.description;

  document.getElementById("product-long-description").textContent =
    product.longDescription;

  document.getElementById("product-material").textContent = product.material;

  document.getElementById("product-dimensions").textContent =
    product.dimensions;

  document.getElementById("product-finish").textContent = product.finish;

  document.getElementById("product-delivery").textContent = product.delivery;

  document.getElementById("total-image-number").textContent =
    product.images.length;

  renderMainImage();

  renderThumbnails();

  renderColors();

  renderFeatures();

  renderRelatedProducts();
}

// ======================================================
// MAIN IMAGE
// ======================================================

function renderMainImage() {
  const mainImage = document.getElementById("main-product-image");

  mainImage.src = product.images[currentImage];

  mainImage.alt = `${product.name} image ${currentImage + 1}`;

  document.getElementById("current-image-number").textContent =
    currentImage + 1;

  // Active thumbnail
  document
    .querySelectorAll(".product-thumbnail")
    .forEach((thumbnail, index) => {
      if (index === currentImage) {
        thumbnail.classList.add("ring-2", "ring-[#76543B]");
      } else {
        thumbnail.classList.remove("ring-2", "ring-[#76543B]");
      }
    });
}

// ======================================================
// THUMBNAILS
// ======================================================

function renderThumbnails() {
  const container = document.getElementById("product-thumbnails");

  container.innerHTML = "";

  product.images.forEach((image, index) => {
    const button = document.createElement("button");

    button.type = "button";

    button.className = `
            product-thumbnail
            relative
            aspect-square
            overflow-hidden
            rounded-xl
            bg-[#EDE7DE]
            transition-all
        `;

    button.innerHTML = `

            <img
                src="${image}"
                alt="${product.name}"
                class="w-full h-full object-cover"
            >

        `;

    button.addEventListener("click", () => {
      currentImage = index;

      renderMainImage();
    });

    container.appendChild(button);
  });

  renderMainImage();
}

// ======================================================
// PREVIOUS / NEXT IMAGE
// ======================================================

document.getElementById("previous-image").addEventListener("click", () => {
  currentImage--;

  if (currentImage < 0) {
    currentImage = product.images.length - 1;
  }

  renderMainImage();
});

document.getElementById("next-image").addEventListener("click", () => {
  currentImage++;

  if (currentImage >= product.images.length) {
    currentImage = 0;
  }

  renderMainImage();
});

// ======================================================
// COLORS
// ======================================================

function renderColors() {
  const container = document.getElementById("product-colors");

  container.innerHTML = "";

  product.colors.forEach((color, index) => {
    const button = document.createElement("button");

    button.type = "button";

    button.title = color.name;

    button.className = `
            color-button
            w-11 h-11
            rounded-full
            border-4
            border-[#F7F4EF]
            ring-1
            ring-[#D8D0C5]
            transition-all
        `;

    button.style.backgroundColor = color.value;

    if (index === 0) {
      button.classList.add("ring-2", "ring-[#76543B]");
    }

    button.addEventListener("click", () => {
      selectedColor = color.name;

      document.querySelectorAll(".color-button").forEach((item) => {
        item.classList.remove("ring-2", "ring-[#76543B]");
      });

      button.classList.add("ring-2", "ring-[#76543B]");

      document.getElementById("selected-color-name").textContent = color.name;
    });

    container.appendChild(button);
  });

  document.getElementById("selected-color-name").textContent = selectedColor;
}

// ======================================================
// FEATURES
// ======================================================

function renderFeatures() {
  const container = document.getElementById("product-features");

  container.innerHTML = "";

  product.features.forEach((feature) => {
    const item = document.createElement("div");

    item.className = "flex items-center gap-3 text-[#706C66]";

    item.innerHTML = `

            <span
                class="w-6 h-6
                       rounded-full
                       bg-[#76543B]/10
                       text-[#76543B]
                       flex items-center
                       justify-center
                       text-xs">

                ✓

            </span>

            <span>${feature}</span>

        `;

    container.appendChild(item);
  });
}

// ======================================================
// QUANTITY
// ======================================================

function updateQuantity() {
  document.getElementById("quantity").textContent = quantity;
}

document.getElementById("quantity-minus").addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
  }

  updateQuantity();
});

document.getElementById("quantity-plus").addEventListener("click", () => {
  quantity++;

  updateQuantity();
});

// ======================================================
// WHATSAPP ORDER
// ======================================================

function openWhatsApp(type) {
  const phone = "918108582270";
  // First product image
  const firstImage = product.images[0];

  // Convert relative image path to full public URL
  const imageUrl = new URL(firstImage, window.location.href).href;

  let message = "";
  if (type === "buy") {
    message = `Hi, I would like to order this product.

Product: ${product.name}
Price: ${formatPrice(product.price)}
Color: ${selectedColor}
Quantity: ${quantity}


Product Image:
${imageUrl}

Please share the final order and delivery details.`;
  } else {
    message = `Hi, I am interested in this product.

Product: ${product.name}
Price: ${formatPrice(product.price)}
Color: ${selectedColor}

Product Image:
${imageUrl}

I would like more information.
        `;
  }

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

document.getElementById("buy-now").addEventListener("click", () => {
  openWhatsApp("buy");
});

document.getElementById("enquire-now").addEventListener("click", () => {
  openWhatsApp("enquire");
});

// ======================================================
// RELATED PRODUCTS
// ======================================================

function renderRelatedProducts() {
  const container = document.getElementById("related-products");

  container.innerHTML = "";

  // Same category first
  let related = products.filter((item) => {
    return item.id !== product.id && item.category === product.category;
  });

  // If not enough same-category products,
  // fill with other products
  if (related.length < 4) {
    const otherProducts = products.filter((item) => {
      return item.id !== product.id && item.category !== product.category;
    });

    related = [...related, ...otherProducts];
  }

  related.slice(0, 4).forEach((item) => {
    const card = document.createElement("article");

    card.className = "group";

    card.innerHTML = `

                <a
                    href="./productView.html?id=${encodeURIComponent(item.id)}"
                    class="block">

                    <div
                        class="relative
                               aspect-[4/5]
                               overflow-hidden
                               rounded-2xl
                               bg-[#EDE7DE]">

                        <img
                            src="${item.images[0]}"
                            alt="${item.name}"
                            class="w-full h-full
                                   object-cover
                                   group-hover:scale-105
                                   transition-transform
                                   duration-500"
                        >

                    </div>


                    <div class="pt-5">

                        <p
                            class="text-xs
                                   uppercase
                                   tracking-[0.16em]
                                   text-[#9A9288]">

                            ${item.category}

                        </p>


                        <div
                            class="flex
                                   justify-between
                                   items-start
                                   gap-3 mt-2">

                            <h3
                                class="font-semibold
                                       text-[#292826]">

                                ${item.name}

                            </h3>


                            <p
                                class="font-semibold
                                       text-[#76543B]
                                       whitespace-nowrap">

                                ${formatPrice(item.price)}

                            </p>

                        </div>

                    </div>

                </a>

            `;

    container.appendChild(card);
  });
}

// ======================================================
// START PAGE
// ======================================================

renderProduct();
