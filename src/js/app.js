import './lib/smoothscroll.js'

import './ui/button.js'
import './loader.js'
import './ui/loaderAnim.js'

import ScrollAnimation from './scroll.js'
import FormSubmit from './form/FormSubmit.js'
import FormPopUp from './form/FormPopUp.js'
import popUp from './ui/pop-ups.js'

window.addEventListener('load', () => {

  new ScrollAnimation()
  new FormSubmit()
  new FormPopUp()

  const popUps = [...document.querySelectorAll('.pop-up-window')]

  popUps.forEach((elem, i) => {
    popUp(elem, document.querySelectorAll('.pop-up-handler')[i])
  })
})
