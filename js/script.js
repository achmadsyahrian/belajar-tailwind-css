// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;
    const backToTop = document.getElementById('backToTop')

    if (window.scrollY > fixedNav) {
      header.classList.add('navbar-fixed')
      backToTop.classList.add('flex')
      backToTop.classList.remove('hidden')
    } else {
      header.classList.remove('navbar-fixed')
      backToTop.classList.remove('flex')
      backToTop.classList.add('hidden')
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active')
  navMenu.classList.toggle('hidden')
})

// Klik Luar Hamburger
window.addEventListener('click', (e) => {
  if (e.target != hamburger &&  e.target != navMenu) {
    hamburger.classList.remove('hamburger-active')
    navMenu.classList.add('hidden')
  }
})

// Dark Mode Toogle
const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

darkToggle.addEventListener('click', () => {
  if (darkToggle.checked) {
    html.classList.add('dark')
    localStorage.theme = 'dark'
  } else {    
    html.classList.remove('dark')
    localStorage.theme = 'light'
  }
})

// Pindahkan toggle sesuai mode dari local storage
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true
} else {
  darkToggle.checked = false
}