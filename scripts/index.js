var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie'), // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  path: 'data.json', // Required
})