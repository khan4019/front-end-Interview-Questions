(function () {
	'use strict';
	var allExamples = document.querySelectorAll('.toggleExample'),
	classes,
	toggleHandler = function (el) {
		classes = document.getElementById(this.id+'Example').classList;		
		this.innerHTML = (classes.contains('hide') ? 'Hide': 'Show') + this.innerHTML.substr(4);
		classes.toggle('hide');
	};

	for (var i = allExamples.length - 1; i >= 0; i--) {
		allExamples[i].addEventListener('click', toggleHandler);
	};
})();