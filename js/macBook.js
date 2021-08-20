// memory part handler
function extraMemoryCost(typeGB) {
    const memoryCost = document.getElementById("memory-cost");
    const memoryCostValue = memoryCost.innerText;
    if (typeGB == "16GB") {
        memoryCost.innerText = 180;
    } else {
        memoryCost.innerText = 0;
    }
}
document.getElementById("memory1-btn").addEventListener("click", function () {
    extraMemoryCost("8GB");
})
document.getElementById("memory2-btn").addEventListener("click", function () {
    extraMemoryCost("16GB");
})