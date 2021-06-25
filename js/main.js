// ScrollSpy

window.onload = function () {
    scrollSpy('#navbar-scroll', {
        sectionClass: '.scrollspy',
        menuActiveTarget: '.nav-link',
        offset: 200,
    })
}

// -------------------------------------------------------

// Copy to Clipboard

function copy(copyId) {

    var $inp = $("<input>");
    $("body").append($inp);
    $inp.val($("" + copyId).
        text()).select();

    document.execCommand("copy");
    $inp.remove();
    $(".c-alert").fadeIn("slow", function () {
        setTimeout(function () {
            $(".c-alert").fadeOut();
        }, 1200);
    });
}

$(document).ready(function () {

    $("#CopyTrigger").click(

        function () {
            copy("#ToBeCopied");
        });

    $("#CopyTrigger2").click(

        function () {
            copy("#ToBeCopied");
        });
});

// -------------------------------------------------------