const sliders = document.querySelectorAll('.slide-in')
const faders = document.querySelectorAll('.fade-in')
const navToggle = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-menu')

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active')
  navMenu.classList.toggle('active')
})

document.querySelectorAll('.link').forEach((n) =>
  n.addEventListener('click', () => {
    navToggle.classList.remove('active')
    navMenu.classList.remove('active')
  })
)

const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -150px 0px',
}

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add('appear')
      appearOnScroll.unobserve(entry.target)
    }
  })
},
appearOptions)

sliders.forEach((slider) => {
  appearOnScroll.observe(slider)
})

faders.forEach((fader) => {
  appearOnScroll.observe(fader)
})
