export function addToCart(isModal, isCount) {

        const cart = JSON.parse(sessionStorage.getItem("cartItem")) || [];
        const itemExist = cart.find(item => item.name === isModal.article);
        if (itemExist) {
            alert("Same item is already in your cart.");
            return { success: false, reason: "duplicate" };
        } 
        const cartItem = {
            name: isModal.article,
            image: isModal.src || "",
            price: isModal.price,
            quantity: isCount ?? 1,
            subTotal: Number(isModal.price) * Number(isCount)
        };
        cart.push(cartItem);
        sessionStorage.setItem("cartItem", JSON.stringify(cart));
        const itemQty = cart.reduce((sum, item) => sum + item.quantity, 0);
        return {success: true, cartCount: itemQty}
}