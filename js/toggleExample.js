(function () {
	var allExamples = document.querySelectorAll('.toggleExample'),
	toggleHandler = function (el) {
		document.getElementById(this.id+'Example').classList.toggle('hide');
	};

	for (var i = allExamples.length - 1; i >= 0; i--) {
		allExamples[i].addEventListener('click', toggleHandler);
	};
})();