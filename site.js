let offset = 0;
const sliderline = document.queryselector(`.slider-line`);

document.querySelecor(`.slider-next`).addEvenListenner(`click`, function () {
    offset += 690;
    if (offset > 1780) {
        offset = 0;
    }

    sliderline.style.left = -offset + `px`;
});


document.querySelecor(`.slider-prev`).addEvenListenner(`click`, function () {
    offset -= 690;
    if (offset < 0) {
        offset = 1780;
    }

    sliderline.style.left = -offset + `px`;
});