document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('consultationForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = form.querySelector('.gold-submit-btn');
      const originalText = btn.innerHTML;

      // Effetto caricamento
      btn.style.opacity = '0.7';
      btn.innerHTML = '<span>INVIO IN CORSO...</span>';

      setTimeout(() => {
        // Conferma di invio
        btn.style.opacity = '1';
        btn.style.background = 'linear-gradient(135deg, #28a745 0%, #1e7e34 100%)';
        btn.style.color = '#ffffff';
        btn.innerHTML = '<span>RICHIESTA INVIATA CON SUCCESSO</span>';

        form.reset();

        setTimeout(() => {
          btn.style.background = '';
          btn.style.color = '';
          btn.innerHTML = originalText;
        }, 4000);
      }, 1200);
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('consultationForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Recupero dei valori inseriti nel form
      const fullName = document.getElementById('fullName').value;
      const phone = document.getElementById('phone').value;
      const email = document.getElementById('email').value;
      const projectType = document.getElementById('projectType').value;
      const location = document.getElementById('location').value || 'Non specificata';
      const goals = document.getElementById('goals').value || 'Nessun dettaglio aggiuntivo';

      const btn = form.querySelector('.gold-submit-btn');
      const originalText = btn.innerHTML;

      // Feedback visivo di elaborazione
      btn.style.opacity = '0.7';
      btn.innerHTML = '<span>INVIO RICHIESTA IN CORSO...</span>';

      // Testo formattato per WhatsApp
      const whatsappMessage = `*Nuova Richiesta di Consulenza - Portfolio* %0A%0A` +
        `👤 *Nome:* ${encodeURIComponent(fullName)}%0A` +
        `📞 *Telefono:* ${encodeURIComponent(phone)}%0A` +
        `📧 *Email:* ${encodeURIComponent(email)}%0A` +
        `💼 *Progetto:* ${encodeURIComponent(projectType)}%0A` +
        `📍 *Location:* ${encodeURIComponent(location)}%0A` +
        `🎯 *Obiettivi:* ${encodeURIComponent(goals)}`;

      // Testo formattato per l'Email
      const emailSubject = encodeURIComponent(`Nuova Consulenza d'Élite da ${fullName}`);
      const emailBody = encodeURIComponent(
        `Hai ricevuto una nuova richiesta di consulenza dal tuo portfolio web.\n\n` +
        `Dettagli del cliente:\n` +
        `- Nome: ${fullName}\n` +
        `- Telefono: ${phone}\n` +
        `- Email: ${email}\n` +
        `- Tipologia Progetto: ${projectType}\n` +
        `- Location: ${location}\n\n` +
        `Obiettivi / Dettagli:\n${goals}`
      );

      setTimeout(() => {
        // 1. Apertura dell'email client precompilata
        window.location.href = `mailto:kevindickson513@gmail.com?subject=${emailSubject}&body=${emailBody}`;

        // 2. Apertura di WhatsApp in una nuova scheda/app
        window.open(`https://wa.me/393381256182?text=${whatsappMessage}`, '_blank');

        // Modifica estetica del bottone a successo completato
        btn.style.opacity = '1';
        btn.style.background = 'linear-gradient(135deg, #28a745 0%, #1e7e34 100%)';
        btn.style.color = '#ffffff';
        btn.innerHTML = '<span>RICHIESTA INVIATA CON SUCCESSO!</span>';

        form.reset();

        setTimeout(() => {
          btn.style.background = '';
          btn.style.color = '';
          btn.innerHTML = originalText;
        }, 4500);
      }, 1000);
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('consultationForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Recupero dei valori inseriti nel form
      const fullName = document.getElementById('fullName').value;
      const phone = document.getElementById('phone').value;
      const email = document.getElementById('email').value;
      const projectType = document.getElementById('projectType').value;
      const location = document.getElementById('location').value || 'Non specificata';
      const goals = document.getElementById('goals').value || 'Nessun dettaglio aggiuntivo';

      const btn = form.querySelector('.gold-submit-btn');
      const originalText = btn.innerHTML;

      // Feedback visivo di elaborazione
      btn.style.opacity = '0.7';
      btn.innerHTML = '<span>INVIO RICHIESTA IN CORSO...</span>';

      // Testo formattato per WhatsApp
      const whatsappMessage = `*Nuova Richiesta di Consulenza - Portfolio* %0A%0A` +
        `👤 *Nome:* ${encodeURIComponent(fullName)}%0A` +
        `📞 *Telefono:* ${encodeURIComponent(phone)}%0A` +
        `📧 *Email:* ${encodeURIComponent(email)}%0A` +
        `💼 *Progetto:* ${encodeURIComponent(projectType)}%0A` +
        `📍 *Location:* ${encodeURIComponent(location)}%0A` +
        `🎯 *Obiettivi:* ${encodeURIComponent(goals)}`;

      // URL per aprire Gmail in una nuova scheda con i dati precompilati
      const gmailSubject = encodeURIComponent(`Nuova Consulenza d'Élite da ${fullName}`);
      const gmailBody = encodeURIComponent(
        `Hai ricevuto una nuova richiesta di consulenza dal tuo portfolio web.\n\n` +
        `Dettagli del cliente:\n` +
        `- Nome: ${fullName}\n` +
        `- Telefono: ${phone}\n` +
        `- Email: ${email}\n` +
        `- Tipologia Progetto: ${projectType}\n` +
        `- Location: ${location}\n\n` +
        `Obiettivi / Dettagli:\n${goals}`
      );
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=kevindickson513@gmail.com&su=${gmailSubject}&body=${gmailBody}`;

      setTimeout(() => {
        // 1. Apertura di Gmail in una nuova scheda
        window.open(gmailUrl, '_blank');

        // 2. Apertura di WhatsApp in una nuova scheda
        window.open(`https://wa.me/393381256182?text=${whatsappMessage}`, '_blank');

        // Modifica estetica del bottone a successo completato
        btn.style.opacity = '1';
        btn.style.background = 'linear-gradient(135deg, #28a745 0%, #1e7e34 100%)';
        btn.style.color = '#ffffff';
        btn.innerHTML = '<span>RICHIESTA INVIATA CON SUCCESSO!</span>';

        form.reset();

        setTimeout(() => {
          btn.style.background = '';
          btn.style.color = '';
          btn.innerHTML = originalText;
        }, 4500);
      }, 1000);
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Seleziona tutti i video presenti nelle pagine delle subpage
  const videos = document.querySelectorAll('.luxury-video-player');

  if ('IntersectionObserver' in window && videos.length > 0) {
    const videoObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // Quando il video entra nel viewport ed è visibile almeno al 50%
        if (entry.isIntersecting) {
          const video = entry.target;
          
          // Avvia la riproduzione (rimuovendo eventualmente ilmuted se necessario, 
          // ma per l'autoplay sicuro dei browser è consigliato il muted temporaneo o nativo)
          video.play().catch(error => {
            console.log("Autoplay bloccato dal browser:", error);
          });
          
          // Smetti di osservare una volta fatto partire
          observer.unobserve(video);
        }
      });
    }, {
      threshold: 0.5 // Scatta quando il 50% del video è visibile a schermo
    });

    videos.forEach(video => {
      // Assicurati che il video sia silenziato per permettere l'autoplay pulito su tutti i browser
      video.muted = true; 
      videoObserver.observe(video);
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const revealSections = document.querySelectorAll(".reveal-wrapper");

  if (revealSections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.5) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 0.9] }
    );

    revealSections.forEach(section => observer.observe(section));
  }
});

// Reset animazione quando si rientra nella pagina dalla cronologia
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    const revealSections = document.querySelectorAll(".reveal-wrapper");
    revealSections.forEach(section => {
      section.classList.remove("revealed");
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      
      // Impedisce lo scroll della pagina quando il menu mobile è aperto
      if (navMenu.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    });

    // Chiude automaticamente il menu quando si clicca su un link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.style.overflow = 'auto';
      });
    });
  }
});