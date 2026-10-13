document.addEventListener('DOMContentLoaded', () => {
  // Header scroll effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Logic
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      // Close mobile menu if open
      if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Form handling via FormSubmit AJAX
  const form = document.getElementById('contactForm');
  if(form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('submitBtn') || form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.textContent : 'Send Message';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Transmitting inquiry...';
      }

      // Correo oficial del cliente:
      const targetEmail = 'veltrixlaboratory@gmail.com';

      const formData = new FormData(form);
      formData.append('_subject', 'New Clinical Trial Inquiry - Veltrix Labs');
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json'
          },
          body: formData
        });

        const statusBox = document.getElementById('formStatusMsg');
        function showStatus(type, title, message) {
          if (statusBox) {
            statusBox.className = `form-status-msg ${type}`;
            const iconSvg = type === 'success' 
              ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>'
              : (type === 'error'
                ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>'
                : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>');
            statusBox.innerHTML = `
              <div class="status-icon">${iconSvg}</div>
              <div class="status-text">
                <strong>${title}</strong>
                <p style="margin: 0.2rem 0 0; font-size: 0.88rem; line-height: 1.45;">${message}</p>
              </div>
            `;
            statusBox.style.display = 'flex';
          }
        }

        if (response.ok && (!result || result.success !== 'false')) {
          showStatus('success', 'Inquiry Submitted Successfully', 'Thank you for reaching out to Veltrix Labs. Our clinical coordination team will evaluate your inquiry and follow up within 24 business hours.');
          form.reset();
        } else {
          const errMsg = result && result.message ? result.message : 'Please try again or email us directly at veltrixlaboratory@gmail.com.';
          showStatus('info', 'Submission Notice', errMsg);
        }
      } catch (err) {
        const statusBox = document.getElementById('formStatusMsg');
        if (statusBox) {
          statusBox.className = 'form-status-msg error';
          statusBox.innerHTML = `
            <div class="status-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg></div>
            <div class="status-text">
              <strong>Connection Error</strong>
              <p style="margin: 0.2rem 0 0; font-size: 0.88rem;">Could not submit inquiry. Please check your internet connection or email us directly.</p>
            </div>
          `;
          statusBox.style.display = 'flex';
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
        }
      }
    });
  }

  // Initialize Product Modal Logic
  initProductModal();

  // Initialize Sony PS3 XMB Silk Waves
  initPS3Waves();

  // Initialize Subtle Scroll Reveal
  initScrollReveal();

  // Initialize Stat Number Counters
  initStatCounters();

  // Initialize Back To Top Floating Button
  initBackToTop();
});

// ==========================================
// SCROLL-TRIGGERED ENTRANCE ANIMATIONS
// ==========================================
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.stat-item, .why-img-col, .why-text-col, .check-list li, .why-action-col, .section-header, .compound-card, .contact-card, .info-item, .contact-form-panel'
  );

  if (!targets.length) return;

  // Gentle, subtle cascading delays
  document.querySelectorAll('.check-list').forEach(list => {
    list.querySelectorAll('li').forEach((item, idx) => {
      item.style.transitionDelay = `${idx * 0.05}s`;
    });
  });

  document.querySelectorAll('.info-list').forEach(list => {
    list.querySelectorAll('.info-item').forEach((item, idx) => {
      item.style.transitionDelay = `${idx * 0.06}s`;
    });
  });

  document.querySelectorAll('.compound-grid').forEach(grid => {
    grid.querySelectorAll('.compound-card').forEach((card, idx) => {
      card.style.transitionDelay = `${(idx % 4) * 0.07}s`;
    });
  });

  document.querySelectorAll('.stats-container').forEach(container => {
    container.querySelectorAll('.stat-item').forEach((item, idx) => {
      item.style.transitionDelay = `${idx * 0.07}s`;
    });
  });

  // Mark all target elements with scroll-animate class
  targets.forEach(el => el.classList.add('scroll-animate'));

  // Trigger stat counters when stats-bar enters view
  function triggerStatsIfVisible() {
    const statsBar = document.querySelector('.stats-bar');
    if (statsBar && !statsBar.hasAttribute('data-counted')) {
      const rect = statsBar.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.88 && rect.bottom >= 0) {
        statsBar.setAttribute('data-counted', 'true');
        runStatCounters();
      }
    }
  }

  // Modern IntersectionObserver with clear threshold
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
          triggerStatsIfVisible();
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -12% 0px', // Triggers when element is well inside the viewport
      threshold: 0.05
    });

    targets.forEach(el => observer.observe(el));
  } else {
    // Fallback scroll listener
    function checkReveal() {
      const triggerBottom = window.innerHeight * 0.84;

      targets.forEach(el => {
        if (el.classList.contains('in-view')) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerBottom && rect.bottom >= 0) {
          el.classList.add('in-view');
        }
      });

      triggerStatsIfVisible();
    }

    window.addEventListener('scroll', checkReveal, { passive: true });
    window.addEventListener('resize', checkReveal, { passive: true });
    setTimeout(checkReveal, 120);
  }
}

function runStatCounters() {
  document.querySelectorAll('.stat-counter').forEach(el => {
    const target = parseFloat(el.getAttribute('data-target') || '0');
    const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    const duration = 1400;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = (target * easeOut).toFixed(decimals);
      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toFixed(decimals);
      }
    }

    requestAnimationFrame(step);
  });
}

// ==========================================
// CLINICAL PRODUCT MODAL LOGIC
// ==========================================
function initProductModal() {
  const modal = document.getElementById('productModal');
  const modalBody = document.getElementById('modalDynamicBody');
  const closeBtn = document.getElementById('modalCloseBtn');
  const backdrop = document.querySelector('.product-modal-backdrop');
  if (!modal || !modalBody) return;

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openModal(id) {
    if (typeof PRODUCTS_DATA === 'undefined' || !PRODUCTS_DATA[id]) return;
    const prod = PRODUCTS_DATA[id];

    modalBody.innerHTML = `
      <div class="modal-showcase-card">
        <div class="modal-showcase-img-pane">
          <img src="${prod.image}" alt="${prod.name}">
          <span class="modal-showcase-purity">✓ HPLC >99% Pure</span>
        </div>

        <div class="modal-showcase-info-pane">
          <span class="compound-tag">${prod.category}</span>
          <h2>${prod.name}</h2>
          <span class="modal-showcase-badge">${prod.badge}</span>

          <p class="modal-showcase-desc">${prod.summary}</p>

          <div class="modal-showcase-chips">
            <span class="spec-chip"><strong>Dose:</strong> ${prod.dose}</span>
            <span class="spec-chip"><strong>Route:</strong> ${prod.protocol}</span>
          </div>

          <div class="modal-showcase-actions">
            <a href="products#${prod.id}" class="btn btn-outline" style="border-radius: 50px; font-size: 0.82rem; padding: 0.55rem 1rem;">
              Full Dossier &rarr;
            </a>
            <a href="#contact" class="btn btn-primary" onclick="document.getElementById('productModal').classList.remove('active'); document.body.style.overflow='';" style="border-radius: 50px; font-size: 0.82rem; padding: 0.55rem 1.15rem;">
              Contact Lab
            </a>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Bind click on all compound plus buttons and whole card
  document.querySelectorAll('.compound-btn-plus, .compound-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      if (id) openModal(id);
    });
  });

  document.querySelectorAll('.compound-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      if (e.target.closest('.compound-btn-plus')) return;
      const btn = card.querySelector('.compound-btn-plus');
      if (btn) {
        const id = btn.getAttribute('data-id');
        if (id) openModal(id);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// ==========================================
// SONY PS3 XMB SILK WAVES SIMULATION
// ==========================================
function initPS3Waves() {
  const canvas = document.getElementById('ps3WavesCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let animationFrameId;
  let isVisible = true;
  let time = 0;

  function resize() {
    const parent = canvas.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
    ctx.scale(dpr, dpr);
  }

  window.addEventListener('resize', resize);
  resize();

  // Multi-layered PS3 XMB ribbons with subtle, discreet clinical tones on light background
  const ribbons = [
    {
      baseYPercent: 0.50,
      thickness: 130,
      speed: 0.004,
      colorStart: 'rgba(2, 132, 199, 0.07)',
      colorEnd: 'rgba(56, 189, 248, 0.01)',
      edgeColor: 'rgba(2, 132, 199, 0.28)',
      edgeGlow: 'rgba(255, 255, 255, 0.85)',
      harmonics: [
        { freq: 0.0016, amp: 40, speed: 1.0 },
        { freq: 0.0035, amp: 22, speed: 1.3 },
        { freq: 0.0008, amp: 16, speed: -0.7 }
      ]
    },
    {
      baseYPercent: 0.44,
      thickness: 150,
      speed: 0.003,
      colorStart: 'rgba(14, 165, 233, 0.06)',
      colorEnd: 'rgba(56, 189, 248, 0.01)',
      edgeColor: 'rgba(14, 165, 233, 0.25)',
      edgeGlow: 'rgba(255, 255, 255, 0.75)',
      harmonics: [
        { freq: 0.0012, amp: 50, speed: 0.9 },
        { freq: 0.0028, amp: 26, speed: -1.1 },
        { freq: 0.0042, amp: 12, speed: 1.4 }
      ]
    },
    {
      baseYPercent: 0.60,
      thickness: 120,
      speed: 0.005,
      colorStart: 'rgba(37, 99, 235, 0.05)',
      colorEnd: 'rgba(14, 165, 233, 0.01)',
      edgeColor: 'rgba(37, 99, 235, 0.22)',
      edgeGlow: 'rgba(186, 230, 253, 0.6)',
      harmonics: [
        { freq: 0.0018, amp: 35, speed: 1.1 },
        { freq: 0.0032, amp: 18, speed: 1.4 },
        { freq: 0.0009, amp: 20, speed: -0.6 }
      ]
    }
  ];

  function getWaveY(x, ribbon, offsetPhase = 0) {
    const baseY = height * ribbon.baseYPercent;
    let y = baseY;
    for (let i = 0; i < ribbon.harmonics.length; i++) {
      const h = ribbon.harmonics[i];
      y += Math.sin(x * h.freq + (time * ribbon.speed * h.speed) + offsetPhase + i) * h.amp;
    }
    return y;
  }

  function draw() {
    if (!isVisible) return;

    ctx.clearRect(0, 0, width, height);

    time += 1;
    const step = 6; // Sampling step for smooth curve

    ribbons.forEach((ribbon) => {
      const topPoints = [];
      const bottomPoints = [];

      for (let x = 0; x <= width + step; x += step) {
        const topY = getWaveY(x, ribbon, 0);
        const botY = topY + ribbon.thickness + Math.sin(x * 0.002 + time * ribbon.speed * 0.6) * 20;
        topPoints.push({ x, y: topY });
        bottomPoints.push({ x, y: botY });
      }

      // Draw the translucent ribbon body
      ctx.beginPath();
      ctx.moveTo(topPoints[0].x, topPoints[0].y);
      for (let i = 1; i < topPoints.length; i++) {
        ctx.lineTo(topPoints[i].x, topPoints[i].y);
      }
      for (let i = bottomPoints.length - 1; i >= 0; i--) {
        ctx.lineTo(bottomPoints[i].x, bottomPoints[i].y);
      }
      ctx.closePath();

      // Flowing vertical gradient
      const avgY = height * ribbon.baseYPercent;
      const grad = ctx.createLinearGradient(0, avgY - 60, 0, avgY + ribbon.thickness + 40);
      grad.addColorStop(0, ribbon.colorStart);
      grad.addColorStop(0.5, ribbon.colorStart);
      grad.addColorStop(1, ribbon.colorEnd);
      ctx.fillStyle = grad;
      ctx.fill();

      // Top glowing edge (PS3 silk crest line)
      ctx.beginPath();
      ctx.moveTo(topPoints[0].x, topPoints[0].y);
      for (let i = 1; i < topPoints.length; i++) {
        ctx.lineTo(topPoints[i].x, topPoints[i].y);
      }
      ctx.strokeStyle = ribbon.edgeColor;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Inner crisp highlight line (PS3 signature bright edge)
      ctx.beginPath();
      ctx.moveTo(topPoints[0].x, topPoints[0].y);
      for (let i = 1; i < topPoints.length; i++) {
        ctx.lineTo(topPoints[i].x, topPoints[i].y);
      }
      ctx.strokeStyle = ribbon.edgeGlow;
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    animationFrameId = requestAnimationFrame(draw);
  }

  // Performance optimization: only animate when in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(draw);
      }
    });
  }, { threshold: 0.05 });

  if (canvas.parentElement) {
    observer.observe(canvas.parentElement);
  }
  animationFrameId = requestAnimationFrame(draw);
}

// ==========================================
// BACK TO TOP BUTTON LOGIC
// ==========================================
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  function toggleBtn() {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPos > 320) {
      btn.classList.add('visible');
      btn.style.opacity = '1';
      btn.style.visibility = 'visible';
      btn.style.pointerEvents = 'auto';
      btn.style.transform = 'translateY(0) scale(1)';
    } else {
      btn.classList.remove('visible');
      btn.style.opacity = '0';
      btn.style.visibility = 'hidden';
      btn.style.pointerEvents = 'none';
      btn.style.transform = 'translateY(20px) scale(0.85)';
    }
  }

  window.addEventListener('scroll', toggleBtn, { passive: true });
  window.addEventListener('resize', toggleBtn, { passive: true });
  toggleBtn();

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
