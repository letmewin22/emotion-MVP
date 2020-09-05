import splitting from 'splitting'
import {TimelineMax, Power2, Expo} from 'gsap'

const btn = document.querySelectorAll('.button')

const textSplit = (elems, by) => {
  for (const elem of elems) {
    splitting({target: elem, by})
  }
}
textSplit(document.querySelectorAll('.button-text'), 'chars')

function btnHover() {

  const btnRewealer = this.querySelector('.button-rewealer')
  const btnText = btnRewealer.querySelector('.button-text')
  const btnTextChars = [...btnText.querySelectorAll('.char')]

  const tl = new TimelineMax()
  tl
    .to(btnRewealer, 0.5, {scale: 1, y: '-50%', x: '-50%', ease: Power2.easeOut})
    .staggerTo(btnTextChars, 0.5, {y: 0, opacity: 1, ease: Expo.easeOut}, 0.03, 0.2)

}

function btnHoverOut() {

  const btnRewealer = this.querySelector('.button-rewealer')
  const btnText = btnRewealer.querySelector('.button-text')
  const btnTextChars = [...btnText.querySelectorAll('.char')]

  const tl = new TimelineMax()
  tl
    .staggerTo(btnTextChars, 0.5, {y: 30, opacity: 0, ease: Expo.easeOut}, 0.03)
    .to(btnRewealer, 0.5, {scale: 0, y: '-50%', x: '-50%', ease: Power2.easeOut}, 0.2)

}

btn.forEach(elem => elem.addEventListener('mouseenter', btnHover))
btn.forEach(elem => elem.addEventListener('mouseleave', btnHoverOut))

