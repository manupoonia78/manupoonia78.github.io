/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

})(jQuery);

const toDark = (event) => {
    document.querySelector("body").classList.remove("light");
    document.querySelector("body").classList.add("dark");
    event.value = "Dark";
    event.classList.remove("btn-warning");
    event.classList.add("btn-secondary");

    document.querySelector("#theme").classList.remove("fa-sun");
    document.querySelector("#theme").classList.add("fa-moon");
    // document.head.querySelector('meta[name="theme-color"]').content = "#2a2e35";
    
    localStorage.setItem("theme", "dark");
};
const toLight = (event) => {
    document.querySelector("body").classList.add("light");
    document.querySelector("body").classList.remove("dark");
    event.value = "Light";
    document.querySelector("#theme").classList.remove("fa-moon");
    document.querySelector("#theme").classList.add("fa-sun");
    // document.head.querySelector('meta[name="theme-color"]').content = "#ffffff";
    
    event.classList.add("btn-warning");
    event.classList.remove("btn-secondary");
    localStorage.setItem("theme", "light");
};

const toggle = (event) => {
    if (event.value === "Light") {
        toDark(event);
    } else {
        toLight(event);
    }
};
const theme = localStorage.getItem("theme");
if (theme) {
    if (theme === "light") toLight(document.querySelector("#themeToggler"));
    else toDark(document.querySelector("#themeToggler"));
}