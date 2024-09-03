import { $, $$ } from "@/lib/dom-selector"
import { DISPLAY, SVGBUTTON } from "./DISPLAY"

  document.addEventListener("astro:page-load", () => {
		const hamburgerButton = $(DISPLAY.hamburgerMenuClass)
		const menuSvg = $(SVGBUTTON.svgHamburgerMenuClass)
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
				menuSvg?.classList.toggle(SVGBUTTON.svgHamburgerMenuClass)
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
function toggleMenuServiceDesktop(nav: HTMLElement | null, btn: HTMLElement | null, texbtnbtn: HTMLElement | null) {
	nav?.classList.toggle("activo")
	btn?.classList.toggle("bg-yellow-ad-sec")
	texbtnbtn?.classList.toggle("text-yellow-ad-sec")
	texbtnbtn?.classList.toggle("text-primary-black-ad")
	// console.log("menuDesktop Toggle menu");
}
// change the background color of main navbar btn
document.addEventListener("astro:page-load", () => {
	const nav = $(".nav")
	//	var responsive movil
	const serviceMenu = $(".servicesMenu")
	const menuButton = $(".menu")
	const serviceButton = $(".serviceBtnMenu")
	const containerService = $(".containerService")
	//	var desktop dimensions
	const serviceMenuDesktop = $(".servicesMenuDesktop")
	const serviceButtonDesktop = $(".serviceBtnMenuDesktop")
	const containerServiceDesktop = $(".containerServiceDesktop")

	menuButton?.addEventListener("click", () => toggleMenu(nav))
	serviceButton?.addEventListener("click", () => {
		console.log("menuServicio Toggle activo")
		toggleMenuService(serviceMenu, containerService, serviceButton)
	})
	serviceButtonDesktop?.addEventListener("click", () => {
		console.log("menuServicio Toggle activo")
		toggleMenuServiceDesktop(serviceMenuDesktop, containerServiceDesktop, serviceButtonDesktop)
	})
})