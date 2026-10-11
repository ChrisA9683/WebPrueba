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

  // Form handling
  const form = document.getElementById('contactForm');
  if(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for registering your interest. Our coordination team will reach out from info@veltrixlabs.com.');
      form.reset();
    });
  }

  // Initialize Product Modal Logic
  initProductModal();

  // Initialize Sony PS3 XMB Silk Waves
  initPS3Waves();
});

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

    const indicationsHtml = prod.indications.map(ind => `
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${ind}</span>
      </li>
    `).join('');

    modalBody.innerHTML = `
      <div class="modal-header-hero">
        <div class="modal-img-col">
          <img src="${prod.image}" alt="${prod.name}">
        </div>
        <div class="modal-header-info">
          <span class="compound-tag">${prod.category}</span>
          <h2>${prod.name}</h2>
          <span class="modal-badge-sub">${prod.badge}</span>
          <span class="modal-purity">✓ Pureza HPLC: ${prod.purity}</span>
        </div>
      </div>

      <div class="modal-body-content">
        <div class="modal-section-block">
          <h4>Descripción Terapéutica</h4>
          <p>${prod.summary}</p>
        </div>

        <div class="modal-grid-2">
          <div class="modal-spec-item">
            <strong>Dosis Protocolizada</strong>
            <span>${prod.dose}</span>
          </div>
          <div class="modal-spec-item">
            <strong>Vía de Administración</strong>
            <span>${prod.protocol}</span>
          </div>
          <div class="modal-spec-item">
            <strong>Frecuencia / Ciclo</strong>
            <span>${prod.frequency}</span>
          </div>
          <div class="modal-spec-item">
            <strong>Stack Sinergia</strong>
            <span>${prod.stack}</span>
          </div>
        </div>

        <div class="modal-section-block">
          <h4>Mecanismo de Acción Celular</h4>
          <p>${prod.mechanism}</p>
        </div>

        <div class="modal-section-block">
          <h4>Indicaciones Principales</h4>
          <ul class="modal-indications-list">
            ${indicationsHtml}
          </ul>
        </div>

        <div class="modal-warning-box">
          <strong>Advertencia &amp; Precauciones Médicas:</strong>
          <p>${prod.contraindications}</p>
        </div>

        <div class="modal-actions-footer">
          <a href="productos.html#${prod.id}" class="modal-dossier-link">
            Ver Ficha Completa en Dossier &rarr;
          </a>
          <a href="#contact" class="btn btn-primary" onclick="document.getElementById('productModal').classList.remove('active'); document.body.style.overflow='auto';">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Consultar con Especialista
          </a>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Bind click on all compound buttons
  document.querySelectorAll('.compound-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-id');
      if (id) openModal(id);
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
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
    ctx.scale(dpr, dpr);
  }

  window.addEventListener('resize', resize);
  resize();

  // Multi-layered PS3 XMB ribbons with harmonious frequencies and glowing crests
  const ribbons = [
    {
      baseYPercent: 0.52,
      thickness: 150,
      speed: 0.007,
      colorStart: 'rgba(56, 189, 248, 0.22)',
      colorEnd: 'rgba(2, 132, 199, 0.03)',
      edgeColor: 'rgba(14, 165, 233, 0.45)',
      edgeGlow: 'rgba(255, 255, 255, 0.8)',
      harmonics: [
        { freq: 0.0016, amp: 55, speed: 1.0 },
        { freq: 0.0035, amp: 30, speed: 1.4 },
        { freq: 0.0008, amp: 20, speed: -0.8 }
      ]
    },
    {
      baseYPercent: 0.46,
      thickness: 180,
      speed: 0.005,
      colorStart: 'rgba(14, 165, 233, 0.18)',
      colorEnd: 'rgba(56, 189, 248, 0.02)',
      edgeColor: 'rgba(56, 189, 248, 0.4)',
      edgeGlow: 'rgba(255, 255, 255, 0.7)',
      harmonics: [
        { freq: 0.0012, amp: 65, speed: 0.9 },
        { freq: 0.0028, amp: 35, speed: -1.2 },
        { freq: 0.0042, amp: 15, speed: 1.6 }
      ]
    },
    {
      baseYPercent: 0.62,
      thickness: 160,
      speed: 0.008,
      colorStart: 'rgba(37, 99, 235, 0.13)',
      colorEnd: 'rgba(14, 165, 233, 0.02)',
      edgeColor: 'rgba(37, 99, 235, 0.35)',
      edgeGlow: 'rgba(186, 230, 253, 0.65)',
      harmonics: [
        { freq: 0.0018, amp: 45, speed: 1.1 },
        { freq: 0.0032, amp: 25, speed: 1.5 },
        { freq: 0.0009, amp: 30, speed: -0.7 }
      ]
    },
    {
      baseYPercent: 0.40,
      thickness: 110,
      speed: 0.009,
      colorStart: 'rgba(56, 189, 248, 0.16)',
      colorEnd: 'rgba(255, 255, 255, 0.01)',
      edgeColor: 'rgba(125, 211, 252, 0.55)',
      edgeGlow: 'rgba(255, 255, 255, 0.85)',
      harmonics: [
        { freq: 0.0022, amp: 40, speed: 1.3 },
        { freq: 0.0040, amp: 20, speed: -1.1 },
        { freq: 0.0014, amp: 25, speed: 0.8 }
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
