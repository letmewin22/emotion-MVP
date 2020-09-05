import {TimelineMax, Power3, Power1} from 'gsap'
import splitting from 'splitting'
import {splitLines} from '../libs/splitLines'


export const loaderAnim = () => {
  const h1 = document.querySelector('h1')

  splitting({ target: h1, by: 'lines' })
  splitLines(h1)
  
  const h1Span = h1.querySelectorAll('.line-wrapper')
  
  for (let i = 0; i < h1Span.length; i++) {
    splitting({ target: h1Span[i], by: 'words' })
  }
  
  document.querySelector('[data-word="ЛЕНДІНГ,"]').classList.add('purple')
  
  const ui = [document.querySelector('.header__social'),
    document.querySelector('.header__logo')]
  
  const tl = new TimelineMax()
  tl
    .delay(0.5)
    .to(h1, 1, {opacity: 1, ease: Power1.easeInOut}, 0)
  
    .staggerTo(h1Span, 1.3, {
      y: 0,
      rotationX: '0deg',
      ease: Power3.easeOut
    }, 0.15, 0.4)
  
    .staggerTo(h1Span, 1.3, {
      opacity: 1,
      rotationX: '0deg',
      ease: Power3.easeOut
    }, 0.17, 0.5)
  
    .to(ui, 0.7, {
      opacity: 1,
      ease: Power1.easeOut
    }, 0.8)
}


