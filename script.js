const menu = document.querySelector("body > header > img")
const main = document.querySelector("body > main")
const menuOpen = document.querySelector(".menu-open")
const blur = document.querySelector(".blur-mobile")

let isMenuOpen = false

menu.addEventListener("click", () => {
  if (isMenuOpen == false) {
    main.style.display = "none"
    menuOpen.style.display = "flex"
    blur.style.display = "none"
    menu.src = "assets//menu-buguer-close.svg"
    isMenuOpen = !isMenuOpen
  } else {
    document.body.style.display = "flex"
    main.style.display = "block"
    menuOpen.style.display = "none"
    blur.style.display = ""
    menu.src = "assets//menu-buguer-open.svg"
    isMenuOpen = !isMenuOpen
  }
})

function myFunction(windowSize) {
  if (!windowSize.matches) {
    menuOpen.style.display = "none"
    main.style.display = "block"
    menu.src = "assets//menu-buguer-open.svg"
    isMenuOpen = !isMenuOpen
  }
}

document.body.addEventListener("resize", myFunction)

const windowSize = window.matchMedia("(max-width: 650px)")

myFunction(windowSize)

windowSize.addListener(myFunction)
