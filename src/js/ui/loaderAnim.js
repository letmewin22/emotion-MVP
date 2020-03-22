import {TimelineMax, Power3, Power1} from 'gsap'

const h1 = document.querySelector('h1')
const h1Span = [
  h1.querySelector('.h1__first-line'),
  h1.querySelector('.h1__second-line'),
  h1.querySelector('.h1__third-line')
]
const ui = [document.querySelector('.header__social'), document.querySelector('.header__logo')]
const scrollDown = document.querySelector('.scroll-down')

let tl = new TimelineMax()
tl
  .delay(0.5)
  .to(h1, 1, {opacity: 1, ease: Power1.easeInOut}, 0)
  .staggerTo(h1Span, 1.3, { y: 0, rotationX: '0deg', ease: Power3.easeOut }, 0.15, 0.4)
  .staggerTo(h1Span, 1.3, { opacity: 1, rotationX: '0deg', ease: Power3.easeOut }, 0.17, 0.5)
  .to(scrollDown, 1, {opacity: 1, scale: 1, ease: Power3.easeOut}, 0.8)
  .to(ui, 0.7, {opacity: 1, ease: Power1.easeOut}, 0.8)

