import { $, $$ } from "@/lib/dom-selector"

  //--------------------------------------------------------
  const DISPLAY = {
		hamburgerMenuClass: ".menu",
		open: "open",
		hamburgerButtonClicked: "hamburgerButtonClicked",
	} as const
  document.addEventListener("astro:page-load", () => {
		const hamburgerButton = $(DISPLAY.hamburgerMenuClass)

		$$(DISPLAY.hamburgerMenuClass).forEach((button) => {
			button.addEventListener("click", () => {
				const hamburgerButton = $(DISPLAY.hamburgerMenuClass)!
				hamburgerButton.classList.toggle(DISPLAY.open)
				const isMenuOpen = hamburgerButton.classList.contains(DISPLAY.open)
				hamburgerButton.setAttribute("aria-expanded", String(isMenuOpen))
				hamburgerButton.setAttribute(
					"aria-label",
					isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
				)
				const hamburgerButtonClick = new CustomEvent(DISPLAY.hamburgerButtonClicked)
				hamburgerButton.dispatchEvent(hamburgerButtonClick)
			})
		})
		if (hamburgerButton?.classList?.contains(DISPLAY.open))
			hamburgerButton?.classList?.remove(DISPLAY.open)
	})
  //--------------------------------------------------------

	function toggleMenu(nav: HTMLElement | null) {
		nav?.classList.toggle("activo")
    console.log("menuMobile Toggle menu");
	}
  console.log("loaded")

	document.addEventListener("astro:page-load", () => {
		const nav = $(".nav")
		// const menuButton = $("#menuButton")
		const menuButton = $(".menu")

		menuButton?.addEventListener("click", () => toggleMenu(nav))
		// innerMenuButton?.addEventListener("hamburgerButtonClicked", () =>)
    // toggleMenu(nav)
    console.log("start Toggle menu");
    console.log(menuButton);


		// if (menuMobileContext?.classList.contains("open")) {
		// 	toggleMenu(nav, menuMobileContext)
		// }
	})