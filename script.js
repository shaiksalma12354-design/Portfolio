/**
 * Shaik Banaganapalli Salma - Minimal Portfolio JavaScript
 * Clean, lightweight, reliable interactivity
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. THEME SWITCHER
  // =========================================================================
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  const currentTheme = localStorage.getItem('salma_portfolio_theme') || 'dark';
  html.setAttribute('data-theme', currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', nextTheme);
      localStorage.setItem('salma_portfolio_theme', nextTheme);
    });
  }

  // =========================================================================
  // 2. HERO VISUAL TABS (Terminal / Avatar)
  // =========================================================================
  const tabTerminal = document.getElementById('tabTerminal');
  const tabAvatar = document.getElementById('tabAvatar');
  const heroTerminalView = document.getElementById('heroTerminalView');
  const heroAvatarView = document.getElementById('heroAvatarView');

  if (tabTerminal && tabAvatar && heroTerminalView && heroAvatarView) {
    tabTerminal.addEventListener('click', () => {
      tabTerminal.classList.add('active');
      tabAvatar.classList.remove('active');
      heroTerminalView.style.display = 'block';
      heroAvatarView.style.display = 'none';
    });

    tabAvatar.addEventListener('click', () => {
      tabAvatar.classList.add('active');
      tabTerminal.classList.remove('active');
      heroTerminalView.style.display = 'none';
      heroAvatarView.style.display = 'flex';
    });
  }

  // =========================================================================
  // 3. DYNAMIC TYPING IN HERO
  // =========================================================================
  const typedRoleElement = document.getElementById('typedRole');
  const roles = [
    'AI & Machine Learning Student',
    'Smart India Hackathon Winner',
    'Reliance Foundation Scholar',
    'Python & NLP Developer'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let deleting = false;
  let speed = 90;

  function typeLoop() {
    if (!typedRoleElement) return;

    const currentText = roles[roleIdx];

    if (deleting) {
      typedRoleElement.textContent = currentText.substring(0, charIdx - 1);
      charIdx--;
      speed = 40;
    } else {
      typedRoleElement.textContent = currentText.substring(0, charIdx + 1);
      charIdx++;
      speed = 90;
    }

    if (!deleting && charIdx === currentText.length) {
      deleting = true;
      speed = 1800;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      speed = 400;
    }

    setTimeout(typeLoop, speed);
  }

  typeLoop();

  // =========================================================================
  // 4. PROJECT CATEGORY FILTERS
  // =========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category') || '';
        if (filterVal === 'all' || cat.includes(filterVal)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // =========================================================================
  // 5. TOAST & CLIPBOARD
  // =========================================================================
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');
  const toast = document.getElementById('toast');

  function triggerToast(text) {
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = btn.getAttribute('data-email') || 'shaiksalma12354@gmail.com';
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(() => {
          triggerToast(`Copied ${email}`);
        }).catch(() => {
          fallbackCopy(email);
        });
      } else {
        fallbackCopy(email);
      }
    });
  });

  function fallbackCopy(text) {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.focus();
    el.select();
    try {
      document.execCommand('copy');
      triggerToast(`Copied ${text}`);
    } catch (e) {
      triggerToast('Unable to copy');
    }
    document.body.removeChild(el);
  }

  // =========================================================================
  // 6. RESUME MODAL & PRINTING
  // =========================================================================
  const resumeModal = document.getElementById('resumeModal');
  const openResumeBtn = document.getElementById('openResumeModal');
  const closeResumeBtn = document.getElementById('closeResumeModal');
  const printResumeBtn = document.getElementById('printResumeBtn');

  function openResume() {
    if (resumeModal) {
      resumeModal.classList.add('active');
      resumeModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeResume() {
    if (resumeModal) {
      resumeModal.classList.remove('active');
      resumeModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (openResumeBtn) openResumeBtn.addEventListener('click', openResume);
  if (closeResumeBtn) closeResumeBtn.addEventListener('click', closeResume);
  if (printResumeBtn) printResumeBtn.addEventListener('click', () => window.print());

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeResume();
    });
  }

  // =========================================================================
  // 7. PROJECT DETAILS MODAL
  // =========================================================================
  const projectModal = document.getElementById('projectModal');
  const closeProjectBtn = document.getElementById('closeProjectModal');
  const modalProjectTitle = document.getElementById('modalProjectTitle');
  const modalProjectContent = document.getElementById('modalProjectContent');
  const projectTriggers = document.querySelectorAll('.project-modal-trigger');

  const projectDetails = {
    'health-chatbot': {
      title: 'AI-Powered Health Chatbot (SIH 2025 Winner)',
      content: `
        <p style="color:var(--text-secondary); margin-bottom:1rem;">
          Developed as the university qualifier winner for the Smart India Hackathon (SIH 2025), this system addresses medical advisory access gaps in rural communities.
        </p>
        <h4 style="margin-bottom:0.5rem; font-family:var(--font-heading);">Key Architecture Highlights:</h4>
        <ul style="padding-left:1.2rem; color:var(--text-secondary); margin-bottom:1rem; line-height:1.6;">
          <li><strong>Dialogflow Intent Classification:</strong> Trained customized entities and contexts for symptoms and vaccination inquiries.</li>
          <li><strong>Multilingual Accessibility:</strong> Integrated MyMemory API to support regional language translations.</li>
          <li><strong>Omnichannel Access:</strong> Enabled interaction via WhatsApp and SMS channels for non-smartphone users.</li>
          <li><strong>Verified Knowledge Base:</strong> BeautifulSoup scrapers collect real-time data from official WHO advisories.</li>
        </ul>
        <p style="font-family:var(--font-mono); font-size:0.85rem; color:var(--text-muted);">
          Stack: Dialogflow, Flask, Python, BeautifulSoup, MyMemory API, Render
        </p>
      `
    },
    'alora': {
      title: 'ALORA – Smart Debugging Assistant',
      content: `
        <p style="color:var(--text-secondary); margin-bottom:1rem;">
          Created during the CodeEdge Hackathon to help beginner computer science students understand cryptic compiler messages without intimidation.
        </p>
        <h4 style="margin-bottom:0.5rem; font-family:var(--font-heading);">Key Architecture Highlights:</h4>
        <ul style="padding-left:1.2rem; color:var(--text-secondary); margin-bottom:1rem; line-height:1.6;">
          <li><strong>Root-Cause Analysis:</strong> Parses traceback diagnostics and translates them into plain-English explanations.</li>
          <li><strong>Automated Code Diffs:</strong> Generates side-by-side corrected suggestions with learning takeaways.</li>
          <li><strong>Cross-Language Support:</strong> Accommodates code snippets in C, Java, and Python.</li>
        </ul>
        <p style="font-family:var(--font-mono); font-size:0.85rem; color:var(--text-muted);">
          Stack: Python, Abstract Syntax Trees (AST), NLP, Regex
        </p>
      `
    },
    'student-management': {
      title: 'Student Management System',
      content: `
        <p style="color:var(--text-secondary); margin-bottom:1rem;">
          A full-stack administrative database portal to manage student academic records, branch assignments, and grades.
        </p>
        <h4 style="margin-bottom:0.5rem; font-family:var(--font-heading);">Key Architecture Highlights:</h4>
        <ul style="padding-left:1.2rem; color:var(--text-secondary); margin-bottom:1rem; line-height:1.6;">
          <li><strong>Full CRUD Operations:</strong> Complete create, read, update, and soft delete functionality.</li>
          <li><strong>Relational SQL Models:</strong> Normalized database schema with input validation and security.</li>
          <li><strong>Responsive Dashboard:</strong> Clean desktop and tablet UI styled with modular HTML5/CSS3.</li>
        </ul>
        <p style="font-family:var(--font-mono); font-size:0.85rem; color:var(--text-muted);">
          Stack: Python, Flask, SQL, HTML5, CSS3
        </p>
      `
    },
    'railway-system': {
      title: 'Railway Ticket Management System',
      content: `
        <p style="color:var(--text-secondary); margin-bottom:1rem;">
          A high-efficiency console-based reservation engine written from scratch in C with zero external runtime dependencies.
        </p>
        <h4 style="margin-bottom:0.5rem; font-family:var(--font-heading);">Key Architecture Highlights:</h4>
        <ul style="padding-left:1.2rem; color:var(--text-secondary); margin-bottom:1rem; line-height:1.6;">
          <li><strong>Persistent Storage:</strong> Utilizes low-level binary file I/O to maintain passenger records across sessions.</li>
          <li><strong>Memory Management:</strong> Structured arrays and pointers handling booking queues and seat maps.</li>
          <li><strong>Menu Navigation:</strong> Robust CLI flow for ticket generation, cancellation, and PNR status queries.</li>
        </ul>
        <p style="font-family:var(--font-mono); font-size:0.85rem; color:var(--text-muted);">
          Stack: C Language, File Handling, Data Structures, CLI
        </p>
      `
    }
  };

  function openProjectModal(id) {
    const data = projectDetails[id];
    if (!data || !projectModal) return;

    modalProjectTitle.textContent = data.title;
    modalProjectContent.innerHTML = data.content;

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (projectModal) {
      projectModal.classList.remove('active');
      projectModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  projectTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.getAttribute('data-project');
      openProjectModal(pid);
    });
  });

  if (closeProjectBtn) closeProjectBtn.addEventListener('click', closeProjectModal);

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  // Close modals on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeResume();
      closeProjectModal();
    }
  });

  // =========================================================================
  // 8. MOBILE HAMBURGER & SCROLLSPY
  // =========================================================================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const sections = document.querySelectorAll('section[id]');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Scroll to top button
    if (scrollY > 400) {
      scrollTopBtn?.classList.add('visible');
    } else {
      scrollTopBtn?.classList.remove('visible');
    }

    // Scrollspy
    let activeId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 110;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        activeId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${activeId}`) {
        link.classList.add('active');
      }
    });
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // =========================================================================
  // 9. MINIMAL CONTACT FORM
  // =========================================================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('userName').value.trim();
      const email = document.getElementById('userEmail').value.trim();
      const subject = document.getElementById('userSubject').value.trim();
      const message = document.getElementById('userMessage').value.trim();

      if (!name || !email || !subject || !message) {
        triggerToast('Please fill out all fields');
        return;
      }

      const mailtoLink = `mailto:shaiksalma12354@gmail.com?subject=${encodeURIComponent(subject + ' [from ' + name + ']')}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;
      window.location.href = mailtoLink;

      triggerToast('Opening mail client...');
      contactForm.reset();
    });
  }

});
