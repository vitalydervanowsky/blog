var supportPhone = document.querySelector(".support-phone");
var supportPhoneL = supportPhone.querySelector(".support-phone-visible");
var supportPhoneP = supportPhone.querySelector(".support-phone-free");
var supportPhoneC = supportPhone.querySelector(".support-phone-close");

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (supportPhoneP.classList.contains("support-phone-free-show")) {
			supportPhoneP.classList.remove("support-phone-free-show");
			supportPhoneC.classList.remove("support-phone-close-show");
		}
	}
});

supportPhoneL.addEventListener("click", function(event) {
	event.preventDefault();
	supportPhoneP.classList.add("support-phone-free-show");
	supportPhoneC.classList.add("support-phone-close-show");
});

supportPhoneC.addEventListener("click", function(event) {
	event.preventDefault();
	supportPhoneP.classList.remove("support-phone-free-show");
	supportPhoneC.classList.remove("support-phone-close-show");
});
