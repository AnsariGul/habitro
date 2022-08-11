gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
  // normalizeScroll: true,
    smoothTouch: 0.1,
  });



// t1 = new TimelineMax({
//   scrollTrigger: {
//     trigger: ".flip-text-second",
//   }
// });
// t1.staggerFrom(".flip-text-second", 1.5, {y:"100%", duration: 0.8, delay:0.5, ease:Power4.easeOut}, 0.15)


// t2 = new TimelineMax({
//   scrollTrigger: {
//     trigger: ".about-us .flip-text-second",
//   }
// });
// t2.staggerFrom(".about-us .flip-text-second", 1.5, {y:"100%", duration: 0.8, delay:0.5, ease:Power4.easeOut})



/*
See https://www.greensock.com/splittext/ for details. 
This demo uses SplitText which is a membership benefit of Club GreenSock, https://www.greensock.com/club/
*/
// gsap.registerPlugin(SplitText);

// var tl = gsap.timeline(),
//   mySplitText = new SplitText(".flip-text", { type: "words,chars" }),
//   chars = mySplitText.chars; //an array of all the divs that wrap each character



// var t2 = gsap.timeline(),
//   mySplitText = new SplitText(".flip-text-second", { type: "words,chars" }),
//   chars = mySplitText.chars; //an array of all the divs that wrap each character


