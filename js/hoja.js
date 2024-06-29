$(document).ready(function() {
    $("#flipbook").turn({
        width: '100%',
        height: '100%',
        autoCenter: true
    });

    function resizeFlipbook() {
        var flipbook = $("#flipbook");
        var parent = flipbook.parent();
        var width = parent.width();
        var height = parent.height();
        flipbook.turn('size', width, height);
    }

    $(window).resize(function() {
        resizeFlipbook();
    });

    resizeFlipbook();
});