
// JavaScript Document

// TABS
// HTML EXAMPLE
		// <ul id="menu-tabs" class="tabs">
		// 	<li class="t1"><a href="#"></a></li>
		// 	<li class="t2"><a href="#"></a></li>
		// 	<li class="t3"><a href="#"></a></li>
		// </ul>
		// <div class="tab-content">
		// 	<div class="t1 tab">
		// 		<div class="block">grey \ blue</div>
		// 		<div class="block">grey \ blue</div>
		// 	</div>
		// 	<div class="t2 tab">
		// 		<div class="block">grey \ blue</div>
		// 		<div class="block">grey \ blue</div>
		// 	</div>
		// 	<div class="t3 tab">
		// 		<div class="block">grey \ blue</div>
		// 		<div class="block">grey \ blue</div>
		// 	</div>
		// </div>
//tabs #1
$('#menu-tabs li').click(function(){
	var thisClass = this.className.slice(0,2);
	$('div.t1').hide();
	$('div.t2').hide();
	$('div.t3').hide();
	$('div.' + thisClass).fadeIn(500);
	$('#menu-tabs li').removeClass('active');
	$(this).addClass('active');
	return false;
});
$('li.t1').click();
//tabs #2
$("#menu-tabs li").click(function() {
	$(".tab").hide();
	$("#menu-tabs li").removeClass("active");
	$(".tab-content ." + this.className.split("")[0]).fadeIn(500);
	$(this).addClass("active");
	return false;
});
$("#menu-tabs li")[0].click();
//tabs #3
$("#menu-tabs li").click(function() {
	$(".tab").hide();
	$(".tab." + this.className.slice(0,2);).fadeIn(500);
	$("#menu-tabs li").removeClass("active");
	$(this).addClass("active");
	return false;
});
$("#menu-tabs li.t1").click();



// перезагрузка  страницы при ресайзе браузера во всех платформах  кроме iOS
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (iOS){

}
else{
	$(function() {
		$(window).resize(function(){
			location.reload();
		});
	});
}
//клик раздел меню - скролл к разделу с таким же классом
$('ul.parts li').click(function(){
	$('header .drop').removeClass('open');
	var $anchor = $(".chapterwrap ." + this.className.split(" ")[0]).offset();
	$('html, body').animate({ scrollTop: $anchor.top },2000);
	return false;
});

//Якоря для навигации
$('nav li').click(function(){
	var $anchor = $("section." + this.className.split(" ")[0]).offset();
	$('html, body').animate({ scrollTop: $anchor.top },2000);
	return false;
});
// click arrow- first view to scroll to the next block
$( '.contentScroll .arrdown' ).click(function () {
	$('html, body').animate({
		// scrollTop: $(".list h3 ").next().offset().top
		scrollTop: $("section").offset().top,
		opacity:1,
		color: 'navy',
	}, 2000);
});
// path scroll to block
$(document).ready(function(){
	$("#links").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
// якорь т.е. по клику проскролливает страницу до выбраного элемента
$('.arrow .top').click(function () {
	$('html, body').animate({
		scrollTop: $(".header ").offset().top
	}, 2000);
});
// #2 scroll to top
$('div').on("click",function(){
	$(window).scrollTop(0);
});
// Ищем в родителе что-то на клик (он же аккордеон в данном случае)
$('.obj1').click(
	function(){
		ext = $(this).parent();
		ext.find('.obj2').slideToggle('1000', function() {
			// Animation complete.
			// $('.obj3').css('color','#ff0000');
		});
		return false;
	});
	// $(this).parent().find('.wrap').slideToggle('fast', function() {});
	// $(this).sibling('.wrap').slideToggle('fast', function() {});

	// Анимация чего-либо
	$('.obj1').click(function(){
		$('.obj2').animate({
			color: 'ivory2',
		}, 1000, function() {
			// Сюда можно загнать следующий этап анимации, точно так же, создавая что-то вроде ступенчатой анимации или цикла
		});

		// $('obj2').addClass('color');
		// $('obj2').removeClass('color');
		// $('obj2').toggleClass('color');
		// $('obj2').parent().parent().find('.popup').addClass('open');
	});

		// $('.button').click(function(){
		// 	$('.needle').toggleClass('.rotate')
		// });
		// setTimeout(function(){
		// 	$('.vinil').animate({
		// 		//например
		// 		rotate:360;
		// 	}, function(){});
		// },
		// 500 );
	// Запуск какой-либо лабуды спустя некое время от загрузки страницы
	setTimeout(function(){
		$('.object').animate({
			//например
			opacity: 1,
			marginTop: 0,
		}, 1000, function(){});
	},
	500 );// последнее значение "500" - время таймаута

	// Удобный ховер
	$(".header").hover(
		function () {
			// $(".obj2").addClass('hover-active');
			// $(".obj1").addClass('hover-active');
			//код, который будет исполняться, когда наведено
		},
		function () {
			// $(".coll").removeClass('hover-active');
			// $(".header").removeClass('hover-active');
			//код, который будет исполняться, когда ушло
		}
	);
	// Параллакс
	$(window).bind('scroll',function(e){
		parallaxScroll();
	});
	function parallaxScroll(){
		// var scrolledY = $(window).scrollTop();
		$('.the stuff we need to parallax').css('top','+'+(($(window).scrollTop()*0.5))+'px');









	//accordion
	$('.accordion_title').click(function(e) {
		e.preventDefault();
		var $this = $(this);
		if ($this.next().hasClass('show')) {
			$this.next().removeClass('show');
			$this.next().hide('middle');
		} else {
			$this.parent().parent().find('.accordion_content').removeClass('show');
			$this.parent().parent().find('.accordion_content').hide('middle');
			$this.next().toggleClass('show');
			$this.next().show('middle');
			$('html, body').animate({
				scrollTop: $("header ").offset().top
			}, 0);
		}
	});

	//compare width window mob\pc
	if ($(window).width() < 768) {
		$('.subject').addClass('.mob');
	}
	else {
		$('.subject').removeClass('.mob');
	}

	//header fixed after scroll
	$(window).scroll(function () {
		var sc = $(window).scrollTop()
		if (sc > 1) {
			$("header").addClass("fixed")
		} else {
			$("header").removeClass("fixed")
		}
	});

	// клик боди - закрыть меню баскет - иконка вызова , баскет врап меню
	$('.modal-overlay').click(function(e) {
    if(e.target == e.currentTarget) {
        $(this).removeClass('active');
    }
	});

	// Выполняется код, если есть некий класс на искомом объекте
	$(".obj1").click(function() {
		if ($(".obj2").hasClass('active')) { // условие выполнено, идем дальше
			$(this).removeClass('active');
		}
		else {
			// условие не выполнено - отрабвтывается код, что здесь, либо вообще ничего, если здесь пусто
		}
	});

	// отступ на высоту вышестоящего блока
	var marginHeight = $('.top-block').outerHeight();
	$('.bottom-block').css('margin-top', marginHeight );

	// отступ на ширину вышестоящего блока
	var layoutWidth = $('.layout').outerWidth();
	var screenWidth = $('html, body').outerWidth();
	var marginWidth = screenWidth - layoutWidth;
	var halfMarginWidth = marginWidth / 2;
	$('.arrowtop').css('margin-right', halfMarginWidth );

	var childHeight = $('.child').outerHeight();
	var screenHeight = $('html, body').outerHeight();
	var marginHeight = screenHeight - childHeight;
	var halfMarginHeight = marginHeight / 2;
	$('.arrowtop').css('margin-top', halfMarginHeight );

	// click if else hasClass
	$('.team_list .head').click(function () {
		if ($('.team_list .row4').hasClass('open')) {
			$('.team_list .head').removeClass('open');
			$('.team_list .drop').removeClass('open');
			$(this).addClass('open');
			$(this).parent().find('.drop').addClass('open');
		}
		else {
			$('.team_list .row4').removeClass('open');
			$(this).parent().parent().addClass('open');
			$(this).parent().find('.drop').addClass('open');
			$(this).addClass('open');
		}
	});
	$('.team_list .drop .close').click(function () {
		$('.team_list .row4').removeClass('open');
		$('.team_list .head').removeClass('open');
		$('.team_list .head .drop').removeClass('open');
	});
	//anchor charter
	$(window).scroll(function() {
		var anchb = $('.anchor1');
		var top_of_element = anchb.offset().top;
		var bottom_of_element = anchb.offset().top + anchb.outerHeight();
		var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
		var top_of_screen = $(window).scrollTop();
		if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
			$('.block1').addClass('fadeInUp show');
		}
		else {
			$('.block1').removeClass('fadeInUp show');
		}
	});
	//contact map image
	var lFollowX = 0,
	lFollowY = 0,
	x = 0,
	y = 0,
	friction = 1 / 30;
	function moveBackground() {
		x += (lFollowX - x) * friction;
		y += (lFollowY - y) * friction;
		translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
		$('.bg-map').css({
			'-webit-transform': translate,
			'-moz-transform': translate,
			'transform': translate
		});
		window.requestAnimationFrame(moveBackground);
	}
	$(window).on('mousemove click', function(e) {
		var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
		var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
		lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
		lFollowY = (10 * lMouseY) / 100;
	});
	moveBackground();
