const list = document.querySelectorAll('.menu--accordion--list');

function accordion(e) {

	e.stopPropagation();

	if (this.classList.contains('active')) {

		this.classList.remove('active');

  } else if (this.parentElement.parentElement.classList.contains('active')) {

    this.classList.add('active');

	} else {

		for (i = 0; i < list.length; i++) {

			if (window.CP.shouldStopExecution(0)) break;

			  list[i].classList.remove('active');

			} window.CP.exitedLoop(0);

			this.classList.add('active');

		}

}

for (i = 0; i < list.length; i++) {

	if (window.CP.shouldStopExecution(1)) break;

	list[i].addEventListener('click', accordion);

} window.CP.exitedLoop(1);
