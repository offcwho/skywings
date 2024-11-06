function mobileNav() {
	// Mobile nav button
	const 
        nav = document.getElementById("nav"),
        button = document.getElementById("open"),
        button_close = document.getElementById("close");

    button.addEventListener("click", () => {
      nav.classList.toggle('header__nav--active')
    })
    button_close.addEventListener("click", () => {
      nav.classList.toggle('header__nav--active')
    })
}

export default mobileNav;