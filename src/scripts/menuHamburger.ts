import { $, $$ } from "@/lib/dom-selector"
import { DISPLAY } from "./DISPLAY"

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

function toggleMenu(nav: HTMLElement | null, requireClass?:boolean ) {
	nav?.classList.toggle("activo")
}
function toggleMenuService(nav: HTMLElement | null, btn: HTMLElement | null, texbtnbtn: HTMLElement | null) {
	nav?.classList.toggle("activo")
	btn?.classList.toggle("bg-yellow-ad-sec")
	texbtnbtn?.classList.toggle("text-yellow-ad-sec")

console.log("menuMobile Toggle menu");
}

document.addEventListener("astro:page-load", () => {
	const nav = $(".nav")
	const serviceMenu = $(".servicesMenu")
	const menuButton = $(".menu")
	const serviceButton = $(".serviceBtnMenu")
	const containerService = $(".containerService")

	menuButton?.addEventListener("click", () => toggleMenu(nav))
	serviceButton?.addEventListener("click", () => {
		console.log("menuServicio Toggle activo")
		toggleMenuService(serviceMenu, containerService, serviceButton)
	})
})