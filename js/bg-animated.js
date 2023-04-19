let degree = 45;

function draw() {
    document.documentElement.style.setProperty("--direction", degree++ + "deg");
    if (degree === 450) {
        degree = 90;
    }
    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
