$(document).ready(function() {
    $('#magazine').turn({
        width: '100%',
        height: '100%',
        autoCenter: true,
        display: 'single',
        acceleration: true,
        gradients: !$.isTouch,
        elevation: 50,
        duration: 1500,
        when: {
            turned: function(e, page) {
                setupIndexNavigation();
            }
        }
    });

    function setupIndexNavigation() {
        $('.goto-page').off('click').on('click', function(e) {
            e.preventDefault();
            var page = $(this).data('page');
            $('#magazine').turn('page', page);
        });
    }

    $('.clickable-area.left-area').click(function() {
        $('#magazine').turn('previous');
    });

    $('.clickable-area.right-area').click(function() {
        $('#magazine').turn('next');
    });

    var touchStartX = null;
    var touchStartY = null;

    function handleTouchStart(event) {
        const firstTouch = event.touches[0];
        touchStartX = firstTouch.clientX;
        touchStartY = firstTouch.clientY;
    }

    function handleTouchMove(event) {
        if (!touchStartX || !touchStartY) {
            return;
        }

        var touchEndX = event.touches[0].clientX;
        var touchEndY = event.touches[0].clientY;

        var deltaX = touchStartX - touchEndX;
        var deltaY = touchStartY - touchEndY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) {
                $('#magazine').turn('next');
            } else {
                $('#magazine').turn('previous');
            }
        }

        touchStartX = null;
        touchStartY = null;
    }

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    // Initial setup for index navigation
    setupIndexNavigation();
});
