var supportPhone = document.querySelector(".support-phone");
var supportPhoneL = supportPhone.querySelector(".support-phone-visible");
var supportPhoneP = supportPhone.querySelector(".support-phone-visually-hidden");
var supportPhoneC = supportPhone.querySelector(".support-phone-close");
// var overlay = document.querySelector(".overlay");

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (supportPhoneP.classList.contains("support-phone-visually-hidden-show")) {
			supportPhoneP.classList.remove("support-phone-visually-hidden-show");
			// overlay.classList.remove("overlay-show");
		}
	}
});

supportPhoneL.addEventListener("click", function(event) {
	event.preventDefault();
	supportPhoneP.classList.add("support-phone-visually-hidden-show");
	// overlay.classList.add("overlay-show");
});

supportPhoneC.addEventListener("click", function(event) {
	event.preventDefault();
	supportPhoneP.classList.remove("support-phone-visually-hidden-show");
	// overlay.classList.remove("overlay-show");
});

// overlay.addEventListener("click", function(event) {
// 	event.preventDefault();
// 	overlay.classList.remove("overlay-show");
// 	supportPhoneP.classList.remove("support-phone-visually-hidden-show");
// });
