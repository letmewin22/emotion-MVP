const progress = document.querySelector('.progress')

function progressBar() {
  const html = document.documentElement
  const winScroll = html.scrollTop
  const winHeight = html.scrollHeight - html.clientHeight
  const percent = winScroll/winHeight * 100

  progress.style.width = percent + '%'
  window.requestAnimationFrame(progressBar)
}

progressBar()
