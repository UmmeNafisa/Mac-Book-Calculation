// memory, storage & delivery cost func
function extraItemCost(extraItem, types) {
    const extraCost = document.getElementById(extraItem + "-cost");
    extraCost.innerText = types;
    totalCost();
}
//memory-btn handler
document.getElementById("memory1-btn").addEventListener("click", function () {
    extraItemCost("memory", 0);
})
document.getElementById("memory2-btn").addEventListener("click", function () {
    extraItemCost("memory", 180);
})

//storage-btn handler
document.getElementById("storage1-btn").addEventListener("click", function () {
    extraItemCost("storage", 0);
})
document.getElementById("storage2-btn").addEventListener("click", function () {
    extraItemCost("storage", 100);
})
document.getElementById("storage3-btn").addEventListener("click", function () {
    extraItemCost("storage", 180);
})

//delivery-btn handler
document.getElementById("delivery1-btn").addEventListener("click", function () {
    extraItemCost("delivery", 0);
})
document.getElementById("delivery2-btn").addEventListener("click", function () {
    extraItemCost("delivery", 20);
})

//total-cost 
function totalCost() {
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryCost = document.getElementById("memory-cost").innerText;
    const storageCost = document.getElementById("storage-cost").innerText;
    const deliveryCost = document.getElementById("delivery-cost").innerText;
    document.getElementById("total-price").innerText = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
    //big-total
    document.getElementById("big-total").innerText = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
}

//promo-code
function promoCode() {
    const promoInput = document.getElementById("promo-code-input");
    const promoCodeValue = promoInput.value;
    const finalTotal = document.getElementById("big-total");
    const finalTotalCost = finalTotal.innerText;
    //promo msg
    const invalidMsg = document.getElementById("invalid-promo");
    const promoApply = document.getElementById("promo-applied");
    if (promoCodeValue === "stevekaku") {
        finalTotal.innerText = parseFloat(finalTotalCost) - (parseFloat(finalTotalCost) * (20 / 100));
        promoInput.value = "";
        document.getElementById("promo-btn").disabled = true;
        invalidMsg.style.display = "none";
        promoApply.style.display = "block";
    } else {
        invalidMsg.style.display = "block";
        promoApply.style.display = "none";
    }
}
//promo-btn handler
document.getElementById("promo-btn").addEventListener('click', function () {
    promoCode();
})