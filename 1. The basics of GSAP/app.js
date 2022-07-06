// const img1 = document.querySelector('.img1')

// Basic GSAP

// gsap.to(img1, {
//   x: 100,
//   y: 100,
//   rotation: '45deg',
//   backgroundColor: '#fff',
//   duration: 2.2,
// })
// ------------------
// gsap.from(img1, { duration: 2, ease: 'back', autoAlpha: 0 })
// ------------------

// Button
// document.querySelector('.btn').addEventListener('click', () => {
//   gsap.from(img1, {
//     duration: 2,
//     ease: 'back',
//     autoAlpha: 0,
//     rotation: 45,
//     scale: 0.5,
//     // paused: true,
//     // delay: 0.5,
//     repeat: -1, //infinite
//     yoyo: true,
//     repeatDelay: 0.5, //delay before back
//   })
// })
// --------------------

//Stagger

// gsap.from('img', {
//   duration: 2,
//   ease: 'back',
//   autoAlpha: 0,
//   y: -100,
//   scale: 0.5,
//   // stagger: 0.2,
//   stagger: {
//     each: 1,
//     from: 'end', // center
//   },
//   // stagger: (index) => {
//   //   console.log(index)
//   // },
//   // stagger: {
//   //   amount: 1,
//   // },
//   // paused: true,
//   // delay: 0.5,
//   // repeat: -1, //infinite
//   // yoyo: true,
//   // repeatDelay: 0.5, //delay before back
// })
// -------------------

//Button random
// gsap.to('.btn', {
//   duration: 0.4,
//   stagger: 0.2,
//   x: 'random(-100,100, 10)', //random value //rounded
//   // x: "random([10,-20,50, 60, 150])" //arrays value
// })

//Keyframes
// gsap.to(img1, {
//   keyframes: [
//     { duration: 0.3, x: 100 },
//     { duration: 0.3, y: 100 },
//     { duration: 0.3, x: 200 },
//   ],
// })

//Functions
// gsap.to(img1, {
//   x: 100,
//   duration: 1,
//   repeat: 1,
//   onComplete: () => console.log('complete'),
//   onStart: () => console.log('start'),
//   onUpdate: () => console.log('update'),
//   onRepeat: () => console.log('repeat'),
// })

//Effects // Save tweens
// gsap.registerEffect({
//   name: 'imgAnimation',
//   effect: (targets, config) => {
//     return gsap.to(targets, {
//       duration: config.duration,
//       y: 200,
//       scale: 1.4,
//       rotation: 360,
//     })
//   },
//   defaults: { duration: 2 },
// })

// gsap.effects.imgAnimation(img1, {
//   duration: 5,
// })
// gsap.effects.imgAnimation('.img2', {
//   duration: 5,
// })
// gsap.effects.imgAnimation('.img3', {
//   duration: 5,
// })

//Set values
// img1.style.opacity = 0

// gsap.set(img1, { autoAlpha: 0 })

//Utility tween methods
// const tween = gsap.to('.img2', { y: 200, duration: 5, paused: true })

// // tween.kill()
// //tween.delay(1)
// // tween.duration(5)

// setTimeout(() => {
//   // tween.resume()
//   tween.seek(2.5)
//   tween.play()
// }, 2000)

//Timeline

const TL = gsap.timeline({
  defaults: { duration: 5, ease: 'power4.out' },
  repeat: -1,
  yoyo: true,
  paused: true,
  onStart: () => console.log('start'),
  onComplete: () => console.log('complete'),
})

TL.from('.img1', {
  autoAlpha: 0,
  y: -50,
  // duration: 1
})
  .from(
    '.img2',
    {
      autoAlpha: 0,
      y: -50,
      // duration: 1
    },
    '0'
  ) // 3 - wait 3s // "<" "0" - start same time
  .from(
    '.img3',
    {
      autoAlpha: 0,
      y: -50,
      // duration: 1
    },
    '-=0.75'
  )
  .from(
    'h1',
    {
      autoAlpha: 0,
      y: -50,
      // duration: 1
    },
    '-=0.75'
  )
  .addLabel('endAnim')
  .add('endAnimation', '-=2')
  .add(() => {
    console.log('end of timeline')
  })
  .from(
    'p',
    {
      autoAlpha: 0,
      y: -50,
      ease: 'power4.in',
      // duration: 1
    },
    '-=0.75'
  )

setTimeout(() => {
  // TL.play()
  TL.seek('endAnim')
  TL.play()
}, 3000)
