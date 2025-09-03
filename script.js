document.querySelectorAll('.video-card iframe').forEach(function(iframe) {
            iframe.parentElement.parentElement.addEventListener('mouseenter', function() {
                iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            });
            iframe.parentElement.parentElement.addEventListener('mouseleave', function() {
                iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            });
        });

// animations
document.addEventListener("DOMContentLoaded", function() {
        const fadeSection = document.querySelector('.fade-in-section3');
        function handleFadeIn(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }
        const observer = new IntersectionObserver(handleFadeIn, { threshold: 0.2 });
        if (fadeSection) observer.observe(fadeSection);
    });