import { gsap, ScrollTrigger, Flip } from 'gsap/all';

// Register Plugins & Set Defaults
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, Flip);

  // Global Defaults
  gsap.defaults({
    ease: 'power2.out',
    duration: 0.7,
  });

  // ScrollTrigger Defaults
  ScrollTrigger.defaults({
    markers: false,
  });
}

export { gsap, ScrollTrigger, Flip };
