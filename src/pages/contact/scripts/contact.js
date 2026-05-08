function FAQ() {
    const faqParent = document.querySelector("#faq");
    faqParent.addEventListener("click", (e) => {
        const btn = e.target.closest(".faq-button");
        if (!btn) return;
        const currentAnswer = btn.nextElementSibling;
        const allAnswers = faqParent.querySelectorAll(".faq-answer");
        allAnswers.forEach((answer) => {
            if (answer === currentAnswer) {
                if (answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                } else {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                }
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
}


export const contactSecondContent = [
    {title: "Contact Us", description: [
        {src: "./images/contact/email-1573-svgrepo-com.svg",  alt: "email", paragraph: "", aTag: [
            {innerText: "luminosus_support@lumi.co"}          
        ]},
        {src: "./images/contact/phone-svgrepo-com.svg",  alt: "contact", paragraph: "090-1234-5678"         
        },
        {src: "./images/contact/address-location-map-svgrepo-com.svg",  alt: "address", paragraph: "Block 21st, 245-8 highway st."         
        },
    ]},
];


export const contactSecondContentImg =[
    {src: "./images/contact/contact.webp", alt: "contact"}
];

export const contactThirdContent = [
    {title: "FAQs", subTitle: "Here are some mostly asked questions.", 
    faq: [
        {question: "What materials are your jewelry pieces made from?", answer: "Our jewelry is crafted using high-quality materials such as sterling silver, gold vermeil, stainless steel, and carefully selected gemstones. Each piece is designed to ensure durability while maintaining a refined, minimalist aesthetic."},
        {question: "Will the jewelry tarnish over time?", answer: "All jewelry may naturally tarnish over time, especially when exposed to moisture, perfumes, or chemicals. However, our pieces are designed with longevity in mind. With proper care, they will maintain their shine for years."},
        {question: "Is your jewelry hypoallergenic?", answer: "Yes, most of our pieces are hypoallergenic and suitable for sensitive skin. We prioritize nickel-free materials to ensure comfort for everyday wear."},
        {question: "How should I care for my jewelry?", answer: "To keep your jewelry in the best condition. Store it in a dry, soft-lined container. Avoid contact with water, lotions, and perfumes. Clean gently with a soft cloth after use"},
        {question: "Do you offer international shipping?", answer: ""},
        {question: "What materials are your jewelry pieces made from?", answer: "Yes, we offer worldwide shipping. Delivery times and fees vary depending on your location and will be calculated at checkout."},
        {question: "How long does shipping take?", answer: "Orders are typically processed within 1–3 business days. Shipping times vary (Domestic: 3–7 business days International: 7–14 business days)."},
        {question: "Can I return or exchange my order?", answer: "We accept returns and exchanges within 14 days of delivery, provided the item is unused and in its original packaging. Custom or personalized items are non-refundable."},
        {question: "Do you offer custom or personalized jewelry?", answer: "Yes, we offer a selection of customizable pieces such as engraved necklaces and rings. Please check the product page for personalization options."},
    ]}
];