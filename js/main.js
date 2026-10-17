document.addEventListener('DOMContentLoaded', () => {
  const pageName = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const target = href.split('/').pop();
    if (target === pageName) {
      link.classList.add('active');
    }
  });

  const header = document.querySelector('.site-header');
  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 24);
  };
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('open');
      });
    });
  }

  const budgetRange = document.getElementById('budget-range');
  const budgetValue = document.getElementById('budget-value');
  if (budgetRange && budgetValue) {
    const formatCurrency = (value) =>
      new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
      }).format(value);

    const updateBudget = () => {
      budgetValue.textContent = formatCurrency(Number(budgetRange.value));
    };

    budgetRange.addEventListener('input', updateBudget);
    updateBudget();
  }

  const searchForm = document.querySelector('#hero-search');
  const formStatus = document.getElementById('form-status');
  if (searchForm) {
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const destination = document.getElementById('trip-location')?.value?.trim() || 'your dream destination';
      const date = document.getElementById('trip-date')?.value || 'your preferred dates';
      const budget = budgetValue ? budgetValue.textContent : 'your budget';
      if (formStatus) {
        formStatus.textContent = `Search preview only: ${destination}, ${date}, budget ${budget}. Live prices and availability are not connected; contact us for a current quote.`;
      }
    });
  }

  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    const bookingStatus = document.getElementById('booking-status');
    bookingForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (bookingStatus) {
        bookingStatus.textContent = 'This static demo does not submit or confirm reservations. Contact us to request availability.';
      }
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const contactStatus = document.getElementById('contact-status');
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const request = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        tripType: document.getElementById('trip-type').value,
        message: document.getElementById('message').value.trim(),
      };
      const whatsappText = [
        'New FDEXUN:TOUR travel request',
        `Name: ${request.name}`,
        `Email: ${request.email}`,
        `Phone: ${request.phone}`,
        `Trip type: ${request.tripType}`,
        `Message: ${request.message}`,
      ].join('\n');
      const whatsappLink = document.createElement('a');
      whatsappLink.className = 'btn btn-secondary';
      whatsappLink.href = `https://wa.me/916353825125?text=${encodeURIComponent(whatsappText)}`;
      whatsappLink.target = '_blank';
      whatsappLink.rel = 'noopener noreferrer';
      whatsappLink.textContent = 'Send via WhatsApp';

      const submitButton = contactForm.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      if (contactStatus) contactStatus.textContent = 'Sending your request by email...';

      try {
        const response = await fetch('https://formsubmit.co/ajax/vyronyx006@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            ...request,
            _subject: `New FDEXUN:TOUR travel inquiry from ${request.name}`,
            _template: 'table',
          }),
        });
        const result = await response.json();
        if (!response.ok || result.success !== true && result.success !== 'true') {
          throw new Error('The email service did not accept the request.');
        }

        contactForm.reset();
        if (contactStatus) {
          contactStatus.replaceChildren(
            document.createTextNode('Request emailed to vyronyx006@gmail.com. To also notify WhatsApp, send this message:'),
            document.createElement('br'),
            whatsappLink,
          );
        }
      } catch (error) {
        if (contactStatus) {
          contactStatus.replaceChildren(
            document.createTextNode('Email could not be sent. You can send your request through WhatsApp instead:'),
            document.createElement('br'),
            whatsappLink,
          );
        }
      } finally {
        submitButton.disabled = false;
      }
    });
  }

  const yearNode = document.getElementById('current-year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
});
