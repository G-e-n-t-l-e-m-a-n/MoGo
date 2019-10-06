$(function() {

	var header = $("#header"),
			introH = $("#intro").innerHeight(),
			scrollOffset = $(window).scrollTop();    // при перезагрузке страницы скрол остается текущим

			checkScroll(scrollOffset); 

	/* header fixed */
	$(window).on("scroll", function() {

		scrollOffset = $(this).scrollTop();   // скролим страницу, обновляется значение "scrollOffset"
			
		checkScroll(scrollOffset);   // отпрявляем его в функцию  "checkScroll" строке

	});

	function checkScroll(scrollOffset) {    // получаем его в функции 
		if ( scrollOffset >= introH) {        // проверяем и выдаем результат
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	/* Smooth scroll */ 
	$("[data-scroll]").on("click", function(event) {    // нажали на ссылку
		event.preventDefault();                           // отменим стандартное поведение ссылки
	
		var $this = $(this),
				blockId = $this.data('scroll'),
				blockOffset = $(blockId).offset().top;        // появилось значение переменной "blockOffset"

		$("#nav a").removeClass("active");  /* при нажатии на пункт меню он становится активным, а другие нет*/
		$this.addClass("active");

		$("html, body").animate({                         // плавный переход к блоку "About"
			scrollTop: blockOffset
		}, 500)                    // сколько будет скролится по времени
	});

	/* menu nav toggle */
	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});


	/* collapse */
	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();
		
		var $this = $(this),
				blockId = $this.data('collapse');

		$this.toggleClass("active");		
	});

	/* slider */
	$("[data-slider]").slick({
		infinite: true,           /* бесконечный слайд */
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	





});