document.addEventListener('DOMContentLoaded', () => {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const navLinks = document.querySelectorAll('.nav-links > li > a');
  const timelineContents = document.querySelectorAll('.timeline-content');

  // === Intersection Observer for timeline animations ===
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2
  });

  // Apply observer and initial state to timeline items
  timelineItems.forEach(item => {
    item.classList.add('hidden');
    observer.observe(item);
  });

  // Handle case where content fits entirely in viewport
  if (window.innerHeight >= document.body.scrollHeight) {
    timelineItems.forEach(item => item.classList.add('show'));
  }

  // === Dropdown toggle for navigation links ===
  navLinks.forEach(link => {
    const dropdown = link.nextElementSibling;

    if (dropdown && dropdown.classList.contains('dropdown')) {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const isVisible = dropdown.style.display === 'block';
        dropdown.style.display = isVisible ? 'none' : 'block';
      });
    }
  });

  // === Expandable timeline content on hover (instead of button) ===
  timelineContents.forEach(content => {
    if (content.scrollHeight > 150) {
      content.style.overflow = 'hidden';
      content.style.maxHeight = '100px';

      content.addEventListener('mouseover', () => {
        content.style.maxHeight = '';
      });

      content.addEventListener('mouseout', () => {
        content.style.maxHeight = '100px';
      });

      // Optional: Add a CSS class for visual indicator (e.g., fade or gradient)
      content.classList.add('expandable-hover');
    }
  });
});
