const testimonialVideos = document.querySelectorAll('.testimonial-video');
const lightbox = document.getElementById('lightbox');
const lightboxVideo = document.getElementById('lightboxVideo');
const lightboxClose = document.getElementById('lightboxClose');

testimonialVideos.forEach(video => {
    video.addEventListener('click', function() {
        lightbox.classList.add('active');
        lightboxVideo.src = video.src;
        lightboxVideo.poster = video.poster;
        lightboxVideo.currentTime = 0;
        lightboxVideo.play();
    });
});

lightboxClose.addEventListener('click', function() {
    lightbox.classList.remove('active');
    lightboxVideo.pause();
    lightboxVideo.src = '';
});

lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
        lightboxVideo.pause();
        lightboxVideo.src = '';
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        lightboxVideo.pause();
        lightboxVideo.src = '';
    }
});