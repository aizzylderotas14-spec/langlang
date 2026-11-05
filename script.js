
function openGift() {
    const gift = document.getElementById("giftBox");
    const surprise = document.getElementById("surprise");

    gift.classList.add("hidden");
    surprise.classList.remove("hidden");
}

function showMessage() {
    const message = document.getElementById("finalMessage");

    message.classList.remove("hidden");
}
