const shareBtn = document.querySelector('#shareBtn');
const shareSVG = document.querySelector('#shareSVG')
const popup = document.querySelector('#popup')

shareSVG.addEventListener('click', function () {
      if (shareSVG.classList.contains('clicked')) {
            shareBtn.classList.remove('clicked')
            shareSVG.classList.remove('clicked')
            popup.style.visibility = "hidden"
           
      } else {
            shareBtn.classList.add('clicked')
            shareSVG.classList.add('clicked')
            popup.style.visibility = "visible"
      }
});