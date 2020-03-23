class FormPopUp {

  constructor() {

    this.openBtns = document.querySelectorAll('.form-handler')
    this.formPopUp = document.querySelector('.form-window')
    this.closeBtn = this.formPopUp.querySelector('.close-icon')

    this.openBtns.forEach(elem => elem.addEventListener('click', () => this.openEvent()))
    this.closeBtn.addEventListener('click', () => FormPopUp.closeEvent())
  }

  openEvent() {

    this.formPopUp.classList.add('opened')
    document.body.style.overflowY = 'hidden'

  }

  static closeEvent() {

    document.querySelector('.form-window').classList.remove('opened')
    document.body.style.overflowY = 'initial'
  }

}



export default FormPopUp
