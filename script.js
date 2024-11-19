document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.obs');
  
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.5  
    });
  
    
    elements.forEach(element => {
      observer.observe(element);
    });
  });

const whatsapp = document.getElementById('whatsapp')

whatsapp.onclick = () =>{
  let text = `Olá!\nVi seus projetos e estou interessado em contratar seus serviços!`
  let url = `https://api.whatsapp.com/send?phone=5581988993441&text=${encodeURIComponent(text)}`
  window.open(url, "_blank")
}
  