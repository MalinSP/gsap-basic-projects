const btnRight = document.querySelector('.btn-next')
const btnLeft = document.querySelector('.btn-prev')
const container = document.querySelector('.container')
const slides = Array.from(document.querySelectorAll('.slide'))
const indexIndicator = document.querySelector('.counter span:nth-child(1)')
let index = 0

function animRight() {
  const TlRight = gsap.timeline()

  TlRight.set(indexIndicator, { innerText: index + 1 }).to(slides[index], {
    duration: 0.6,
    x: 0,
  })
}
function animLeft() {
  const TlLeft = gsap.timeline()

  TlLeft.set(indexIndicator, { innerText: index }).to(slides[index], {
    duration: 0.6,
    x: '-100%',
  })
}

function handleDirection(direction) {
  if (direction === 'next') {
    if (index === slides.length - 1) {
      gsap.to(container, {
        keyframes: [
          { duration: 0.1, x: -4 },
          { duration: 0.1, x: 4 },
          { duration: 0.1, x: -4 },
          { duration: 0.1, x: 0 },
        ],
      })
      return
    }
    index++
    animRight()
  } else if (direction === 'prev') {
    if (index === 0) {
      gsap.to(container, {
        keyframes: [
          { duration: 0.1, x: -4 },
          { duration: 0.1, x: 4 },
          { duration: 0.1, x: -4 },
          { duration: 0.1, x: 0 },
        ],
      })
      return
    }
    animLeft()
    index--
  }
}

btnRight.addEventListener('click', () => {
  handleDirection('next')
  // if (index === slides.length - 1) {
  //   gsap.to(container, {
  //     keyframes: [
  //       { duration: 0.1, x: -4 },
  //       { duration: 0.1, x: 4 },
  //       { duration: 0.1, x: -4 },
  //       { duration: 0.1, x: 0 },
  //     ],
  //   })
  //   return
  // }
  // index++
  // animRight()
})

btnLeft.addEventListener('click', () => {
  handleDirection('prev')
  // if (index === 0) {
  //   gsap.to(container, {
  //     keyframes: [
  //       { duration: 0.1, x: -4 },
  //       { duration: 0.1, x: 4 },
  //       { duration: 0.1, x: -4 },
  //       { duration: 0.1, x: 0 },
  //     ],
  //   })
  //   return
  // }
  // animLeft()
  // index--
})
