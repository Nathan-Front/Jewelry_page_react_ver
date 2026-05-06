export function modalImages(category) {
    
    if (category === "earrings") {
        return [ 
            {src: "./images/shop/earings/gold.webp", alt: "Earring 1"},
            {src: "./images/shop/earings/gold2.webp", alt: "Earring 2"},
            {src: "./images/shop/earings/gold.webp", alt: "Earring 3"},
            {src: "./images/shop/earings/gold2.webp", alt: "Earring 4"},
            {src: "./images/shop/earings/gold.webp", alt: "Earring 5"},
        ];
    } 
    if (category === "necklaces") {
        return [
            {src: "./images/shop/necklace/chain.webp", alt: "Necklace 1"},
            {src: "./images/shop/necklace/birthstone.webp", alt: "Necklace 2"},
            {src: "./images/shop/necklace/necklace1.webp", alt: "Necklace 3"},
            {src: "./images/shop/necklace/pearl.webp", alt: "Necklace 4"},
            {src: "./images/shop/necklace/chain.webp", alt: "Necklace 5"},
        ];
    } 
    if (category === "bracelets") {
        return [
            {src: "./images/shop/bracelet/beaded.webp", alt: "Bracelet 1"},
            {src: "./images/shop/bracelet/braided.webp", alt: "Bracelet 2"},
            {src: "./images/shop/bracelet/charm.webp", alt: "Bracelet 3"},
            {src: "./images/shop/bracelet/chain.webp", alt: "Bracelet 4"},
            {src: "./images/shop/bracelet/beaded.webp", alt: "Bracelet 5"},
        ];
    } 
    if (category === "rings") {
        return [
            {src: "./images/shop/rings/threeStone.webp", alt: "Ring 1"},
            {src: "./images/shop/rings/solitaire.webp", alt: "Ring 2"},
            {src: "./images/shop/rings/diamondBand.webp", alt: "Ring 3"},
            {src: "./images/shop/rings/mood.webp", alt: "Ring 4"},
            {src: "./images/shop/rings/threeStone.webp", alt: "Ring 5"},
        ];
    } 
    if (category === "bangles") {
        return [
            {src: "./images/shop/bangles/solidMetal.webp", alt: "Bangle 1"},
            {src: "./images/shop/bangles/cuff.webp", alt: "Bangle 2"},
            {src: "./images/shop/bangles/lacquer.webp", alt: "Bangle 3"},
            {src: "./images/shop/bangles/hinged.webp", alt: "Bangle 4"},
            {src: "./images/shop/bangles/solidMetal.webp", alt: "Bangle 5"},
        ];
    } 
    if (category === "tiaras") {
        return [
            {src: "./images/shop/tiara/fringe.webp", alt: "Tiara 1"},
            {src: "./images/shop/tiara/meander.webp", alt: "Tiara 2"},
            {src: "./images/shop/tiara/aigrette.webp", alt: "Tiara 3"},
            {src: "./images/shop/tiara/bandeau.webp", alt: "Tiara 4"},
            {src: "./images/shop/tiara/fringe.webp", alt: "Tiara 5"},
        ];
    } 
    if (category === "anklets") {
        return [
            {src: "./images/shop/anklet/stringAnklet.webp", alt: "Anklet 1"},
            {src: "./images/shop/anklet/beadedAnklet.webp", alt: "Anklet 2"},
            {src: "./images/shop/anklet/braidedAnklet.webp", alt: "Anklet 3"},
            {src: "./images/shop/anklet/demiFineAnklet.webp", alt: "Anklet 4"},
            {src: "./images/shop/anklet/stringAnklet.webp", alt: "Anklet 5"},
        ];
    } 
    if (category === "others") {
        return [
            {src: "./images/shop/others/watch.webp", alt: "Other 1"},
            {src: "./images/shop/others/pocket.webp", alt: "Other 2"},
            {src: "./images/shop/others/belt.webp", alt: "Other 3"},
            {src: "./images/shop/others/lighter.webp", alt: "Other 4"},
            {src: "./images/shop/others/watch.webp", alt: "Other 5"},
        ];
    }
}