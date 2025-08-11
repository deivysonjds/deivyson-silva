// src/constants/projects.js
export const projects = [
  {
    id: 1,
    title: 'LuckyLotto',
    description: 'Uma plataforma de sorteio de números, nomes e distribuidor de equipes, ideal para sorteios de prêmios e organização de equipes.',
    technologies: ['html', 'css', 'javascript'],
    imgUrl: '/projeto_1.jpeg',
    githubUrl: 'https://github.com/deivysonjds/sorteador',
    liveUrl: 'https://sorteador-indol.vercel.app/',
  },
  {
    id: 2,
    title: 'Conversor fácil',
    description: 'Uma plataforma de conversão de moeda, temperatura e medidas, com uma interface intuitiva e fácil de usar.',
    technologies: ['react.js','next.js', 'tailwind css'],
    imgUrl: '/projeto_2.jpeg',
    githubUrl: 'https://github.com/deivysonjds/conversores',
    liveUrl: 'https://conversores-delta.vercel.app/',
  },
  {
    id: 3,
    title: 'Bulls and Cows',
    description: 'Jogo de adivinhação de senhas.',
    technologies: ['react.js','next.js', 'tailwind css'],
    imgUrl: '/projeto_3.jpeg',
    githubUrl: 'https://github.com/deivysonjds/bac-react',
    liveUrl: 'https://bac-react-nine.vercel.app/',
  },
  {
    id: 4,
    title: 'Healsync',
    description: 'Uma aplicação web moderna para gerenciar o fluxo de atendimentos, cadastro de pacientes e funcionários em instituições de saúde. ( sem backend, rodar localmente )',
    technologies: ['react.js', 'next.js', 'tailwind css', 'zustand'],
    imgUrl: '/projeto_4.png',
    githubUrl: 'https://github.com/deivysonjds/healsync-f',
    liveUrl: 'https://healsync-f.vercel.app/'
  },
  {
    id: 5,
    title: 'Healsync ( backend )',
    description: 'Backend da plataforma HealSync, um sistema de gerenciamento de atendimentos, pacientes e funcionários para instituições de saúde. ( sem servidor, rodar localmente )',
    technologies: ['Java 21', 'spring boot', 'Spring Web', 'Spring Data JPA', 'Spring Security (JWT)', 'PostgreSQL ( h2 em dev )', 'Lombok', 'Swagger'],
    imgUrl: '/projeto_5.png',
    githubUrl: 'https://github.com/deivysonjds/healsync-b',
    liveUrl: 'https://healsync-b-production.up.railway.app/'
  },
  {
    id: 6,
    title: 'Bot Whatsapp',
    description: 'Bot para envios de mensagem pelo whatsapp',
    technologies: ['Electron', 'javascript', 'whatsapp-web-js'],
    imgUrl: '/projeto_6.png',
    githubUrl: 'https://github.com/deivysonjds/bot-whatsapp'
  }
];