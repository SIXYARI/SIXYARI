<script>
document.querySelectorAll('.album').forEach(album => {
    const image = album.querySelector('.albums');

    album.addEventListener('mousemove', (e) => {
        const rect = album.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 8;
        const rotateX = ((y - centerY) / centerY) * -8;

        image.style.transform =
            `scale(1.025) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    album.addEventListener('mouseleave', () => {
        image.style.transform =
            'scale(1) rotateX(0deg) rotateY(0deg)';
    });
});
</script>