(function() {

  document.body.style.position = 'fixed'

  function loadingComplete() {
    const lineLoader = document.querySelector('.line-loader')
    const loader = document.querySelector('.loader')


    lineLoader.style.opacity = '0'
    loader.style.opacity = '0'
    loader.style.pointerEvents = 'none'
    document.body.style.position = 'static'
  } 

  window.addEventListener('load', loadingComplete)
})()

window.onbeforeunload = function() {
  window.scrollTo(0, 0)
}
