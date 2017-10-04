$(function() {
	var a = {
		launch: function() {
			$(document).ready(function() {
				if ($(".backbutton").length) {
					a.load();
				}
				$("img").css("opacity", "0");
				a.appear();
				a.log();
			});
			$(window).scroll(function() {
				typeof b === "undefined" && (b = a.measure("top"));
				typeof c === "undefined" && (c = a.measure("collapsed"));

				a.collapse(b, c);
				a.appear();
				if ($(".projecttitle").length) a.headertitle();
			});
			$(".menu a").click(function() {
				a.toggleinfos($(this));
			});
			$(".mask").click(function() {
				a.unmask();
			})
			$(document).keyup(function() {
				a.unmask();
			})
		},
		load: function() {
			var a,
				b = /* Math.floor(Math.random() * 4) */ 2,
				c = [["/", "—", "\\", "|"],
					 ["⠈","⠐","⠠","⢀","⡀","⠄","⠂","⠁"],
					 ["⣷","⣯","⣟","⡿","⢿","⣻","⣽","⣾"],
					 ["⡄","⠆","⠃","⠉","⠘","⠰","⢠","⣀"]],
				d = 0,
				e = 210,
				f = 210,
				g = 60,
				h = 5,
				i = true,
				j, k, l;

			function m(p, q) {
				j = Date.now();
				n();
			}

			function n(p, q) {
				if (!i) { cancelAnimationFrame(n); return; }
				requestAnimationFrame(n);
				k = Date.now();
				l = k - j;
				if (l > 100) {
					j = k - (l % 100);
					e += Math.floor(Math.random() * (h + 0.5) * 2) + ((Math.pow(((f - e) / g), 7) - 1) * h);
					$(".backbutton a").text(c[b][d])
									  .css("color", "hsl(" + e + ", 89%, 63%)");
					d = (d >= c[b].length - 1) ? 0 : ++d;
				}
			}

			function o(p) {
				cancelAnimationFrame(n);
				i = false;
				$(".backbutton a").fadeTo(600, 0.0, function() {
					$(this).text("<")
						   .css("color", "#FFF")
						   .fadeTo(600, 1.0);
				});
			}

			$(document).imagesLoaded().always(o).progress(m);
		},
		appear: function() {
			$("img").each(function() {
				var a = $(document).scrollTop() + $(window).height(),
					b = $(this).offset().top;
				if (a > b) $(this).fadeTo(600, 1.0);
			})
		},
		measure: function(a) {
			var b = document.createElement("div");
			$("body").append($(b).addClass(a).css("display", "none").width(0));
			var c = $(b).height();
			$(b).remove();
			return c;
		},
		collapse: function(a, b) {
			var c = $(document).scrollTop(),
				d = $(".header"),
				e = $(".menu");
			typeof f === "undefined" && (f = 0);
			typeof g === "undefined" && (g = 0);
			typeof h === "undefined" && (h = 0);

			function i() {
				return $(".header").position().top;
			};
			function j() {
				return d.css({position: "fixed", top: "0px"});
			}
			function k() {
				return d.css({position: "absolute"});
			}
			function l() {
				return e.addClass("collapsed");
			}
			function m() {
				return e.removeClass("collapsed");
			}

			if (c < 0) {
				m();
				j();
			} else if (c > $(document).height() - $(window).height()) {
				l();
				j();
			} else {
				if (c > f
					&& $(".top.about").css("display") != "block"
					&& $(".top.contact").css("display") != "block") {
						if (!g) {
							k();
							h && d.css("top", c + "px");
							g = 1;
							h = 0;
						}
						c > i() + a - b && !e.hasClass("collapsed") && (l(), j(), h = 1);

				} else if (c < f) {
					if (g) {
						m();
						k();
						h && d.css("top", c + b - a + "px");
						g = h = 0;
					}
					c <= i() && (j(), h = 1);
				}
			}

			f = c;
		},
		headertitle: function() {
			$(".top .projecttitle").html(
				function(b,c) {
					typeof d !== "string" && (d = $(".main-title h1").text());
					var a = ($(document).scrollTop() > $(".main-title").outerHeight(true) - $(".header").outerHeight())
						? "<span>" + d + "</span>"
						: '<a href="/">étienne ndiaye</a>';

					if (c != a) return a;
				}
			)
		},
		toggleinfos: function(a) {
			var b = $(".top." + a.text()),
	        	c = $(".header").position().top,
	        	d = $(".mask"),
	        	e = $(document).scrollTop();

		    (e == 0 || c!=0 || $(".menu").hasClass("collapsed"))
		        && ($(".menu").removeClass("collapsed"), $(".header").css({position: "fixed", top: "0px"}));

		    b.css("display") == "block"
		    	? (b.hide(), a.parent().removeClass("active"))
		    	: (b.show(), a.parent().addClass("active"));

		    ($(".top.about").css("display") == "block" || $(".top.contact").css("display") == "block")
		    	? d.addClass("active")
		    	: d.removeClass("active");
		},
		unmask: function() {
			$(".top.about, .top.contact").hide();
			$(".top div:has(a), .mask").removeClass("active");
		},
		log: function() {
			console.log(["%c  💫    ",
						 "étienne ndiaye    @etienneforce    et-nd.co",
						 "    🌿  "].join(""),
						 "color: #CCC; background: #323232;");
		}
	};
	a.launch();
});