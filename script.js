document.querySelectorAll('.video-card iframe').forEach(function(iframe) {
            iframe.parentElement.parentElement.addEventListener('mouseenter', function() {
                iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            });
            iframe.parentElement.parentElement.addEventListener('mouseleave', function() {
                iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            });
        });