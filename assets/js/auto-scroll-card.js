document.querySelectorAll('.card-content').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const start = card.scrollTop;
        const end = card.scrollHeight - card.clientHeight;
        const duration = 2000; // 1 second
        const startTime = performance.now();
        let scrollInterval;

        function step(timestamp) {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            card.scrollTop = start + (end - start) * progress;

            if (progress < 1) {
                scrollInterval = requestAnimationFrame(step);
            }
        }

        scrollInterval = requestAnimationFrame(step);

        card.addEventListener('mouseleave', () => {
            cancelAnimationFrame(scrollInterval);
            card.scrollTo({ top: 0, behavior: 'smooth' });
        }, { once: true }); // ensures this listener runs only once per hover
    });
});
