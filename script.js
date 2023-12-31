var tl = gsap.timeline()

tl.from("#nav-left img", {
  x: -300,
  opacity:0,
  stagger:0.3,
  duration:0.5,
  delay:.3
})
tl.from("#nav-right , h4 ,#signin-btn,#left h1,#left p, #left button ", {
  y:80,
  opacity:0,
  duration:0.8,
  stagger:0.3
})