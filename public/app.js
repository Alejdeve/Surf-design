document.getElementById('mergeButton').addEventListener('click', mergeImages);
document.getElementById('saveButton').addEventListener('click', saveImage);

function mergeImages() {
    const surfImageFile = document.getElementById('surfImage').files[0];
    const designImageFile = document.getElementById('designImage').files[0];

    if (!surfImageFile || !designImageFile) {
        alert("Por favor, suba ambas imágenes.");
        return;
    }

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const surfImg = new Image();
    const designImg = new Image();

    surfImg.onload = function () {
        canvas.width = surfImg.width;
        canvas.height = surfImg.height;
        ctx.drawImage(surfImg, 0, 0);

        designImg.onload = function () {
            ctx.globalAlpha = 0.6; // Transparencia del diseño
            ctx.drawImage(designImg, 0, 0, surfImg.width, surfImg.height);
            ctx.globalAlpha = 1.0;
        };

        designImg.src = URL.createObjectURL(designImageFile);
    };

    surfImg.src = URL.createObjectURL(surfImageFile);
}

function saveImage() {
    const canvas = document.getElementById('canvas');
    const image = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.href = image;
    link.download = "tabla-diseñada.png";
    link.click();
}