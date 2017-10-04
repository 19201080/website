/* * * * * *  COLLAPSIBLE HEADER  * * * * * */

function measure(e) {
	var a = document.createElement("div");
	$("body").append($(a).addClass(e).css("display", "none").width(0));
	var b = $(a).height();
	$(a).remove();
	return b;
}

var full = measure("top"),
	collapsed = measure("collapsed"),
	pos = rst = fs = 0;

$(window).scroll(function() {
	var scroll = $(document).scrollTop(),
		htop = $(".header").position().top,
		a = $(".header"),
		b = $(".menu");
		function c() {
			return a.css({position: "fixed", top: "0px"});
		}
		function d() {
			return a.css({position: "absolute"});
		}
		function e() {
			return b.addClass("collapsed");
		}
		function f() {
			return b.removeClass("collapsed");
		}

	if (scroll < 0) {
		// b.removeClass("collapsed");
		// a.css("position", "fixed");
		// a.css("top", "0px");
		f();
		c();
	} else if (scroll > $(document).height() - $(window).height()) {
		// b.addClass("collapsed");
		// a.css("position", "fixed");
		// a.css("top", "0px");
		e()
		c();
	} else {
		if (scroll > pos
			&& $(".top.about").css("display") != "block"
			&& $(".top.contact").css("display") != "block") {
				if (!rst) {
					// a.css("position", "absolute");
					d();
					if (fs) {
						a.css("top", scroll + "px");
					}
					htop = $(".header").position().top;
					rst = 1;
					fs = 0;
				}
				if (scroll > htop + full - collapsed && !b.hasClass("collapsed")) {
					// b.addClass("collapsed");
					// a.css("position", "fixed");
					// a.css("top", "0px");
					e();
					c();
					fs = 1;
				}

		} else if (scroll < pos) {
			if (rst) {
				// b.removeClass("collapsed");
				f();
				// a.css("position", "absolute");
				d();
				if (fs) {
					a.css("top", scroll + collapsed - full + "px");
				}
				rst = fs = 0;
			}
			if (scroll <= htop) {
				// a.css("position", "fixed");
				// a.css("top", "0px");
				c();
				fs = 1;
			}
		}
	}

	pos = scroll;
});

/* * * * * *  HEADER TITLE SCROLL  * * * * * */

$(window).scroll(function() {
	$(".top .projecttitle").html(
		function(b,c) {
			var a = $(document).scrollTop() > $(".main-title").outerHeight(true)
				? "<span>" + title + "</span>"
				: '<a href="/">étienne ndiaye</a>';

			if (c != a) {
				return a;
			}
		}
	);
})

/* * * * * *  HEADER BUTTONS  * * * * * */

$(".menu a").click(function(){
	var a = $(".top." + $(this).text()),
        b = $(".header").position().top,
        c = $(".mask");

    if (b!=0 || $(".menu").hasClass("collapsed")) {
        autoscroll = true;
        window.scrollTo(0,b);
        $(".menu").removeClass("collapsed");
    }

    a.css("display") == "block" 
    	? a.hide() 
    	: a.show();

	($(".top.about").css("display") == "block" || $(".top.contact").css("display") == "block")
		? c.show(0, function() { c.fadeTo(600, 0.8); })
		: c.fadeTo(600, 0.0, function() { c.hide(); });

	$(".top.about").css("display") == "block"
		? $(".top div:has(a:contains('about'))").addClass("active")
		: $(".top div:has(a:contains('about'))").removeClass("active");

	$(".top.contact").css("display") == "block"
		? $(".top div:has(a:contains('contact'))").addClass("active")
		: $(".top div:has(a:contains('contact'))").removeClass("active");
});

$(".mask").click(function() {
	$(".top.about, .top.contact").hide();
	$(".top div:has(a:contains('about'))").removeClass("active");
	$(".top div:has(a:contains('contact'))").removeClass("active");
	$(this).fadeTo(600, 0.0, function() { $(this).hide() });
});

/* * * * * *  LOADING ANIMATION  * * * * * */
$(function() {
	var a = {
		launch: function() {
			$(document).ready(a.load());
		},
		load: function() {
			var a;
			var e = Math.floor(Math.random() * 4);
			return function() {
				if (a) {
					clearInterval(a);
				}

				$(document).imagesLoaded().always(function(){
					setTimeout(function() {
						clearInterval(a);
						$(".backbutton a").text("<").css("color", "#FFF");
					}, 0);
				});

				var l = [["/", "—", "\\", "|"],
						 ["⠁","⠂","⠄","⡀","⢀","⠠","⠐","⠈"],
						 ["⣾","⣽","⣻","⢿","⡿","⣟","⣯","⣷"],
						 ["⣷","⣯","⣟","⡿","⢿","⣻","⣽","⣾"],
						 ["⡄","⠆","⠃","⠉","⠘","⠰","⢠","⣀"]];
				var o = 0, f = d = 210, m = 60, s = 5;
				a = setInterval(function() {
					f += Math.floor(Math.random() * s * 2) + ((Math.pow(((d - f) / m), 7) - 1) * s);
					$(".backbutton a").text(l[e][o]).css("color", "hsl(" + f + ", 100%, 60%)");
					o = (o == l[e].length - 1) ? 0 : o + 1;
				}, 100);
			}
		}
	};
	a.launch();
});

/* * * * * *  new collapse  * * * * * *

collapse: function(full, collapsed) {
			var scroll = $(document).scrollTop(),
			htop = $(".header").position().top,
			a = $(".header"),
			b = $(".menu");

			pos = (typeof pos === "undefined") ? 0 : pos;
			rst = (typeof rst === "undefined") ? 0 : rst;
			fs = (typeof fs === "undefined") ? 0 : fs;

			function c() {
				return a.css({position: "fixed", top: "0px"});
			}
			function d() {
				return a.css({position: "absolute"});
			}
			function e() {
				return b.addClass("collapsed");
			}
			function f() {
				return b.removeClass("collapsed");
			}

			if (scroll < 0) {
				f();
				c();
			} else if (scroll > $(document).height() - $(window).height()) {
				e()
				c();
			} else {
				if (scroll > pos
					&& $(".top.about").css("display") != "block"
					&& $(".top.contact").css("display") != "block") {
						if (!rst) {
							d();
							if (fs) {
								a.css("top", scroll + "px");
							}
							htop = $(".header").position().top;
							rst = 1;
							fs = 0;
						}
						if (scroll > htop + full - collapsed && !b.hasClass("collapsed")) {
							e();
							c();
							fs = 1;
						}

				} else if (scroll < pos) {
					if (rst) {
						f();
						d();
						if (fs) {
							a.css("top", scroll + collapsed - full + "px");
						}
						rst = fs = 0;
					}
					if (scroll <= htop) {
						c();
						fs = 1;
					}
				}
			}

			pos = scroll;
		},

*/