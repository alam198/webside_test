

    // ==========================================
    // WHATSAPP FURNITURE POLISHING QUOTE
    // ==========================================

    function openPolishQuote(button) {

        const phone = "918108582270";

        const category =
            button.dataset.category || "Furniture";

        const product =
            button.dataset.product || "Furniture Polishing";

        const price =
            button.dataset.price || "Quote Required";

        const image =
            button.dataset.image || "";

        const pageUrl =
            window.location.href;

        const currentDate =
            new Date().toLocaleString("en-IN", {
                dateStyle: "medium",
                timeStyle: "short"
            });


        const message = `
Hi, I would like to enquire about your furniture polishing service.

━━━━━━━━━━━━━━━━━━
FURNITURE POLISHING ENQUIRY
━━━━━━━━━━━━━━━━━━

Service:
Furniture Polishing

Category:
${category}

Furniture:
${product}

Starting Price:
${price}

Reference Image:
${image}

Website:
${pageUrl}

Enquiry Date:
${currentDate}

Please share the final quotation, available options, expected completion time and any other details.

Thank you.
        `.trim();


        const whatsappUrl =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


        window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
        );

    }



    // ==========================================
    // GENERAL QUOTE
    // ==========================================

    function openGeneralPolishQuote() {

        const phone = "918108582270";

        const pageUrl =
            window.location.href;

        const currentDate =
            new Date().toLocaleString("en-IN", {
                dateStyle: "medium",
                timeStyle: "short"
            });


        const message = `
Hi, I would like to get a quote for furniture polishing.

━━━━━━━━━━━━━━━━━━
FURNITURE POLISHING
━━━━━━━━━━━━━━━━━━

Service:
Furniture Polishing & Restoration

I would like to send photos of my furniture for assessment.

Website:
${pageUrl}

Enquiry Date:
${currentDate}

Please let me know the estimated price, available polishing options and process.

Thank you.
        `.trim();


        const whatsappUrl =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


        window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
        );

    }

