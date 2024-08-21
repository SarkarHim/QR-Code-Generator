let imageBox = document.getElementById("imageBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQr() {
    let qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
    qrImage.src = qrCodeUrl;
    qrImage.style.display = "block";}
