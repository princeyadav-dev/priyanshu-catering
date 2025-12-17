/* ======================= SMOOTH SCROLL ======================= */
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            const target = document.querySelector(hash);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // header height adjustment
                    behavior: 'smooth'
                });
            }
        }
    });
});

/* ======================= GALLERY HOVER ZOOM ======================= */
const galleryItems = document.querySelectorAll('.gallery-item img');
galleryItems.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05)';
        img.style.transition = 'transform 0.4s ease';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

/* ======================= FORM FIELD FOCUS GLOW ======================= */
const formFields = document.querySelectorAll('input, textarea, select');
formFields.forEach(field => {
    field.addEventListener('focus', () => {
        field.style.boxShadow = '0 6px 20px rgba(255, 107, 107, 0.4)';
        field.style.borderColor = '#ff6b6b';
    });
    field.addEventListener('blur', () => {
        field.style.boxShadow = '';
        field.style.borderColor = '';
    });
});

/* ======================= STICKY HEADER SHADOW ON SCROLL ======================= */
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        header.style.boxShadow = '0 6px 25px rgba(0,0,0,0.15)';
        header.style.transition = 'all 0.3s ease';
    } else {
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
    }
});

/* ======================= PREMIUM BUTTON HOVER ANIMATION ======================= */
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-3px)';
        btn.style.boxShadow = '0 10px 30px rgba(255, 107, 107, 0.5)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
        btn.style.boxShadow = '';
    });
});

/* ======================= SCROLL ANIMATION (FADE-IN SECTIONS) ======================= */
const sections = document.querySelectorAll('section');
const fadeInOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
            section.style.transition = 'all 1s ease-out';
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); // Initial check

/* ======================= GALLERY LIGHTBOX / MODAL ======================= */
const galleryImages = document.querySelectorAll('.gallery-item img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.id = 'lightbox-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.8)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.cursor = 'pointer';
        overlay.style.zIndex = '9999';

        // Create image
        const overlayImage = document.createElement('img');
        overlayImage.src = img.src;
        overlayImage.style.maxWidth = '90%';
        overlayImage.style.maxHeight = '90%';
        overlayImage.style.borderRadius = '15px';
        overlayImage.style.boxShadow = '0 8px 30px rgba(0,0,0,0.5)';
        overlay.appendChild(overlayImage);

        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});

/* ======================= STATS COUNTER (Optional) ======================= */
const counters = document.querySelectorAll('.counter'); // Add class "counter" in HTML where needed
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 50; // Lower = faster

        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});

// WhatsApp Button Floating Bounce
const whatsappBtn = document.getElementById('whatsapp-button');
let direction = 1;
setInterval(() => {
    if(whatsappBtn){
        let current = parseInt(getComputedStyle(whatsappBtn).bottom);
        if(current >= 40) direction = -1;
        if(current <= 30) direction = 1;
        whatsappBtn.style.bottom = (current + direction) + 'px';
    }
}, 600);
