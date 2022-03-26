export * from './src/forum';

$(function(){
	var isShow = false, lock = false;
	var $btn = $('.back-to-top');
	$(document).scroll(function () {
		if (lock) return

		if ($(this).scrollTop() >= 1000) {
			if (!isShow) $btn.addClass('load')
			isShow = true
		} else {
			if (isShow) {
				$btn.removeClass('load')
				isShow = false
			}
		}
	})

	$btn.click(function () {
		lock = true
		$btn.addClass('ani-leave')

		$("html, body").animate({ scrollTop: 0 }, 800);

		setTimeout(function () {
			$btn.removeClass('ani-leave').addClass('leaved')
		}, 390)

		setTimeout(function () {
			$btn.addClass('ending')
		}, 120)

		setTimeout(function () {
			$btn.removeClass('load')
		}, 1500);

		setTimeout(function () {
			lock = false
			isShow = false
			$btn.removeClass('leaved ending')
		}, 2000)
	})
})