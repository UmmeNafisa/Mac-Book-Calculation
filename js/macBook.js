// memory, storage & delivery cost func
function extraItemCost(extraItem, types) {
    const extraCost = document.getElementById(extraItem + "-cost");
    if (types == "16GB") {
        extraCost.innerText = 180;
    } else if (types == "8GB") {
        extraCost.innerText = 0;
    } else if (types == "256GB") {
        extraCost.innerText = 0;
    } else if (types == "512GB") {
        extraCost.innerText = 100;
    } else if (types == "1TB") {
        extraCost.innerText = 180;
    } else if (types == "free") {
        extraCost.innerText = 0;
    } else if (types == "cost") {
        extraCost.innerText = 20;
    }
    totalCost();
}
//memory-btn handler
document.getElementById("memory1-btn").addEventListener("click", function () {
    extraItemCost("memory", "8GB");
})
document.getElementById("memory2-btn").addEventListener("click", function () {
    extraItemCost("memory", "16GB");
})

//storage-btn handler
document.getElementById("storage1-btn").addEventListener("click", function () {
    extraItemCost("storage", "256GB");
})
document.getElementById("storage2-btn").addEventListener("click", function () {
    extraItemCost("storage", "512GB");
})
document.getElementById("storage3-btn").addEventListener("click", function () {
    extraItemCost("storage", "1TB");
})

//delivery-btn handler
document.getElementById("delivery1-btn").addEventListener("click", function () {
    extraItemCost("delivery", "free");
})
document.getElementById("delivery2-btn").addEventListener("click", function () {
    extraItemCost("delivery", "cost");
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
    if (promoCodeValue === "stevekaku") {
        finalTotal.innerText = parseInt(finalTotalCost) - (parseInt(finalTotalCost) * (20 / 100));
        promoInput.value = "";
        document.getElementById("promo-btn").disabled = true;
    } else {
        const invalidMsg = document.getElementById("invalid-promo");
        invalidMsg.style.display = "block";
    }
}
//promo-btn handler
document.getElementById("promo-btn").addEventListener('click', function () {
    promoCode();
})