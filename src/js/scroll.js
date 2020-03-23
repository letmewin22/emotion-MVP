import { TimelineMax, Power1, Power2 } from 'gsap'

export default class ScrollAnimation {

  constructor() {

    this.elements = document.querySelectorAll('.section')
    this.footerElements = document.querySelectorAll('footer')
    this.extraTextElems = document.querySelectorAll('.extra-text')
    this.intersectionRatio = 0.6
    this.sectionInView()
    this.footer()

    window.requestAnimationFrame(() => new ScrollAnimation())
  }

  sectionInView() {

    this.elements.forEach(elem => {

      if (elem.getBoundingClientRect().top <= window.innerHeight * this.intersectionRatio &&
        elem.getBoundingClientRect().top > 0) {

        if (!elem.classList.contains('activated')) {
          
          elem.classList.add('activated')
          ScrollAnimation.sectionAnimation(elem)

        }
      }
    })
  };

  footer() {

    this.footerElements.forEach(elem => {

      if (elem.getBoundingClientRect().top <= window.innerHeight * this.intersectionRatio &&
        elem.getBoundingClientRect().top > 0) {

        if (!elem.classList.contains('activated')) {
          elem.classList.add('activated')

          let tl = new TimelineMax()
          tl
            .to(elem.querySelectorAll('.button'), 0.8, { opacity: 1, ease: Power2.easeOut }, 0.5)
        }
      }
    })
  }

  static sectionAnimation(elem) {

    let tl = new TimelineMax()
    tl
      .to(elem.querySelectorAll('h2'), 0.8, { opacity: 1, y: 0, ease: Power2.easeOut }, 0.3)
      .to(elem.querySelectorAll('.arrow-block__arrow-circle'), 0.8, { opacity: 1, scale: 1, ease: Power2.easeOut }, 0.3)
      .staggerTo(elem.querySelectorAll('p'), 0.8, { opacity: 1, y: 0, ease: Power1.easeOut }, 0.08, 0.5)
      .staggerTo(elem.querySelectorAll('.list-items__line'), 1, { opacity: 1, width: '100%', ease: Power1.easeOut }, 0.2, 0.5)
      .staggerTo(elem.querySelectorAll('.list-items__text'), 1.5, { opacity: 1, ease: Power1.easeOut }, 0.2, 0.5)
      .staggerTo(elem.querySelectorAll('.list-items svg'), 1.5, { opacity: 1, ease: Power1.easeOut }, 0.2, 0.5)
      .to(elem.querySelectorAll('.descriptor'), 0.8, { opacity: 1, y: 0, ease: Power2.easeOut }, 0.5)
      .to(elem.querySelectorAll('.button'), 0.8, { opacity: 1, ease: Power2.easeOut }, 0.5)
  }

}
