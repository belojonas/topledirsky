// ==================== TRANSLATION DICTIONARY ====================
const translations = {
  tetum: {
    nav_home: "Inísiu",
    nav_services: "Servisu",
    nav_contact: "Kontaktu",
    hero_desc: "Solusaun IT nivel empresarial, seguru no jestaun. Lalais, lokál, no bele aumenta.",
    btn_start: "Hahu Projetu",
    btn_services: "Ami-nia Servisu",
    services_title: "Ami-nia Servisu",
    services_subtitle: "ModerNu, seguru, no adapta ba objektivu negósiu nian.",
    service1_title: "Jestaun IT & Suporte",
    service1_desc: "Monitorizasaun 24/7, ajuda, no suporte iha Dili. Minimiza tempo paralizasaun.",
    service2_title: "Solusaun Cloud",
    service2_desc: "AWS, Azure, ka hibridu — migrasaun seguru, auto-scaling, no otimizasaun kustu.",
    service3_title: "Seguransa Cibernética",
    service3_desc: "Firewall modernu, protesaun terminal, avaliasaun risku no kompliance.",
    service4_title: "Infraestrutura Rede",
    service4_desc: "Kablamentu estruturadu, Wi-Fi empresarial, SD-WAN, no auditoria rede.",
    contact_title: "Kontaktu ami",
    contact_subtitle: "Nu'udar parseiru IT iha Timor-Leste, ami responde ba pergunta hotu iha oras 24.",
    btn_send: "Haruka Mensajen",
    direct_contact: "Kontaktu Diretu",
    email_label: "Email:",
    phone_label: "WhatsApp / Telefone:",
    office_label: "Ofisina:",
    support_hours: "Oras suporte: Seg-Sex 8h-18h, Emerjénsia: 24/7",
    trilingual_label: "Servisu trilingue:",
    trilingual_text: "Tetum, English, Português sempre disponível.",
    directions_text: "📍 Oinsá atu ba Topledirsky (Becora, Dili, Timor-Leste)",
    footer_rights: "Direitu hotu-hotu reservadu.",
    footer_support: "Suporta iha Tetum, English, Português"
  },
  english: {
    nav_home: "Home",
    nav_services: "Services",
    nav_contact: "Contact",
    hero_desc: "Enterprise-grade cloud, security, and managed IT solutions. Fast, local, and scalable.",
    btn_start: "Start Project",
    btn_services: "Our Services",
    services_title: "Our Services",
    services_subtitle: "Modern, secure, and tailored for your business goals.",
    service1_title: "Managed IT & Support",
    service1_desc: "24/7 proactive monitoring, helpdesk, and on‑site support in Dili. Minimize downtime.",
    service2_title: "Cloud Solutions",
    service2_desc: "AWS, Azure, or hybrid — secure migration, auto‑scaling, and cost optimization.",
    service3_title: "Cyber Security",
    service3_desc: "Next‑gen firewalls, endpoint protection, risk assessment & compliance.",
    service4_title: "Network Infrastructure",
    service4_desc: "Structured cabling, enterprise Wi-Fi, SD-WAN, and network audits.",
    contact_title: "Contact Us",
    contact_subtitle: "As your IT partner in Timor-Leste, we respond to every inquiry within 24 hours.",
    btn_send: "Send Message",
    direct_contact: "Direct Contact",
    email_label: "Email:",
    phone_label: "WhatsApp / Phone:",
    office_label: "Office:",
    support_hours: "Support hours: Mon-Fri 8am–6pm, Emergency: 24/7",
    trilingual_label: "Trilingual service:",
    trilingual_text: "Tetum, English, Português always available.",
    directions_text: "📍 Get Directions to Topledirsky (Becora, Dili, Timor-Leste)",
    footer_rights: "All rights reserved.",
    footer_support: "Support in Tetum, English, Português"
  },
  portugues: {
    nav_home: "Início",
    nav_services: "Serviços",
    nav_contact: "Contato",
    hero_desc: "Soluções de TI de nível empresarial, segurança e gestão. Rápidas, locais e escaláveis.",
    btn_start: "Iniciar Projeto",
    btn_services: "Nossos Serviços",
    services_title: "Nossos Serviços",
    services_subtitle: "Modernos, seguros e adaptados aos seus objetivos de negócio.",
    service1_title: "TI Gerenciada & Suporte",
    service1_desc: "Monitoramento proativo 24/7, helpdesk e suporte local em Díli. Minimize o tempo de inatividade.",
    service2_title: "Soluções em Nuvem",
    service2_desc: "AWS, Azure ou híbrido — migração segura, escalonamento automático e otimização de custos.",
    service3_title: "Cibersegurança",
    service3_desc: "Firewalls de última geração, proteção de endpoints, avaliação de riscos e conformidade.",
    service4_title: "Infraestrutura de Rede",
    service4_desc: "Cablagem estruturada, Wi-Fi empresarial, SD-WAN e auditorias de rede.",
    contact_title: "Contate-nos",
    contact_subtitle: "Como seu parceiro de TI em Timor-Leste, respondemos a cada consulta em 24 horas.",
    btn_send: "Enviar Mensagem",
    direct_contact: "Contato Direto",
    email_label: "E-mail:",
    phone_label: "WhatsApp / Telefone:",
    office_label: "Escritório:",
    support_hours: "Horário de suporte: Seg-Sex 8h–18h, Emergência: 24/7",
    trilingual_label: "Serviço trilíngue:",
    trilingual_text: "Tetum, English, Português sempre disponível.",
    directions_text: "📍 Como chegar à Topledirsky (Becora, Díli, Timor-Leste)",
    footer_rights: "Todos os direitos reservados.",
    footer_support: "Suporte em Tetum, English, Português"
  }
};

// Current language
let currentLang = "english";

// Function to apply translation
function applyTranslation(lang) {
  // Update all elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      // Check if element contains an icon
      const iconElement = el.querySelector('i');
      if (iconElement) {
        const iconHtml = iconElement.outerHTML;
        const textOnly = translations[lang][key];
        el.innerHTML = iconHtml + ' ' + textOnly;
      } else {
        el.innerText = translations[lang][key];
      }
    }
  });

  // Update placeholder texts for form inputs
  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const phoneInput = document.getElementById('contactPhone');
  const msgTextarea = document.getElementById('contactMsg');
  
  if (nameInput) {
    if (lang === 'tetum') nameInput.placeholder = nameInput.getAttribute('data-placeholder-tetum');
    else if (lang === 'english') nameInput.placeholder = nameInput.getAttribute('data-placeholder-eng');
    else if (lang === 'portugues') nameInput.placeholder = nameInput.getAttribute('data-placeholder-por');
  }
  if (emailInput) {
    if (lang === 'tetum') emailInput.placeholder = emailInput.getAttribute('data-placeholder-tetum');
    else if (lang === 'english') emailInput.placeholder = emailInput.getAttribute('data-placeholder-eng');
    else if (lang === 'portugues') emailInput.placeholder = emailInput.getAttribute('data-placeholder-por');
  }
  if (phoneInput) {
    if (lang === 'tetum') phoneInput.placeholder = phoneInput.getAttribute('data-placeholder-tetum');
    else if (lang === 'english') phoneInput.placeholder = phoneInput.getAttribute('data-placeholder-eng');
    else if (lang === 'portugues') phoneInput.placeholder = phoneInput.getAttribute('data-placeholder-por');
  }
  if (msgTextarea) {
    if (lang === 'tetum') msgTextarea.placeholder = msgTextarea.getAttribute('data-placeholder-tetum');
    else if (lang === 'english') msgTextarea.placeholder = msgTextarea.getAttribute('data-placeholder-eng');
    else if (lang === 'portugues') msgTextarea.placeholder = msgTextarea.getAttribute('data-placeholder-por');
  }
}

// Language switcher event listeners
const langBtns = document.querySelectorAll('.lang-btn');
langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    if (!lang) return;
    currentLang = lang;
    applyTranslation(currentLang);
    
    // Update active button styling
    langBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Save preference to localStorage
    localStorage.setItem('preferred_language', currentLang);
  });
});

// Load saved language preference
const savedLang = localStorage.getItem('preferred_language');
if (savedLang && translations[savedLang]) {
  currentLang = savedLang;
  applyTranslation(currentLang);
  // Update active button
  langBtns.forEach(btn => {
    if (btn.getAttribute('data-lang') === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// ==================== OTHER INTERACTIVITY ====================
// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinksMenu = document.getElementById('nav-links');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinksMenu.classList.toggle('show');
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === "#" || targetId === "") return;
    const targetElem = document.querySelector(targetId);
    if (targetElem) {
      e.preventDefault();
      targetElem.scrollIntoView({ behavior: 'smooth' });
      if (navLinksMenu.classList.contains('show')) navLinksMenu.classList.remove('show');
    }
  });
});

// Year update
document.getElementById('year').innerText = new Date().getFullYear();

// Reveal on scroll
const revealElements = document.querySelectorAll('.reveal');
function revealCheck() {
  for (let el of revealElements) {
    const windowHeight = window.innerHeight;
    const rect = el.getBoundingClientRect();
    const revealPoint = 120;
    if (rect.top < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  }
}
window.addEventListener('scroll', revealCheck);
revealCheck();

// Contact form validation with multilingual feedback
const contactForm = document.getElementById('advancedContactForm');
const formFeedback = document.getElementById('formFeedback');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMsg').value.trim();
    
    let errorMsg = '';
    let successMsg = '';
    const emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
    
    if (currentLang === 'tetum') {
      if (!name || !email || !message) {
        errorMsg = '<span style="color:#dc2626;"><i class="fas fa-exclamation-triangle"></i> Sala: Preenxe todos campos obrigatórios.</span>';
      } else if (!emailPattern.test(email)) {
        errorMsg = '<span style="color:#dc2626;"><i class="fas fa-envelope"></i> E-mail inválidu.</span>';
      } else {
        successMsg = '<span style="color:#16a34a;"><i class="fas fa-check-circle"></i> ✔ Suksesu! Obrigadu. Ami sei kontaktu ita boot lalais.</span>';
      }
    } else if (currentLang === 'portugues') {
      if (!name || !email || !message) {
        errorMsg = '<span style="color:#dc2626;"><i class="fas fa-exclamation-triangle"></i> Erro: Preencha todos os campos obrigatórios.</span>';
      } else if (!emailPattern.test(email)) {
        errorMsg = '<span style="color:#dc2626;"><i class="fas fa-envelope"></i> E-mail inválido.</span>';
      } else {
        successMsg = '<span style="color:#16a34a;"><i class="fas fa-check-circle"></i> ✔ Sucesso! Obrigado. Entraremos em contato em breve.</span>';
      }
    } else {
      if (!name || !email || !message) {
        errorMsg = '<span style="color:#dc2626;"><i class="fas fa-exclamation-triangle"></i> Error: Please fill all required fields.</span>';
      } else if (!emailPattern.test(email)) {
        errorMsg = '<span style="color:#dc2626;"><i class="fas fa-envelope"></i> Invalid email address.</span>';
      } else {
        successMsg = '<span style="color:#16a34a;"><i class="fas fa-check-circle"></i> ✔ Success! Thank you. We will contact you shortly.</span>';
      }
    }
    
    if (errorMsg) {
      formFeedback.innerHTML = errorMsg;
      return;
    }
    
    formFeedback.innerHTML = successMsg;
    contactForm.reset();
    setTimeout(() => { formFeedback.innerHTML = ''; }, 6000);
  });
}