import './style.css'

/* ---- NAVBAR scroll effect ---- */
const navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40)
}, { passive: true })

/* ---- BURGER menu ---- */
const burger   = document.getElementById('burger')
const navLinks = document.getElementById('navLinks')

burger.addEventListener('click', () => {
  burger.classList.toggle('open')
  navLinks.classList.toggle('open')
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : ''
})

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open')
    navLinks.classList.remove('open')
    document.body.style.overflow = ''
  })
})

/* ---- REVEAL on scroll (IntersectionObserver) ---- */
const revealEls = document.querySelectorAll('.reveal')

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      revealObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

revealEls.forEach(el => revealObserver.observe(el))

/* ---- ACTIVE nav link on scroll ---- */
const sections   = document.querySelectorAll('section[id]')
const navAnchors = document.querySelectorAll('.nav-links a')

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`)
      })
    }
  })
}, { threshold: 0.35 })

sections.forEach(s => sectionObserver.observe(s))

/* ---- COUNTER animation ---- */
function animateCounter(el, target, suffix = '') {
  const isInfinity = suffix === '∞' || isNaN(target)
  if (isInfinity) { el.textContent = '∞'; return }

  let start = 0
  const duration = 1600
  const step = (timestamp) => {
    if (!start) start = timestamp
    const progress = Math.min((timestamp - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.floor(eased * target) + (progress < 1 ? '' : suffix)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.stat-num')
      nums.forEach(num => {
        const raw = num.textContent.trim()
        if (raw === '∞') return
        const parsed = parseInt(raw.replace(/\D/g, ''), 10)
        const suffix = raw.includes('+') ? '+' : ''
        animateCounter(num, parsed, suffix)
      })
      statObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.5 })

const statsSection = document.querySelector('.stats')
if (statsSection) statObserver.observe(statsSection)

/* ---- CONTACT FORM (demo handler) ---- */
const form        = document.getElementById('contactForm')
const formSuccess = document.getElementById('formSuccess')

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const btn = form.querySelector('button[type="submit"]')
    btn.textContent = 'Siunčiama...'
    btn.disabled = true

    // Replace with real backend / EmailJS / Formspree
    setTimeout(() => {
      form.reset()
      btn.textContent = 'Siųsti žinutę 🤿'
      btn.disabled = false
      formSuccess.style.display = 'block'
      setTimeout(() => { formSuccess.style.display = 'none' }, 5000)
    }, 1200)
  })
}

/* ---- GALLERY lightbox ---- */
const galleryItems = document.querySelectorAll('.gallery-item')

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const img   = item.querySelector('img')
    const label = item.querySelector('.gallery-overlay span')
    openLightbox(img.src, label ? label.textContent : '')
  })
})

function openLightbox(src, caption) {
  const overlay = document.createElement('div')
  overlay.style.cssText = `
    position:fixed; inset:0; z-index:9999;
    background:rgba(5,10,20,0.95);
    display:flex; flex-direction:column;
    align-items:center; justify-content:center;
    gap:16px; cursor:zoom-out;
    animation: lb-in 0.25s ease;
  `

  const styleEl = document.createElement('style')
  styleEl.textContent = `@keyframes lb-in { from { opacity:0; } to { opacity:1; } }`
  document.head.appendChild(styleEl)

  const image = document.createElement('img')
  image.src = src
  image.style.cssText = `
    max-width:90vw; max-height:82vh;
    border-radius:12px; box-shadow:0 20px 80px rgba(0,0,0,0.7);
    object-fit:contain;
  `

  const cap = document.createElement('p')
  cap.textContent = caption
  cap.style.cssText = `
    color:rgba(255,255,255,0.6); font-family:'Montserrat',sans-serif;
    font-size:0.9rem; font-weight:600; letter-spacing:0.05em;
  `

  const close = document.createElement('button')
  close.textContent = '✕'
  close.style.cssText = `
    position:absolute; top:20px; right:28px;
    background:none; border:none; color:#fff;
    font-size:1.6rem; cursor:pointer; opacity:0.6;
    transition:opacity 0.2s;
  `
  close.onmouseenter = () => { close.style.opacity = '1' }
  close.onmouseleave = () => { close.style.opacity = '0.6' }

  overlay.appendChild(image)
  overlay.appendChild(cap)
  overlay.appendChild(close)
  document.body.appendChild(overlay)
  document.body.style.overflow = 'hidden'

  const destroy = () => {
    overlay.remove()
    styleEl.remove()
    document.body.style.overflow = ''
  }
  overlay.addEventListener('click', destroy)
  close.addEventListener('click', (e) => { e.stopPropagation(); destroy() })

  document.addEventListener('keydown', function esc(e) {
    if (e.key === 'Escape') { destroy(); document.removeEventListener('keydown', esc) }
  })
}
