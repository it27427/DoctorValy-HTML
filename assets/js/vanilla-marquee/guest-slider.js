import marquee from './vanilla-marquee.min.js';

new marquee( document.getElementById( 'marquee' ), {
  // Set to false if you want to use jQuery animate method
  allowCss3Support: true,
  // CSS3 easing function
  css3easing: 'linear',
  // Requires jQuery easing plugin.
  easing: 'linear',
  // Time to wait before starting the animation
  delayBeforeStart: 0,
  // 'left', 'right', 'up' or 'down'
  direction: 'left',
  // Should the marquee be duplicated to show an effect of continues flow
  duplicated: false,
  // Duration of the animation
  duration: 10000,
  // Space in pixels between the tickers
  gap: 20,
  // On cycle pause the marquee
  pauseOnCycle: true,
  // Pause on hover
  pauseOnHover: true,
  // The marquee is visible initially positioned next to the border towards it will be moving
  startVisible: false
});