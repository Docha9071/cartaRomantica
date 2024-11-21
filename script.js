document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.romantic-item');
    
    items.forEach((item, index) => {
    
      item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.3s ease';
      });
  
      item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
      });
  
    
      item.addEventListener('click', () => {
        item.style.transform = 'scale(1.2)';
        item.style.transition = 'transform 0.3s ease';
        setTimeout(() => {
          item.style.transform = 'scale(1)';
        }, 300);
      });
    });
  
   
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const message = document.getElementById('message').value;
  
      if (name && message) {
        alert(`Mensagem enviada! Obrigado, ${name}!`);
        form.reset();
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    });
  
  
    const floatingIcons = document.querySelectorAll('.floating-icons i');
    floatingIcons.forEach((icon) => {
      icon.style.position = 'absolute';
      icon.style.left = `${Math.random() * 100}%`;
      icon.style.top = `${Math.random() * 100}%`;
      icon.style.animation = 'float 4s ease-in-out infinite'; 
    });
  
    
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes float {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(0);
        }
      }
  
      /* Animação das pétalas caindo */
      @keyframes petal-fall {
        0% {
          transform: translateY(-100px) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) rotate(720deg);
          opacity: 0;
        }
      }
  
      .petal {
        position: absolute;
        top: -50px;
        opacity: 0;
        animation: petal-fall 8s linear infinite;
      }
  
      /* Estilos das pétalas */
      .petal:before {
        content: '🍃';
        font-size: 2rem;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        opacity: 0.8;
      }
    `;
    document.head.appendChild(style);
  
   
    const createPetals = () => {
      const petalCount = 20;
  
      for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        document.body.appendChild(petal);
  
    
        petal.style.left = `${Math.random() * 100}%`;
  
        petal.style.animationDuration = `${Math.random() * 4 + 4}s`; 
        petal.style.animationDelay = `${Math.random() * 5}s`; 
      }
    };
  
   
    setInterval(createPetals, 2000);
  
   
    const introText = document.querySelector('.romantic-intro h2');
    introText.style.opacity = '0';
    setTimeout(() => {
      introText.style.transition = 'opacity 2s ease-in';
      introText.style.opacity = '1';
    }, 1000);
  });
  