document.querySelectorAll('.album').forEach(album => {
    const image = album.querySelector('.albums');

    let targetRotateX = 0;
    let targetRotateY = 0;

    let currentRotateX = 0;
    let currentRotateY = 0;

    function animate() {
        currentRotateX += (targetRotateX - currentRotateX) * 0.1;
        currentRotateY += (targetRotateY - currentRotateY) * 0.1;

        image.style.transform =
            `scale(1.025) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;

        requestAnimationFrame(animate);
    }

    animate();

    album.addEventListener('mousemove', (e) => {
        const rect = album.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

        targetRotateY = x * 7;
        targetRotateX = y * -7;
    });

    album.addEventListener('mouseleave', () => {
        targetRotateX = 0;
        targetRotateY = 0;
    });
});