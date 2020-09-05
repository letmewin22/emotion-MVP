const popUp = (selector, btnSelector) => {

  const closeIcon = selector.querySelector('.close-icon')

  const open = () => {
    selector.classList.add('opened')
    document.body.style.overflowY = 'hidden'
  }

  const close = (e) => {
    if (e.target === closeIcon || e.target === selector) {
      selector.classList.remove('opened')
      document.body.style.overflowY = 'initial'
    }
    return
  }

  btnSelector.addEventListener('click', open)
  selector.addEventListener('click', close)
}

export default popUp
