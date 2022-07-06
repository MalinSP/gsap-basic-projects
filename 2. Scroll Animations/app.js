gsap.from('.b2 h2', {
  duration: 1,
  autoAlpha: 0,
  y: 100,
  scale: 0.5,
  scrollTrigger: {
    trigger: '.b2 h2',
    // markers: true,
    // Trigger Scroller
    // start: 'top bottom', // default
    start: 'top 80%', // "top center+=100"
    end: 'bottom 30%',
    //onEnter onLeave onEnterBack onLeaveBack
    toggleActions: 'play pause reverse reset',
    scrub: true, //follow scroll
  },
})

ScrollTrigger.create({
  trigger: '.b2',
  pin: true,
  markers: true,
  //trigger scrolled
  end: 'bottom 50%',
})
