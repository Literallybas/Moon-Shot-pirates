
  document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.carousel');
    const instances = M.Carousel.init(elems, {
      padding: 200,
      dist: -100,
      shift: 0,
      fullWidth: false,  // keep as false for 3D effect
      indicators: false
    });

    // Autoplay every 4.5 seconds
    setInterval(() => {
      instances.forEach(instance => instance.next());
    }, 7000);
  });

