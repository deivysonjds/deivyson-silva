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
      threshold: 0.05
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

const lightButtonMode = document.getElementById("icon-mode");


lightButtonMode.onclick = () => {
  const body = document.body;
  const textWhit = document.querySelectorAll('div#experiencias p, div#experiencias h3, div#hab h2, div#formacao p, div#formacao h3, div#formacao button')
  const imgPerfil = document.getElementById('img-header')

  body.classList.toggle("light");
  
  if (body.classList.contains("light")) {
    localStorage.setItem("light", "enabled");
  } else {
    localStorage.setItem("light", "disabled");
  }
  
  if (localStorage.getItem("light") === "enabled") {
    
    lightButtonMode.src = "./svg/icons8-lua-crescente-50.png"
    body.classList.add("light");
    imgPerfil.classList.add('light')
    textWhit.forEach((e)=>{
      e.classList.add("light")
    })
  } else {
    lightButtonMode.src = "./svg/icons8-sun.svg"
    body.classList.remove("light");
    imgPerfil.classList.remove('light')
    textWhit.forEach((e)=>{
      e.classList.remove("light")
    })
  }
};
  