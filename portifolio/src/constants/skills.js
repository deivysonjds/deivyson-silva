// src/constants/skills.js
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJava, FaPython, FaAngular } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiSpring, SiSelenium, SiPandas, SiFastify, SiSequelize, SiSwagger } from 'react-icons/si';
import { DiMysql, DiPostgresql} from 'react-icons/di';
import { TbSql} from 'react-icons/tb';

export const skills = [
  { name: 'React', icon: <FaReact />, level: 90, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, level: 85, color: '#000000' },
  { name: 'JavaScript', icon: <FaJs />, level: 88, color: '#F7DF1E' },
  { name: 'TypeScript', icon: <SiTypescript />, level: 80, color: '#3178C6' },
  { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85, color: '#06B6D4' },
  { name: 'Node.js', icon: <FaNodeJs />, level: 75, color: '#339933' },
  { name: 'Git', icon: <FaGitAlt />, level: 85, color: '#F05032' },
  { name: 'Spring Boot', icon: <SiSpring />, level: 70, color: '#6DB33F' },
  { name: 'Java', icon: <FaJava />, level: 80, color: '#007396' },
  { name: 'Python', icon: <FaPython />, level: 75, color: '#3776AB' },
  { name: 'Angular', icon: <FaAngular />, level: 70, color: '#DD0031' },
  { name: 'Selenium', icon: <SiSelenium />, level: 65, color: '#43B02A' },
  { name: 'Pandas', icon: <SiPandas />, level: 60, color: '#150458' },
  { name: 'Fastify', icon: <SiFastify />, level: 70, color: '#00B48A' },
  { name: 'Sequelize', icon: <SiSequelize />, level: 65, color: '#52B0E7' },
  { name: 'Swagger', icon: <SiSwagger />, level: 60, color: '#85EA2D' },
  { name: 'MySQL', icon: <DiMysql />, level: 80, color: '#4479A1' },
  { name: 'PostgreSQL', icon: <DiPostgresql />, level: 75, color: '#336791' },
  { name: 'SQL', icon: <TbSql />, level: 70, color: '#E34F26' }
];