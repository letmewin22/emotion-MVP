import {TimelineMax, Power3} from 'gsap'

import FormInputs from './FormInputs.js'
import serialize from '../libs/formSend.js'
import pseudoPrototype from '../libs/pseudo.prototype.js'
import FormPopUp from '../form/FormPopUp.js'

export default class FormSubmit extends FormInputs {

  constructor() {
    super()
    pseudoPrototype()

    this.thankYouWindow = document.querySelector('.thank-you-window')

    this.form.onsubmit = (e) => this.submit(e)

  }

  validation() {

    this.validateText.querySelector('.koef-inp').innerHTML = this.koef
    this.validateText.querySelector('.koef-outp').innerHTML = this.koef - this.phone.value.trim('').length
    this.validateText.style.opacity = '1'

    this.phone.focus()
    this.label.pseudoStyle('after', 'border-color', '#F44336!important')
  }

  requestLoad() {

    const tl = new TimelineMax({onComplete: () => FormPopUp.closeEvent()})
    tl
      .to(this.thankYouWindow, 1, {opacity: 1, ease: Power3.easeInOut})
      .to(this.thankYouWindow, 1, {opacity: 0, ease: Power3.easeInOut}, 3)

    this.form.reset()
    document.body.classList.remove('form-focused')
    for (const input of this.input) {
      input.classList.remove('focus')
    }

    dataLayer.push({'event': 'form_send'})
  }


  requestSend() {
    const URL = this.form.getAttribute('data-url')

    const request = new XMLHttpRequest()
    request.open('POST', URL, true)
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')

    const data = serialize(this.form)
    try {
      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {

          this.requestLoad()
        } else {
          alert('При отправке произошла ошибка:(')
        }
      }
      request.send(data)
    } catch (e) {
      console.log(e)
      alert(e)
    }

    return false
  }

  submit(e) {

    if (this.phone.value.trim('').length < this.koef) {
      this.validation()
      e.preventDefault()
    } else {
      this.requestSend()
    }

    return false
  }
}
