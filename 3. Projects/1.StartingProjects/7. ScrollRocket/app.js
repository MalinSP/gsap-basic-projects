const topRocket = document.querySelector('.top-rocket')
const midRocket = document.querySelector('.mid-rocket')
const rocket = document.querySelector('.bot-rocket')
const supply = document.querySelector('.supply')
const blocks = document.querySelectorAll('.bloc')

const offsets = [105, 206, 848]

gsap.utils.toArray(['.bloc2', '.bloc3', '.bloc4']).forEach((block, index) => {
  gsap.to(block, {
    y: 0,
    ease: 'linear',
    scrollTrigger: {
      trigger: '.container-scroll',
      start: 'top 50%',
      markers: true,
      end: `+=${offsets[index]}`,
      scrub: true,
    },
  })
})

blocks.forEach((block, index) => {
  if (index === 3) {
    ScrollTrigger.create({
      trigger: block,
      start: 'top+=200 center',
      onEnter: () => {
        block.classList.add('active')
      },
      onLeaveBack: () => {
        block.classList.remove('active')
      },
    })
    return
  }
  ScrollTrigger.create({
    trigger: block,
    start: 'top center+=10%',
    onEnter: () => {
      block.classList.add('active')
    },
    onLeaveBack: () => {
      block.classList.remove('active')
    },
  })
})
