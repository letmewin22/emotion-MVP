const popUp = (selector, btnSelector) => {

  const popUpWindow = selector

  const closeIcon = selector.querySelector('.close-icon')
  const popUpBtn = btnSelector

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

  popUpBtn.addEventListener('click', open)
  popUpWindow.addEventListener('click', close)
}

export default popUp
